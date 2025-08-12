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
const showDotsEl = document.getElementById('showDots');
const coordModeEl= document.getElementById('coordMode');
const lastClickEl= document.getElementById('lastClick');

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

// 좌표 찍기 모드
mapEl.addEventListener('click',(e)=>{
  if(!coordModeEl?.checked) return;
  const rect = mapEl.getBoundingClientRect();
  const x = Number((((e.clientX-rect.left)/rect.width )*100).toFixed(2));
  const y = Number((((e.clientY-rect.top )/rect.height)*100).toFixed(2));
  if (lastClickEl) lastClickEl.textContent = `좌표: ${x}%, ${y}% (floor: ${currentFloor})`;

  if (showDotsEl?.checked){
    const temp = document.createElement('div');
    temp.className='hotspot';
    temp.style.left=x+'%'; temp.style.top=y+'%';
    hotLayer.appendChild(temp); setTimeout(()=>temp.remove(),900);
  }
});

// 렌더링
function renderHotspots(){
  hotLayer.innerHTML='';
  const showDots = !!showDotsEl?.checked;

  HOTSPOTS.filter(h=>h.floor===currentFloor).forEach(h=>{
    // 핀
    const pin = document.createElement('div');
    pin.className='hotspot';
    if(!showDots) pin.classList.add('hidden');
    pin.style.left=h.x+'%'; pin.style.top=h.y+'%';
    pin.title = h.label || h.id;
    pin.addEventListener('click', ()=> toggleLabel(h.id));
    hotLayer.appendChild(pin);

    // 라벨
    const lab = document.createElement('div');
    lab.className='label';
    lab.style.left=h.x+'%'; lab.style.top=h.y+'%';
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
  office_edu: ["박00(음악)", "용00(확률과 통계)", "장00(국어, 현대문학과감상)", "김00(기술가정, 식품과영양, 가정과학)", "정00(정치와법, 사회문화)"],
  nurse: ["박00(보건)"],
  grade3_dept: ["박00(화법과작문, 심화국어)", "이00(통합사회, 한국지리, 세계지리)", "안00(영어독해와작문)", "박00(생명과학, 과학탐구실험)"],
  student_dept: ["허00(화학, 통합과학)", "임00(생활과윤리, 윤리와사상)", "김00(영어, 영어권문화)", "장00(언어와매체, 독서)", "윤00(수학, 기하)"],
  wee_class: ["김00(상담)"],
  career: ["정00(진로)"],
  library: ["정00(사서)"],
  inclusive_support: ["채00(특수교육)"],
  dept_multi: ["김00(수Ⅱ, 미적분)", "조00(영어Ⅱ, 진로영어)", "최00(지구과학, 통합과학)", "최00(체육)"],
};


// 마커 표시 스위치 → 즉시 리렌더
showDotsEl?.addEventListener('change', renderHotspots);

// 시작: 2층 로드
setMapSrc(currentFloor);
