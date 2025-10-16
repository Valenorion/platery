// Data resep - Ganti URL gambar sesuai dengan gambar Anda
const recipes = [
    {
        id: 1,
        title: "Nasi Goreng Spesial",
        category: "makanan",
        time: "30 menit",
        difficulty: "Mudah",
        image: "images/nasigoreng.jpg",
        description: "Nasi goreng dengan bumbu rempah khas Indonesia yang lezat dan menggugah selera.",
        ingredients: [
            "3 piring nasi putih",
            "2 butir telur",
            "3 siung bawang putih",
            "5 siung bawang merah",
            "2 sdm kecap manis",
            "1 sdt garam",
            "Cabai secukupnya",
            "Minyak goreng"
        ],
        instructions: [
            "Haluskan bawang merah, bawang putih, dan cabai",
            "Panaskan minyak, tumis bumbu halus hingga harum",
            "Masukkan telur, orak-arik hingga matang",
            "Tambahkan nasi putih, aduk rata",
            "Beri kecap manis dan garam, aduk hingga merata",
            "Sajikan dengan kerupuk dan acar"
        ]
    },
    {
        id: 2,
        title: "Soto Ayam",
        category: "makanan",
        time: "45 menit",
        difficulty: "Sedang",
        image: "images/soto.png",
        description: "Soto ayam kuah kuning dengan rempah lengkap yang hangat dan menyegarkan.",
        ingredients: [
            "500gr daging ayam",
            "2 liter air",
            "3 batang serai",
            "5 lembar daun jeruk",
            "Bumbu halus: bawang merah, putih, kunyit, jahe",
            "Garam dan gula secukupnya",
            "Pelengkap: telur rebus, tauge, bihun"
        ],
        instructions: [
            "Rebus ayam hingga empuk, suwir-suwir",
            "Tumis bumbu halus dan serai hingga harum",
            "Masukkan bumbu tumis ke dalam kaldu ayam",
            "Tambahkan daun jeruk, garam, dan gula",
            "Masak hingga mendidih dan bumbu meresap",
            "Sajikan dengan pelengkap"
        ]
    },
    {
        id: 3,
        title: "Es Teh Manis",
        category: "minuman",
        time: "10 menit",
        difficulty: "Mudah",
        image: "images/esteh.png",
        description: "Minuman teh manis dingin yang menyegarkan, cocok untuk segala cuaca.",
        ingredients: [
            "2 kantong teh celup",
            "3 sdm gula pasir",
            "500ml air panas",
            "Es batu secukupnya"
        ],
        instructions: [
            "Seduh teh dengan air panas",
            "Tambahkan gula, aduk hingga larut",
            "Biarkan hingga dingin",
            "Tuang ke gelas berisi es batu",
            "Sajikan segera"
        ]
    },
    {
        id: 4,
        title: "Pancake",
        category: "dessert",
        time: "25 menit",
        difficulty: "Mudah",
        image: "images/pancake.png",
        description: "Pancake lembut dengan topping coklat yang manis dan lezat.",
        ingredients: [
            "200gr tepung terigu",
            "2 butir telur",
            "250ml susu cair",
            "3 sdm gula",
            "1 sdt baking powder",
            "Coklat leleh untuk topping"
        ],
        instructions: [
            "Campur tepung, gula, dan baking powder",
            "Kocok telur dan susu dalam wadah terpisah",
            "Campurkan adonan basah dan kering",
            "Panaskan teflon, tuang adonan",
            "Masak hingga muncul gelembung, balik",
            "Sajikan dengan topping coklat"
        ]
    },
    {
        id: 5,
        title: "Rendang Daging",
        category: "tradisional",
        time: "120 menit",
        difficulty: "Sulit",
        image: "images/rendang.png",
        description: "Masakan tradisional Minang dengan bumbu rempah kaya yang dimasak dalam santan.",
        ingredients: [
            "1kg daging sapi",
            "1 liter santan kental",
            "Bumbu halus: cabai merah, bawang merah, bawang putih, jahe, kunyit",
            "3 batang serai",
            "5 lembar daun jeruk",
            "Gula merah, garam, asam kandis"
        ],
        instructions: [
            "Potong daging sesuai selera",
            "Tumis bumbu halus hingga harum",
            "Masukkan daging, aduk hingga berubah warna",
            "Tuang santan, masukkan serai dan daun jeruk",
            "Masak dengan api kecil hingga santan menyusut",
            "Terus masak sambil diaduk hingga bumbu meresap dan kering"
        ]
    },
    {
        id: 6,
        title: "Jus Alpukat",
        category: "minuman",
        time: "5 menit",
        difficulty: "Mudah",
        image: "images/jusalpukat.png",
        description: "Jus alpukat creamy yang segar dan bergizi tinggi.",
        ingredients: [
            "2 buah alpukat matang",
            "500ml susu cair",
            "3 sdm gula pasir",
            "Es batu secukupnya"
        ],
        instructions: [
            "Keruk daging alpukat",
            "Blender alpukat dengan susu dan gula",
            "Tambahkan es batu, blender lagi",
            "Tuang ke gelas",
            "Sajikan segera"
        ]
    },
    {
        id: 7,
        title: "Gado-Gado",
        category: "tradisional",
        time: "40 menit",
        difficulty: "Sedang",
        image: "images/gadogado.png",
        description: "Salad sayuran khas Indonesia dengan bumbu kacang yang gurih.",
        ingredients: [
            "Kangkung, kol, tauge, kentang rebus",
            "Telur rebus",
            "Tahu dan tempe goreng",
            "Bumbu kacang: kacang tanah, cabai, bawang putih, gula merah",
            "Kerupuk"
        ],
        instructions: [
            "Rebus semua sayuran hingga matang",
            "Goreng tahu dan tempe",
            "Haluskan bumbu kacang dengan sedikit air",
            "Masak bumbu kacang hingga mengental",
            "Tata sayuran, tahu, tempe, dan telur di piring",
            "Siram dengan bumbu kacang, tambahkan kerupuk"
        ]
    },
    {
        id: 8,
        title: "Kue Lapis",
        category: "dessert",
        time: "60 menit",
        difficulty: "Sedang",
        image: "images/kuelapis.png",
        description: "Kue tradisional dengan lapisan warna-warni yang cantik dan lembut.",
        ingredients: [
            "500gr tepung kanji",
            "150gr tepung terigu",
            "400gr gula pasir",
            "1 liter santan",
            "Pewarna makanan (merah, hijau)",
            "1/2 sdt garam"
        ],
        instructions: [
            "Campur semua tepung, gula, dan garam",
            "Tambahkan santan sedikit demi sedikit sambil diaduk",
            "Bagi adonan menjadi 3 bagian, beri pewarna",
            "Kukus lapisan pertama 5 menit",
            "Tambahkan lapisan berikutnya, kukus lagi",
            "Ulangi hingga semua adonan habis"
        ]
    }
];

let currentCategory = 'semua';

// Fungsi toggle menu untuk mobile
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Fungsi close menu
function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
}

// Fungsi menampilkan resep
function displayRecipes(recipesToShow) {
    const grid = document.getElementById('recipesGrid');
    grid.innerHTML = '';

    recipesToShow.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.onclick = () => showRecipeDetail(recipe);
        
        // Cek apakah ada gambar atau gunakan placeholder
        const imageHTML = recipe.image 
            ? `<img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">`
            : `<div class="recipe-image-placeholder">🍽️</div>`;
        
        card.innerHTML = `
            ${imageHTML}
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time}</span>
                    <span>📊 ${recipe.difficulty}</span>
                </div>
                <p class="recipe-description">${recipe.description}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Fungsi filter kategori
function filterCategory(category) {
    currentCategory = category;
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const filtered = category === 'semua' 
        ? recipes 
        : recipes.filter(r => r.category === category);
    displayRecipes(filtered);
}

// Fungsi pencarian
function searchRecipes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filtered = recipes.filter(r => 
        r.title.toLowerCase().includes(searchTerm) ||
        r.description.toLowerCase().includes(searchTerm)
    );
    displayRecipes(filtered);
}

// Fungsi menampilkan detail resep
function showRecipeDetail(recipe) {
    document.getElementById('modalTitle').textContent = recipe.title;
    document.getElementById('modalMeta').innerHTML = `
        <span>⏱️ ${recipe.time}</span>
        <span>📊 ${recipe.difficulty}</span>
    `;

    // Set gambar modal
    const modalImage = document.getElementById('modalImage');
    if (recipe.image) {
        modalImage.src = recipe.image;
        modalImage.alt = recipe.title;
        modalImage.style.display = 'block';
    } else {
        modalImage.style.display = 'none';
    }

    // Tampilkan bahan-bahan
    const ingredientsList = document.getElementById('modalIngredients');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ing => {
        const li = document.createElement('li');
        li.textContent = ing;
        ingredientsList.appendChild(li);
    });

    // Tampilkan instruksi
    const instructionsList = document.getElementById('modalInstructions');
    instructionsList.innerHTML = '';
    recipe.instructions.forEach(inst => {
        const li = document.createElement('li');
        li.textContent = inst;
        instructionsList.appendChild(li);
    });

    document.getElementById('recipeModal').style.display = 'block';
}

// Fungsi menutup modal
function closeModal() {
    document.getElementById('recipeModal').style.display = 'none';
}

// Event listener untuk klik di luar modal
window.onclick = function(event) {
    const modal = document.getElementById('recipeModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Event listener untuk tombol Enter di search
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchRecipes();
    }
});

// Tampilkan semua resep saat halaman dimuat
displayRecipes(recipes);

