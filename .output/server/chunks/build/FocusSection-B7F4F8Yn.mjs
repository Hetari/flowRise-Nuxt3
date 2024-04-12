import { defineComponent, mergeProps, useSSRContext, unref, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import gsap from 'gsap';
import { F as FocusCardInfo } from './index-CjlUqRNy.mjs';
import { S as ScrollTrigger } from './TryIt-DgbvDCK7.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RobustFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "robust-features",
        class: "space-y-10 opacity-0 translate-y-20 max-w-[1400px] m-auto"
      }, _attrs))}><h2 class="text-body-normal text-center">Robust features</h2><section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center"><div class="flex flex-col md:w-64 justify-center md:items-start items-center gap-5"><svg width="72" height="71" viewBox="0 0 72 71" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Calendar"><g id="lines"><path id="Vector" d="M2.66663 35C2.66663 22.4292 2.66663 16.1438 6.57187 12.2386C10.4771 8.33333 16.7625 8.33333 29.3333 8.33333H42.6666C55.2374 8.33333 61.5228 8.33333 65.4281 12.2386C69.3333 16.1438 69.3333 22.4292 69.3333 35V41.6667C69.3333 54.2374 69.3333 60.5228 65.4281 64.4281C61.5228 68.3333 55.2374 68.3333 42.6666 68.3333H29.3333C16.7625 68.3333 10.4771 68.3333 6.57187 64.4281C2.66663 60.5228 2.66663 54.2374 2.66663 41.6667V35Z" stroke="#0891B2" stroke-width="4.99091"></path><path id="Vector_2" d="M19.3334 8.33333V3.33333" stroke="#0891B2" stroke-opacity="0.5" stroke-width="4.99091" stroke-linecap="round"></path><path id="Vector_3" d="M52.6667 8.33333V3.33333" stroke="#0891B2" stroke-opacity="0.5" stroke-width="4.99091" stroke-linecap="round"></path><path id="Vector_4" d="M4.33337 25H67.6667" stroke="#0891B2" stroke-opacity="0.5" stroke-width="4.99091" stroke-linecap="round"></path></g><g id="dots"><g id="Vector_5"><path d="M55.9999 51.6667C55.9999 53.5076 54.5075 55 52.6666 55C50.8256 55 49.3333 53.5076 49.3333 51.6667C49.3333 49.8257 50.8256 48.3333 52.6666 48.3333C54.5075 48.3333 55.9999 49.8257 55.9999 51.6667Z" fill="#0891B2"></path><path d="M55.9999 38.3333C55.9999 40.1743 54.5075 41.6667 52.6666 41.6667C50.8256 41.6667 49.3333 40.1743 49.3333 38.3333C49.3333 36.4924 50.8256 35 52.6666 35C54.5075 35 55.9999 36.4924 55.9999 38.3333Z" fill="#0891B2"></path></g><g id="Vector_6"><path d="M39.3334 51.6667C39.3334 53.5076 37.841 55 36.0001 55C34.1591 55 32.6667 53.5076 32.6667 51.6667C32.6667 49.8257 34.1591 48.3333 36.0001 48.3333C37.841 48.3333 39.3334 49.8257 39.3334 51.6667Z" fill="#0891B2"></path><path d="M39.3334 38.3333C39.3334 40.1743 37.841 41.6667 36.0001 41.6667C34.1591 41.6667 32.6667 40.1743 32.6667 38.3333C32.6667 36.4924 34.1591 35 36.0001 35C37.841 35 39.3334 36.4924 39.3334 38.3333Z" fill="#0891B2"></path></g><g id="Vector_7"><path d="M22.6667 51.6667C22.6667 53.5076 21.1743 55 19.3333 55C17.4924 55 16 53.5076 16 51.6667C16 49.8257 17.4924 48.3333 19.3333 48.3333C21.1743 48.3333 22.6667 49.8257 22.6667 51.6667Z" fill="#0891B2"></path><path d="M22.6667 38.3333C22.6667 40.1743 21.1743 41.6667 19.3333 41.6667C17.4924 41.6667 16 40.1743 16 38.3333C16 36.4924 17.4924 35 19.3333 35C21.1743 35 22.6667 36.4924 22.6667 38.3333Z" fill="#0891B2"></path></g></g></g></svg><h3 class="!font-normal">Scheduling</h3><p class="text-body-small w-3/4 md:text-start"> Create task schedules synced to your natural energy peaks and troughs. </p></div><div class="flex flex-col md:w-64 justify-center md:items-start items-center gap-5"><svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M69.8333 69.3333H3.16666" stroke="#0891B2" stroke-width="4.99091" stroke-linecap="round"></path><g id="analytics"><path d="M66.5 69.3333V44.3333C66.5 41.5719 64.2614 39.3333 61.5 39.3333H51.5C48.7386 39.3333 46.5 41.5719 46.5 44.3333V69.3333" stroke="#0891B2" stroke-opacity="0.5" stroke-width="4.99091"></path><path d="M46.5 69.3333V12.6667C46.5 7.95262 46.5 5.5956 45.0355 4.13113C43.5711 2.66666 41.214 2.66666 36.5 2.66666C31.7859 2.66666 29.4289 2.66666 27.9645 4.13113C26.5 5.5956 26.5 7.95262 26.5 12.6667V69.3333" stroke="#0891B2" stroke-width="4.99091"></path><path d="M26.5 69.3333V27.6667C26.5 24.9052 24.2614 22.6667 21.5 22.6667H11.5C8.73856 22.6667 6.49998 24.9052 6.49998 27.6667V69.3333" stroke="#0891B2" stroke-opacity="0.5" stroke-width="4.99091"></path></g></svg><h3 class="!font-normal">Analytics</h3><p class="text-body-small w-3/4 md:text-start"> Track your productivity trends with comprehensive data and insights. </p></div><div class="flex flex-col md:w-64 justify-center md:items-start items-center gap-5"><svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="integrations"><path d="M23.1666 22.6667H49.8333V49.3333H23.1666V22.6667Z" stroke="#0891B2" stroke-opacity="0.5" stroke-width="4.99091"></path><path d="M49.8333 49.3366L59.8333 49.335C65.3561 49.3342 69.834 53.8106 69.8349 59.3335C69.8357 64.8563 65.3593 69.3342 59.8364 69.335C54.3136 69.3359 49.8357 64.8595 49.8349 59.3366L49.8333 49.3366Z" stroke="#0891B2" stroke-width="4.99091"></path><path d="M23.1698 49.3366L13.1698 49.335C7.64696 49.3342 3.1691 53.8106 3.16823 59.3335C3.16736 64.8563 7.64381 69.3342 13.1667 69.335C18.6895 69.3359 23.1674 64.8595 23.1682 59.3366L23.1698 49.3366Z" stroke="#0891B2" stroke-width="4.99091"></path><path d="M49.8333 22.6668L59.8333 22.6684C65.3561 22.6693 69.834 18.1928 69.8349 12.67C69.8357 7.14711 65.3593 2.66925 59.8364 2.66838C54.3136 2.66751 49.8357 7.14396 49.8349 12.6668L49.8333 22.6668Z" stroke="#0891B2" stroke-width="4.99091"></path><path d="M23.1698 22.6668L13.1698 22.6684C7.64696 22.6693 3.1691 18.1928 3.16823 12.67C3.16736 7.14711 7.64381 2.66925 13.1667 2.66838C18.6895 2.66751 23.1674 7.14396 23.1682 12.6668L23.1698 22.6668Z" stroke="#0891B2" stroke-width="4.99091"></path></g></svg><h3 class="!font-normal">Integrations</h3><p class="text-body-small w-3/4 md:text-start"> Incorporate wellness practices into your daily plan with reminders for meditation, hydration, and more. </p></div><div class="flex flex-col md:w-64 justify-center md:items-start items-center gap-5"><svg width="52" height="72" viewBox="0 0 52 72" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="focus"><path d="M35.859 26.2369L26 36L16.141 26.2369C6.39933 16.59 1.52851 11.7666 2.89213 7.60495C3.00935 7.24723 3.15491 6.89923 3.32746 6.56421C5.33483 2.66666 12.2232 2.66666 26 2.66666C39.7767 2.66666 46.6651 2.66666 48.6725 6.56421C48.845 6.89923 48.9906 7.24723 49.1078 7.60495C50.4714 11.7666 45.6006 16.59 35.859 26.2369Z" stroke="#0891B2" stroke-width="4.99091"></path><path d="M16.141 45.7631L26 36L35.8589 45.7631C45.6006 55.41 50.4714 60.2334 49.1078 64.395C48.9906 64.7528 48.845 65.1008 48.6725 65.4358C46.6651 69.3333 39.7767 69.3333 26 69.3333C12.2232 69.3333 5.33483 69.3333 3.32746 65.4358C3.15491 65.1008 3.00935 64.7528 2.89213 64.395C1.52851 60.2334 6.39932 55.41 16.1409 45.7631L16.141 45.7631Z" stroke="#0891B2" stroke-opacity="0.5" stroke-width="4.99091"></path></g></svg><h3 class="!font-normal">Focus Timer</h3><p class="text-body-small w-3/4 md:text-start"> Use the built-in Pomodoro timer for focused work sessions with customizable intervals. </p></div></section></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RobustFeatures.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FocusCard",
  __ssrInlineRender: true,
  props: {
    card: {},
    index: {},
    pos: {}
  },
  setup(__props) {
    const props = __props;
    const cardImage = computed(() => {
      return "_nuxt/assets/images/" + props.card.image;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: `card${_ctx.index}`,
        class: "w-[345px] text-center space-y-4 md:space-y-0 md:w-full md:flex md:even:flex-row-reverse md:items-center md:justify-around md:gap-36 md:pb-56 md:last:pb-0 md:pt-32"
      }, _attrs))}><div${ssrRenderAttr("id", `image${_ctx.index}`)} class="opacity-0 group w-full md:w-2/4 rounded-2xl overflow-hidden group/item shadow-lg"><img${ssrRenderAttr("src", unref(cardImage))} alt="relaxing woman" class="w-full scale-110 group-hover:scale-100 transition-all duration-300"></div><div${ssrRenderAttr("id", `text${_ctx.index}`)} class="text-start space-y-2 max-w-sm opacity-0"><h3>${ssrInterpolate(_ctx.card.title)}</h3><p class="text-body-small">${ssrInterpolate(_ctx.card.body)}</p></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FocusCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FocusSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FocusCard = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid justify-items-center gap-10 max-w-[1400px] m-auto" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(FocusCardInfo), (card, index) => {
        _push(ssrRenderComponent(_component_FocusCard, {
          key: card.id,
          card,
          index,
          pos: index % 2 === 0 ? -100 : 100
        }, null, _parent));
      });
      _push(`<!--]--></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FocusSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$2 as _, _sfc_main as a };
//# sourceMappingURL=FocusSection-B7F4F8Yn.mjs.map
