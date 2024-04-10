<template>
  <section
    class="space-y-8 max-w-[1400px] m-auto opacity-0 translate-y-20"
    id="users-said"
  >
    <h2 class="text-body-normal text-center">What our users say</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <UserCard v-for="user in usersCommunity" :key="user.id" :user="user" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { usersCommunity } from "~/constant";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to("#users-said", {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#users-said",
      start: "top 80%",
      end: "bottom 70%",
      scrub: true,
    },
    duration: 1,
    ease: "circ.out",
  });
});
</script>
