// Shared GA4 initialization. Queue events while the asynchronous tag loads.
(function () {
  const measurementId = 'G-LMCF5N3D6X';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  const config = {};
  if (new URLSearchParams(window.location.search).get('debug_analytics') === '1') {
    config.debug_mode = true;
  }
  window.gtag('config', measurementId, config);

  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
  document.head.appendChild(tag);
})();
