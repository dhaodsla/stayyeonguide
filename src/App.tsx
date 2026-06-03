import { useState } from 'react';
import { DoorOpen, Wifi, Waves, Flame, Mic, MapPin, Phone, Dog, AlertCircle } from 'lucide-react';
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
} from './components/SectionContents';

export default function App() {
  const [openSectionId, setOpenSectionId] = useState<string | null>(null);

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
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-gray-800 pb-24">
      {/* Header / Hero Section */}
      <header className="pt-16 pb-12 px-6 text-center">
        <h1 className="text-3xl font-bold tracking-widest text-[#1B3C35] mb-6">
          STAY YEON GUIDE
        </h1>
        <div className="space-y-5 text-[15px] leading-relaxed text-[#4a4a4a]">
          <p className="font-semibold text-lg text-[#8B5A2B]">스테이연에 오신 것을 환영합니다.</p>
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
      <footer className="mt-20 py-10 text-center text-[#8B5A2B]">
        <div className="w-12 h-1 bg-[#8B5A2B] opacity-20 mx-auto mb-6 rounded-full"></div>
        <p className="font-bold tracking-widest text-lg mb-2">STAY YEON</p>
        <p className="text-sm opacity-80">편안한 하루를 보내세요.</p>
      </footer>

      {/* Floating Bottom Contact Button */}
      <div className="fixed bottom-6 left-0 right-0 px-5 z-50 max-w-2xl mx-auto">
        <button
          onClick={handleFloatingContactClick}
          className="w-full bg-[#1B3C35] text-white py-4 rounded-full shadow-xl flex items-center justify-center gap-2 font-semibold text-lg transition-transform active:scale-95"
        >
          <Phone size={20} />
          문의하기
        </button>
      </div>
    </div>
  );
}
