<template>
  <section
    class="grid grid-cols-2 gap-2 md:gap-4 max-w-[1400px] m-auto content-center items-center h-[80dvh]"
  >
    <div class="text-start w-fit lg:w-2/3 space-y-10">
      <h3 class="text-5xl font-bold md:text-6xl">About the Flowrise team</h3>
      <p class="text-3xl md:text-4xl md:max-w-xl m-auto font-[300]">
        We've been seeking our own inner focus for over 8 years. We're a
        passionate team trying to make the world a better place.
      </p>
    </div>

    <div class="group w-full rounded-2xl overflow-hidden group/item shadow-lg">
      <img
        class="w-full scale-110 group-hover:scale-100 transition-all duration-300"
        src="~/assets/images/image 18.png"
        alt="lens"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from "gsap";

onMounted(() => {
  gsap.to("#intro-btn", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "circ.out",
  });
});
</script>
