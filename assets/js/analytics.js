// Camada central de tracking do GA4. Todo evento customizado do site deve passar
// por trackEvent() em vez de chamar gtag() direto, para ter um único lugar de
// checagem de segurança (gtag pode não existir, ex: bloqueador de anúncios).
window.trackEvent = function (name, params) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', name, params || {});
};
