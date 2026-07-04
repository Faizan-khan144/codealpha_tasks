const PRODUCTS = [
  { id:1, name:"Amber Glass Table Lamp", category:"Lighting", price:68, oldPrice:89, rating:4.6, reviews:128, badge:"sale", seed:"lamp-amber-glass", desc:"A honey-toned glass base paired with a hand-stitched linen shade, casting a warm glow across any reading corner." },
  { id:2, name:"Woven Rattan Pendant Light", category:"Lighting", price:96, rating:4.8, reviews:74, badge:"new", seed:"pendant-rattan", desc:"Hand-woven rattan diffuses light into soft dappled patterns, bringing texture to kitchens and dining nooks." },
  { id:3, name:"Brushed Brass Floor Lamp", category:"Lighting", price:145, rating:4.4, reviews:51, badge:null, seed:"floor-lamp-brass", desc:"A slender brushed-brass column with an adjustable arm, built for late nights with a good book." },
  { id:4, name:"Linen Shade Table Lamp", category:"Lighting", price:72, rating:4.5, reviews:63, badge:"best", seed:"lamp-linen-shade", desc:"Ceramic base in a soft clay finish topped with a natural linen shade for even, flattering light." },
  { id:5, name:"Hand-thrown Stoneware Vase", category:"Ceramics", price:42, rating:4.9, reviews:142, badge:"best", seed:"vase-stoneware", desc:"Every curve is shaped by hand on the wheel, so no two vases leave the kiln quite the same." },
  { id:6, name:"Speckled Ceramic Mug Set", category:"Ceramics", price:38, oldPrice:48, rating:4.7, reviews:201, badge:"sale", seed:"mug-speckled-set", desc:"A set of four stoneware mugs with a fine iron-speckle glaze, dishwasher and microwave safe." },
  { id:7, name:"Matte Clay Dinner Bowls", category:"Ceramics", price:58, rating:4.6, reviews:96, badge:null, seed:"bowls-matte-clay", desc:"Four wide, shallow bowls in a matte stoneware glaze that layers beautifully on a linen tablecloth." },
  { id:8, name:"Textured Ceramic Planter", category:"Ceramics", price:34, rating:4.5, reviews:58, badge:"new", seed:"planter-textured", desc:"A hand-carved ridge pattern wraps this stoneware planter, finished with a drainage dish included." },
  { id:9, name:"Washed Linen Duvet Cover", category:"Textiles", price:128, rating:4.8, reviews:167, badge:"best", seed:"duvet-washed-linen", desc:"Stonewashed European flax linen that softens with every wash, breathable through every season." },
  { id:10, name:"Chunky Wool Throw Blanket", category:"Textiles", price:84, oldPrice:104, rating:4.7, reviews:133, badge:"sale", seed:"throw-chunky-wool", desc:"Hand-knit from undyed sheep's wool, generously sized for the end of a sofa or the foot of a bed." },
  { id:11, name:"Organic Cotton Bath Towels", category:"Textiles", price:46, rating:4.6, reviews:89, badge:null, seed:"towels-organic-cotton", desc:"A set of two heavyweight towels woven from GOTS-certified organic cotton for a hotel-soft finish." },
  { id:12, name:"Linen Napkins, Set of Six", category:"Textiles", price:32, rating:4.4, reviews:47, badge:"new", seed:"napkins-linen-set", desc:"Simple hemmed linen napkins in a muted oat tone, equally at home at a dinner party or a Tuesday supper." },
  { id:13, name:"Oak Dining Chair", category:"Furniture", price:215, rating:4.7, reviews:72, badge:"best", seed:"chair-oak-dining", desc:"Solid oak legs and a gently curved backrest, joined with traditional mortise-and-tenon construction." },
  { id:14, name:"Reclaimed Wood Coffee Table", category:"Furniture", price:389, rating:4.8, reviews:58, badge:null, seed:"table-reclaimed-wood", desc:"Built from reclaimed barn timber, each table carries the marks and grain of its previous life." },
  { id:15, name:"Bouclé Accent Armchair", category:"Furniture", price:540, oldPrice:620, rating:4.9, reviews:91, badge:"sale", seed:"armchair-boucle", desc:"A rounded silhouette upholstered in cream bouclé over a solid beechwood frame." },
  { id:16, name:"Walnut Bookshelf", category:"Furniture", price:410, rating:4.5, reviews:38, badge:"new", seed:"bookshelf-walnut", desc:"Five open shelves in rich American walnut, engineered to hold a serious book collection without bowing." },
  { id:17, name:"Hand-carved Wooden Tray", category:"Decor", price:36, rating:4.6, reviews:64, badge:null, seed:"tray-hand-carved", desc:"Carved from a single block of acacia wood with brass handles for carrying coffee, or simply for show." },
  { id:18, name:"Woven Seagrass Basket", category:"Decor", price:48, rating:4.5, reviews:77, badge:"best", seed:"basket-seagrass", desc:"A sturdy hand-woven basket for blankets, firewood, or the toys that never quite have a home." },
  { id:19, name:"Brass Wall Mirror", category:"Decor", price:128, oldPrice:158, rating:4.7, reviews:49, badge:"sale", seed:"mirror-brass-wall", desc:"An unlacquered brass frame that will warm and darken beautifully with age." },
  { id:20, name:"Dried Botanical Wreath", category:"Decor", price:42, rating:4.3, reviews:31, badge:"new", seed:"wreath-dried-botanical", desc:"A gathering of dried pampas, eucalyptus and wheat, wired by hand onto a natural rattan base." },
  { id:21, name:"Sandalwood Soy Candle", category:"Bath & Body", price:28, rating:4.8, reviews:212, badge:"best", seed:"candle-sandalwood", desc:"A slow-burning soy blend in a reusable ceramic vessel, scented with sandalwood, cedar and amber." },
  { id:22, name:"Oatmeal Bar Soap Trio", category:"Bath & Body", price:22, rating:4.6, reviews:88, badge:null, seed:"soap-oatmeal-trio", desc:"Three cold-processed bars milled with oatmeal and shea butter for a gentle, unscented wash." },
  { id:23, name:"Eucalyptus Bath Salts", category:"Bath & Body", price:26, oldPrice:32, rating:4.5, reviews:56, badge:"sale", seed:"bath-salts-eucalyptus", desc:"Mineral-rich Epsom salts infused with eucalyptus oil, packaged in a refillable glass jar." },
  { id:24, name:"Linen Bathrobe", category:"Bath & Body", price:98, rating:4.7, reviews:40, badge:"new", seed:"bathrobe-linen", desc:"A relaxed, mid-weight linen robe that gets softer with every wash, in three tie lengths." }
];

const CATEGORIES = [
  { name:"Lighting", seed:"cat-lighting" },
  { name:"Ceramics", seed:"cat-ceramics" },
  { name:"Textiles", seed:"cat-textiles" },
  { name:"Furniture", seed:"cat-furniture" },
  { name:"Decor", seed:"cat-decor" },
  { name:"Bath & Body", seed:"cat-bath" }
];

const TESTIMONIALS = [
  { name:"Meredith Halloway", role:"Portland, OR", rating:5, quote:"The oak dining chairs arrived better than the photos. Four years of daily use and they still don't creak." },
  { name:"Josiah Cole", role:"Austin, TX", rating:5, quote:"I've bought three lamps now. The linen shades give the whole room a completely different feeling at night." },
  { name:"Priya Anand", role:"Brooklyn, NY", rating:4, quote:"Shipping took a little longer than expected, but the bouclé armchair was worth every extra day of waiting." },
  { name:"Tom Whitfield", role:"Chicago, IL", rating:5, quote:"Customer service helped me pick towels for sensitive skin and they were right. Ordering a second set already." },
  { name:"Elena Sauvage", role:"Denver, CO", rating:5, quote:"Every ceramic piece feels like it was made specifically for our kitchen. Genuinely considered design, not just decor." }
];

const FAQS = [
  { q:"What materials do you use across the collection?", a:"We work primarily in solid oak and walnut, hand-thrown stoneware, European flax linen, and undyed wool, sourced from a small group of workshops we've partnered with for years." },
  { q:"How long does shipping take?", a:"Small items typically arrive within 3 to 5 business days. Furniture is made to order in small batches and usually ships within 2 to 4 weeks, with tracking sent as soon as it leaves the workshop." },
  { q:"What is your return policy?", a:"Any piece can be returned within 30 days of delivery in its original condition. Furniture returns are free within the first 14 days and subject to a shipping fee after that." },
  { q:"Do you ship internationally?", a:"We currently ship across the United States, Canada and the United Kingdom, with more countries added each quarter. Duties and taxes are calculated at checkout." },
  { q:"How do I care for solid wood furniture?", a:"Dust with a dry cloth and treat with a food-safe oil twice a year. Keep pieces out of direct sunlight and away from heating vents to avoid uneven fading." },
  { q:"Can I track my order once it has shipped?", a:"Yes, a tracking link is emailed automatically the moment your order leaves our warehouse or workshop, and you can also request an update any time through the contact form." }
];

const PRESS = ["The Quiet Home Journal","Studio Weekly","Northlight Magazine","Made & Co Review","The Craft Edit"];

const state = {
  cart: loadFromStorage("ao_cart", []),
  wishlist: loadFromStorage("ao_wishlist", []),
  filters: { cat:"all", price:"all", sort:"featured", search:"" },
  testimonialIndex: 0
};

function loadFromStorage(key, fallback){
  try{
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  }catch(e){
    return fallback;
  }
}

function saveToStorage(key, value){
  try{
    localStorage.setItem(key, JSON.stringify(value));
  }catch(e){}
}

function formatPrice(n){
  return "$" + n.toFixed(2);
}

function starString(rating){
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5-full);
}

function imageUrl(seed, size){
  return "https://picsum.photos/seed/" + seed + "/" + size + "/" + size;
}

function findProduct(id){
  return PRODUCTS.find(p => p.id === id);
}

function showToast(message, type){
  const stack = document.getElementById("toastStack");
  const toast = document.createElement("div");
  toast.className = "toast" + (type ? " " + type : "");
  toast.textContent = message;
  stack.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

function createProductCardHTML(product){
  const inWishlist = state.wishlist.includes(product.id);
  const badgeHTML = product.badge === "sale"
    ? '<span class="product-badge sale">Sale</span>'
    : product.badge === "new"
    ? '<span class="product-badge new">New</span>'
    : product.badge === "best"
    ? '<span class="product-badge best">Bestseller</span>'
    : "";
  const priceHTML = product.oldPrice
    ? '<span class="price-now">' + formatPrice(product.price) + '</span><span class="price-old">' + formatPrice(product.oldPrice) + '</span>'
    : '<span class="price-now">' + formatPrice(product.price) + '</span>';
  return (
    '<article class="product-card" data-id="' + product.id + '">' +
      '<div class="product-media">' +
        '<img data-src="' + imageUrl(product.seed, 600) + '" alt="' + product.name + '" loading="lazy">' +
        '<div class="product-badges">' + badgeHTML + '</div>' +
        '<button class="wishlist-btn' + (inWishlist ? " active" : "") + '" data-wishlist="' + product.id + '" aria-label="Toggle wishlist for ' + product.name + '">' +
          '<svg viewBox="0 0 24 24" width="17" height="17"><path d="M12 21s-7.5-4.7-10-9.3C.4 8 2 4 6 4c2.2 0 3.9 1.3 6 3.6C14.1 5.3 15.8 4 18 4c4 0 5.6 4 4 7.7C19.5 16.3 12 21 12 21z" fill="none" stroke-width="1.6"/></svg>' +
        '</button>' +
        '<button class="quick-view-btn" data-quickview="' + product.id + '">Quick view</button>' +
      '</div>' +
      '<div class="product-info">' +
        '<span class="product-category">' + product.category + '</span>' +
        '<h3 class="product-name">' + product.name + '</h3>' +
        '<div class="product-rating"><span class="stars">' + starString(product.rating) + '</span><span>(' + product.reviews + ')</span></div>' +
        '<div class="product-price-row">' + priceHTML + '</div>' +
        '<button class="add-cart-btn" data-addcart="' + product.id + '">Add to cart</button>' +
      '</div>' +
    '</article>'
  );
}

function renderGrid(containerId, products){
  const container = document.getElementById(containerId);
  container.innerHTML = products.map(createProductCardHTML).join("");
  observeLazyImages(container);
}

function renderCategoryRow(){
  const row = document.getElementById("categoryRow");
  row.innerHTML = CATEGORIES.map(c =>
    '<div class="category-card" data-category="' + c.name + '">' +
      '<img data-src="' + imageUrl(c.seed, 400) + '" alt="' + c.name + ' category">' +
      '<span>' + c.name + '</span>' +
    '</div>'
  ).join("");
  observeLazyImages(row);
  row.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      state.filters.cat = card.dataset.category;
      syncCategoryChips();
      applyFiltersAndRender();
      document.getElementById("featured").scrollIntoView({ behavior:"smooth" });
    });
  });
}

function syncCategoryChips(){
  document.querySelectorAll("[data-filter-cat]").forEach(chip => {
    chip.classList.toggle("is-active", chip.dataset.filterCat === state.filters.cat);
  });
}

function applyFiltersAndRender(){
  let list = PRODUCTS.slice();
  if(state.filters.cat !== "all"){
    list = list.filter(p => p.category === state.filters.cat);
  }
  if(state.filters.price !== "all"){
    const [min, max] = state.filters.price.split("-").map(Number);
    list = list.filter(p => p.price >= min && p.price <= max);
  }
  if(state.filters.search.trim() !== ""){
    const q = state.filters.search.trim().toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }
  switch(state.filters.sort){
    case "price-asc": list.sort((a,b) => a.price - b.price); break;
    case "price-desc": list.sort((a,b) => b.price - a.price); break;
    case "rating": list.sort((a,b) => b.rating - a.rating); break;
    case "name": list.sort((a,b) => a.name.localeCompare(b.name)); break;
  }
  renderGrid("featuredGrid", list);
  const meta = document.getElementById("resultsMeta");
  meta.textContent = list.length + (list.length === 1 ? " piece found" : " pieces found");
  document.getElementById("emptyState").hidden = list.length !== 0;
}

function observeLazyImages(scope){
  const images = (scope || document).querySelectorAll("img[data-src]");
  images.forEach(img => lazyObserver.observe(img));
}

const lazyObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const img = entry.target;
      const src = img.getAttribute("data-src");
      img.onload = () => img.classList.add("loaded");
      img.onerror = () => { img.style.background = "var(--surface-alt)"; img.classList.add("loaded"); };
      img.src = src;
      img.removeAttribute("data-src");
      observer.unobserve(img);
    }
  });
}, { rootMargin:"120px" });

function cartQuantityOf(id){
  const item = state.cart.find(i => i.id === id);
  return item ? item.qty : 0;
}

function addToCart(id, qty){
  const existing = state.cart.find(i => i.id === id);
  if(existing){
    existing.qty += qty;
  }else{
    state.cart.push({ id:id, qty:qty });
  }
  saveToStorage("ao_cart", state.cart);
  renderCart();
  updateCounts();
  const product = findProduct(id);
  showToast(product.name + " added to cart", "success");
  openCart();
}

function removeFromCart(id){
  state.cart = state.cart.filter(i => i.id !== id);
  saveToStorage("ao_cart", state.cart);
  renderCart();
  updateCounts();
  showToast("Item removed from cart");
}

function changeQty(id, delta){
  const item = state.cart.find(i => i.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0){
    removeFromCart(id);
    return;
  }
  saveToStorage("ao_cart", state.cart);
  renderCart();
  updateCounts();
}

function calculateTotals(){
  const subtotal = state.cart.reduce((sum, item) => {
    const product = findProduct(item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
  return { subtotal:subtotal, total:subtotal };
}

function renderCart(){
  const container = document.getElementById("cartItems");
  const sidebar = document.getElementById("cartSidebar");
  sidebar.classList.toggle("is-empty", state.cart.length === 0);
  container.innerHTML = state.cart.map(item => {
    const product = findProduct(item.id);
    if(!product) return "";
    return (
      '<div class="cart-item" data-id="' + product.id + '">' +
        '<img src="' + imageUrl(product.seed, 160) + '" alt="' + product.name + '">' +
        '<div>' +
          '<div class="cart-item-name">' + product.name + '</div>' +
          '<div class="cart-item-cat">' + product.category + '</div>' +
          '<div class="qty-control">' +
            '<button data-qty-down="' + product.id + '" aria-label="Decrease quantity">&minus;</button>' +
            '<span>' + item.qty + '</span>' +
            '<button data-qty-up="' + product.id + '" aria-label="Increase quantity">+</button>' +
          '</div>' +
        '</div>' +
        '<div class="cart-item-right">' +
          '<span class="cart-item-price">' + formatPrice(product.price * item.qty) + '</span>' +
          '<button class="remove-item" data-remove="' + product.id + '">Remove</button>' +
        '</div>' +
      '</div>'
    );
  }).join("");
  const totals = calculateTotals();
  document.getElementById("cartSubtotal").textContent = formatPrice(totals.subtotal);
  document.getElementById("cartTotal").textContent = formatPrice(totals.total);
  document.getElementById("cartShipping").textContent = totals.subtotal >= 150 || totals.subtotal === 0 ? "Free" : "$8.00";
  if(totals.subtotal > 0 && totals.subtotal < 150){
    document.getElementById("cartTotal").textContent = formatPrice(totals.total + 8);
  }
}

function updateCounts(){
  const cartCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const cartBadge = document.getElementById("cartCount");
  cartBadge.textContent = cartCount;
  cartBadge.classList.toggle("show", cartCount > 0);
  const wishlistBadge = document.getElementById("wishlistCount");
  wishlistBadge.textContent = state.wishlist.length;
  wishlistBadge.classList.toggle("show", state.wishlist.length > 0);
}

function toggleWishlist(id){
  const idx = state.wishlist.indexOf(id);
  const product = findProduct(id);
  if(idx > -1){
    state.wishlist.splice(idx, 1);
    showToast(product.name + " removed from wishlist");
  }else{
    state.wishlist.push(id);
    showToast(product.name + " added to wishlist", "success");
  }
  saveToStorage("ao_wishlist", state.wishlist);
  updateCounts();
  document.querySelectorAll('[data-wishlist="' + id + '"]').forEach(btn => {
    btn.classList.toggle("active", state.wishlist.includes(id));
  });
}

function openCart(){
  document.getElementById("cartSidebar").classList.add("open");
  document.getElementById("cartScrim").classList.add("active");
  document.getElementById("cartToggle").setAttribute("aria-expanded", "true");
}

function closeCart(){
  document.getElementById("cartSidebar").classList.remove("open");
  document.getElementById("cartScrim").classList.remove("active");
  document.getElementById("cartToggle").setAttribute("aria-expanded", "false");
}

function openQuickView(id){
  const product = findProduct(id);
  if(!product) return;
  const modalContent = document.getElementById("modalContent");
  const priceHTML = product.oldPrice
    ? '<span class="price-now">' + formatPrice(product.price) + '</span><span class="price-old">' + formatPrice(product.oldPrice) + '</span>'
    : '<span class="price-now">' + formatPrice(product.price) + '</span>';
  modalContent.innerHTML =
    '<div class="modal-media"><img src="' + imageUrl(product.seed, 800) + '" alt="' + product.name + '"></div>' +
    '<div class="modal-details">' +
      '<span class="product-category">' + product.category + '</span>' +
      '<h2 class="product-name">' + product.name + '</h2>' +
      '<div class="product-rating"><span class="stars">' + starString(product.rating) + '</span><span>(' + product.reviews + ' reviews)</span></div>' +
      '<div class="product-price-row">' + priceHTML + '</div>' +
      '<p class="product-desc">' + product.desc + '</p>' +
      '<div class="modal-qty-row">' +
        '<div class="qty-control">' +
          '<button id="modalQtyDown" aria-label="Decrease quantity">&minus;</button>' +
          '<span id="modalQtyValue">1</span>' +
          '<button id="modalQtyUp" aria-label="Increase quantity">+</button>' +
        '</div>' +
      '</div>' +
      '<button class="btn btn-primary" id="modalAddCart" data-id="' + product.id + '">Add to cart</button>' +
      '<button class="btn btn-outline" id="modalWishlist" data-id="' + product.id + '">' + (state.wishlist.includes(product.id) ? "Remove from wishlist" : "Add to wishlist") + '</button>' +
    '</div>';
  document.getElementById("quickViewModal").classList.add("open");
  document.getElementById("modalScrim").classList.add("active");
  let qty = 1;
  document.getElementById("modalQtyUp").addEventListener("click", () => {
    qty += 1;
    document.getElementById("modalQtyValue").textContent = qty;
  });
  document.getElementById("modalQtyDown").addEventListener("click", () => {
    if(qty > 1){
      qty -= 1;
      document.getElementById("modalQtyValue").textContent = qty;
    }
  });
  document.getElementById("modalAddCart").addEventListener("click", () => {
    addToCart(product.id, qty);
    closeModal();
  });
  document.getElementById("modalWishlist").addEventListener("click", (e) => {
    toggleWishlist(product.id);
    e.target.textContent = state.wishlist.includes(product.id) ? "Remove from wishlist" : "Add to wishlist";
  });
}

function closeModal(){
  document.getElementById("quickViewModal").classList.remove("open");
  document.getElementById("modalScrim").classList.remove("active");
}

function renderTestimonials(){
  const track = document.getElementById("testimonialTrack");
  const dots = document.getElementById("testimonialDots");
  track.innerHTML = TESTIMONIALS.map((t, i) =>
    '<div class="testimonial-slide' + (i === 0 ? " active" : "") + '" data-index="' + i + '">' +
      '<span class="stars">' + starString(t.rating) + '</span>' +
      '<p>&ldquo;' + t.quote + '&rdquo;</p>' +
      '<span class="testimonial-author">' + t.name + '</span>' +
      '<span class="testimonial-role">' + t.role + '</span>' +
    '</div>'
  ).join("");
  dots.innerHTML = TESTIMONIALS.map((t, i) =>
    '<button data-dot="' + i + '"' + (i === 0 ? ' class="active"' : '') + ' aria-label="Show testimonial ' + (i+1) + '"></button>'
  ).join("");
}

function goToTestimonial(index){
  const total = TESTIMONIALS.length;
  state.testimonialIndex = (index + total) % total;
  document.querySelectorAll(".testimonial-slide").forEach((slide, i) => {
    slide.classList.toggle("active", i === state.testimonialIndex);
  });
  document.querySelectorAll("[data-dot]").forEach((dot, i) => {
    dot.classList.toggle("active", i === state.testimonialIndex);
  });
}

function renderBrands(){
  document.getElementById("brandsRow").innerHTML = PRESS.map(name => '<span>' + name + '</span>').join("");
}

function renderAccordion(){
  const accordion = document.getElementById("accordion");
  accordion.innerHTML = FAQS.map((item, i) =>
    '<div class="accordion-item" data-index="' + i + '">' +
      '<button class="accordion-trigger" aria-expanded="false"><span>' + item.q + '</span><span class="plus"></span></button>' +
      '<div class="accordion-panel"><p>' + item.a + '</p></div>' +
    '</div>'
  ).join("");
  accordion.querySelectorAll(".accordion-item").forEach(item => {
    const trigger = item.querySelector(".accordion-trigger");
    const panel = item.querySelector(".accordion-panel");
    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      accordion.querySelectorAll(".accordion-item.open").forEach(openItem => {
        if(openItem !== item){
          openItem.classList.remove("open");
          openItem.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
          openItem.querySelector(".accordion-panel").style.maxHeight = null;
        }
      });
      item.classList.toggle("open", !isOpen);
      trigger.setAttribute("aria-expanded", String(!isOpen));
      panel.style.maxHeight = !isOpen ? panel.scrollHeight + "px" : null;
    });
  });
}

function isValidEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function initNewsletterForm(){
  const form = document.getElementById("newsletterForm");
  const input = document.getElementById("newsletterEmail");
  const error = document.getElementById("newsletterError");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(!isValidEmail(input.value)){
      input.classList.add("invalid");
      error.textContent = "Please enter a valid email address.";
      error.classList.add("show");
      return;
    }
    input.classList.remove("invalid");
    error.classList.remove("show");
    showToast("You're subscribed. Welcome to August & Oak.", "success");
    form.reset();
  });
  input.addEventListener("input", () => {
    input.classList.remove("invalid");
    error.classList.remove("show");
  });
}

function initContactForm(){
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();
    if(!name || !subject || !message || !isValidEmail(email)){
      showToast("Please fill in every field with a valid email.", "error");
      return;
    }
    showToast("Message sent. We'll reply within one working day.", "success");
    form.reset();
  });
}

function initRipple(){
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn, .add-cart-btn");
    if(!btn) return;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = (e.clientX - rect.left - size/2) + "px";
    ripple.style.top = (e.clientY - rect.top - size/2) + "px";
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  });
}

function initFadeInObserver(){
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold:0.15 });
  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
}

function initStickyHeader(){
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 12);
  }, { passive:true });
}

function initBackToTop(){
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 500);
  }, { passive:true });
  btn.addEventListener("click", () => {
    window.scrollTo({ top:0, behavior:"smooth" });
  });
}

function initMobileNav(){
  const nav = document.getElementById("mobileNav");
  const toggle = document.getElementById("navToggle");
  const scrim = document.getElementById("scrim");
  function open(){
    nav.classList.add("open");
    scrim.classList.add("active");
    toggle.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    nav.setAttribute("aria-hidden", "false");
  }
  function close(){
    nav.classList.remove("open");
    scrim.classList.remove("active");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    nav.setAttribute("aria-hidden", "true");
  }
  toggle.addEventListener("click", () => {
    nav.classList.contains("open") ? close() : open();
  });
  scrim.addEventListener("click", close);
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", close));
}

function initEventDelegation(){
  document.body.addEventListener("click", (e) => {
    const addBtn = e.target.closest("[data-addcart]");
    if(addBtn){
      addToCart(Number(addBtn.dataset.addcart), 1);
      return;
    }
    const wishBtn = e.target.closest("[data-wishlist]");
    if(wishBtn){
      toggleWishlist(Number(wishBtn.dataset.wishlist));
      return;
    }
    const quickBtn = e.target.closest("[data-quickview]");
    if(quickBtn){
      openQuickView(Number(quickBtn.dataset.quickview));
      return;
    }
    const qtyUp = e.target.closest("[data-qty-up]");
    if(qtyUp){
      changeQty(Number(qtyUp.dataset.qtyUp), 1);
      return;
    }
    const qtyDown = e.target.closest("[data-qty-down]");
    if(qtyDown){
      changeQty(Number(qtyDown.dataset.qtyDown), -1);
      return;
    }
    const removeBtn = e.target.closest("[data-remove]");
    if(removeBtn){
      removeFromCart(Number(removeBtn.dataset.remove));
      return;
    }
  });
}

function initCartControls(){
  document.getElementById("cartToggle").addEventListener("click", openCart);
  document.getElementById("cartClose").addEventListener("click", closeCart);
  document.getElementById("cartScrim").addEventListener("click", closeCart);
  document.getElementById("cartEmptyLink").addEventListener("click", closeCart);
  document.getElementById("checkoutBtn").addEventListener("click", () => {
    if(state.cart.length === 0) return;
    showToast("Checkout is a demo in this project.", "success");
  });
  document.getElementById("wishlistToggle").addEventListener("click", () => {
    state.filters.cat = "all";
    syncCategoryChips();
    applyFiltersAndRender();
    document.getElementById("featured").scrollIntoView({ behavior:"smooth" });
    showToast(state.wishlist.length + " item(s) in your wishlist");
  });
}

function initModalControls(){
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modalScrim").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
      closeModal();
      closeCart();
    }
  });
}

function initFilters(){
  document.querySelectorAll("[data-filter-cat]").forEach(chip => {
    chip.addEventListener("click", () => {
      state.filters.cat = chip.dataset.filterCat;
      syncCategoryChips();
      applyFiltersAndRender();
    });
  });
  document.getElementById("priceFilter").addEventListener("change", (e) => {
    state.filters.price = e.target.value;
    applyFiltersAndRender();
  });
  document.getElementById("sortSelect").addEventListener("change", (e) => {
    state.filters.sort = e.target.value;
    applyFiltersAndRender();
  });
  const searchInput = document.getElementById("searchInput");
  const mobileSearchInput = document.getElementById("mobileSearchInput");
  function handleSearch(value){
    state.filters.search = value;
    applyFiltersAndRender();
    document.getElementById("featured").scrollIntoView({ behavior:"smooth" });
  }
  let debounceTimer;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => handleSearch(e.target.value), 300);
  });
  mobileSearchInput.addEventListener("input", (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      searchInput.value = e.target.value;
      handleSearch(e.target.value);
    }, 300);
  });
}

function initTestimonialControls(){
  document.getElementById("testiPrev").addEventListener("click", () => goToTestimonial(state.testimonialIndex - 1));
  document.getElementById("testiNext").addEventListener("click", () => goToTestimonial(state.testimonialIndex + 1));
  document.getElementById("testimonialDots").addEventListener("click", (e) => {
    const dot = e.target.closest("[data-dot]");
    if(dot) goToTestimonial(Number(dot.dataset.dot));
  });
  setInterval(() => goToTestimonial(state.testimonialIndex + 1), 6500);
}

function hideLoader(){
  const loader = document.getElementById("loader");
  setTimeout(() => loader.classList.add("hidden"), 500);
}

function init(){
  renderCategoryRow();
  applyFiltersAndRender();
  renderGrid("newArrivalsGrid", PRODUCTS.filter(p => p.badge === "new"));
  renderGrid("bestSellersGrid", PRODUCTS.filter(p => p.badge === "best"));
  renderTestimonials();
  renderBrands();
  renderAccordion();
  renderCart();
  updateCounts();
  initFilters();
  initEventDelegation();
  initCartControls();
  initModalControls();
  initMobileNav();
  initStickyHeader();
  initBackToTop();
  initNewsletterForm();
  initContactForm();
  initRipple();
  initFadeInObserver();
  initTestimonialControls();
}

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("load", hideLoader);
