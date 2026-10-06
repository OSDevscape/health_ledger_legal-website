(function () {
'use strict';
const key = 'healthLedgerLegal.theme';
const allowed = ['system','light','dark','osrs'];
let theme = 'system';
try { const value = localStorage.getItem(key); if (allowed.includes(value)) theme = value; } catch (_) {}
document.documentElement.dataset.theme = theme;
function init() {
 const selector = document.getElementById('appearance-theme');
 if (!selector) return;
 selector.value = theme;
 selector.addEventListener('change', function () {
  if (!allowed.includes(selector.value)) return;
  theme = selector.value;
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem(key, theme); } catch (_) {}
 });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init); else init();
})();

