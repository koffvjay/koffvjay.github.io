// ===== DATA =====
const slides = [
  {
    title: "Grind The Essentials",
    subtitle:
      "Dibuat dari biji kopi Indonesia pilihan untuk pengalaman minum kopi terbaik setiap hari",
    image: "img/SOFT OPEN KOFFVJAY-70.jpg",
  },
  {
    title: "Fresh Brew Daily",
    subtitle:
      "Setiap cangkir diseduh dengan sempurna untuk memberikan kualitas terbaik",
    image: "img/SOFT OPEN KOFFVJAY-46.jpg",
  },
  {
    title: "Premium Quality",
    subtitle: "Menggunakan biji kopi premium dari berbagai daerah di Indonesia",
    image: "img/SOFT OPEN KOFFVJAY-123.jpg",
  },
];

// ===== MENU DATA (dari foto menu kamu) =====
const menuCategories = [
  {
    category: "CLASSIC",
    items: [
      {
        name: "Kopi Lelet",
        price: 6000,
        displayPrice: "6K",
        image: "img/kopilelet.jpeg",
      },
      {
        name: "Kopi Lelet + Susu",
        price: 8000,
        displayPrice: "8K",
        image: "img/kopileletsusu.jpeg",
      },
    ],
  },
  {
    category: "COFFEE",
    items: [
      {
        name: "Americano",
        price: 12000,
        displayPrice: "12K",
        image: "img/americano.jpeg",
      },
      {
        name: "Cappuccino",
        price: 16000,
        displayPrice: "16K",
        image: "img/capucino.jpeg",
      },
      {
        name: "Caffelatte",
        price: 16000,
        displayPrice: "16K",
        image: "img/caffelatte.jpeg",
      },
      {
        name: "Caramel Latte",
        price: 17000,
        displayPrice: "17K",
        image: "img/caffelatte.jpeg",
      },
      {
        name: "Vanilla Latte",
        price: 17000,
        displayPrice: "17K",
        image: "img/caffelatte.jpeg",
      },
    ],
  },
  {
    category: "KOPI SUSU",
    items: [
      {
        name: "Kopsu Vjay",
        price: 16000,
        displayPrice: "16K",
        image: "img/kopsu.jpeg",
      },
      {
        name: "Kopsu Regal",
        price: 16000,
        displayPrice: "16K",
        image: "img/susu regal.jpeg",
      },
      {
        name: "Bandffee",
        price: 16000,
        displayPrice: "16K",
        image: "img/banana.jpeg",
      },
      {
        name: "Butterscotch",
        price: 18000,
        displayPrice: "18K",
        image: "img/butter.jpeg",
      },
      {
        name: "Salted Caramel",
        price: 18000,
        displayPrice: "18K",
        image: "img/caramel.jpeg",
      },
    ],
  },
  {
    category: "MINERAL",
    items: [
      {
        name: "Air Mineral (600ml)",
        price: 4000,
        displayPrice: "4K",
        image: "img/air.jpeg",
      },
    ],
  },
  {
    category: "FRUITY SEASON",
    items: [
      {
        name: "Apple Caramel",
        price: 15000,
        displayPrice: "15K",
        image: "img/apple.jpeg",
      },
      {
        name: "Apple Berry",
        price: 15000,
        displayPrice: "15K",
        image: "img/apple berry.jpeg",
      },
      {
        name: "Orange Berry",
        price: 15000,
        displayPrice: "15K",
        image: "img/orange berry.jpeg",
      },
      {
        name: "Purple Candy",
        price: 15000,
        displayPrice: "15K",
        image: "img/purple.jpeg",
      },
    ],
  },
  {
    category: "TEA",
    items: [
      {
        name: "Lemon Tea",
        price: 12000,
        displayPrice: "12K",
        image: "img/lemon tea.jpeg",
      },
      {
        name: "Lychee Tea",
        price: 12000,
        displayPrice: "12K",
        image: "img/lecitea.jpeg",
      },
      {
        name: "Strawberry Tea",
        price: 14000,
        displayPrice: "14K",
        image: "img/stroberitea.jpeg",
      },
    ],
  },
  {
    category: "MILK BASED",
    items: [
      {
        name: "Happie Berry",
        price: 14000,
        displayPrice: "14K",
        image: "img/susustroberi.jpeg",
      },
      {
        name: "Milky Regal",
        price: 14000,
        displayPrice: "14K",
        image: "img/susu regal.jpeg",
      },
      {
        name: "Milky Oreo",
        price: 14000,
        displayPrice: "14K",
        image: "img/susu oreo.jpeg",
      },
      {
        name: "Lemonade",
        price: 14000,
        displayPrice: "14K",
        image: "img/lemonade.jpeg",
      },
      {
        name: "Yakult Berry",
        price: 15000,
        displayPrice: "15K",
        image: "img/yakult berry.jpeg",
      },
      {
        name: "Redvelvet",
        price: 18000,
        displayPrice: "18K",
        image: "img/redvelvet.jpeg",
      },
      {
        name: "Matcha",
        price: 18000,
        displayPrice: "18K",
        image: "img/matcha.jpeg",
      },
    ],
  },
  {
    category: "CHOCO SERIES",
    items: [
      {
        name: "Coklat Ori",
        price: 15000,
        displayPrice: "15K",
        image: "img/coklatori.jpeg",
      },
      {
        name: "Coklat Susu",
        price: 17000,
        displayPrice: "17K",
        image: "img/coklatori.jpeg",
      },
      {
        name: "Coklat Regal",
        price: 17000,
        displayPrice: "17K",
        image: "img/coklatregal.jpeg",
      },
      {
        name: "Coklat Strawberry",
        price: 17000,
        displayPrice: "17K",
        image: "img/coklatstroberi.jpeg",
      },
    ],
  },
  {
    category: "SNACK",
    items: [
      {
        name: "Pop Mie",
        price: 8000,
        displayPrice: "8K",
        image: "img/popmie.jpeg",
      },
      {
        name: "Cireng",
        price: 8000,
        displayPrice: "8K",
        image: "img/cireng.jpeg",
      },
      {
        name: "Kentang Goreng",
        price: 12000,
        displayPrice: "12K",
        image: "img/kentang.jpeg",
      },
      {
        name: "Keju Aroma",
        price: 10000,
        displayPrice: "10K",
        image: "img/keju aroma.jpeg",
      },
    ],
  },
];

const stores = [
  {
    name: "Central Jakarta",
    address: "Jl. Sudirman No. 123",
    hours: "07:00 - 22:00",
  },
  {
    name: "South Jakarta",
    address: "Jl. Senopati No. 45",
    hours: "07:00 - 22:00",
  },
  {
    name: "West Jakarta",
    address: "Jl. Tanjung Duren No. 78",
    hours: "07:00 - 22:00",
  },
];

// ===== HELPERS =====
const $ = (id) => document.getElementById(id);

const formatIDR = (n) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

function smoothTo(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top: y, behavior: "smooth" });
}

// ===== NAV behavior =====
const nav = $("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});

// Mobile menu toggle
const menuBtn = $("menuBtn");
const mobileMenu = $("mobileMenu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  menuBtn.textContent = mobileMenu.classList.contains("show") ? "✕" : "☰";
});

// Close mobile menu when clicking links
document.querySelectorAll(".m-link").forEach((a) => {
  a.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    menuBtn.textContent = "☰";
  });
});

// Order Now buttons
$("orderNowBtn").addEventListener("click", () => smoothTo("#menu"));
$("orderNowBtnMobile").addEventListener("click", () => {
  mobileMenu.classList.remove("show");
  menuBtn.textContent = "☰";
  smoothTo("#menu");
});

// ===== SLIDER =====
let currentSlide = 0;
const slideBg = $("slideBg");
const slideTitle = $("slideTitle");
const slideSubtitle = $("slideSubtitle");
const dots = $("dots");

function renderDots() {
  dots.innerHTML = "";
  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.className = "dot" + (i === currentSlide ? " active" : "");
    b.addEventListener("click", () => setSlide(i));
    dots.appendChild(b);
  });
}

function setSlide(i) {
  currentSlide = i;
  slideBg.style.opacity = 0;
  setTimeout(() => {
    slideBg.style.backgroundImage = `url('${slides[currentSlide].image}')`;
    slideTitle.textContent = slides[currentSlide].title;
    slideSubtitle.textContent = slides[currentSlide].subtitle;
    slideBg.style.opacity = 1;
    renderDots();
  }, 200);
}

$("prevSlide").addEventListener("click", () => {
  setSlide((currentSlide - 1 + slides.length) % slides.length);
});
$("nextSlide").addEventListener("click", () => {
  setSlide((currentSlide + 1) % slides.length);
});

// Auto slide every 5s
setInterval(() => {
  setSlide((currentSlide + 1) % slides.length);
}, 5000);

// Hero buttons
$("exploreBtn").addEventListener("click", () => smoothTo("#menu"));
$("storeBtn").addEventListener("click", () => smoothTo("#store"));
$("learnMoreBtn").addEventListener("click", () => smoothTo("#store"));

// Init slider
slideBg.style.backgroundImage = `url('${slides[0].image}')`;
renderDots();

// ===== MENU render (per kategori) =====
const productGrid = document.getElementById("productGrid");

function renderMenu() {
  if (!productGrid) return;

  productGrid.innerHTML = "";

  menuCategories.forEach((cat) => {
    const section = document.createElement("div");
    section.className = "menu-section";

    section.innerHTML = `
      <div class="menu-head">
        <h3>${cat.category}</h3>
        <p>Pilih menu favoritmu dan masukkan ke keranjang</p>
      </div>
      <div class="grid menu-grid"></div>
    `;

    const grid = section.querySelector(".menu-grid");

    cat.items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "menu-card";

      card.innerHTML = `
        <div class="product">
          <img src="${item.image}" alt="${item.name}">
          <div class="overlay">
            <button class="add">Add to Cart</button>
          </div>
        </div>
        <div class="product-meta">
          <h3>${item.name}</h3>
          <div class="price">${item.displayPrice}</div>
        </div>
      `;

      // pakai fungsi addToCart yang sudah ada di project kamu
      card
        .querySelector(".add")
        .addEventListener("click", () => addToCart(item));
      grid.appendChild(card);
    });

    productGrid.appendChild(section);
  });
}

// panggil render menu
renderMenu();

// ===== STORES render (SAFE GUARD) =====
// Karena section store sekarang pakai Google Maps iframe, storeGrid bisa tidak ada.
const storeGrid = $("storeGrid");

if (storeGrid) {
  function renderStores() {
    storeGrid.innerHTML = "";
    stores.forEach((s) => {
      const card = document.createElement("div");
      card.className = "store-card";
      card.innerHTML = `
        <div style="font-size:34px">📍</div>
        <h3>${s.name}</h3>
        <p class="muted">${s.address}</p>
        <p class="muted">🕒 ${s.hours}</p>
        <button class="store-btn">Open Maps</button>
      `;
      card.querySelector(".store-btn").addEventListener("click", () => {
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            s.address + ", Jakarta"
          )}`,
          "_blank"
        );
      });
      storeGrid.appendChild(card);
    });
  }

  renderStores();
}

// ===== CART =====
let cart = []; // [{name, price, image, qty}]

const drawer = $("drawer");
const drawerBackdrop = $("drawerBackdrop");
const cartBtn = $("cartBtn");
const viewCartBtn = $("viewCartBtn");
const openCartFromContact = $("openCartFromContact");
const closeDrawer = $("closeDrawer");
const cartItems = $("cartItems");
const cartCount = $("cartCount");
const cartTotalEl = $("cartTotal");

function openCart() {
  drawer.classList.add("show");
  document.body.style.overflow = "hidden";
  renderCart();
}
function closeCart() {
  drawer.classList.remove("show");
  document.body.style.overflow = "";
}

cartBtn.addEventListener("click", openCart);
viewCartBtn.addEventListener("click", openCart);
openCartFromContact.addEventListener("click", openCart);
drawerBackdrop.addEventListener("click", closeCart);
closeDrawer.addEventListener("click", closeCart);

function addToCart(p) {
  const idx = cart.findIndex((x) => x.name === p.name);
  if (idx >= 0) cart[idx].qty += 1;
  else cart.push({ ...p, qty: 1 });
  updateCartBadge();
  openCart();
}

function updateCartBadge() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  cartCount.textContent = count;
}

function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="muted">Cart kamu masih kosong. Yuk pilih menu!</p>`;
    cartTotalEl.textContent = formatIDR(0);
    return;
  }

  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-meta">
        <div class="row">
          <div>
            <div class="name">${item.name}</div>
            <div class="sub">${formatIDR(item.price)}</div>
          </div>
          <button class="trash" title="Remove">🗑️</button>
        </div>

        <div class="row" style="align-items:center;margin-top:6px">
          <div class="qty">
            <button class="dec">-</button>
            <strong style="width:24px;text-align:center">${item.qty}</strong>
            <button class="inc">+</button>
          </div>
          <strong>${formatIDR(item.price * item.qty)}</strong>
        </div>
      </div>
    `;

    div.querySelector(".inc").addEventListener("click", () => {
      item.qty += 1;
      renderCart();
      updateCartBadge();
    });

    div.querySelector(".dec").addEventListener("click", () => {
      item.qty -= 1;
      if (item.qty <= 0) cart = cart.filter((x) => x.name !== item.name);
      renderCart();
      updateCartBadge();
    });

    div.querySelector(".trash").addEventListener("click", () => {
      cart = cart.filter((x) => x.name !== item.name);
      renderCart();
      updateCartBadge();
    });

    cartItems.appendChild(div);
  });

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  cartTotalEl.textContent = formatIDR(total);
}

// Clear cart
$("clearCart").addEventListener("click", () => {
  cart = [];
  renderCart();
  updateCartBadge();
});

// WhatsApp checkout
$("waCheckout").addEventListener("click", () => {
  if (cart.length === 0) return;

  const phone = "6287785728311"; // tanpa tanda +
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const items = cart
    .map((i) => `- ${i.name} x${i.qty} (${formatIDR(i.price * i.qty)})`)
    .join("%0A");

  const text =
    `Halo Koffvjay!%0A` +
    `Saya:%0A` +
    `Saya mau order:%0A` +
    `${items}%0A%0A` +
    `Total: ${formatIDR(total)}`;

  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
});

// Custom order button scroll to contact
$("customOrderBtn").addEventListener("click", () => smoothTo("#contact"));

// ===== CONTACT FORM =====
const form = $("contactForm");
const sentMsg = $("sentMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sentMsg.style.display = "block";
  setTimeout(() => (sentMsg.style.display = "none"), 3000);
  form.reset();
});

// init badge
updateCartBadge();

// ===== VIEW MENU TOGGLE =====
const viewMenuBtn = document.getElementById("viewMenuBtn");
const menuWrapper = document.getElementById("menuWrapper");

if (viewMenuBtn && menuWrapper) {
  viewMenuBtn.addEventListener("click", () => {
    menuWrapper.classList.toggle("show");

    // ubah teks tombol
    viewMenuBtn.textContent = menuWrapper.classList.contains("show")
      ? "Hide Menu"
      : "View Our Menu";

    // auto scroll ke menu saat dibuka
    if (menuWrapper.classList.contains("show")) {
      setTimeout(() => {
        menuWrapper.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  });
}
