<template>
  <section
    :id="`card${index}`"
    class="w-[345px] text-center space-y-4 md:space-y-0 md:w-full md:flex md:even:flex-row-reverse md:items-center md:justify-around md:gap-36 md:pb-56 md:pt-32"
  >
    <div
      :id="`image${index}`"
      class="opacity-0 group w-full md:w-2/4 rounded-2xl overflow-hidden group/item shadow-lg"
    >
      <img
        :src="cardImage"
        alt="relaxing woman"
        class="w-full scale-110 group-hover:scale-100 transition-all duration-300"
      />
    </div>
    <div :id="`text${index}`" class="text-start space-y-2 max-w-sm opacity-0">
      <h3>{{ card.title }}</h3>
      <p class="text-body-small">
        {{ card.body }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const props = defineProps<{
  card: {
    id: number;
    title: string;
    body: string;
    image: string;
  };
  index: number;
  pos: number;
}>();

const cardImage = computed(() => {
  return "_nuxt/assets/images/" + props.card.image;
});

// animation

onMounted(() => {
  gsap.set(`#image${props.index}`, {
    xPercent: props.pos,
  });

  gsap.set(`#text${props.index}`, {
    xPercent: props.pos * -1,
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap.to(`#image${props.index}`, {
    xPercent: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: `#card${props.index}`,
      start: "top 75%",
      end: "bottom 97%",
      scrub: true,
    },
    duration: 1,
    ease: "power4.inOut",
  });

  gsap.to(`#text${props.index}`, {
    xPercent: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: `#card${props.index}`,
      start: "top 75%",
      end: "bottom 97%",
      scrub: true,
      //   markers: true,
    },
    duration: 1,
    ease: "power4.inOut",
  });
});
</script>
