import { useState, useEffect } from 'react';
import { DoorOpen, Wifi, Waves, Flame, Mic, MapPin, Phone, Dog, AlertCircle, Sun, Moon, ShoppingBag, Search, Compass } from 'lucide-react';
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
  AttractionsContent,
} from './components/SectionContents';

export default function App() {
  const [openSectionId, setOpenSectionId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
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
      keywords: ['입실', '퇴실', '체크인', '체크아웃', 'checkin', 'checkout', '시간'],
    },
    {
      id: 'wifi',
      title: '와이파이 안내',
      icon: <Wifi size={20} strokeWidth={2.5} />,
      content: <WifiContent />,
      keywords: ['와이파이', '인터넷', 'wifi', 'internet', '비밀번호', '비번'],
    },
    {
      id: 'pool',
      title: '수영장 이용 안내',
      icon: <Waves size={20} strokeWidth={2.5} />,
      content: <PoolContent />,
      keywords: ['수영장', '물놀이', 'pool', '수영', '수심', '온수', '튜브'],
    },
    {
      id: 'bbq',
      title: '바비큐 / 숯불 안내',
      icon: <Flame size={20} strokeWidth={2.5} />,
      content: <BBQContent />,
      keywords: ['바비큐', '바베큐', '숯불', 'bbq', '고기', '그릴', '불멍'],
    },
    {
      id: 'karaoke',
      title: '노래방 이용 안내',
      icon: <Mic size={20} strokeWidth={2.5} />,
      content: <KaraokeContent />,
      keywords: ['노래방', '노래', '마이크', 'karaoke', '음향', '마이크'],
    },
    {
      id: 'dog',
      title: '반려견 동반 이용 안내',
      icon: <Dog size={20} strokeWidth={2.5} />,
      content: <DogContent />,
      keywords: ['반려견', '강아지', '애견', '개', 'dog', '동반', '펫', '배변'],
    },
    {
      id: 'precautions',
      title: '숙소 이용 주의사항',
      icon: <AlertCircle size={20} strokeWidth={2.5} />,
      content: <PrecautionsContent />,
      keywords: ['주의사항', '주의', '금연', '규칙', 'rule', '안전', '에티켓'],
    },
    {
      id: 'delivery',
      title: '장보기 / 배달 안내',
      icon: <ShoppingBag size={20} strokeWidth={2.5} />,
      content: <DeliveryContent />,
      keywords: ['장보기', '배달', '쿠팡', '배민', '배달의민족', '음식', '마트', '치킨'],
    },
    {
      id: 'facilities',
      title: '주변 편의시설',
      icon: <MapPin size={20} strokeWidth={2.5} />,
      content: <FacilitiesContent />,
      keywords: ['편의시설', '주변', '편의점', '마트', '카페', '맛집', '위치'],
    },
    {
      id: 'attractions',
      title: '주변 가볼 만한 곳',
      icon: <Compass size={20} strokeWidth={2.5} />,
      content: <AttractionsContent />,
      keywords: ['관광지', '관광', '가볼만한곳', '도동서원', '송해공원', '여행', '드라이브', '카페'],
    },
    {
      id: 'contact',
      title: '문의하기',
      icon: <Phone size={20} strokeWidth={2.5} />,
      content: <ContactContent />,
      keywords: ['문의', '전화', '연락', 'contact', '번호', 'a동', 'b동', '연락처'],
    },
  ];

  const filteredSections = sections.filter(section => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase().trim();
    return (
      section.title.toLowerCase().includes(query) ||
      section.keywords.some(keyword => keyword.toLowerCase().includes(query))
    );
  });

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

      {/* Search Bar */}
      <div className="px-5 max-w-2xl mx-auto mb-8 relative z-10 transition-all duration-300">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search size={20} className="text-[#8B5A2B] dark:text-[#CFA47E] opacity-70 group-focus-within:opacity-100 transition-opacity" />
          </div>
          <input
            type="text"
            placeholder="어떤 안내가 필요하신가요? (예: 와이파이, 수영장)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white dark:bg-[#1A2824] border border-[#edeae1] dark:border-[#2C3F3A] rounded-2xl py-4 pl-12 pr-5 text-[15px] font-medium text-[#1B3C35] dark:text-[#9FE2C5] placeholder-[#8B5A2B]/50 dark:placeholder-[#CFA47E]/50 focus:outline-none focus:ring-2 focus:ring-[#1B3C35]/20 dark:focus:ring-[#9FE2C5]/20 shadow-sm transition-all focus:shadow-md"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm font-medium text-[#8B5A2B] dark:text-[#CFA47E] opacity-70 hover:opacity-100 transition-opacity"
            >
              지우기
            </button>
          )}
        </div>
      </div>

      {/* Main Accordion Menu */}
      <main className="px-5 max-w-2xl mx-auto space-y-4 relative z-10">
        {filteredSections.length > 0 ? (
          filteredSections.map((section) => (
            <div key={section.id} id={`${section.id}-section`}>
              <AccordionItem
                id={section.id}
                title={section.title}
                icon={section.icon}
                content={section.content}
                isOpen={openSectionId === section.id || (searchQuery.trim().length > 0 && filteredSections.length === 1)}
                onToggle={() => toggleSection(section.id)}
              />
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white/50 dark:bg-[#1A2824]/50 rounded-2xl border border-[#edeae1] dark:border-[#2C3F3A]">
            <p className="text-[#8B5A2B] dark:text-[#CFA47E] font-medium mb-1">검색 결과가 없습니다.</p>
            <p className="text-[#4a4a4a] dark:text-[#D4EADD] text-sm">다른 검색어로 다시 시도해주세요.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 py-10 text-center text-[#8B5A2B] dark:text-[#CFA47E]">
        <div className="w-12 h-1 bg-[#8B5A2B] dark:bg-[#CFA47E] opacity-20 mx-auto mb-6 rounded-full"></div>
        <p className="font-bold tracking-widest text-lg mb-2">STAY YEON</p>
        <p className="text-sm opacity-80 mb-6">편안한 하루를 보내세요.</p>
        <p className="text-xs opacity-50 tracking-wider">Designed by Mason</p>
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
