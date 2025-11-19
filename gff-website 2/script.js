/* script.js — Full-feature script for Part 3 POE
   Features:
     - Enquiry form: validation, processing, cost/availability response
     - Contact form: validation, mailto email composition
     - Dynamic content loader (data/items.json) + live search + optional sort
     - Gallery lightbox: overlay, prev/next, keyboard
     - Google Maps integration via global initMap callback
     - General UI: accordions, tabs, modals
   Integration:
     - Include this script with `defer`.
     - For Google Maps include:
       <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
     - Update CONFIG.recipientEmail and CONFIG.map.center as needed.
*/

(() => {
  'use strict';

  /* ===========================
     Configuration (edit these)
     =========================== */
  const CONFIG = {
    recipientEmail: 'recipient@example.org', // <-- replace with required recipient
    map: {
      center: { lat: -26.2041, lng: 28.0473 }, // default: Johannesburg centre; change as needed
      zoom: 12,
      elementId: 'map', // id of map container
    },
    itemsDataPath: 'data/items.json', // path to JSON with { "items": [...] }
    selectors: {
      enquiryForm: '#enquiryForm',
      contactForm: '#contactForm',
      itemsList: '#items-list',
      itemsSearch: '#items-search',
      itemsSort: '#items-sort',
      gallerySelector: '.gallery-thumb',
      lightboxId: 'lightbox-overlay',
      accordionBtn: '.accordion-button',
      tabBtns: '.tabs [role="tab"]',
      modalTrigger: '[data-modal-target]',
    }
  };

  /* ===========================
     Helpers
     =========================== */
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  const escapeHtml = str => String(str || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  function createStatusContainer(form, id) {
    let el = form.querySelector('#' + id);
    if (!el) {
      el = document.createElement('div');
      el.id = id;
      el.setAttribute('role', 'status');
      el.setAttribute('aria-live', 'polite');
      form.appendChild(el);
    }
    return el;
  }

  function focusFirstInvalid(form) {
    const invalid = form.querySelector('.invalid, :invalid');
    if (invalid) invalid.focus();
  }

  /* ===========================
     ENQUIRY FORM
     =========================== */
  function initEnquiryForm() {
    const form = $(CONFIG.selectors.enquiryForm);
    if (!form) return;
    const messages = createStatusContainer(form, 'enq-messages');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      messages.innerHTML = '';

      const name = (form.querySelector('[name="name"]')?.value || '').trim();
      const email = (form.querySelector('[name="email"]')?.value || '').trim();
      const phone = (form.querySelector('[name="phone"]')?.value || '').trim();
      const type = (form.querySelector('[name="type"]')?.value || '').trim();
      const item = (form.querySelector('[name="item"]')?.value || '').trim();
      const quantity = Math.max(1, parseInt(form.querySelector('[name="quantity"]')?.value || '1', 10));

      const errors = [];
      if (name.length < 2) errors.push('Enter your full name (2+ characters).');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Enter a valid email address.');
      if (phone && !/^\+?[0-9\s\-]{7,20}$/.test(phone)) errors.push('Phone (if provided) must be digits and 7–20 characters.');
      if (!type) errors.push('Select an enquiry type.');
      if (item.length < 1) errors.push('Enter the service or item you are enquiring about.');

      if (errors.length) {
        messages.innerHTML = errors.map(e => `<div class="error">${escapeHtml(e)}</div>`).join('');
        focusFirstInvalid(form);
        return;
      }

      // Cost/availability logic (customise to your storyline)
      const { total, breakdown } = calculateEnquiryCost(item, quantity, type);
      const availability = simulateAvailability(item);

      messages.innerHTML = `
        <div class="enq-success">
          <p>Thanks <strong>${escapeHtml(name)}</strong> — your enquiry was received.</p>
          <p><strong>Availability:</strong> ${escapeHtml(availability)}</p>
          <p><strong>Estimated cost:</strong> R ${Number(total).toFixed(2)}</p>
          <p class="small">Breakdown: ${escapeHtml(breakdown)}</p>
          <p>We will contact you at <strong>${escapeHtml(email)}</strong>.</p>
        </div>
      `;

      // Option: keep form filled or reset
      // form.reset();
    });
  }

  function calculateEnquiryCost(item, quantity, type) {
    const basePrices = { standard: 120, premium: 280, consultation: 75 };
    const lower = (item || '').toLowerCase();
    let base = 150;
    if (lower.includes('standard')) base = basePrices.standard;
    if (lower.includes('premium')) base = basePrices.premium;
    if (lower.includes('consult')) base = basePrices.consultation;

    let discount = 0;
    if (type === 'volunteer') discount = 0.25;
    if (type === 'sponsor') discount = 0.10;

    const subtotal = base * quantity;
    const total = subtotal * (1 - discount);
    const breakdown = `Base R ${base.toFixed(2)} × ${quantity} = R ${subtotal.toFixed(2)}; discount ${Math.round(discount*100)}% => R ${total.toFixed(2)}`;

    return { total, breakdown };
  }

  function simulateAvailability(item) {
    const seed = ((item || '').length + new Date().getDate()) % 10;
    if (seed < 2) return 'Unavailable';
    if (seed < 4) return 'Limited availability';
    return 'Available';
  }

  /* ===========================
     CONTACT FORM
     =========================== */
  function initContactForm() {
    const form = $(CONFIG.selectors.contactForm);
    if (!form) return;
    const messages = createStatusContainer(form, 'ct-messages');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      messages.innerHTML = '';

      const name = (form.querySelector('[name="name"]')?.value || '').trim();
      const email = (form.querySelector('[name="email"]')?.value || '').trim();
      const type = (form.querySelector('[name="type"]')?.value || '').trim();
      const message = (form.querySelector('[name="message"]')?.value || '').trim();

      const errors = [];
      if (name.length < 2) errors.push('Enter your name (2+ characters).');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Enter a valid email.');
      if (!type) errors.push('Select a message type.');
      if (message.length < 10) errors.push('Message must be at least 10 characters.');

      if (errors.length) {
        messages.innerHTML = errors.map(e => `<div class="error">${escapeHtml(e)}</div>`).join('');
        focusFirstInvalid(form);
        return;
      }

      // Compose mailto
      const subject = encodeURIComponent(`[Website Contact] ${type} - ${name}`);
      const body = encodeURIComponent([
        `Name: ${name}`,
        `Email: ${email}`,
        `Type: ${type}`,
        '',
        'Message:',
        message
      ].join('\n'));
      const mailto = `mailto:${encodeURIComponent(CONFIG.recipientEmail)}?subject=${subject}&body=${body}`;

      // Open user's default mail client
      window.location.href = mailto;

      messages.innerHTML = `<div class="info">Attempting to open your email client. If nothing happens, ensure your browser has a default mail app configured.</div>`;
    });
  }

  /* ===========================
     DYNAMIC CONTENT + SEARCH + SORT
     =========================== */
  let dynamicItems = [];
  function initDynamicContent() {
    const listEl = $(CONFIG.selectors.itemsList);
    if (!listEl) return;

    const searchEl = $(CONFIG.selectors.itemsSearch);
    const sortEl = $(CONFIG.selectors.itemsSort);

    fetch(CONFIG.itemsDataPath, { cache: 'no-cache' })
      .then(r => {
        if (!r.ok) throw new Error('Failed to load items.json');
        return r.json();
      })
      .then(json => {
        dynamicItems = Array.isArray(json.items) ? json.items : (json || []);
        renderItems(listEl, dynamicItems);

        if (searchEl) attachLiveSearch(searchEl, listEl);
        if (sortEl) attachSort(sortEl, listEl);
      })
      .catch(err => {
        listEl.innerHTML = `<div class="error">Unable to load items: ${escapeHtml(err.message)}</div>`;
      });
  }

  function renderItems(container, items) {
    if (!items || items.length === 0) {
      container.innerHTML = '<div class="muted">No items found.</div>';
      return;
    }
    container.innerHTML = items.map(it => `
      <article class="item-card" data-id="${escapeHtml(String(it.id))}">
        <h3>${escapeHtml(it.title)}</h3>
        <p>${escapeHtml(it.summary)}</p>
        <p class="price">R ${Number(it.price).toFixed(2)}</p>
        <button class="btn small" data-action="enquire">Enquire</button>
      </article>
    `).join('');

    // Enquire button behaviour: pre-fill enquiry form item and scroll to form
    container.querySelectorAll('button[data-action="enquire"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const art = e.target.closest('.item-card');
        const title = art.querySelector('h3')?.textContent || '';
        const enq = $(CONFIG.selectors.enquiryForm);
        if (enq) {
          const itemInput = enq.querySelector('[name="item"]');
          if (itemInput) itemInput.value = title;
          enq.scrollIntoView({ behavior: 'smooth', block: 'center' });
          const first = enq.querySelector('input, select, textarea, button');
          if (first) first.focus();
        }
      });
    });
  }

  function attachLiveSearch(searchEl, containerEl) {
    let timer = null;
    searchEl.addEventListener('input', (e) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const q = e.target.value.trim().toLowerCase();
        const filtered = dynamicItems.filter(it => {
          const text = `${it.title} ${it.summary} ${(it.tags||[]).join(' ')}`.toLowerCase();
          return text.includes(q);
        });
        renderItems(containerEl, filtered);
      }, 160);
    });
  }

  function attachSort(sortEl, containerEl) {
    sortEl.addEventListener('change', () => {
      const v = sortEl.value;
      let arr = [...dynamicItems];
      if (v === 'price-asc') arr.sort((a,b) => a.price - b.price);
      if (v === 'price-desc') arr.sort((a,b) => b.price - a.price);
      if (v === 'title-asc') arr.sort((a,b) => a.title.localeCompare(b.title));
      renderItems(containerEl, arr);
    });
  }

  /* ===========================
     GALLERY LIGHTBOX
     =========================== */
  function initGalleryLightbox() {
    const thumbs = $$(CONFIG.selectors.gallerySelector);
    if (!thumbs.length) return;

    let overlay = document.getElementById(CONFIG.selectors.lightboxId);
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = CONFIG.selectors.lightboxId;
      overlay.className = 'lightbox-overlay';
      overlay.innerHTML = `
        <div class="lightbox-inner" role="dialog" aria-modal="true" aria-label="Image viewer">
          <button class="lightbox-close" aria-label="Close">✕</button>
          <button class="lightbox-prev" aria-label="Previous">‹</button>
          <div class="lightbox-content"><img alt="" /></div>
          <button class="lightbox-next" aria-label="Next">›</button>
        </div>
      `;
      document.body.appendChild(overlay);
    }

    const img = overlay.querySelector('.lightbox-content img');
    const closeBtn = overlay.querySelector('.lightbox-close');
    const prevBtn = overlay.querySelector('.lightbox-prev');
    const nextBtn = overlay.querySelector('.lightbox-next');

    const gallery = thumbs.map(t => ({ src: t.dataset.full || t.getAttribute('href') || t.querySelector('img')?.src, thumb: t }));
    let index = 0;

    function open(i) {
      if (i < 0) i = gallery.length - 1;
      if (i >= gallery.length) i = 0;
      index = i;
      img.src = gallery[index].src;
      img.alt = gallery[index].thumb.querySelector('img')?.alt || `Image ${index+1}`;
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }
    function close() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      img.src = '';
    }
    function next() { open(index + 1); }
    function prev() { open(index - 1); }

    gallery.forEach((g, i) => {
      g.thumb.addEventListener('click', (ev) => {
        ev.preventDefault();
        open(i);
      });
    });

    closeBtn.addEventListener('click', close);
    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });

    document.addEventListener('keydown', (e) => {
      if (!overlay.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    });
  }
  

  /* ===========================
     GOOGLE MAPS: global callback
     ===========================
     Include the Google Maps script tag with your API key and &callback=initMap
  */
  window.initMap = function() {
    const el = document.getElementById(CONFIG.map.elementId);
    if (!el) return;
    if (window.google && window.google.maps) {
      const map = new google.maps.Map(el, {
        center: CONFIG.map.center,
        zoom: CONFIG.map.zoom,
        gestureHandling: 'auto'
      });
      const marker = new google.maps.Marker({
        position: CONFIG.map.center,
        map,
        title: 'Our location'
      });
      const info = new google.maps.InfoWindow({ content: `<strong>Our location</strong>` });
      marker.addListener('click', () => info.open(map, marker));
      el.setAttribute('role', 'region');
      el.setAttribute('aria-label', 'Interactive map showing the organisation location');
    } else {
      el.innerHTML = '<div class="error">Map failed to load. Include Google Maps script with a valid API key and callback=initMap.</div>';
    }
  };

  /* ===========================
     ACCORDIONS, TABS, MODALS
     =========================== */
  function initAccordions() {
    const buttons = $$(CONFIG.selectors.accordionBtn);
    if (!buttons.length) return;
    buttons.forEach(btn => {
      const panel = btn.nextElementSibling;
      btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!open));
        if (!panel) return;
        panel.style.maxHeight = open ? null : panel.scrollHeight + 'px';
      });
      if (btn.getAttribute('aria-expanded') === 'true' && btn.nextElementSibling) {
        btn.nextElementSibling.style.maxHeight = btn.nextElementSibling.scrollHeight + 'px';
      }
    });
  }

  function initTabs() {
    const tabs = $$(CONFIG.selectors.tabBtns);
    if (!tabs.length) return;
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const list = tab.closest('[role="tablist"]');
        if (!list) return;
        const all = list.querySelectorAll('[role="tab"]');
        all.forEach(t => t.setAttribute('aria-selected', 'false'));
        tab.setAttribute('aria-selected', 'true');
        const target = tab.getAttribute('aria-controls');
        document.querySelectorAll('[role="tabpanel"]').forEach(p => p.hidden = p.id !== target);
      });
    });
  }

  function initModals() {
    $$(CONFIG.selectors.modalTrigger).forEach(trigger => {
      trigger.addEventListener('click', (ev) => {
        ev.preventDefault();
        const id = trigger.dataset.modalTarget;
        const modal = document.getElementById(id);
        if (!modal) return;
        modal.classList.add('open');
        const focusable = modal.querySelector('button, a, input, textarea, select') || modal;
        focusable.focus();
      });
    });
    $$('.modal .modal-close').forEach(btn => btn.addEventListener('click', () => btn.closest('.modal')?.classList.remove('open')));
    $$('.modal').forEach(m => m.addEventListener('click', (e) => { if (e.target === m) m.classList.remove('open'); }));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') $$('.modal.open').forEach(m => m.classList.remove('open')); });
  }

  /* ===========================
     INIT
     =========================== */
  function initAll() {
    initEnquiryForm();
    initContactForm();
    initDynamicContent();
    initGalleryLightbox();
    initAccordions();
    initTabs();
    initModals();

    const mapEl = document.getElementById(CONFIG.map.elementId);
    if (mapEl && !(window.google && window.google.maps)) {
      if (!mapEl.innerHTML.trim()) {
        mapEl.innerHTML = `<div class="map-placeholder">Map not loaded. Add: <code>&lt;script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"&gt;&lt;/script&gt;</code></div>`;
      }
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initAll);
  else initAll();

})();
