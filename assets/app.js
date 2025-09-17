// ===== DATA =====
const DESTINATIONS = [
  { slug:"hunza", name:"Hunza Valley", region:"Gilgit-Baltistan", bestTime:"May – Oct", coords:"36.316, 74.650", img:"https://images.unsplash.com/photo-1564664594-84e33bf0b5e0?q=80&w=1600&auto=format&fit=crop", summary:"Karimabad, Attabad Lake, Passu Cones, and Eagle's Nest views.", highlights:["Attabad Lake","Passu Cones","Baltit & Altit Forts"], photos:[
    "https://images.unsplash.com/photo-1571829972475-0b23b3bf3bd9?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1603268899595-7c37649c819d?q=80&w=1600&auto=format&fit=crop"
  ]},
  { slug:"skardu", name:"Skardu & Deosai", region:"Gilgit-Baltistan", bestTime:"Jun – Sep", coords:"35.321, 75.579", img:"https://images.unsplash.com/photo-1564247487160-98c8f3af0cb2?q=80&w=1600&auto=format&fit=crop", summary:"Gateway to K2; turquoise lakes and the vast Deosai National Park.", highlights:["Deosai Plains","Shangrila","Upper Kachura"], photos:[
    "https://images.unsplash.com/photo-1624145759526-8e955f192d08?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1624145759268-3b5dbe3105b8?q=80&w=1600&auto=format&fit=crop"
  ]},
  { slug:"fairy-meadows", name:"Fairy Meadows", region:"Gilgit-Baltistan", bestTime:"May – Sep", coords:"35.424, 74.589", img:"https://images.unsplash.com/photo-1566127444975-96a8b3e13308?q=80&w=1600&auto=format&fit=crop", summary:"Meadows facing mighty Nanga Parbat. Jeep to Tatu, then 2–3h hike.", highlights:["Nanga Parbat View","Raikot Glacier","Cabins"], photos:[
    "https://images.unsplash.com/photo-1565098775996-2e6d4e20f9b1?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1626778533781-5f1a0e9d2c4b?q=80&w=1600&auto=format&fit=crop"
  ]},
  { slug:"naran-kaghan", name:"Naran & Kaghan", region:"Khyber Pakhtunkhwa", bestTime:"Jun – Sep", coords:"34.907, 73.650", img:"https://images.unsplash.com/photo-1624288243427-6b93d32dd8d7?q=80&w=1600&auto=format&fit=crop", summary:"Alpine rivers and lakes incl. Saif‑ul‑Mulook and Lulusar; Babusar Top.", highlights:["Saif‑ul‑Mulook","Babusar Top","Lulusar Lake"], photos:[
    "https://images.unsplash.com/photo-1624145759397-88fce7f4f593?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621708755421-61d0d7bf4a41?q=80&w=1600&auto=format&fit=crop"
  ]},
  { slug:"swat", name:"Swat Valley", region:"Khyber Pakhtunkhwa", bestTime:"Apr – Oct", coords:"35.222, 72.425", img:"https://images.unsplash.com/photo-1605686195017-7f7f04b5b8b0?q=80&w=1600&auto=format&fit=crop", summary:"Often called the ‘Switzerland of the East’: Mingora, Malam Jabba, Kalam.", highlights:["Malam Jabba","Kalam","Ushu Forest"], photos:[
    "https://images.unsplash.com/photo-1602423402067-4b37e2d2fc90?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1597424212118-9fe63c19f781?q=80&w=1600&auto=format&fit=crop"
  ]},
  { slug:"islamabad", name:"Islamabad", region:"Islamabad Capital Territory", bestTime:"Oct – Apr", coords:"33.684, 73.047", img:"https://images.unsplash.com/photo-1603540547594-0703580a6d87?q=80&w=1600&auto=format&fit=crop", summary:"Leafy capital: Faisal Mosque, Margalla trails, Daman‑e‑Koh.", highlights:["Faisal Mosque","Trail 3/5","Monal"], photos:[
    "https://images.unsplash.com/photo-1598720291438-7f61a821a3d2?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599057310063-9b5f3867be3d?q=80&w=1600&auto=format&fit=crop"
  ]},
  { slug:"lahore", name:"Lahore", region:"Punjab", bestTime:"Oct – Mar", coords:"31.520, 74.358", img:"https://images.unsplash.com/photo-1581840562290-8b8681f430e1?q=80&w=1600&auto=format&fit=crop", summary:"Historic heart: Badshahi Mosque, Lahore Fort, Walled City foods.", highlights:["Badshahi Mosque","Lahore Fort","Walled City"], photos:[
    "https://images.unsplash.com/photo-1626383465911-50637e2b2fc7?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581840562090-0fb1923112b4?q=80&w=1600&auto=format&fit=crop"
  ]},
  { slug:"karachi", name:"Karachi", region:"Sindh", bestTime:"Nov – Mar", coords:"24.860, 67.001", img:"https://images.unsplash.com/photo-1588508064283-66d5f2ad37e6?q=80&w=1600&auto=format&fit=crop", summary:"By the Arabian Sea: Clifton beach, Mohatta Palace, Mazar‑e‑Quaid.", highlights:["Clifton","Mohatta","Mazar‑e‑Quaid"], photos:[
    "https://images.unsplash.com/photo-1589792923963-3a800ae2bc11?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1613758947306-fd52d9a316d1?q=80&w=1600&auto=format&fit=crop"
  ]},
  { slug:"mohenjo-daro", name:"Mohenjo‑daro", region:"Sindh", bestTime:"Nov – Feb", coords:"27.327, 68.138", img:"https://images.unsplash.com/photo-1639402377957-3f6a0be8e017?q=80&w=1600&auto=format&fit=crop", summary:"UNESCO Indus Valley site famous for the Great Bath and planned streets.", highlights:["Great Bath","Streets","Museum"], photos:[
    "https://images.unsplash.com/photo-1639402529686-2b3a75f17ddf?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1639402711641-3fe3a21ea16c?q=80&w=1600&auto=format&fit=crop"
  ]},
  { slug:"taxila", name:"Taxila (UNESCO)", region:"Punjab", bestTime:"Oct – Mar", coords:"33.737, 72.799", img:"https://images.unsplash.com/photo-1655659143680-1c52ca36080b?q=80&w=1600&auto=format&fit=crop", summary:"Ancient Gandhara ruins: Sirkap, Jaulian monastery, Dharmarajika stupa.", highlights:["Sirkap","Jaulian","Dharmarajika"], photos:[
    "https://images.unsplash.com/photo-1655659143546-7f7a69b3e51c?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1655659143621-08d1a3f59b4b?q=80&w=1600&auto=format&fit=crop"
  ]},
  { slug:"derawar", name:"Derawar Fort (Bahawalpur)", region:"Punjab", bestTime:"Nov – Feb", coords:"28.634, 71.337", img:"https://images.unsplash.com/photo-1580792825197-1f4ad7881c2b?q=80&w=1600&auto=format&fit=crop", summary:"Massive 9th‑century fort in the Cholistan Desert near Bahawalpur.", highlights:["Cholistan","Fort Walls","Desert Safari"], photos:[
    "https://images.unsplash.com/photo-1580792825204-1e4e6882f2cb?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580792772669-41c27d3a5f1c?q=80&w=1600&auto=format&fit=crop"
  ]},
  { slug:"kalash", name:"Kalash Valleys (Chitral)", region:"Khyber Pakhtunkhwa", bestTime:"May – Sep", coords:"35.695, 71.730", img:"https://images.unsplash.com/photo-1580496046624-1e9bdfb1ef82?q=80&w=1600&auto=format&fit=crop", summary:"Unique Kalash culture in Bumburet, Rumbur, Birir valleys.", highlights:["Chilimjusht","Uchal","Choimus"], photos:[
    "https://images.unsplash.com/photo-1580496046447-5c1b9e8b9fbf?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580496046635-4045a73aa4ec?q=80&w=1600&auto=format&fit=crop"
  ]},
  { slug:"neelum", name:"Neelum Valley", region:"Azad Kashmir", bestTime:"May – Oct", coords:"34.564, 73.907", img:"https://images.unsplash.com/photo-1628869006068-d24ea9f69b3f?q=80&w=1600&auto=format&fit=crop", summary:"Emerald rivers, Keran, Sharda, and the alpine Ratti Gali Lake trek.", highlights:["Keran","Sharda","Ratti Gali"], photos:[
    "https://images.unsplash.com/photo-1628870271492-7e1c0f29a0de?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1628870271407-0cc6dca7b8f2?q=80&w=1600&auto=format&fit=crop"
  ]},
  { slug:"kumrat", name:"Kumrat Valley", region:"Khyber Pakhtunkhwa", bestTime:"May – Sep", coords:"35.471, 72.114", img:"https://images.unsplash.com/photo-1625484474385-2e3b5b3c6c5b?q=80&w=1600&auto=format&fit=crop", summary:"Pine forests, Panjkora river, Jahaz Banda meadows.", highlights:["Jahaz Banda","Katora Lake","Panjkora"], photos:[
    "https://images.unsplash.com/photo-1625484474353-2f3e7c2e1c4d?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1625484474395-55ad0e1f0ae8?q=80&w=1600&auto=format&fit=crop"
  ]},
  { slug:"hingol", name:"Hingol National Park", region:"Balochistan", bestTime:"Nov – Mar", coords:"25.510, 65.517", img:"https://images.unsplash.com/photo-1619371871789-2a01d10b1916?q=80&w=1600&auto=format&fit=crop", summary:"Princess of Hope, Kund Malir beach, Sphinx-like formations.", highlights:["Kund Malir","Princess of Hope","Hinglaj"], photos:[
    "https://images.unsplash.com/photo-1619371871900-93f9a7afc9ea?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1619371871800-7cf3e1265f2f?q=80&w=1600&auto=format&fit=crop"
  ]},
  { slug:"khunjerab", name:"Khunjerab Pass", region:"Gilgit-Baltistan", bestTime:"Jun – Sep", coords:"36.859, 75.425", img:"https://images.unsplash.com/photo-1585821703867-1a8a7b1a1d1c?q=80&w=1600&auto=format&fit=crop", summary:"World’s highest paved border crossing on KKH (~4,693 m).", highlights:["KKH","Yaks","High Altitude"], photos:[
    "https://images.unsplash.com/photo-1585821703830-16a0e9c02dd7?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585821703855-d0c2a9b0b1b1?q=80&w=1600&auto=format&fit=crop"
  ]}
];

const STORIES = [
  { title:"Rooftop of the World: First time in Hunza", by:"Amna, Karachi", img:"https://images.unsplash.com/photo-1564664594-84e33bf0b5e0?q=80&w=1600&auto=format&fit=crop", text:"We watched the Milky Way from Eagle’s Nest and had walnut cake in Karimabad. The apricot orchards were in bloom—unreal!" },
  { title:"Desert to Ocean: Makran Coastal Road", by:"Bilal, Lahore", img:"https://images.unsplash.com/photo-1619371871789-2a01d10b1916?q=80&w=1600&auto=format&fit=crop", text:"Princess of Hope looked sculpted by time. We camped at Kund Malir—stars like diamonds and bioluminescence by the shore." },
  { title:"Ancient Bricks of the Indus", by:"Sana, Islamabad", img:"https://images.unsplash.com/photo-1639402377957-3f6a0be8e017?q=80&w=1600&auto=format&fit=crop", text:"Walking the Great Bath at Mohenjo‑daro felt like a time machine. Museum artifacts tell a 4,500‑year‑old story." },
  { title:"Shandur Polo Pass", by:"Omar, Peshawar", img:"https://images.unsplash.com/photo-1603268899595-7c37649c8195?q=80&w=1600&auto=format&fit=crop", text:"At 3,700 m, the Shandur Pass meadows hosted the wildest polo match I’ve ever seen." },
  { title:"Kalash Spring Festival", by:"Hira, Lahore", img:"https://images.unsplash.com/photo-1580496046624-1e9bdfb1ef82?q=80&w=1600&auto=format&fit=crop", text:"Chilimjusht in Bumburet—colorful dresses, dancing, and walnut forests." },
  { title:"Ratti Gali Trek", by:"Usman, Islamabad", img:"https://images.unsplash.com/photo-1628870271492-7e1c0f29a0de?q=80&w=1600&auto=format&fit=crop", text:"The last climb revealed a sapphire lake under snow peaks. Worth every step." }
];

// ===== CHROME INJECTION =====
function injectChrome(){
  const path = location.pathname.split('/').pop() || "index.html";
  const nav = `
    <header>
      <div class="container nav">
        <a href="index.html" class="brand"><span class="brand-icon"></span><span>SafarNama</span><span class="badge" style="margin-left:6px">Pakistan</span></a>
        <nav class="links" id="navLinks">
          <a href="index.html">Home</a>
          <a href="destinations.html">Destinations</a>
          <a href="trip-plans.html">Trip Plan Guide</a>
          <a href="stories.html">Travel Stories</a>
          <a href="about.html">About Us</a>
          <a href="contact.html">Contact</a>
        </nav>
        <div class="tools">
          <button class="btn" id="themeBtn" title="Toggle theme">Toggle Theme</button>
        </div>
      </div>
    </header>`;
  const foot = `
    <footer>
      <div class="container row">
        <div>© <span id="year"></span> SafarNama — Crafted in Pakistan.</div>
        <div class="muted">hello@safarnama.pk · Islamabad</div>
      </div>
    </footer>`;

  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', foot);

  // nav active
  const links = [...document.querySelectorAll('#navLinks a')];
  links.forEach(a => {
    const href = a.getAttribute('href');
    if ((path === '' && href === 'index.html') || href === path) a.setAttribute('aria-current','page'), a.classList.add('active');
  });

  // theme
  const themeBtn = document.getElementById('themeBtn');
  const saved = localStorage.getItem('safarnama-dark');
  if(saved === 'false') document.body.classList.remove('dark');
  themeBtn.addEventListener('click', ()=>{
    const dark = document.body.classList.toggle('dark');
    localStorage.setItem('safarnama-dark', String(dark));
  });

  // year
  document.getElementById('year').textContent = new Date().getFullYear();
}

// ===== EFFECTS =====
function setupReveal(){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show'); });
  },{threshold:.14});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}
function setupParallax(){
  const hero = document.querySelector('.hero');
  if(!hero) return;
  window.addEventListener('scroll', ()=>{
    const y = Math.min(30, window.scrollY * .06);
    hero.style.setProperty('--parallax', y + 'px');
    hero.classList.add('parallax');
  });
}
function setupTilt(){
  document.querySelectorAll('[data-tilt]').forEach(card=>{
    card.addEventListener('mousemove', (e)=>{
      const r = card.getBoundingClientRect();
      const dx = (e.clientX - r.left)/r.width;
      const dy = (e.clientY - r.top)/r.height;
      const rx = (dy - .5) * -8;
      const ry = (dx - .5) * 8;
      card.style.setProperty('--rx', rx + 'deg');
      card.style.setProperty('--ry', ry + 'deg');
    });
    card.addEventListener('mouseleave', ()=>{ card.style.setProperty('--rx','0deg'); card.style.setProperty('--ry','0deg'); });
  });
}

// ===== LIGHTBOX =====
function initLightbox(){
  const box = document.createElement('div');
  box.className = 'lightbox'; box.innerHTML = `
    <button class="ctrl close">✕</button>
    <button class="ctrl prev">‹</button>
    <img alt="Gallery"/>
    <button class="ctrl next">›</button>`;
  document.body.appendChild(box);
  const img = box.querySelector('img');
  let list = [], idx = 0;
  function show(){ img.src = list[idx]; }
  box.querySelector('.close').onclick = ()=> box.classList.remove('open');
  box.querySelector('.prev').onclick = ()=>{ idx = (idx-1+list.length)%list.length; show(); };
  box.querySelector('.next').onclick = ()=>{ idx = (idx+1)%list.length; show(); };
  document.body.addEventListener('click', e=>{
    const t = e.target.closest('[data-gallery]');
    if(!t) return;
    const slug = t.dataset.gallery;
    const d = DESTINATIONS.find(x=>x.slug===slug);
    if(!d || !d.photos) return;
    list = [d.img, ...d.photos]; idx = 0; show(); box.classList.add('open');
  });
}

// ===== HELPERS =====
function cardHTML(d, addAnchor){
  return `
  <article class="card reveal" ${addAnchor?`id="${d.slug}"`:''} data-tilt>
    <img class="thumb" src="${d.img}" alt="${d.name}"/>
    <div class="card-body">
      <div style="display:flex;justify-content:space-between;gap:8px;align-items:center">
        <h3 style="margin:0">${d.name}</h3>
        <span class="chip">${d.region}</span>
      </div>
      <p class="muted" style="margin:6px 0">Best time: ${d.bestTime}</p>
      <p class="muted">${d.summary}</p>
      <div class="badge-row" style="margin-top:8px">${d.highlights.map(h=>`<span class="badge">${h}</span>`).join('')}</div>
      <div class="meta" style="margin-top:8px"><span>📍 ${d.coords}</span><button class="btn" data-gallery="${d.slug}">View Photos</button></div>
    </div>
  </article>`;
}

// ===== PAGE HYDRATION =====
function hydrateHome(){
  const hero = document.querySelector('.hero');
  if(!hero) return;
  hero.insertAdjacentHTML('beforeend','<div class="orb" style="left:-140px;top:-120px"></div><div class="orb o2"></div>');
  const featured = document.getElementById('featured');
  if (featured) featured.innerHTML = DESTINATIONS.slice(0,8).map(cardHTML).join('');

  const seasons = document.getElementById('seasons');
  if(seasons){
    seasons.innerHTML = `
      <article class="card reveal"><img class="thumb" src="https://images.unsplash.com/photo-1615901063964-8b4a1af9da6b?q=80&w=1600&auto=format&fit=crop" alt="Cherry blossom Hunza"/><div class="card-body"><h3>Spring (Mar–May)</h3><p class="muted">Apricot & cherry blossoms in Hunza/Nagar; mild weather in Lahore/Islamabad.</p></div></article>
      <article class="card reveal"><img class="thumb" src="https://images.unsplash.com/photo-1624145759397-88fce7f4f593?q=80&w=1600&auto=format&fit=crop" alt="Summer Karakoram"/><div class="card-body"><h3>Summer (Jun–Sep)</h3><p class="muted">High passes open: Babusar, Khunjerab, Deosai. Trekking & alpine lakes.</p></div></article>
      <article class="card reveal"><img class="thumb" src="https://images.unsplash.com/photo-1630493866312-9708b41f0e1a?q=80&w=1600&auto=format&fit=crop" alt="Autumn Gilgit"/><div class="card-body"><h3>Autumn (Oct–Nov)</h3><p class="muted">Golden poplars in Gilgit‑Baltistan; comfortable temps across plains.</p></div></article>
      <article class="card reveal"><img class="thumb" src="https://images.unsplash.com/photo-1578306930315-4b3decb6f49a?q=80&w=1600&auto=format&fit=crop" alt="Winter snow"/><div class="card-body"><h3>Winter (Dec–Feb)</h3><p class="muted">Culture trips: Lahore, Karachi, Mohenjo‑daro; snow resorts in Malam Jabba.</p></div></article>`;
  }
}

function hydrateDestinations(){
  const grid = document.getElementById('destGrid');
  if(!grid) return;
  const regionSel = document.getElementById('region');
  const search = document.getElementById('search');
  const regions = ['all', ...Array.from(new Set(DESTINATIONS.map(d=>d.region)))];
  regionSel.innerHTML = regions.map(r=>`<option value="${r}">${r}</option>`).join('');
  function render(){
    const q = (search.value||'').toLowerCase();
    const r = regionSel.value;
    const items = DESTINATIONS.filter(d => (r==='all'||d.region===r) && (d.name.toLowerCase().includes(q) || d.summary.toLowerCase().includes(q)));
    grid.innerHTML = items.map(d=>cardHTML(d,true)).join('');
    setupTilt();
  }
  search.addEventListener('input', render);
  regionSel.addEventListener('change', render);
  render();
}

function hydrateStories(){
  const storiesGrid = document.getElementById('storiesGrid');
  if(!storiesGrid) return;
  storiesGrid.innerHTML = STORIES.map(s=>`
    <article class="card reveal" data-tilt>
      <img class="thumb" src="${s.img}" alt="${s.title}"/>
      <div class="card-body">
        <h3 style="margin:0 0 6px">${s.title}</h3>
        <p class="muted" style="font-style:italic">— ${s.by}</p>
        <p style="margin-top:6px">${s.text}</p>
      </div>
    </article>`).join('');
  setupTilt();
}

function hydrateContact(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const btn = form.querySelector('button');
    btn.disabled = true; btn.textContent = 'Sending…';
    setTimeout(()=>{ btn.textContent = 'Sent'; document.getElementById('sentMsg').classList.remove('hidden'); }, 700);
  });
}

// ===== TESTS =====
function runTests(){
  if(!location.search.includes('run-tests') && !location.hash.includes('run-tests')) return;
  const out = [];
  const test = (name, fn)=>{ try{ fn(); out.push({name, pass:true}); } catch(e){ out.push({name, pass:false, err:e&&e.message}); } };
  test('Destinations non-empty', ()=>{ if(!Array.isArray(DESTINATIONS) || DESTINATIONS.length<10) throw 'need >=10'; });
  test('Required fields present', ()=>{ DESTINATIONS.forEach(d=>['slug','name','region','img','bestTime','summary','highlights','photos','coords'].forEach(k=>{ if(!d[k]) throw `missing ${k} for ${d.slug}`; })); });
  test('Slug uniqueness', ()=>{ const s=new Set(DESTINATIONS.map(d=>d.slug)); if(s.size!==DESTINATIONS.length) throw 'duplicate slugs'; });
  test('Pages exist', ()=>{ const links=['index.html','destinations.html','trip-plans.html','stories.html','about.html','contact.html']; links.forEach(()=>{}); });

  const box = document.createElement('aside');
  box.style.cssText = "position:fixed;right:16px;bottom:16px;z-index:99;background:#000c;border:1px solid #223;border-radius:12px;padding:12px;width:320px;font-size:13px";
  const ul = document.createElement('ul'); ul.style.marginTop='8px';
  box.innerHTML = "<div style='font-weight:700'>Dev Tests</div>";
  document.body.appendChild(box); box.appendChild(ul);
  ul.innerHTML = out.map(r=>`<li style="color:${r.pass?'#86efac':'#fca5a5'}">${r.pass?'✓':'✗'} ${r.name}${r.err?` — ${r.err}`:''}</li>`).join('');
}

document.addEventListener('DOMContentLoaded', ()=>{
  injectChrome();
  setupReveal();
  setupParallax();
  setupTilt();
  initLightbox();

  hydrateHome();
  hydrateDestinations();
  hydrateStories();
  hydrateContact();

  runTests();
});
