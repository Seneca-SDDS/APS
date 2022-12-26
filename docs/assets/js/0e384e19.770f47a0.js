'use strict';
(self.webpackChunkOERTemplate = self.webpackChunkOERTemplate || []).push([
  [671],
  {
    3905: (e, t, n) => {
      n.d(t, { Zo: () => s, kt: () => f });
      var r = n(7294);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      var p = r.createContext({}),
        c = function (e) {
          var t = r.useContext(p),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : a(a({}, t), e)), n;
        },
        s = function (e) {
          var t = c(e.components);
          return r.createElement(p.Provider, { value: t }, e.children);
        },
        u = 'mdxType',
        m = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        d = r.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            i = e.originalType,
            p = e.parentName,
            s = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = c(n),
            d = o,
            f = u[''.concat(p, '.').concat(d)] || u[d] || m[d] || i;
          return n
            ? r.createElement(f, a(a({ ref: t }, s), {}, { components: n }))
            : r.createElement(f, a({ ref: t }, s));
        });
      function f(e, t) {
        var n = arguments,
          o = t && t.mdxType;
        if ('string' == typeof e || o) {
          var i = n.length,
            a = new Array(i);
          a[0] = d;
          var l = {};
          for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
          (l.originalType = e), (l[u] = 'string' == typeof e ? e : o), (a[1] = l);
          for (var c = 2; c < i; c++) a[c] = n[c];
          return r.createElement.apply(null, a);
        }
        return r.createElement.apply(null, n);
      }
      d.displayName = 'MDXCreateElement';
    },
    9881: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => a,
          default: () => u,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => c,
        });
      var r = n(7462),
        o = (n(7294), n(3905));
      const i = {
          id: 'intro',
          title: 'Applied Problem Solving - Supplemental Documentation',
          sidebar_position: 1,
          slug: '/',
          description: 'Supplemental Documentation',
        },
        a = 'APS145: Applied Problem Solving',
        l = {
          unversionedId: 'intro',
          id: 'intro',
          title: 'Applied Problem Solving - Supplemental Documentation',
          description: 'Supplemental Documentation',
          source: '@site/docs/intro.md',
          sourceDirName: '.',
          slug: '/',
          permalink: '/APS/',
          draft: !1,
          editUrl: 'https://github.com/Seneca-SDDS/APS/tree/main/docs/intro.md',
          tags: [],
          version: 'current',
          sidebarPosition: 1,
          frontMatter: {
            id: 'intro',
            title: 'Applied Problem Solving - Supplemental Documentation',
            sidebar_position: 1,
            slug: '/',
            description: 'Supplemental Documentation',
          },
          sidebar: 'courseNotesSidebar',
        },
        p = {},
        c = [{ value: 'Introduction', id: 'introduction', level: 2 }],
        s = { toc: c };
      function u(e) {
        let { components: t, ...n } = e;
        return (0, o.kt)(
          'wrapper',
          (0, r.Z)({}, s, n, { components: t, mdxType: 'MDXLayout' }),
          (0, o.kt)(
            'h1',
            { id: 'aps145-applied-problem-solving' },
            'APS145: Applied Problem Solving'
          ),
          (0, o.kt)('h2', { id: 'introduction' }, 'Introduction'),
          (0, o.kt)('p', null, 'Supplemental course documentation:'),
          (0, o.kt)(
            'p',
            null,
            (0, o.kt)(
              'a',
              { parentName: 'p', href: './assets/Workshop-Grading-and-Promotion-Policies.pdf' },
              'Workshop Grading and Promotion Policies'
            ),
            '\n',
            (0, o.kt)(
              'a',
              { parentName: 'p', href: './assets/Workshop-Assignment-and-Submission-Policies.pdf' },
              'Workshop Assignment and Submission Policies'
            )
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
