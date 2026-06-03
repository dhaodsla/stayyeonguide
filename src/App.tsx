import { useState, useEffect } from 'react';
import { DoorOpen, Wifi, Waves, Flame, Mic, MapPin, Phone, Dog, AlertCircle, Sun, Moon, ShoppingBag } from 'lucide-react';
import { AccordionItem } from './components/AccordionItem';
import {
  CheckInOutContent,
  WifiContent,
  PoolContent,
  BBQContent,
  KaraokeContent,
  FacilitiesContent,
  ContactContent,
  DogContent,
  PrecautionsContent,
  DeliveryContent,
} from './components/SectionContents';

export default function App() {
  const [openSectionId, setOpenSectionId] = useState<string | null>(null);
  
  // Initialize dark mode based on saved preference, system preferences, or current time (night automatic support)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      
      const hours = new Date().getHours();
      const isNight = hours >= 19 || hours < 7; // Auto dark-mode between 7 PM and 7 AM
      return isNight;
    }
    return false;
  });

  // Sync className to index/root html element for utility classes to work properly
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleSection = (id: string) => {
    setOpenSectionId((prev) => (prev === id ? null : id));
  };

  const sections = [
    {
      id: 'checkInOut',
      title: '입실 / 퇴실 안내',
      icon: <DoorOpen size={20} strokeWidth={2.5} />,
      content: <CheckInOutContent />,
    },
    {
      id: 'wifi',
      title: '와이파이 안내',
      icon: <Wifi size={20} strokeWidth={2.5} />,
      content: <WifiContent />,
    },
    {
      id: 'pool',
      title: '수영장 이용 안내',
      icon: <Waves size={20} strokeWidth={2.5} />,
      content: <PoolContent />,
    },
    {
      id: 'bbq',
      title: '바비큐 / 숯불 안내',
      icon: <Flame size={20} strokeWidth={2.5} />,
      content: <BBQContent />,
    },
    {
      id: 'karaoke',
      title: '노래방 이용 안내',
      icon: <Mic size={20} strokeWidth={2.5} />,
      content: <KaraokeContent />,
    },
    {
      id: 'dog',
      title: '반려견 동반 이용 안내',
      icon: <Dog size={20} strokeWidth={2.5} />,
      content: <DogContent />,
    },
    {
      id: 'precautions',
      title: '숙소 이용 주의사항',
      icon: <AlertCircle size={20} strokeWidth={2.5} />,
      content: <PrecautionsContent />,
    },
    {
      id: 'delivery',
      title: '장보기 / 배달 안내',
      icon: <ShoppingBag size={20} strokeWidth={2.5} />,
      content: <DeliveryContent />,
    },
    {
      id: 'facilities',
      title: '주변 편의시설',
      icon: <MapPin size={20} strokeWidth={2.5} />,
      content: <FacilitiesContent />,
    },
    {
      id: 'contact',
      title: '문의하기',
      icon: <Phone size={20} strokeWidth={2.5} />,
      content: <ContactContent />,
    },
  ];

  const handleFloatingContactClick = () => {
    // Open the contact section and smoothly scroll to it
    setOpenSectionId('contact');
    setTimeout(() => {
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <div className={`min-h-screen relative transition-colors duration-500 pb-24 ${isDarkMode ? 'dark bg-[#111C19] text-[#F3EFE6]' : 'bg-[#FDFBF7] text-gray-800'}`}>
      
      {/* Theme Toggle Button (Moon/Sun) */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={toggleDarkMode}
          className="p-3 rounded-full bg-white dark:bg-[#1E2E2A] shadow-md dark:shadow-lg border border-[#edeae1] dark:border-[#2C3F3A] text-[#8B5A2B] dark:text-[#CFA47E] hover:text-[#1B3C35] dark:hover:text-[#9FE2C5] active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
          aria-label="테마 전환"
          title={isDarkMode ? "라이트 모드로 전환" : "다크 모드로 전환"}
        >
          {isDarkMode ? (
            <Sun size={20} className="stroke-[2.2] animate-[spin_8s_linear_infinite]" />
          ) : (
            <Moon size={20} className="stroke-[2.2]" />
          )}
        </button>
      </div>

      {/* Header / Hero Section */}
      <header className="pt-20 pb-12 px-6 text-center">
        <h1 className="text-3xl font-bold tracking-widest text-[#1B3C35] dark:text-[#9FE2C5] mb-6">
          STAY YEON GUIDE
        </h1>
        <div className="space-y-5 text-[15px] leading-relaxed text-[#4a4a4a] dark:text-[#D4EADD]">
          <p className="font-semibold text-lg text-[#8B5A2B] dark:text-[#CFA47E]">스테이연에 오신 것을 환영합니다.</p>
          <p>
            편안한 휴식과 안전한 이용을 위해<br />
            필요한 안내를 한곳에 정리했습니다.
          </p>
          <p>
            수영장, 바비큐, 노래방 이용 방법을<br />
            아래에서 확인해주세요.
          </p>
        </div>
      </header>

      {/* Main Accordion Menu */}
      <main className="px-5 max-w-2xl mx-auto space-y-4 relative z-10">
        {sections.map((section) => (
          <div key={section.id} id={`${section.id}-section`}>
            <AccordionItem
              id={section.id}
              title={section.title}
              icon={section.icon}
              content={section.content}
              isOpen={openSectionId === section.id}
              onToggle={() => toggleSection(section.id)}
            />
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="mt-20 py-10 text-center text-[#8B5A2B] dark:text-[#CFA47E]">
        <div className="w-12 h-1 bg-[#8B5A2B] dark:bg-[#CFA47E] opacity-20 mx-auto mb-6 rounded-full"></div>
        <p className="font-bold tracking-widest text-lg mb-2">STAY YEON</p>
        <p className="text-sm opacity-80">편안한 하루를 보내세요.</p>
      </footer>

      {/* Floating Bottom Contact Button */}
      <div className="fixed bottom-6 left-0 right-0 px-5 z-55 max-w-2xl mx-auto">
        <button
          onClick={handleFloatingContactClick}
          className="w-full bg-[#1B3C35] dark:bg-[#1E2E2A] text-white py-4 rounded-full shadow-xl dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)] flex items-center justify-center gap-2 font-semibold text-lg transition-transform active:scale-95 border dark:border-[#2C3F3A]"
        >
          <Phone size={20} />
          문의하기
        </button>
      </div>
    </div>
  );
}
