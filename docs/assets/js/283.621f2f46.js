'use strict';
(self.webpackChunkOERTemplate = self.webpackChunkOERTemplate || []).push([
  [283],
  {
    5283: (e, t, n) => {
      n.r(t), n.d(t, { renderReloadPopup: () => c });
      var d = n(7294),
        r = n(3935);
      const a = 'pwa-popup-container';
      function c(e) {
        const t =
          document.getElementById(a) ??
          (() => {
            const e = document.createElement('div');
            return (e.id = a), document.body.appendChild(e), e;
          })();
        return Promise.all([n.e(532), n.e(230)])
          .then(n.bind(n, 230))
          .then((n) => {
            let { default: a } = n;
            r.render(d.createElement(a, e), t);
          });
      }
    },
  },
]);
