<template>
  <Header />
  <slot />

  <Header :isFooter="true" />

  <div
    class="fixed inset-0 z-[-1] bg-gradient-to-tr from-emerald-50 to-cyan-50"
  />
</template>

<script setup lang="ts">
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { onMounted } from "vue";

onMounted(() => {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
});
</script>
