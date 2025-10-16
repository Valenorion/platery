const recipes = [
  {
    title: "Nasi Goreng",
    desc: "Resep nasi goreng sederhana dan lezat.",
    img: "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Sate Ayam",
    desc: "Sate ayam bumbu kacang khas Indonesia.",
    img: "https://images.unsplash.com/photo-1603088549155-6ae9395b928f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Rendang",
    desc: "Masakan daging dengan bumbu kaya rempah.",
    img: "https://www.astronauts.id/blog/wp-content/uploads/2023/03/Resep-Rendang-Daging-Sapi-Untuk-Lebaran-Gurih-dan-Nikmat.jpg"
  }
];

function displayRecipes(list) {
  const container = document.getElementById("recipe-list");
  container.innerHTML = "";

  list.forEach(r => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${r.img}" alt="${r.title}">
      <h3>${r.title}</h3>
      <p>${r.desc}</p>
    `;
    container.appendChild(card);
  });
}

displayRecipes(recipes);

// 
document.querySelector('.hero button').addEventListener('click', () => {
  document.querySelector('#popular-recipes').scrollIntoView({ behavior: 'smooth' });
});


// 
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
