'use strict';
(self.webpackChunkOERTemplate = self.webpackChunkOERTemplate || []).push([
  [230],
  {
    230: (e, t, a) => {
      a.r(t), a.d(t, { default: () => p });
      var o = a(7294),
        l = a(6010),
        n = a(5999);
      const r = 'popup_wph0',
        s = 'buttonContainer_ox5C';
      function p(e) {
        let { onReload: t } = e;
        const [a, p] = (0, o.useState)(!0);
        return (
          a &&
          o.createElement(
            'div',
            { className: (0, l.Z)('alert', 'alert--secondary', r) },
            o.createElement(
              'p',
              null,
              o.createElement(
                n.Z,
                { id: 'theme.PwaReloadPopup.info', description: 'The text for PWA reload popup' },
                'New version available'
              )
            ),
            o.createElement(
              'div',
              { className: s },
              o.createElement(
                'button',
                {
                  className: 'button button--link',
                  type: 'button',
                  onClick: () => {
                    p(!1), t();
                  },
                },
                o.createElement(
                  n.Z,
                  {
                    id: 'theme.PwaReloadPopup.refreshButtonText',
                    description: 'The text for PWA reload button',
                  },
                  'Refresh'
                )
              ),
              o.createElement(
                'button',
                {
                  'aria-label': (0, n.I)({
                    id: 'theme.PwaReloadPopup.closeButtonAriaLabel',
                    message: 'Close',
                    description: 'The ARIA label for close button of PWA reload popup',
                  }),
                  className: 'close',
                  type: 'button',
                  onClick: () => p(!1),
                },
                o.createElement('span', { 'aria-hidden': 'true' }, '\xd7')
              )
            )
          )
        );
      }
    },
  },
]);
