<template>
  <main class="max-w-md md:max-w-full m-auto p-12 text-center space-y-36">
    <HomeHero />

    <UsersSaid class="opacity-0 translate-y-20" id="users-said" />

    <section class="space-y-10">
      <RobustFeatures />
    </section>
  </main>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  gsap.to("#users-said", {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#users-said",
      start: "top 70%",
      end: "bottom 50%",
      scrub: true,
    },
    duration: 1,
    ease: "circ.out",
  });
});
</script>
