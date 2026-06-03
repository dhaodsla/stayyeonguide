import { MapPin } from 'lucide-react';

export function CheckInOutContent() {
  return (
    <div className="space-y-4 leading-relaxed">
      <div className="bg-[#fcfbf9] dark:bg-[#1A2824] p-4 rounded-xl border border-[#f0eae0] dark:border-[#2C3F3A]">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-[#8B5A2B] dark:text-[#CFA47E]">입실 시간</span>
          <span className="text-lg font-bold text-[#1B3C35] dark:text-[#9FE2C5]">오후 3:00</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-[#8B5A2B] dark:text-[#CFA47E]">퇴실 시간</span>
          <span className="text-lg font-bold text-[#1B3C35] dark:text-[#9FE2C5]">오전 11:00</span>
        </div>
      </div>
      
      <div className="space-y-3 pt-2 text-[#4a4a4a] dark:text-[#D4EADD]">
        <p className="flex gap-2">
          <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
          퇴실 전 사용하신 식기와 조리도구는 간단히 정리해 주세요.
        </p>
        <p className="flex gap-2">
          <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
          음식물 쓰레기와 일반 쓰레기는 분리하여 정리 부탁드립니다.
        </p>
      </div>
    </div>
  );
}

export function WifiContent() {
  return (
    <div className="space-y-5 leading-relaxed text-[#4a4a4a] dark:text-[#D4EADD]">
      <p>
        스테이연 Wi-Fi는 <strong className="text-[#1B3C35] dark:text-[#9FE2C5] font-semibold">비밀번호 없이 바로</strong> 사용하실 수 있습니다.
      </p>
      
      <p className="text-sm">
        휴대폰 또는 노트북의 Wi-Fi 설정에서 <strong className="font-semibold text-[#1B3C35] dark:text-[#9FE2C5]">iptime</strong>으로 표시되는 네트워크를 선택해 연결해주세요.<br />
        비밀번호 입력 없이 바로 연결 가능합니다.
      </p>

      <div className="bg-[#fcfbf9] dark:bg-[#1A2824] p-5 rounded-xl border border-[#f0eae0] dark:border-[#2C3F3A]">
        <div className="flex justify-between items-center mb-2 pb-2 border-b border-[#f0eae0] dark:border-[#2C3F3A]">
          <span className="text-sm font-medium text-[#8B5A2B] dark:text-[#CFA47E]">Wi-Fi 이름</span>
          <span className="font-semibold text-[#1B3C35] dark:text-[#F4F1E8]">iptime</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-[#8B5A2B] dark:text-[#CFA47E]">비밀번호</span>
          <span className="font-semibold text-[#1B3C35] dark:text-[#F4F1E8]">없음</span>
        </div>
      </div>
      
      <p className="text-sm text-[#666666] dark:text-[#A0B0AA]">
        연결이 원활하지 않을 경우 하단의 <span className="font-semibold text-[#8B5A2B] dark:text-[#CFA47E]">문의하기</span> 버튼으로 연락해주세요.
      </p>
    </div>
  );
}

export function PoolContent() {
  return (
    <div className="space-y-5 leading-relaxed text-[#4a4a4a] dark:text-[#D4EADD]">
      <p>
        스테이연의 수영장은 우리 일행만 이용하는 프라이빗 휴식 공간입니다.
        낮에는 시원하게, 저녁에는 분위기 있게 편안한 시간을 즐겨보세요.
      </p>

      <div className="bg-[#fdfbfc] dark:bg-[#1A2824] border border-[#f5f0e6] dark:border-[#2C3F3A] p-4 rounded-xl">
        <h4 className="text-[#1B3C35] dark:text-[#9FE2C5] font-semibold mb-3 flex items-center gap-2">
          🚨 안전을 위한 주의사항
        </h4>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">-</span>
            음주 후 입수는 삼가주세요.
          </li>
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">-</span>
            뛰어들기와 다이빙은 금지입니다.
          </li>
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">-</span>
            어린이, 강아지는 반드시 보호자와 함께 이용해주세요.
          </li>
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">-</span>
            수영장 주변은 미끄러울 수 있으니 주의해주세요.
          </li>
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">-</span>
            이용 후에는 주변 정리를 부탁드립니다.
          </li>
        </ul>
      </div>
    </div>
  );
}

export function BBQContent() {
  return (
    <div className="space-y-6 leading-relaxed text-[#4a4a4a] dark:text-[#D4EADD]">
      <p>안전한 숯불 사용을 위해 아래 순서대로 이용해주세요.</p>

      <div>
        <h4 className="text-[#1B3C35] dark:text-[#9FE2C5] font-semibold mb-3 text-sm tracking-wide">🔥 사용 방법</h4>
        <ol className="space-y-3">
          {[
            '화로 중앙에 번개탄을 놓아주세요.',
            '번개탄 주변과 위쪽에 조개탄을 배치해주세요.',
            '토치를 사용해 번개탄에 불을 붙여주세요.',
            '약 3~5분 후 조개탄에 불이 옮겨붙으면 사용해주세요.',
            '숯이 어느 정도 달아오른 뒤 바비큐를 시작해주세요.',
          ].map((text, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#f4f1e8] dark:bg-[#344B44] text-[#8B5A2B] dark:text-[#E4BE9E] flex items-center justify-center font-bold text-xs mt-0.5">
                {i + 1}
              </span>
              <span>{text}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="bg-[#fcfbf9] dark:bg-[#1A2824] border border-[#f0eae0] dark:border-[#2C3F3A] p-4 rounded-xl">
        <h4 className="text-[#1B3C35] dark:text-[#9FE2C5] font-semibold mb-3 text-sm tracking-wide">⚠️ 주의사항</h4>
        <ul className="space-y-2 text-sm text-[#4a4a4a] dark:text-[#D4EADD]">
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            화로는 사용 중 절대 이동하지 마세요.
          </li>
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            사용 후 숯이나 화로에 손을 대지 마세요.
          </li>
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            어린이가 가까이 가지 않도록 주의해주세요.
          </li>
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span className="font-semibold text-red-700 dark:text-red-400">안전을 위해 실내에서는 절대 사용하지 마세요.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function KaraokeContent() {
  return (
    <div className="space-y-6 leading-relaxed text-[#4a4a4a] dark:text-[#D4EADD]">
      <p>
        스테이연에서는 TV와 <span className="font-semibold text-[#1B3C35] dark:text-[#9FE2C5]">JBL 파티박스</span>를 연결해 노래방처럼 이용하실 수 있습니다.
      </p>

      <div className="bg-[#fcfbf9] dark:bg-[#1A2824] border border-[#f0eae0] dark:border-[#2C3F3A] p-5 rounded-xl">
        <h4 className="text-[#1B3C35] dark:text-[#9FE2C5] font-semibold mb-4 text-sm tracking-wide">🎵 연결 순서</h4>
        <ol className="space-y-3">
          {[
            'TV를 켜주세요.',
            'JBL 파티박스 전원을 켜주세요.',
            '파티박스 블루투스를 켜주세요.',
            'TV 설정에서 블루투스 연결로 들어가주세요.',
            'JBL 파티박스를 선택해 연결해주세요.',
            '유튜브에서 원하는 노래방 MR을 검색해주세요.',
            '신나게 노래를 즐겨주세요.',
          ].map((text, i) => (
            <li key={i} className="flex gap-3 text-sm text-[#4a4a4a] dark:text-[#D4EADD]">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1B3C35] dark:bg-[#204036] text-white dark:text-[#9FE2C5] flex items-center justify-center font-bold text-xs mt-0.5">
                {i + 1}
              </span>
              <span>{text}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="text-sm bg-gray-50 dark:bg-[#1A2824] p-3 rounded-lg flex gap-2">
        <span>💡</span>
        <p className="text-[#666666] dark:text-[#A0B0AA]">
          소리가 나오지 않을 경우 TV 음향 설정과 블루투스 연결 상태를 확인해주세요.
        </p>
      </div>
    </div>
  );
}

export function FacilitiesContent() {
  const facilities = [
    { name: '가까운 편의점', query: '구지면 편의점' },
    { name: '대형 마트', query: '구지면 마트' },
    { name: '약국', query: '구지면 약국' },
    { name: '병원', query: '구지면 병원' },
    { name: '배달 음식점', query: '구지면 배달 음식' },
    { name: '근처 카페', query: '구지면 카페' },
  ];

  return (
    <div className="space-y-5 text-[#4a4a4a] dark:text-[#D4EADD]">
      <p className="leading-relaxed">
        편리한 이용을 위해 근처 편의시설 정보를 정리했습니다.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {facilities.map((facility, i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-[#fcfbf9] dark:bg-[#1A2824] border border-[#f0eae0] dark:border-[#2C3F3A] opacity-90 rounded-xl">
            <span className="font-medium text-[#1B3C35] dark:text-[#9FE2C5]">{facility.name}</span>
            <a
              href={`https://map.naver.com/v5/search/${encodeURIComponent(facility.query)}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-white dark:bg-[#2C3F3A] border border-[#d6cfc5] dark:border-[#3C534D] rounded-full text-[#8B5A2B] dark:text-[#CFA47E] hover:bg-[#f4f1e8] dark:hover:bg-[#1E2E2A] transition-colors"
            >
              <MapPin className="w-3 h-3" />
              지도 보기
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactContent() {
  return (
    <div className="space-y-6 text-[#4a4a4a] dark:text-[#D4EADD]">
      <p className="leading-relaxed">
        이용 중 궁금한 점이나 불편한 점이 있으시면 언제든 편하게 연락주세요.
      </p>

      <div className="space-y-3">
        <a 
          href="tel:010-9850-4428"
          className="flex items-center justify-center gap-2 w-full py-4 bg-[#1B3C35] dark:bg-[#255249] text-white rounded-xl shadow-md font-medium transition-transform active:scale-[0.98]"
        >
          📞 A동 전화 문의
        </a>

        <a 
          href="tel:010-4527-3377"
          className="flex items-center justify-center gap-2 w-full py-4 bg-[#1B3C35] dark:bg-[#255249] text-white rounded-xl shadow-md font-medium transition-transform active:scale-[0.98]"
        >
          📞 B동 전화 문의
        </a>
        
        <a 
          href="https://open.kakao.com/o/gdDCEUxi"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full py-4 bg-[#FEE500] text-[#371D1E] rounded-xl shadow-md font-medium transition-transform active:scale-[0.98]"
        >
          💬 카카오톡 문의하기
        </a>
      </div>

      <div className="mt-6 pt-4 border-t border-[#f0eae0] dark:border-[#2C3F3A]">
        <h4 className="text-sm font-semibold text-[#8B5A2B] dark:text-[#CFA47E] mb-2">숙소 주소</h4>
        <p className="text-sm">대구광역시 달성군 구지면 구지남로 29</p>
        <p className="text-sm font-bold text-[#1B3C35] dark:text-[#9FE2C5] mt-1">스테이연 (STAY YEON)</p>
      </div>
    </div>
  );
}

export function DogContent() {
  return (
    <div className="space-y-5 leading-relaxed text-[#4a4a4a] dark:text-[#D4EADD]">
      {/* 반려견 동반 동별 제한 강조 안내 박스 */}
      <div className="bg-[#fff5f5] dark:bg-[#2D1D1E] border border-[#feb2b2] dark:border-[#532828] p-4 rounded-xl space-y-1">
        <p className="text-sm font-bold text-[#c53030] dark:text-[#FF8D8D] flex items-center gap-1.5">
          ⚠️ 중요: 동별 반려견 동반 정책 안내
        </p>
        <p className="text-[13px] text-[#9b2c2c] dark:text-[#FFA8A8] leading-normal font-semibold">
          반려견 동반은 <span className="bg-[#ffe3e3] dark:bg-[#5A1E16] px-1.5 py-0.5 rounded text-red-800 dark:text-[#FEABAB]">B동만 가능</span>합니다.<br />
          <span className="text-red-700 dark:text-red-300 bg-yellow-100 dark:bg-[#4C3B14] px-1.5 py-0.5 rounded border border-yellow-200 dark:border-[#6B5A1D] inline-block mt-1">A동 반려견 동반 시 즉시 퇴실 조치</span>되오니 꼭 준수해 주시기 바랍니다.
        </p>
      </div>

      <p className="text-sm text-[#4a4a4a] dark:text-[#D4EADD]">
        스테이연은 반려견과 함께 편안하게 머무를 수 있는 공간입니다. 다음 손님도 깨끗하게 이용하실 수 있도록 실내 배변 및 마킹 관리에 꼭 협조 부탁드립니다.
      </p>

      <div className="bg-[#fff9f4] dark:bg-[#2B231D] border border-[#f2d8c9] dark:border-[#423328] p-5 rounded-xl">
        <h4 className="text-[#8B5A2B] dark:text-[#CFA47E] font-semibold mb-4 text-sm tracking-wide bg-[#fbebe0] dark:bg-[#473629] inline-block px-3 py-1.5 rounded-full flex items-center gap-2">
          🐾 필수 안내
        </h4>
        <ul className="space-y-2.5 text-sm">
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span>반려견 동반은 <strong>B동만 가능</strong>하며, <strong>A동 반려견 동반 시 즉시 퇴실 조치</strong>됩니다.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span>실내 마킹이 있는 강아지는 <strong>매너벨트 필수 착용</strong>입니다.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span>마킹 습관이 있거나 낯선 공간에서 실수 가능성이 있는 경우 <strong>입실 직후부터 매너벨트를 착용</strong>해주세요.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span>배변 실수 발생 시 보호자분께서 즉시 정리해주세요.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span>침구, 이불, 소파, 러그 위 소변 오염 시 <strong>세탁비가 청구</strong>됩니다.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span>오염 정도가 심하거나 냄새 제거가 어려운 경우 추가 비용이 발생할 수 있습니다.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span>반려견으로 인한 시설물 파손 또는 침구류 훼손 시 복구 비용이 청구될 수 있습니다.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span>반려견만 객실에 두고 장시간 외출하는 것은 삼가주세요.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function PrecautionsContent() {
  return (
    <div className="space-y-5 leading-relaxed text-[#4a4a4a] dark:text-[#D4EADD]">
      <p>
        스테이연을 찾아주신 모든 분들이 기분 좋은 시간을 보내실 수 있도록 몇 가지 이용 안내를 부탁드립니다.
      </p>

      <div className="bg-[#fcfbf9] dark:bg-[#1A2824] border border-[#f0eae0] dark:border-[#2C3F3A] p-4 rounded-xl">
        <ul className="space-y-2.5 text-sm">
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span><span className="font-semibold text-red-700 dark:text-red-400">실내에서는 절대 금연입니다.</span> 흡연은 반드시 외부에서 부탁드립니다.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span>담배꽁초는 실내 또는 마당에 버리지 말고 꼭 정리해주세요.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span>객실 내 촛불, 향, 폭죽 등 화기 사용은 금지입니다.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span>수영장 및 바비큐 이용 시 안전사고에 주의해주세요.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span>시설물 파손 또는 분실 시 배상 비용이 발생할 수 있습니다.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span>보호자 동반 없이 어린이, 강아지가 수영장을 이용하지 않도록 해주세요.</span>
          </li>
          <li className="flex gap-1.5">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span>밤늦은 시간에는 주변 이웃을 위해 큰 소음을 자제해주세요.</span>
          </li>
          <li className="flex gap-1.5">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span>반려견 동반 시 배변 처리는 보호자분께서 바로 정리해주세요.</span>
          </li>
          <li className="flex gap-1.5">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span>실내 마킹이 있는 강아지는 <strong>매너벨트 착용이 필수</strong>입니다.</span>
          </li>
          <li className="flex gap-1.5">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span>침구, 이불, 소파, 러그 오염 시 세탁비 또는 복구 비용이 청구될 수 있습니다.</span>
          </li>
          <li className="flex gap-1.5">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span>외출 시 냉난방기, 조명, 전열기구 전원을 확인해주세요.</span>
          </li>
          <li className="flex gap-1.5">
            <span className="text-[#8B5A2B] dark:text-[#CFA47E] mt-0.5">•</span>
            <span>퇴실 전 음식물 쓰레기와 일반 쓰레기는 분리 정리 부탁드립니다.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
