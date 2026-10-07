const defaultProducts = [
  {
    id: 1,
    name: 'Nike Air Max Pulse',
    brand: 'Nike',
    store: 'Nike',
    category: 'Sneakers',
    price: 179,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    favorite: true,
    addedAt: '2026-10-01T14:00:00.000Z',
    priceHistory: [179, 189, 184, 179],
    isRecent: true,
  },
  {
    id: 2,
    name: 'Adidas Samba OG',
    brand: 'Adidas',
    store: 'Adidas',
    category: 'Sneakers',
    price: 119,
    image:
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
    favorite: false,
    addedAt: '2026-09-20T12:00:00.000Z',
    priceHistory: [119, 129, 125, 119],
    isRecent: false,
  },
  {
    id: 3,
    name: 'The North Face Nuptse',
    brand: 'The North Face',
    store: 'JD Sports',
    category: 'Jassen',
    price: 229,
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    favorite: true,
    addedAt: '2026-10-02T10:30:00.000Z',
    priceHistory: [229, 249, 239, 229],
    isRecent: true,
  },
  {
    id: 4,
    name: 'H&M Oversized Hoodie',
    brand: 'H&M',
    store: 'H&M',
    category: 'Hoodies',
    price: 59,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    favorite: false,
    addedAt: '2026-09-12T09:00:00.000Z',
    priceHistory: [59, 69, 64, 59],
    isRecent: false,
  },
  {
    id: 5,
    name: 'New Balance 530',
    brand: 'New Balance',
    store: 'Foot Locker',
    category: 'Sneakers',
    price: 139,
    image:
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
    favorite: true,
    addedAt: '2026-10-04T08:00:00.000Z',
    priceHistory: [139, 149, 142, 139],
    isRecent: true,
  },
  {
    id: 6,
    name: 'Zara Technical Track Jacket',
    brand: 'Zara',
    store: 'Zara',
    category: 'Sportkleding',
    price: 99,
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    favorite: false,
    addedAt: '2026-09-14T16:45:00.000Z',
    priceHistory: [99, 129, 109, 99],
    isRecent: false,
  },
  {
    id: 7,
    name: 'Essentials Relaxed Tee',
    brand: 'About You',
    store: 'About You',
    category: 'T-Shirts',
    price: 34,
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    favorite: false,
    addedAt: '2026-10-05T20:15:00.000Z',
    priceHistory: [34, 39, 36, 34],
    isRecent: true,
  },
  {
    id: 8,
    name: 'Nike Dri-FIT Training Set',
    brand: 'Nike',
    store: 'Snipes',
    category: 'Sportkleding',
    price: 94,
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    favorite: true,
    addedAt: '2026-09-29T11:40:00.000Z',
    priceHistory: [94, 104, 99, 94],
    isRecent: false,
  },
  {
    id: 9,
    name: 'Noir Utility Cap',
    brand: 'Nike',
    store: 'Zalando',
    category: 'Accessoires',
    price: 42,
    image:
      'https://images.unsplash.com/photo-1521369909026-2afc8f16db8a?auto=format&fit=crop&w=900&q=80',
    favorite: false,
    addedAt: '2026-09-05T13:30:00.000Z',
    priceHistory: [42, 56, 49, 42],
    isRecent: false,
  },
];

const defaultCollections = [
  { id: 'gym-fit', name: 'Gym Fit', items: 8 },
  { id: 'summer-2027', name: 'Summer 2027', items: 6 },
  { id: 'winter-outfits', name: 'Winter Outfits', items: 4 },
  { id: 'streetwear', name: 'Streetwear', items: 10 },
];

const state = {
  products: loadProducts(),
  collections: loadCollections(),
  categoryFilter: 'All',
  searchTerm: '',
  outfitDraft: [],
};

const els = {
  productsGrid: document.getElementById('productsGrid'),
  categoryFilters: document.getElementById('categoryFilters'),
  addProductForm: document.getElementById('addProductForm'),
  productUrl: document.getElementById('productUrl'),
  searchInput: document.getElementById('searchInput'),
  collectionsList: document.getElementById('collectionsList'),
  newCollectionForm: document.getElementById('newCollectionForm'),
  collectionName: document.getElementById('collectionName'),
  priceAlerts: document.getElementById('priceAlerts'),
  aiRecommendations: document.getElementById('aiRecommendations'),
  outfitBoard: document.getElementById('outfitBoard'),
  outfitName: document.getElementById('outfitName'),
  saveOutfitBtn: document.getElementById('saveOutfitBtn'),
  statTotalItems: document.getElementById('statTotalItems'),
  statValue: document.getElementById('statValue'),
  statFavorites: document.getElementById('statFavorites'),
  statRecent: document.getElementById('statRecent'),
  sidebarTotalProducts: document.getElementById('sidebarTotalProducts'),
  sidebarTotalValue: document.getElementById('sidebarTotalValue'),
  scrollToAdd: document.getElementById('scrollToAdd'),
  openAddModal: document.getElementById('openAddModal'),
};

initialize();

function initialize() {
  renderCategoryFilters();
  renderProducts();
  renderCollections();
  renderPriceAlerts();
  renderRecommendations();
  renderStats();
  attachEvents();
}

function attachEvents() {
  els.addProductForm.addEventListener('submit', handleAddProduct);
  els.newCollectionForm.addEventListener('submit', handleNewCollection);
  els.searchInput.addEventListener('input', (event) => {
    state.searchTerm = event.target.value.trim().toLowerCase();
    renderProducts();
  });

  els.saveOutfitBtn.addEventListener('click', saveOutfit);
  els.scrollToAdd.addEventListener('click', () => {
    document.getElementById('productUrl').focus();
  });
  els.openAddModal.addEventListener('click', () => {
    document.getElementById('productUrl').focus();
  });

  els.outfitBoard.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  els.outfitBoard.addEventListener('drop', (event) => {
    event.preventDefault();
    const productId = Number(event.dataTransfer.getData('text/plain'));
    addToOutfit(productId);
  });
}

function loadProducts() {
  const saved = localStorage.getItem('stylelist-products');
  if (!saved) {
    localStorage.setItem('stylelist-products', JSON.stringify(defaultProducts));
    return defaultProducts;
  }
  try {
    return JSON.parse(saved);
  } catch {
    return defaultProducts;
  }
}

function loadCollections() {
  const saved = localStorage.getItem('stylelist-collections');
  if (!saved) {
    localStorage.setItem('stylelist-collections', JSON.stringify(defaultCollections));
    return defaultCollections;
  }
  try {
    return JSON.parse(saved);
  } catch {
    return defaultCollections;
  }
}

function saveProducts() {
  localStorage.setItem('stylelist-products', JSON.stringify(state.products));
}

function saveCollections() {
  localStorage.setItem('stylelist-collections', JSON.stringify(state.collections));
}

function renderCategoryFilters() {
  const categories = ['All', ...new Set(state.products.map((product) => product.category))];
  els.categoryFilters.innerHTML = categories
    .map(
      (category) => `
        <button class="filter-chip ${state.categoryFilter === category ? 'active' : ''}" data-category="${category}">
          ${category}
        </button>
      `
    )
    .join('');

  els.categoryFilters.querySelectorAll('.filter-chip').forEach((button) => {
    button.addEventListener('click', () => {
      state.categoryFilter = button.dataset.category;
      renderCategoryFilters();
      renderProducts();
    });
  });
}

function getFilteredProducts() {
  return state.products.filter((product) => {
    const matchesCategory = state.categoryFilter === 'All' || product.category === state.categoryFilter;
    const matchesSearch =
      !state.searchTerm ||
      product.name.toLowerCase().includes(state.searchTerm) ||
      product.brand.toLowerCase().includes(state.searchTerm) ||
      product.store.toLowerCase().includes(state.searchTerm) ||
      product.category.toLowerCase().includes(state.searchTerm);
    return matchesCategory && matchesSearch;
  });
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();
  if (!filteredProducts.length) {
    els.productsGrid.innerHTML = `
      <div class="panel" style="grid-column: 1 / -1; padding: 30px; border-radius: 20px;">
        <p style="color: var(--muted); text-align: center;">Geen producten gevonden. Probeer een andere zoekterm of voeg een item toe.</p>
      </div>
    `;
    return;
  }

  els.productsGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card" data-id="${product.id}" draggable="true">
          <button class="favorite-btn ${product.favorite ? 'active' : ''}" data-favorite-id="${product.id}" aria-label="Toggle favorite">♥</button>
          <div class="image-wrap">
            <img src="${product.image}" alt="${product.name}" />
            <span class="badge">${product.isRecent ? 'New' : 'Saved'}</span>
          </div>
          <div class="product-body">
            <div class="meta-row">
              <span class="brand">${product.brand}</span>
              <span class="category-pill">${product.category}</span>
            </div>
            <h4 class="product-name">${product.name}</h4>
            <div class="store-row">
              <span class="store">${product.store}</span>
              <span class="price">€${product.price}</span>
            </div>
            <div class="card-actions">
              <button class="mini-btn add-to-outfit" data-add-outfit-id="${product.id}">Add to outfit</button>
              <button class="mini-btn secondary" data-view-id="${product.id}">View</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  els.productsGrid.querySelectorAll('.product-card').forEach((card) => {
    const productId = Number(card.dataset.id);
    card.addEventListener('dragstart', (event) => {
      card.classList.add('dragging');
      event.dataTransfer.setData('text/plain', String(productId));
    });
    card.addEventListener('dragend', () => card.classList.remove('dragging'));
    card.querySelector('.add-to-outfit').addEventListener('click', () => addToOutfit(productId));
    card.querySelector('.favorite-btn').addEventListener('click', () => toggleFavorite(productId));
    card.querySelector('[data-view-id]').addEventListener('click', () => {
      const product = state.products.find((item) => item.id === productId);
      if (product) {
        window.alert(`${product.name}\n${product.brand} • ${product.store}\n€${product.price}`);
      }
    });
  });

  renderStats();
}

function toggleFavorite(productId) {
  const product = state.products.find((item) => item.id === productId);
  if (!product) return;
  product.favorite = !product.favorite;
  saveProducts();
  renderProducts();
  renderStats();
}

function handleAddProduct(event) {
  event.preventDefault();
  const rawUrl = els.productUrl.value.trim();
  const parsed = parseProductLink(rawUrl);

  const newProduct = {
    id: Date.now(),
    name: parsed.name,
    brand: parsed.brand,
    store: parsed.store,
    category: parsed.category,
    price: Number(parsed.price) || 89,
    image: parsed.image || defaultProducts[0].image,
    favorite: false,
    addedAt: new Date().toISOString(),
    priceHistory: [Number(parsed.price) || 89],
    isRecent: true,
  };

  state.products.unshift(newProduct);
  saveProducts();
  renderCategoryFilters();
  renderProducts();
  renderPriceAlerts();
  renderRecommendations();
  els.addProductForm.reset();
}

function parseProductLink(rawUrl) {
  const url = new URL(rawUrl);
  const hostname = url.hostname.toLowerCase();

  const brandMap = {
    'nike.com': 'Nike',
    'www.nike.com': 'Nike',
    'adidas.com': 'Adidas',
    'www.adidas.com': 'Adidas',
    'jd.com': 'JD Sports',
    'www.jd.com': 'JD Sports',
    'zalando.de': 'Zalando',
    'www.zalando.de': 'Zalando',
    'aboutyou.de': 'About You',
    'www.aboutyou.de': 'About You',
    'hm.com': 'H&M',
    'www.hm.com': 'H&M',
    'zara.com': 'Zara',
    'www.zara.com': 'Zara',
    'thenorthface.com': 'The North Face',
    'www.thenorthface.com': 'The North Face',
    'newbalance.com': 'New Balance',
    'www.newbalance.com': 'New Balance',
    'snipes.com': 'Snipes',
    'www.snipes.com': 'Snipes',
    'footlocker.com': 'Foot Locker',
    'www.footlocker.com': 'Foot Locker',
  };

  const extractedBrand = brandMap[hostname] || 'Streetwear';
  const slug = url.pathname.split('/').filter(Boolean).slice(-2).join(' ').replace(/[-_]+/g, ' ');
  const name = toTitleCase(slug) || `${extractedBrand} Signature Drop`;
  const category = detectCategory(name, extractedBrand);
  const price = Math.floor(Math.random() * 160) + 40;
  const image = `https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80`;

  return {
    name,
    brand: extractedBrand,
    store: extractedBrand,
    category,
    price,
    image,
  };
}

function toTitleCase(value) {
  return value
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function detectCategory(name, brand) {
  const lower = `${name} ${brand}`.toLowerCase();
  if (lower.includes('sneaker') || lower.includes('air') || lower.includes('max') || lower.includes('runner')) return 'Sneakers';
  if (lower.includes('hoodie') || lower.includes('sweat')) return 'Hoodies';
  if (lower.includes('tee') || lower.includes('shirt') || lower.includes('top')) return 'T-Shirts';
  if (lower.includes('jacket') || lower.includes('coat') || lower.includes('puffer')) return 'Jassen';
  if (lower.includes('pant') || lower.includes('trouser') || lower.includes('jean')) return 'Broeken';
  if (lower.includes('training') || lower.includes('track') || lower.includes('jogger')) return 'Sportkleding';
  if (lower.includes('cap') || lower.includes('bag') || lower.includes('accessory') || lower.includes('socks')) return 'Accessoires';
  return 'Sneakers';
}

function handleNewCollection(event) {
  event.preventDefault();
  const name = els.collectionName.value.trim();
  if (!name) return;

  state.collections.unshift({
    id: `${Date.now()}`,
    name,
    items: 0,
  });
  saveCollections();
  renderCollections();
  els.newCollectionForm.reset();
}

function renderCollections() {
  els.collectionsList.innerHTML = state.collections
    .map(
      (collection) => `
        <div class="collection-item" data-collection-id="${collection.id}">
          <div class="collection-copy">
            <strong>${collection.name}</strong>
            <small>${collection.items} items</small>
          </div>
          <span class="alert-tag">View</span>
        </div>
      `
    )
    .join('');
}

function renderPriceAlerts() {
  const products = [...state.products].sort((a, b) => b.price - a.price).slice(0, 4);
  els.priceAlerts.innerHTML = products
    .map(
      (product) => `
        <div class="alert-item">
          <div class="alert-copy">
            <strong>${product.name}</strong>
            <small>${product.store}</small>
          </div>
          <div>
            <div class="alert-tag">-${Math.max(5, Math.round(product.price * 0.12))}%</div>
          </div>
        </div>
      `
    )
    .join('');
}

function renderRecommendations() {
  const recommendations = [...state.products].slice(0, 4);
  els.aiRecommendations.innerHTML = recommendations
    .map(
      (product) => `
        <div class="mini-recommendation">
          <div class="thumb">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <strong>${product.name}</strong>
          <small>${product.brand} • €${product.price}</small>
        </div>
      `
    )
    .join('');
}

function renderStats() {
  const total = state.products.length;
  const favorites = state.products.filter((product) => product.favorite).length;
  const recent = state.products.filter((product) => product.isRecent).length;
  const value = state.products.reduce((sum, product) => sum + Number(product.price), 0);

  els.statTotalItems.textContent = total;
  els.statFavorites.textContent = favorites;
  els.statRecent.textContent = recent;
  els.statValue.textContent = `€${value}`;
  els.sidebarTotalProducts.textContent = total;
  els.sidebarTotalValue.textContent = `€${value}`;
}

function addToOutfit(productId) {
  const product = state.products.find((item) => item.id === productId);
  if (!product) return;

  if (!state.outfitDraft.some((item) => item.id === productId)) {
    state.outfitDraft.push(product);
  }

  renderOutfitBoard();
}

function renderOutfitBoard() {
  if (!state.outfitDraft.length) {
    els.outfitBoard.innerHTML = '<div class="empty-state"><span>Drop pieces here</span></div>';
    return;
  }

  els.outfitBoard.innerHTML = state.outfitDraft
    .map(
      (product) => `
        <div class="outfit-item">
          <img src="${product.image}" alt="${product.name}" />
          <div class="meta">
            <strong>${product.name}</strong>
            <span>${product.brand}</span>
          </div>
        </div>
      `
    )
    .join('');
}

function saveOutfit() {
  const name = els.outfitName.value.trim() || 'New outfit';
  if (!state.outfitDraft.length) return;

  const outfit = {
    id: Date.now(),
    name,
    items: state.outfitDraft.length,
  };

  state.collections.unshift(outfit);
  saveCollections();
  renderCollections();
  state.outfitDraft = [];
  els.outfitName.value = '';
  renderOutfitBoard();
}

window.addEventListener('DOMContentLoaded', () => {
  renderOutfitBoard();
});

window.addEventListener('storage', () => {
  state.products = loadProducts();
  state.collections = loadCollections();
  renderCategoryFilters();
  renderProducts();
  renderCollections();
  renderPriceAlerts();
  renderRecommendations();
  renderStats();
});



