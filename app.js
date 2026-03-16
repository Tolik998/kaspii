const app = document.getElementById('app');

const icons = {
  search: () => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>`,
  cart: () => `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.7L23 6H6"/></svg>`,
  shop: () => `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="9" cy="20" r="1.3"/><circle cx="18" cy="20" r="1.3"/><path d="M2 3h3l2.1 10.1a1 1 0 0 0 1 .9h10.6a1 1 0 0 0 1-.8L21 7H6.1"/></svg>`,
  bank: () => `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="7" y="3" width="10" height="18" rx="2"/><path d="M10 7h4M10 17h4"/><circle cx="12" cy="14" r="1.2"/></svg>`,
  payments: () => `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M7 3h10v4H7z"/><rect x="5" y="7" width="14" height="14" rx="2"/><path d="M8 12h8M8 16h5"/></svg>`,
  transfers: () => `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M7 7h12"/><path d="m15 3 4 4-4 4"/><path d="M17 17H5"/><path d="m9 13-4 4 4 4"/></svg>`,
  magnum: () => `<svg width="34" height="34" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#ef1e63"/><path d="M7.2 15V8.5h1.7l2 2.8 2-2.8h1.7V15H13v-3.4l-1.8 2.4h-.1l-1.8-2.4V15z" fill="#fff"/></svg>`,
  travel: () => `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="5" y="7" width="14" height="11" rx="2"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/><path d="M8 12h8"/></svg>`,
  gov: () => `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M4 10h16"/><path d="M12 4v6"/><path d="M7 13h10"/><path d="M3 20h18"/><path d="M6 10v10M18 10v10"/></svg>`,
  jobs: () => `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="7" width="18" height="12" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><circle cx="17" cy="15" r="3"/><path d="m19.2 17.2 2.2 2.2"/></svg>`,
  home: () => `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>`,
  qr: () => `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3z"/><path d="M15 15h2v2h-2zM19 15h2v6h-6v-2M15 19h2"/></svg>`,
  msg: () => `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  services: () => `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  back: () => `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>`,
  cycle: () => `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12a7 7 0 0 1 12-4"/><path d="M15 3v5h-5"/><path d="M21 12a7 7 0 0 1-12 4"/><path d="M9 21v-5h5"/></svg>`,
  userMoney: () => `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3"/><path d="M4 19a5 5 0 0 1 10 0"/><circle cx="18" cy="17" r="3"/><path d="M18 14v6M15 17h6"/></svg>`,
  cards: () => `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="7" width="14" height="10" rx="2"/><path d="M7 17h10a2 2 0 0 0 2-2V9"/><path d="M3 11h14"/></svg>`,
  globe: () => `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>`,
  id: () => `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M8 10h8M8 14h5"/><circle cx="7" cy="10" r="0.8"/></svg>`,
  student: () => `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><path d="m3 9 9-4 9 4-9 4-9-4Z"/><path d="M7 11v4c0 1 2 2 5 2s5-1 5-2v-4"/></svg>`,
};

const state = {
  screen: 'home',
  govTab: 'services',
};

function h(strings, ...values) {
  return strings.reduce((acc, s, i) => acc + s + (values[i] ?? ''), '');
}

function statusBar() {
  return h`
    <div class="status-bar">
      <div>04:09</div>
      <div class="status-icons">
        <span>◫◫◫</span><span>⌁</span><span>53</span>
      </div>
    </div>
    <div class="pill"></div>
  `;
}

function bottomNav() {
  return h`
    <div class="bottom-nav">
      <div class="bottom-grid">
        <button class="nav-item active">${icons.home()}<div>Главная</div></button>
        <button class="nav-item">${icons.qr()}<div>Kaspi QR</div></button>
        <button class="nav-item">${icons.msg()}<div>Сообщения</div></button>
        <button class="nav-item">${icons.services()}<div>Сервисы</div></button>
      </div>
      <div class="home-indicator"></div>
    </div>
  `;
}

function homeScreen() {
  const menu = [
    ['Магазин', 'shop', false],
    ['Мой Банк', 'bank', false],
    ['Платежи', 'payments', false],
    ['Переводы', 'transfers', true],
    ['Magnum', 'magnum', false],
    ['Travel', 'travel', false],
    ['Госуслуги', 'gov', true],
    ['Работа', 'jobs', false],
  ];

  return h`
    <div class="screen">
      ${statusBar()}
      <div class="top-search-wrap">
        <div class="search-row">
          <div class="search-box">${icons.search()}<span>Поиск по Kaspi.kz</span></div>
          <div class="icon-btn">${icons.cart()}</div>
        </div>
      </div>

      <div class="banner-scroll">
        <div class="banner tools">
          <h3>Подборка<br>для ремонта<br>и уюта</h3>
          <small>Бонусы</small>
        </div>
        <div class="banner nauryz">
          <h3>НАУРЫЗ<br>ҚҰТТЫ<br>БОЛСЫН!</h3>
          <small>Бонусы<br>до -50%</small>
        </div>
      </div>

      <div class="grid-menu">
        ${menu.map(([label, icon, clickable]) => h`
          <button class="menu-item ${clickable ? '' : 'disabled'}" ${clickable ? `data-nav="${icon === 'transfers' ? 'transfer' : 'gov'}"` : ''}>
            <div class="menu-icon">${icons[icon]()}</div>
            <div class="menu-label">${label}</div>
          </button>
        `).join('')}
      </div>

      <div class="list-card">
        <div class="list-row">
          <div class="list-icon-badge badge-red">0-0-12</div>
          <div class="list-content">
            <div class="list-title">Рассрочка 0-0-12</div>
          </div>
          <div class="list-icon-badge badge-green">↔</div>
          <div class="list-content">
            <div class="list-title">Кредиты</div>
            <div class="list-subtitle">до 2,2 млн</div>
          </div>
        </div>
        <div class="list-row" style="padding-top:6px;">
          <div class="list-icon-badge badge-orange">Red+</div>
          <div class="list-content">
            <div class="list-title">Погасите выгодно</div>
            <div class="list-subtitle">Станет доступно 50 945 ₸</div>
          </div>
          <div class="list-icon-badge badge-yellow">◔</div>
          <div class="list-content">
            <div class="list-title">Накопи</div>
            <div class="list-subtitle">Депозит</div>
          </div>
        </div>
      </div>

      <div class="banner watch">
        <h3>Продуктивно<br>каждый шаг!</h3>
        <small>Бонусы</small>
        <div class="banner-dots"><span class="active"></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
      </div>

      <div class="section-title">Вы недавно смотрели</div>
      <div class="recent-grid">
        <div class="product"><div class="product-thumb"></div><div class="product-price">930 ₸</div></div>
        <div class="product"><div class="product-thumb pink"></div><div class="product-price">1 004 ₸</div></div>
        <div class="product"><div class="product-thumb black"></div><div class="product-price">1 619 ₸</div></div>
        <div class="product"><div class="product-thumb gold"></div><div class="product-price">2 024 ₸</div></div>
      </div>
      ${bottomNav()}
    </div>
  `;
}

function transferScreen() {
  const rows = [
    ['Между своими счетами', '', 'cycle'],
    ['Клиенту Kaspi', 'На карту Kaspi Gold', 'userMoney'],
    ['Карта другого банка', 'С карты на карту', 'cards'],
    ['Международные переводы', 'По номеру карты или телефона', 'globe'],
    ['Kaspi QR', 'Сканируйте и платите', 'qr'],
  ];

  return h`
    <div class="screen">
      ${statusBar()}
      <div class="header">
        <button class="back-btn" data-nav="home">${icons.back()}</button>
        <div>Переводы</div>
      </div>
      <div class="tabs">
        <button class="tab active">Мои Переводы</button>
        <button class="tab">История</button>
      </div>
      <div class="page-list">
        ${rows.map(([title, subtitle, icon]) => h`
          <button class="page-row" style="width:100%;background:transparent;border:0;padding-left:0;padding-right:0;text-align:left;">
            <div class="page-icon">${icons[icon]()}</div>
            <div style="flex:1;min-width:0;">
              <div class="page-title">${title}</div>
              ${subtitle ? `<div class="page-subtitle">${subtitle}</div>` : ''}
            </div>
            <div class="chev">›</div>
          </button>
        `).join('')}
      </div>
      ${bottomNav()}
    </div>
  `;
}

function govScreen() {
  const list = [
    ['Стать самозанятым', 'Открыть счет и начать принимать оплату в Kaspi.kz'],
    ['Изменение реквизитов и налогового режима ИП', ''],
    ['Замена техпаспорта', 'При смене госномера, потере'],
  ];
  const cats = ['Популярные', 'Справки', 'Авто', 'Жилье', 'Семья'];
  const emojis = ['📣', '📄', '🚗', '🏠', '🧸'];

  return h`
    <div class="screen">
      ${statusBar()}
      <div class="header">
        <button class="back-btn" data-nav="home">${icons.back()}</button>
        <div>Госуслуги</div>
      </div>
      <div class="tabs">
        <button class="tab active">Все услуги</button>
        <button class="tab">Мои заявки</button>
      </div>
      <div class="gov-search"><div class="search-box">${icons.search()}<span>Поиск по Госуслугам</span></div></div>

      <div class="document-strip">
        <div class="doc-grid">
          <div class="doc-card">
            <div class="doc-illu"></div>
            <div class="doc-name">Удостоверение<br>личности</div>
          </div>
          <div class="doc-card">
            <div class="doc-illu blue">${icons.student()}</div>
            <div class="doc-name">Студенческий<br>билет</div>
          </div>
        </div>
        <div class="doc-link">Все документы <span class="chev">›</span></div>
      </div>

      <div class="category-tabs">
        ${cats.map((c, i) => h`
          <div class="category ${i === 0 ? 'active' : ''}">
            <div class="category-badge">${emojis[i]}</div>
            <div>${c}</div>
            ${i === 0 ? '<div class="under"></div>' : ''}
          </div>
        `).join('')}
      </div>

      <div class="section-title" style="padding-top:14px;">Популярные и новые</div>
      <div class="gov-list">
        ${list.map(([title, subtitle]) => h`
          <button class="page-row" style="width:100%;background:transparent;border:0;padding-left:0;padding-right:0;text-align:left;">
            <div class="page-icon">${icons.userMoney()}</div>
            <div style="flex:1;min-width:0;">
              <div class="page-title">${title}</div>
              ${subtitle ? `<div class="page-subtitle">${subtitle}</div>` : ''}
            </div>
            <span class="new-badge">NEW</span>
            <div class="chev">›</div>
          </button>
        `).join('')}
      </div>
      ${bottomNav()}
    </div>
  `;
}

function render() {
  const screen = state.screen === 'home' ? homeScreen() : state.screen === 'transfer' ? transferScreen() : govScreen();
  app.innerHTML = `<div class="shell"><div class="phone">${screen}</div></div>`;
  bind();
}

function bind() {
  document.querySelectorAll('[data-nav]').forEach((el) => {
    el.addEventListener('click', () => {
      state.screen = el.dataset.nav;
      render();
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (err) {
      console.error('SW registration failed', err);
    }
  });
}

render();
