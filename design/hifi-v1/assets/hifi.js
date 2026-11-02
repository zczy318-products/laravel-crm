/* CRM hi-fi v1 — shared prototype helpers: inline icons, toast, prototype state panel. */
(function () {
  const P = {
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    kanban: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 7v7M12 7v4M16 7v9"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    users: '<circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    quote: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/>',
    box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/>',
    settings: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    left: '<path d="m15 18-6-6 6-6"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    coffee: '<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"/><path d="M6 2v2M10 2v2M14 2v2"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    eyeoff: '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24M10.73 5.08A10.4 10.4 0 0 1 12 5c7 0 10 7 10 7a13.2 13.2 0 0 1-1.67 2.68M6.61 6.61A13.5 13.5 0 0 0 2 12s3 7 10 7a9.7 9.7 0 0 0 5.39-1.61M2 2l20 20"/>',
    alert: '<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',
    arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    up: '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
    dn: '<path d="m22 17-8.5-8.5-5 5L2 7"/><path d="M16 17h6v-6"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
    code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    more: '<circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    panel: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0z"/>',
    inbox: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    chart: '<path d="M3 3v18h18"/><path d="M8 17V11M13 17V7M18 17v-4"/>',
    funnel: '<path d="M3 4h18l-7 9v6l-4 2v-8z"/>',
    sync: '<path d="M21 12a9 9 0 0 1-15.36 6.36L3 16M3 12a9 9 0 0 1 15.36-6.36L21 8"/><path d="M21 3v5h-5M3 21v-5h5"/>',
    note: '<path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
    mailcheck: '<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-10 6L2 7M16 19l2 2 4-4"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/>',
    mark: '<path d="M5 18V6h6.5a3.5 3.5 0 0 1 0 7H8" stroke="#fff" stroke-width="2.4"/><path d="m12 13 5 5" stroke="#fff" stroke-width="2.4"/>'
  };
  function svg(name) {
    const p = P[name] || '';
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
  }
  function paintIcons(root) {
    (root || document).querySelectorAll('i[data-i]').forEach(function (el) {
      const s = document.createElement('span');
      s.className = 'ico ' + (el.className || '');
      s.innerHTML = svg(el.dataset.i);
      el.replaceWith(s);
    });
    (root || document).querySelectorAll('.logo-mark:empty').forEach(function (el) { el.innerHTML = svg('mark'); });
  }

  let host;
  function toast(msg, opts) {
    opts = opts || {};
    if (!host) { host = document.createElement('div'); host.className = 'toast-host'; host.setAttribute('role', 'status'); document.body.appendChild(host); }
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = '<span></span>';
    t.firstChild.textContent = msg;
    if (opts.action) {
      const b = document.createElement('button');
      b.className = 'btn'; b.type = 'button'; b.textContent = opts.action;
      b.onclick = function () { opts.onAction && opts.onAction(); t.remove(); };
      t.appendChild(b);
      setTimeout(function () { b.focus(); }, 0);
    }
    host.appendChild(t);
    setTimeout(function () { t.remove(); }, opts.ms || 4000);
  }

  // Prototype state panel. states: [{id, label}], onSet(id), note: html string.
  function protoPanel(cfg) {
    const wrap = document.createElement('div');
    wrap.className = 'proto';
    wrap.innerHTML =
      '<div class="proto-panel" id="proto-panel" hidden><h4>Prototype controls</h4><p>Not part of the design — switch states for review.</p><div class="opts"></div>' +
      (cfg.note ? '<p>' + cfg.note + '</p>' : '') + '</div>' +
      '<button class="proto-toggle" type="button" aria-expanded="false" aria-controls="proto-panel">◐ States</button>';
    const opts = wrap.querySelector('.opts');
    cfg.states.forEach(function (s) {
      const b = document.createElement('button');
      b.type = 'button'; b.textContent = s.label; b.dataset.state = s.id;
      b.onclick = function () { cfg.onSet(s.id); };
      opts.appendChild(b);
    });
    (cfg.extra || []).forEach(function (x) {
      const b = document.createElement('button');
      b.type = 'button'; b.textContent = x.label; b.onclick = x.onClick;
      opts.appendChild(b);
    });
    const tg = wrap.querySelector('.proto-toggle');
    const panel = wrap.querySelector('.proto-panel');
    tg.onclick = function () { panel.hidden = !panel.hidden; tg.setAttribute('aria-expanded', String(!panel.hidden)); };
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { panel.hidden = true; tg.setAttribute('aria-expanded', 'false'); tg.focus(); } });
    document.body.appendChild(wrap);
    return {
      mark: function (id) { opts.querySelectorAll('button[data-state]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.state === id)); }); }
    };
  }

  window.Hifi = { svg: svg, paintIcons: paintIcons, toast: toast, protoPanel: protoPanel };
  document.addEventListener('DOMContentLoaded', function () { paintIcons(); });
})();
