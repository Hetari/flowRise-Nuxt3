import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { b as __nuxt_component_0, _ as _sfc_main$2, a as __nuxt_component_4 } from './TryIt-DgbvDCK7.mjs';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import gsap from 'gsap';
import { _ as _sfc_main$2$1, a as _sfc_main$3 } from './FocusSection-B7F4F8Yn.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './index-CjlUqRNy.mjs';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("image10-large.BsR6Kxpj.png");
const _imports_1 = "" + buildAssetsURL("image10-small.9_5XR7XK.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HomeHero",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.timeline();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2 md:gap-4 max-w-[1400px] m-auto" }, _attrs))}><h1 class="text-body-large text-center"> Productivity that flows <br>with your life. </h1><p class="text-body-normal md:max-w-xl m-auto !font-normal"> Unleash your potential by harmonizing your daily tasks and habits with your unique energy rhythms. </p><div id="intro-btn" class="pb-4 opacity-0 translate-y-20">`);
      _push(ssrRenderComponent(_component_Button, null, null, _parent));
      _push(`</div><picture class="relative mx-1 md:mx-10 hover:scale-105 transition-all duration-500 hover:rounded-3xl"><source media="(min-width: 640px)"${ssrRenderAttr("srcset", _imports_0)}><img${ssrRenderAttr("src", _imports_1)} alt="Home hero image" class="scale-85 opacity-0 relative w-full z-20"><div id="glassy-bg" class="absolute -top-14 md:-top-12 left-0 md:left-10 bg-gradient-to-l from-purple-900 to-cyan-500/80 size-32 md:size-72 blur-3xl opacity-80 md:opacity-60 z-10"></div></picture></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeHero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HomeHero = _sfc_main$1;
  const _component_UsersSaid = _sfc_main$2;
  const _component_RobustFeatures = _sfc_main$2$1;
  const _component_FocusSection = _sfc_main$3;
  const _component_TryIt = __nuxt_component_4;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "max-w-md md:max-w-full m-auto p-12 text-center space-y-36" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HomeHero, null, null, _parent));
  _push(ssrRenderComponent(_component_UsersSaid, null, null, _parent));
  _push(ssrRenderComponent(_component_RobustFeatures, null, null, _parent));
  _push(ssrRenderComponent(_component_FocusSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TryIt, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-C-CcwT98.mjs.map
