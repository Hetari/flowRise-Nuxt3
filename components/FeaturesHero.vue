<template>
  <section
    class="grid grid-cols-2 gap-2 md:gap-4 max-w-[1400px] m-auto content-center items-center h-[80dvh]"
  >
    <div class="text-start w-fit lg:w-2/3 space-y-10">
      <h3 class="text-5xl font-bold md:text-6xl">Features for finding focus</h3>
      <p class="text-3xl md:text-4xl md:max-w-xl m-auto font-[300]">
        Harness our innovative feature set to propel your productivity power.
        Make every moment count, stress less.
      </p>

      <div id="intro-btn" class="pb-4 opacity-0 translate-y-20">
        <Button />
      </div>
    </div>

    <div class="group w-full rounded-2xl overflow-hidden group/item shadow-lg">
      <img
        class="w-full scale-110 group-hover:scale-100 transition-all duration-300"
        src="./image 15.png"
        alt="lens"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

onMounted(() => {
  $gsap.to("#intro-btn", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "circ.out",
  });
});
</script>
