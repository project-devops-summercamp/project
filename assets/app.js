/* ===========================
   Student 1: Home + Contact
=========================== */

// ==== HOME PAGE ====
function hydrateHome() {
  const featured = document.querySelector("#featured");
  if (featured) {
    featured.innerHTML = `
      <article class="card"><img class="thumb" src="https://images.unsplash.com/photo-1600047508943-7cb7f2a26c5e?q=80&w=800" alt="Hunza"/><div class="card-body"><h3>Hunza</h3><p class="muted">Valley of apricots and Rakaposhi views.</p></div></article>
      <article class="card"><img class="thumb" src="https://images.unsplash.com/photo-1593357848331-c1f6b1d79cd6?q=80&w=800" alt="Lahore"/><div class="card-body"><h3>Lahore</h3><p class="muted">Food streets and Mughal heritage.</p></div></article>
      <article class="card"><img class="thumb" src="https://images.unsplash.com/photo-1590419387893-ec2c82d6a9a6?q=80&w=800" alt="Skardu"/><div class="card-body"><h3>Skardu</h3><p class="muted">Gateway to the Karakoram giants.</p></div></article>
      <article class="card"><img class="thumb" src="https://images.unsplash.com/photo-1568213891185-9c6d445b4a2f?q=80&w=800" alt="Karachi"/><div class="card-body"><h3>Karachi</h3><p class="muted">Beaches, bazaars, and big city buzz.</p></div></article>
    `;
  }

  const seasons = document.querySelector("#seasons");
  if (seasons) {
    seasons.innerHTML = `
      <article class="card"><div class="card-body"><h3>Spring</h3><p class="muted">Best for Lahore, Multan, Hunza blossom.</p></div></article>
      <article class="card"><div class="card-body"><h3>Summer</h3><p class="muted">Karakoram treks, Swat valleys, Deosai meadows.</p></div></article>
      <article class="card"><div class="card-body"><h3>Autumn</h3><p class="muted">Hunza gold, Gilgit crisp skies, fruit harvests.</p></div></article>
      <article class="card"><div class="card-body"><h3>Winter</h3><p class="muted">Snow in Skardu, cozy Lahore food streets.</p></div></article>
    `;
  }
}
hydrateHome();

// ==== CONTACT PAGE ====
function hydrateContact() {
  const form = document.querySelector("form");
  if (form) {
    const success = document.createElement("div");
    success.className="contact-success";
    success.textContent="✅ Message sent successfully!";
    form.after(success);

    form.addEventListener("submit", e=>{
      e.preventDefault();
      success.style.display="block";
      setTimeout(()=>success.style.display="none",3000);
      form.reset();
    });
  }
}
hydrateContact();

// ==== STORIES PAGE ====
function hydrateStories() {
  const grid = document.querySelector("#storiesGrid");
  if (grid) {
    grid.innerHTML = `
      <article class="card"><img class="thumb" src="https://images.unsplash.com/photo-1600047508943-7cb7f2a26c5e?q=80&w=800" alt="Hunza"/><div class="card-body"><span class="chip">Hunza Valley</span><h3>A Road to the Clouds</h3><p class="muted">On the Karakoram Highway, every bend felt like a painting.</p><div class="meta"><span>By Ayesha</span><span>Summer 2023</span></div></div></article>
      <article class="card"><img class="thumb" src="https://images.unsplash.com/photo-1593357848331-c1f6b1d79cd6?q=80&w=800" alt="Lahore"/><div class="card-body"><span class="chip">Lahore</span><h3>Where History Breathes</h3><p class="muted">Walking the Walled City, aroma of kebabs mixed with azan.</p><div class="meta"><span>By Hamza</span><span>Spring 2022</span></div></div></article>
      <article class="card"><img class="thumb" src="https://images.unsplash.com/photo-1590419387893-ec2c82d6a9a6?q=80&w=800" alt="Skardu"/><div class="card-body"><span class="chip">Skardu</span><h3>Camping by the Cold Desert</h3><p class="muted">Stars blanketed the sky over Katpana Desert.</p><div class="meta"><span>By Fatima</span><span>Autumn 2021</span></div></div></article>
    `;
  }
}
hydrateStories();

// ==== TRIP PLANS PAGE ====
function hydrateTripPlans() {
  const plans = document.querySelector("#plansGrid");
  if (plans) {
    plans.innerHTML = `
      <article class="card"><div class="card-body"><h3>Hunza 5-Day Plan</h3><p>Karimabad, Attabad, Khunjerab Pass.</p></div></article>
      <article class="card"><div class="card-body"><h3>Makran Coastal 3-Day Plan</h3><p>Kund Malir, Hingol National Park, Gwadar.</p></div></article>
      <article class="card"><div class="card-body"><h3>Swat 4-Day Plan</h3><p>Malam Jabba, Mingora, Kalam Valley.</p></div></article>
      <article class="card"><div class="card-body"><h3>Lahore Weekend Plan</h3><p>Badshahi Mosque, Lahore Fort, Food Street.</p></div></article>
    `;
  }
}
hydrateTripPlans();

