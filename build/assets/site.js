const btns = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-mobile')];
const ICON_MOON = '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>';
const ICON_SUN = '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4.5"/><rect x="11" y="1.5" width="2" height="4" rx="1"/><rect x="11" y="18.5" width="2" height="4" rx="1"/><rect x="1.5" y="11" width="4" height="2" rx="1"/><rect x="18.5" y="11" width="4" height="2" rx="1"/><rect x="11" y="1.5" width="2" height="4" rx="1" transform="rotate(45 12 12)"/><rect x="11" y="1.5" width="2" height="4" rx="1" transform="rotate(-45 12 12)"/><rect x="11" y="1.5" width="2" height="4" rx="1" transform="rotate(135 12 12)"/><rect x="11" y="1.5" width="2" height="4" rx="1" transform="rotate(-135 12 12)"/></svg>';
function applyTheme(dark) {
    document.documentElement.classList.toggle('dark', dark);
    btns.forEach(function(b) { if (b) b.innerHTML = dark ? ICON_SUN : ICON_MOON; });
}
applyTheme(document.documentElement.classList.contains('dark'));
btns.forEach(function(btn) {
    if (!btn) return;
    btn.addEventListener('click', function() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        btns.forEach(function(b) { if (b) b.innerHTML = isDark ? ICON_SUN : ICON_MOON; });
    });
});
(function () {
    var hamburger = document.getElementById('hamburger');
    var menu = document.getElementById('mobile-menu');
    var hamburgerIcon = document.getElementById('hamburger-icon');
    var closeIcon = document.getElementById('close-icon');
    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = !menu.classList.contains('hidden');
        menu.classList.toggle('hidden', isOpen);
        hamburgerIcon.classList.toggle('hidden', !isOpen);
        closeIcon.classList.toggle('hidden', isOpen);
    });
    document.addEventListener('click', function (e) {
        if (!menu.classList.contains('hidden') && !menu.contains(e.target) && !hamburger.contains(e.target)) {
            menu.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });
})();
