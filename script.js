/***** 데이터 (좌표는 % 단위) *****/
// 2층
const hotspots_2f = [
  { id:'library',        floor:'floor2_resized.png', x:11.6, y:43,   label:'도서관' },
  { id:'annex_pass',     floor:'floor2_resized.png', x:25.2, y:43,   label:'별관 이동 복도' },
  { id:'toilet_f',       floor:'floor2_resized.png', x:29.5, y:43,   label:'여자 화장실' },
  { id:'toilet_m',       floor:'floor2_resized.png', x:32,   y:43,   label:'남자 화장실' },
  { id:'stair_a',        floor:'floor2_resized.png', x:35,   y:43,   label:'계단 A' },
  { id:'nurse',          floor:'floor2_resized.png', x:39.5, y:43,   label:'보건실' },
  { id:'it_office',      floor:'floor2_resized.png', x:44,   y:43,   label:'교육정보부' },
  { id:'vice_principal', floor:'floor2_resized.png', x:47.3, y:43,   label:'교감실' },
  { id:'office_edu',     floor:'floor2_resized.png', x:52,   y:43,   label:'교무/교육과정부' },
  { id:'learn_room',     floor:'floor2_resized.png', x:58,   y:43,   label:'배움터' },
  { id:'stair_b',        floor:'floor2_resized.png', x:62.8, y:43,   label:'계단 B' },
  { id:'jeonggam',       floor:'floor2_resized.png', x:67.2, y:43,   label:'정감교실' },
  { id:'class_2_3',      floor:'floor2_resized.png', x:73.5, y:43,   label:'2-3' },
  { id:'class_2_2',      floor:'floor2_resized.png', x:79.8, y:43,   label:'2-2' },
  { id:'class_2_1',      floor:'floor2_resized.png', x:86,   y:43,   label:'2-1' },
  { id:'stair_c',        floor:'floor2_resized.png', x:90.5, y:43,   label:'계단 C' },
  { id:'lab2',           floor:'floor2_resized.png', x:95.8, y:50.8, label:'제2과학실' }
];
// 1층
const hotspots_1f = [
  { id:'annex_ieum',         floor:'floor1_resized.png', x:9.6,  y:57.5, label:'이음홀(별관)' },
  { id:'annex_toilet_m',     floor:'floor1_resized.png', x:13.6, y:15,   label:'별관 남자화장실' },
  { id:'annex_toilet_f',     floor:'floor1_resized.png', x:8.5,  y:15,   label:'별관 여자화장실' },
  { id:'annex_stair',        floor:'floor1_resized.png', x:19,   y:15,   label:'별관 계단' },
  { id:'toilet_m_1f',        floor:'floor1_resized.png', x:31.6, y:45,   label:'남자화장실(본관)' },
  { id:'toilet_f_1f',        floor:'floor1_resized.png', x:28.8, y:53.75,label:'여자화장실(본관)' },
  { id:'stair_a_1f',         floor:'floor1_resized.png', x:34.3, y:45,   label:'계단 A' },
  { id:'inclusive_support',  floor:'floor1_resized.png', x:38.8, y:45,   label:'통합교육지원실' },
  { id:'publishing',         floor:'floor1_resized.png', x:43.7, y:45,   label:'발간실' },
  { id:'dept_multi',         floor:'floor1_resized.png', x:46.9, y:45,   label:'학년부/교육정보부/체육부' },
  { id:'principal',          floor:'floor1_resized.png', x:51.4, y:45,   label:'교장실' },
  { id:'admin_office',       floor:'floor1_resized.png', x:57.7, y:45,   label:'교육행정실' },
  { id:'stair_b_1f',         floor:'floor1_resized.png', x:62.5, y:45,   label:'계단 B' },
  { id:'gonggam',            floor:'floor1_resized.png', x:66.7, y:45,   label:'공감실' },
  { id:'class_1_3',          floor:'floor1_resized.png', x:73,   y:45,   label:'1-3' },
  { id:'class_1_2',          floor:'floor1_resized.png', x:79.1, y:45,   label:'1-2' },
  { id:'class_1_1',          floor:'floor1_resized.png', x:85.5, y:45,   label:'1-1' },
  { id:'stair_c_1f',         floor:'floor1_resized.png', x:90.2, y:45,   label:'계단 C' },
  { id:'lab1',               floor:'floor1_resized.png', x:95.2, y:53.3, label:'1층 과학실' }
];
// 3층
const hotspots_3f = [
  { id:'art_3f',            floor:'floor3_resized.png', x:6,    y:58.7, label:'미술실(별관)' },
  { id:'band_3f',           floor:'floor3_resized.png', x:3.6,  y:26.3, label:'밴드실(별관)' },
  { id:'annex_toilet_m_3f', floor:'floor3_resized.png', x:13.7, y:23,   label:'별관 남자화장실' },
  { id:'annex_toilet_f_3f', floor:'floor3_resized.png', x:8.6,  y:23,   label:'별관 여자화장실' },
  { id:'annex_stair_3f',    floor:'floor3_resized.png', x:19.2, y:23,   label:'별관 계단' },
  { id:'nuri_cafe',         floor:'floor3_resized.png', x:17.02,y:57.3, label:'누리 카페' },
  { id:'toilet_m_3f',       floor:'floor3_resized.png', x:31.6, y:49.2, label:'남자화장실(본관)' },
  { id:'toilet_f_3f',       floor:'floor3_resized.png', x:28.8, y:55.9, label:'여자화장실(본관)' },
  { id:'stair_a_3f',        floor:'floor3_resized.png', x:34.5, y:49.2, label:'계단 A' },
  { id:'class_3_4',         floor:'floor3_resized.png', x:38.7, y:49.2, label:'3-4' },
  { id:'class_3_3',         floor:'floor3_resized.png', x:45.1, y:49.2, label:'3-3' },
  { id:'class_3_2',         floor:'floor3_resized.png', x:51.3, y:49.2, label:'3-2' },
  { id:'class_3_1',         floor:'floor3_resized.png', x:57.6, y:49.2, label:'3-1' },
  { id:'stair_b_3f',        floor:'floor3_resized.png', x:62.1, y:49.2, label:'계단 B' },
  { id:'nanum',             floor:'floor3_resized.png', x:66.6, y:49.2, label:'나눔터' },
  { id:'broadcast',         floor:'floor3_resized.png', x:71.2, y:49.2, label:'방송실' },
  { id:'career',            floor:'floor3_resized.png', x:74.4, y:49.2, label:'진로상담실' },
  { id:'student_dept',      floor:'floor3_resized.png', x:79,   y:49.2, label:'학생부/기숙사부/연구실' },
  { id:'wee_class',         floor:'floor3_resized.png', x:83.6, y:49.2, label:'Wee클래스' },
  { id:'grade3_dept',       floor:'floor3_resized.png', x:86.7, y:49.2, label:'3학년부' },
  { id:'stair_c_3f',        floor:'floor3_resized.png', x:89.8, y:49.2, label:'계단 C' },
  { id:'music',             floor:'floor3_resized.png', x:94.8, y:57,   label:'음악실' }
];

// 모든 핫스팟 합치기
const HOTSPOTS = [...hotspots_1f, ...hotspots_2f, ...hotspots_3f];

/***** 로직 *****/
const mapEl      = document.getElementById('map');
const hotLayer   = document.getElementById('hotspots');
//개발자용 UI 제거
//const showDotsEl = document.getElementById('showDots');
//const coordModeEl= document.getElementById('coordMode');
//const lastClickEl= document.getElementById('lastClick');

let currentFloor = 'floor2_resized.png';
const teacherMode = new Set();

// 이미지 경로 자동 시도 (로컬/서버 둘 다 안전)
function setMapSrc(fileName){
  currentFloor = fileName;
  const candidates = [
    `./images/${fileName}`,
    `images/${fileName}`,
    `./${fileName}`
  ];
  let i = 0;
  function tryNext(){
    if(i >= candidates.length){ console.error('이미지 경로 실패:', candidates); return; }
    const src = candidates[i++];
    mapEl.onerror = tryNext;
    mapEl.onload  = renderHotspots;
    mapEl.src = src;
  }
  tryNext();
}

// 층 버튼
document.querySelectorAll('.toolbar [data-floor]')
  .forEach(btn => btn.addEventListener('click', ()=> setMapSrc(btn.dataset.floor)));

// 렌더링
function renderHotspots(){
  hotLayer.innerHTML='';

  HOTSPOTS.filter(h=>h.floor===currentFloor).forEach(h=>{
    // 라벨만 생성 (마커는 만들지 않음)
    const lab = document.createElement('div');
    lab.className='label';
    lab.style.left=h.x+'%'; 
    lab.style.top =h.y+'%';
    lab.dataset.id = h.id;
    updateLabel(lab, h.id);
    lab.addEventListener('click', ()=> toggleLabel(h.id));
    hotLayer.appendChild(lab);
  });
}


// 라벨 업데이트
function updateLabel(el, id){
  const h = HOTSPOTS.find(x=>x.id===id); if(!h) return;
  const list = TEACHERS[id] || [];
  if (teacherMode.has(id)){
    el.classList.add('teachers');
    el.innerHTML = `<div class="name">${h.label||id}</div>` +
                   (list.length ? `<div>${list.map(n=>`• ${n}`).join('<br>')}</div>` : '');
  }else{
    el.classList.remove('teachers');
    el.textContent = h.label || id;
  }
}

function toggleLabel(id){
  if (teacherMode.has(id)) teacherMode.delete(id); else teacherMode.add(id);
  hotLayer.querySelectorAll('.label').forEach(el=>{
    if (el.dataset.id===id) updateLabel(el, id);
  });
  // 클릭 강조(짧게)
  const h = HOTSPOTS.find(x=>x.id===id);
  if (h){
    const ring = document.createElement('div');
    ring.className='hotspot';
    ring.style.left=h.x+'%'; ring.style.top=h.y+'%';
    ring.style.background='transparent'; ring.style.borderColor='#0070f3';
    ring.style.width='22px'; ring.style.height='22px';
    hotLayer.appendChild(ring); setTimeout(()=>ring.remove(),1100);
  }
}

// ===== 교무실별 선생님 명단 =====
const TEACHERS = {
  office_edu: ["박00 선생님(음악)", "용00 선생님(확률과 통계)", "장00 선생님(국어, 현대문학과감상)", "김00 선생님(기술가정, 식품과영양, 가정과학)", "정00 선생님(정치와법, 사회문화)"],
  nurse: ["박00 선생님(보건)"],
  grade3_dept: ["박00 선생님(화법과작문, 심화국어)", "이00 선생님(통합사회, 한국지리, 세계지리)", "안00 선생님(영어독해와작문)", "박00 선생님(생명과학, 과학탐구실험)"],
  student_dept: ["허00 선생님(화학, 통합과학)", "임00 선생님(생활과윤리, 윤리와사상)", "김00 선생님(영어, 영어권문화)", "장00 선생님(언어와매체, 독서)", "윤00 선생님(수학, 기하)"],
  wee_class: ["김00 선생님(상담)"],
  career: ["정00 선생님(진로)"],
  library: ["정00 선생님(사서)"],
  inclusive_support: ["채00 선생님(특수교육)"],
  dept_multi: ["김00 선생님(수Ⅱ, 미적분)", "조00 선생님(영어Ⅱ, 진로영어)", "최00 선생님(지구과학, 통합과학)", "최00 선생님(체육)"],
};

// 시작: 2층 로드
setMapSrc(currentFloor);

/* ===== PC/모바일 공통: 드래그 + 핀치줌 + 라벨 고정 크기(최종) ===== */
(function(){
  const innerEl = document.getElementById('map-inner') || document.getElementById('map-wrap');
  const hotLayer = document.getElementById('hotspots');
  if (!innerEl || !hotLayer) return;

  // 중복 바인딩 방지
  if (innerEl.dataset.pzBound === '1') return;
  innerEl.dataset.pzBound = '1';

  // 상태
  const PZ = {
    s: 1, minS: 1, maxS: 3,   // 확대 배율
    tx: 0, ty: 0,             // 평행이동
    // PC 드래그(클릭과 구분)
    dragThreshold: 4,
    isPan: false,
    startX: 0, startY: 0,
    lastX: 0, lastY: 0,
    // 터치 핀치
    startD: 0, startS: 1
  };

  function applyTransform(){
    innerEl.style.transform = `translate(${PZ.tx}px, ${PZ.ty}px) scale(${PZ.s})`;
    // 라벨은 역스케일로 크기 고정
    hotLayer.style.setProperty('--labelScale', 1 / PZ.s);
  }

  // 거리(핀치)
  function dist(ts){
    const [a,b] = ts;
    const dx = a.clientX - b.clientX, dy = a.clientY - b.clientY;
    return Math.hypot(dx, dy);
  }

/* ==== PC: 마우스/펜 드래그(클릭과 구분, 초안정) ==== */
const DRAG_THRESHOLD = 4; // px
let maybePan = false;     // 클릭과 드래그 후보를 구분
let isPan = false;
let startX = 0, startY = 0;
let lastX  = 0, lastY  = 0;

function applyTransformSafe(){
  // 네 IIFE 안의 applyTransform을 쓰고 있다면 이 함수 대신 기존 걸 호출해도 OK
  // 여기서는 예시로 pzApplyTransform 같은 기존 함수를 호출하세요.
  // pzApplyTransform();  ← 기존 함수명 사용
  applyTransform();       // ← 네 블록명에 맞게 바꾸세요 (없으면 pzApplyTransform)
}

function endPan(){
  maybePan = false;
  isPan = false;
  hotLayer.style.pointerEvents = 'auto'; // 라벨 클릭 복구
}

innerEl.addEventListener('pointerdown', (e)=>{
  // 왼쪽 버튼만 드래그 후보로 인정
  if (e.button !== 0) return;
  // setPointerCapture 사용 안 함 (브라우저/트랙패드 버그 방지)
  maybePan = true;
  isPan = false;                 // 아직은 클릭
  startX = lastX = e.clientX;
  startY = lastY = e.clientY;
  // pointerEvents 여기서 끄지 않음
});

innerEl.addEventListener('pointermove', (e)=>{
  // 버튼이 떠버렸으면 즉시 종료
  if (e.buttons !== 1) { endPan(); return; }

  if (maybePan && !isPan) {
    const dx0 = e.clientX - startX;
    const dy0 = e.clientY - startY;
    if (Math.abs(dx0) > DRAG_THRESHOLD || Math.abs(dy0) > DRAG_THRESHOLD) {
      isPan = true;
      hotLayer.style.pointerEvents = 'none'; // 진짜 드래그 시작된 뒤에만 클릭 차단
    } else {
      return; // 아직 클릭 후보
    }
  }
  if (!isPan) return;

  // 실제 드래그
  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;
  PZ.tx += dx; PZ.ty += dy;      // ← 네 IIFE에서 쓰는 평행이동 상태명 유지
  lastX = e.clientX; lastY = e.clientY;
  applyTransformSafe();
});

innerEl.addEventListener('pointerup', endPan);
innerEl.addEventListener('pointercancel', endPan);
innerEl.addEventListener('pointerleave', endPan);
window.addEventListener('mouseup', endPan);
window.addEventListener('blur', endPan);

// 드래그 후 남는 “유령 클릭” 방지 (옵션)
innerEl.addEventListener('click', (e)=>{
  if (isPan) e.preventDefault();
}, true);

  /* ==== 모바일: 두 손가락 핀치줌 ==== */
  innerEl.addEventListener('touchstart', (e)=>{
    if (e.touches.length === 2){
      e.preventDefault();
      PZ.startD = dist(e.touches);
      PZ.startS = PZ.s;
      hotLayer.style.pointerEvents = 'none'; // 핀치 중 클릭 차단
    }
  }, {passive:false});

  innerEl.addEventListener('touchmove', (e)=>{
    if (e.touches.length === 2){
      e.preventDefault();
      const ratio = dist(e.touches) / PZ.startD;
      PZ.s = Math.min(PZ.maxS, Math.max(PZ.minS, PZ.startS * ratio));
      applyTransform();
    }
  }, {passive:false});

  function endPinch(){
    hotLayer.style.pointerEvents = 'auto';
  }
  innerEl.addEventListener('touchend', endPinch, {passive:true});
  innerEl.addEventListener('touchcancel', endPinch, {passive:true});

  /* ==== (선택) 데스크톱 휠로 줌(Ctrl/⌘ + 휠) ==== */
  innerEl.addEventListener('wheel', (e)=>{
    if (!e.ctrlKey && !e.metaKey) return; // 일반 휠까지 쓰려면 이 줄 지우세요
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.05 : 0.95;
    PZ.s = Math.min(PZ.maxS, Math.max(PZ.minS, PZ.s * factor));
    applyTransform();
  }, {passive:false});

  // 초기 1회 적용
  applyTransform();
})();
