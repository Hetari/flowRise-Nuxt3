import { useSSRContext, defineComponent, createVNode, resolveDynamicComponent, mergeProps, withCtx, renderSlot, unref, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderVNode, ssrInterpolate, ssrRenderList, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';
import { _ as _export_sfc } from './server.mjs';
import { n as navLinks } from './index-CjlUqRNy.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Bounded",
  __ssrInlineRender: true,
  props: {
    as: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as || "section"), mergeProps({ class: "py-4 md:py-6 lg:py-8 px-8 md:px-16 lg:px-24 xl:px-36" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Bounded.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "136",
    height: "25",
    viewBox: "0 0 136 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M96.1534 22.1293C95.5706 22.1293 95.2792 21.8379 95.2792 21.2551V8.98825C95.2792 8.38665 95.5706 8.08586 96.1534 8.08586C96.6986 8.08586 96.9712 8.38665 96.9712 8.98825V10.7648C97.3847 9.88124 97.9957 9.20444 98.8041 8.73445C99.6313 8.26446 100.581 8.02006 101.652 8.00126C101.878 7.98246 102.066 8.02946 102.216 8.14226C102.367 8.25506 102.442 8.43365 102.442 8.67805C102.461 9.20444 102.188 9.49584 101.624 9.55224L101.229 9.58044C99.8945 9.69324 98.8605 10.135 98.1273 10.9058C97.3941 11.6578 97.0276 12.673 97.0276 13.9514V21.2551C97.0276 21.8379 96.7362 22.1293 96.1534 22.1293Z" fill="#059669"></path><path d="M105.792 4.7583C104.965 4.7583 104.551 4.3635 104.551 3.57391C104.551 2.80312 104.965 2.41772 105.792 2.41772C106.619 2.41772 107.033 2.80312 107.033 3.57391C107.033 4.3635 106.619 4.7583 105.792 4.7583ZM105.792 22.0729C105.209 22.0729 104.918 21.7627 104.918 21.1423V9.07285C104.918 8.47125 105.209 8.17046 105.792 8.17046C106.356 8.17046 106.638 8.47125 106.638 9.07285V21.1423C106.638 21.7627 106.356 22.0729 105.792 22.0729Z" fill="#059669"></path><path d="M115.625 22.1857C114.779 22.1857 113.933 22.0729 113.087 21.8473C112.259 21.6217 111.47 21.2363 110.718 20.6911C110.473 20.5407 110.361 20.3339 110.379 20.0707C110.398 19.7887 110.502 19.5725 110.69 19.4221C110.896 19.2717 111.15 19.2905 111.451 19.4785C112.184 19.9673 112.899 20.3057 113.594 20.4937C114.29 20.6817 114.985 20.7757 115.681 20.7757C116.847 20.7757 117.721 20.5689 118.304 20.1553C118.905 19.7229 119.206 19.1307 119.206 18.3787C119.206 17.7959 119.009 17.3353 118.614 16.997C118.219 16.6586 117.599 16.386 116.753 16.1792L114.299 15.6152C111.987 15.0888 110.831 13.895 110.831 12.0338C110.831 10.8306 111.301 9.86244 112.241 9.12925C113.181 8.39605 114.421 8.02946 115.963 8.02946C116.771 8.02946 117.552 8.15166 118.304 8.39605C119.074 8.64045 119.742 9.01645 120.306 9.52404C120.55 9.71204 120.654 9.93764 120.616 10.2008C120.578 10.464 120.447 10.6614 120.221 10.793C120.014 10.9246 119.77 10.887 119.488 10.6802C118.943 10.2666 118.369 9.96584 117.768 9.77784C117.166 9.57104 116.555 9.46764 115.935 9.46764C114.844 9.46764 113.998 9.69324 113.397 10.1444C112.814 10.5956 112.523 11.2066 112.523 11.9774C112.523 12.5602 112.701 13.0302 113.058 13.3874C113.416 13.7446 113.998 14.0172 114.807 14.2052L117.26 14.7692C118.482 15.0512 119.394 15.4742 119.996 16.0382C120.597 16.5834 120.898 17.3259 120.898 18.2659C120.898 19.4879 120.419 20.4467 119.46 21.1423C118.501 21.8379 117.223 22.1857 115.625 22.1857Z" fill="#059669"></path><path d="M130.586 22.1857C128.48 22.1857 126.816 21.5653 125.594 20.3245C124.391 19.0649 123.789 17.3447 123.789 15.164C123.789 13.754 124.062 12.5132 124.607 11.4416C125.152 10.37 125.904 9.53344 126.863 8.93185C127.841 8.33025 128.959 8.02946 130.219 8.02946C132.043 8.02946 133.462 8.62165 134.477 9.80604C135.492 10.9904 136 12.6166 136 14.6846C136 15.211 135.737 15.4742 135.21 15.4742H125.481C125.538 17.1662 125.998 18.4727 126.863 19.3939C127.747 20.2963 128.969 20.7475 130.529 20.7475C131.225 20.7475 131.892 20.6629 132.531 20.4937C133.189 20.3057 133.829 19.9767 134.449 19.5067C134.787 19.2811 135.079 19.2341 135.323 19.3657C135.568 19.4785 135.699 19.6759 135.718 19.9579C135.756 20.2211 135.615 20.4655 135.295 20.6911C134.693 21.1799 133.96 21.5559 133.095 21.8191C132.249 22.0635 131.413 22.1857 130.586 22.1857ZM130.247 9.41124C128.818 9.41124 127.7 9.86244 126.891 10.7648C126.102 11.6484 125.641 12.7952 125.51 14.2052H134.449C134.411 12.7012 134.035 11.5262 133.321 10.6802C132.607 9.83424 131.582 9.41124 130.247 9.41124Z" fill="#059669"></path><path d="M38.3951 22.1857C37.2107 22.1857 36.6185 21.5841 36.6185 20.3809V10.8212H35.3214C34.3814 10.8212 33.9114 10.3794 33.9114 9.49583C33.9114 8.61224 34.3814 8.17044 35.3214 8.17044H36.6185V8.14224C36.6185 6.20586 37.1073 4.75828 38.0849 3.79949C39.0625 2.8219 40.4725 2.24851 42.3149 2.07931L43.2737 1.99471C43.7625 1.95711 44.1197 2.06051 44.3453 2.30491C44.5709 2.54931 44.6837 2.8501 44.6837 3.2073C44.7024 3.5457 44.6179 3.85589 44.4299 4.13789C44.2419 4.40108 43.9693 4.55148 43.6121 4.58908L43.2173 4.61728C42.1457 4.69248 41.3655 4.96508 40.8767 5.43507C40.3879 5.90507 40.1435 6.61946 40.1435 7.57825V8.17044H42.5405C43.4805 8.17044 43.9505 8.61224 43.9505 9.49583C43.9505 10.3794 43.4805 10.8212 42.5405 10.8212H40.1435V20.3809C40.1435 21.5841 39.5607 22.1857 38.3951 22.1857ZM50.662 22.2421C47.5224 22.2421 45.9526 20.4843 45.9526 16.9687V3.63029C45.9526 2.44591 46.5354 1.85371 47.701 1.85371C48.8854 1.85371 49.4776 2.44591 49.4776 3.63029V16.7995C49.4776 18.4915 50.1826 19.3375 51.5926 19.3375C51.743 19.3375 51.884 19.3375 52.0156 19.3375C52.1472 19.3187 52.2788 19.2999 52.4104 19.2811C52.6736 19.2435 52.8522 19.3187 52.9462 19.5067C53.0402 19.6759 53.0872 20.0331 53.0872 20.5783C53.0872 21.0483 52.9932 21.4149 52.8052 21.6781C52.6172 21.9413 52.307 22.1011 51.8746 22.1575C51.4798 22.2139 51.0756 22.2421 50.662 22.2421Z" fill="#0891B2"></path><path d="M61.0884 22.2421C59.6596 22.2421 58.4188 21.9507 57.366 21.3679C56.3132 20.7851 55.4954 19.9579 54.9126 18.8863C54.3298 17.7959 54.0385 16.5175 54.0385 15.0512C54.0385 13.5848 54.3298 12.3158 54.9126 11.2442C55.4954 10.1726 56.3132 9.34543 57.366 8.76263C58.4188 8.17984 59.6596 7.88844 61.0884 7.88844C62.5171 7.88844 63.7579 8.17984 64.8107 8.76263C65.8635 9.34543 66.6813 10.1726 67.2641 11.2442C67.8469 12.3158 68.1383 13.5848 68.1383 15.0512C68.1383 16.5175 67.8469 17.7959 67.2641 18.8863C66.6813 19.9579 65.8635 20.7851 64.8107 21.3679C63.7579 21.9507 62.5171 22.2421 61.0884 22.2421ZM61.0884 19.5631C62.1412 19.5631 62.9871 19.1871 63.6263 18.4351C64.2655 17.6643 64.5851 16.5363 64.5851 15.0512C64.5851 13.5472 64.2655 12.4286 63.6263 11.6954C62.9871 10.9434 62.1412 10.5674 61.0884 10.5674C60.0356 10.5674 59.1896 10.9434 58.5504 11.6954C57.9112 12.4286 57.5916 13.5472 57.5916 15.0512C57.5916 16.5363 57.9112 17.6643 58.5504 18.4351C59.1896 19.1871 60.0356 19.5631 61.0884 19.5631Z" fill="#0891B2"></path><path d="M76.102 22.1857C75.1245 22.1857 74.4477 21.6969 74.0717 20.7193L69.9827 10.2854C69.7383 9.62742 69.7477 9.07283 70.0109 8.62164C70.2929 8.17044 70.7817 7.94484 71.4773 7.94484C71.8909 7.94484 72.2293 8.04824 72.4925 8.25504C72.7557 8.44304 72.9813 8.80963 73.1693 9.35483L76.2712 17.8429L79.4578 9.12923C79.7586 8.33964 80.2944 7.94484 81.0652 7.94484C81.8548 7.94484 82.3906 8.33964 82.6726 9.12923L85.8591 17.9275L88.9893 9.27023C89.1773 8.76263 89.4123 8.41484 89.6943 8.22684C89.9951 8.03884 90.3241 7.94484 90.6813 7.94484C91.3581 7.94484 91.7999 8.18924 92.0067 8.67804C92.2135 9.14803 92.1947 9.68382 91.9503 10.2854L87.8895 20.7193C87.4947 21.6969 86.8179 22.1857 85.8591 22.1857C84.8627 22.1857 84.186 21.6969 83.8288 20.7193L80.9524 13.0772L78.1324 20.6911C77.7752 21.6875 77.0984 22.1857 76.102 22.1857Z" fill="#0891B2"></path><path d="M17.4988 17.4987C21.5996 16.7392 24.7052 13.1439 24.7052 8.82325C24.7052 3.9503 20.7549 0 15.882 0C11.5613 0 7.96598 3.10564 7.20654 7.20641C7.7307 7.10934 8.27112 7.0586 8.82338 7.0586C13.6963 7.0586 17.6466 11.0089 17.6466 15.8818C17.6466 16.4341 17.5959 16.9745 17.4988 17.4987Z" fill="#6EE7B7"></path><path d="M17.4987 17.4987C16.9745 17.5958 16.4341 17.6465 15.8818 17.6465C11.0089 17.6465 7.0586 13.6962 7.0586 8.82324C7.0586 8.27098 7.10934 7.73056 7.20641 7.20641C3.10564 7.96585 0 11.5612 0 15.8818C0 20.7548 3.9503 24.7051 8.82325 24.7051C13.1439 24.7051 16.7392 21.5995 17.4987 17.4987Z" fill="#06B6D4"></path><path d="M7.2064 7.2064C7.73056 7.10933 8.27098 7.05859 8.82324 7.05859C13.6962 7.05859 17.6465 11.0089 17.6465 15.8818C17.6465 16.4341 17.5958 16.9745 17.4987 17.4987C16.9745 17.5958 16.4341 17.6465 15.8818 17.6465C11.0089 17.6465 7.05859 13.6962 7.05859 8.82324C7.05859 8.27098 7.10933 7.73056 7.2064 7.2064Z" fill="#2DD4BF"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Logo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    isFooter: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Bounded = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Logo = __nuxt_component_2;
      _push(ssrRenderComponent(_component_Bounded, mergeProps({
        as: _ctx.isFooter ? "footer" : "Header",
        class: ["flex items-center justify-between", { "bg-white": _ctx.isFooter }]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "p-3 -m-3",
              to: "/"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Logo, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Logo)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (_ctx.isFooter) {
              _push2(`<p class="text-xs text-black"${_scopeId}> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Flow Rise </p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<ul class="flex gap-10"${_scopeId}><!--[-->`);
            ssrRenderList(unref(navLinks), (link) => {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: link.path,
                class: "nav-link p-3 -m-3"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(link.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(link.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              createVNode(_component_NuxtLink, {
                class: "p-3 -m-3",
                to: "/"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Logo)
                ]),
                _: 1
              }),
              _ctx.isFooter ? (openBlock(), createBlock("p", {
                key: 0,
                class: "text-xs text-black"
              }, " \xA9 " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " Flow Rise ", 1)) : createCommentVNode("", true),
              createVNode("ul", { class: "flex gap-10" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(navLinks), (link) => {
                  return openBlock(), createBlock("li", {
                    key: link.name
                  }, [
                    createVNode(_component_NuxtLink, {
                      to: link.path,
                      class: "nav-link p-3 -m-3"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(link.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Header, { isFooter: true }, null, _parent));
      _push(`<div class="fixed inset-0 z-[-1] bg-gradient-to-tr from-emerald-50 to-cyan-50"></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-Chfwawuo.mjs.map