import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$2, a as __nuxt_component_4 } from './TryIt-DgbvDCK7.mjs';
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
import 'gsap';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("image 18.C0WL2VqV.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AboutHero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 gap-2 md:gap-4 max-w-[1400px] m-auto content-center items-center h-[80dvh]" }, _attrs))}><div class="text-start w-fit lg:w-2/3 space-y-10"><h3 class="text-5xl font-bold md:text-6xl">About the Flowrise team</h3><p class="text-3xl md:text-4xl md:max-w-xl m-auto font-[300]"> We&#39;ve been seeking our own inner focus for over 8 years. We&#39;re a passionate team trying to make the world a better place. </p></div><div class="group w-full rounded-2xl overflow-hidden group/item shadow-lg"><img class="w-full scale-110 group-hover:scale-100 transition-all duration-300"${ssrRenderAttr("src", _imports_0)} alt="lens"></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutHero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AboutHero = _sfc_main$1;
  const _component_UsersSaid = _sfc_main$2;
  const _component_TryIt = __nuxt_component_4;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "max-w-md md:max-w-full m-auto p-12 text-center space-y-36" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AboutHero, null, null, _parent));
  _push(ssrRenderComponent(_component_UsersSaid, null, null, _parent));
  _push(ssrRenderComponent(_component_TryIt, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/About/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-Dv6NcoXP.mjs.map
