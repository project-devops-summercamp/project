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

