<template>
  <section class="flex flex-col gap-2 md:gap-4 max-w-[1400px] m-auto">
    <h1 class="text-body-large text-center">
      Productivity that flows <br />with your life.
    </h1>
    <p class="text-body-normal md:max-w-xl m-auto !font-normal">
      Unleash your potential by harmonizing your daily tasks and habits with
      your unique energy rhythms.
    </p>

    <div id="intro-btn" class="pb-4 opacity-0 translate-y-20">
      <Button />
    </div>

    <picture
      class="relative mx-1 md:mx-10 hover:scale-105 transition-all duration-500 shadow-lg rounded-3xl"
    >
      <source
        media="(min-width: 640px)"
        srcset="/image10-large.png"
        class="rounded-3xl"
      />

      <img
        src="/image10-small.png"
        alt="Home hero image"
        class="scale-85 opacity-0 relative w-full z-20 rounded-3xl"
      />
      <div
        id="glassy-bg"
        class="absolute -top-14 md:-top-12 left-0 md:left-10 bg-gradient-to-l from-purple-900 to-cyan-500/80 size-32 md:size-72 blur-3xl opacity-80 md:opacity-60 z-10"
      ></div>

      <!-- <div
        class="absolute -bottom-10 md:-bottom-32 right-0 bg-gradient-to-br from-purple-700 to-cyan-900 size-40 md:size-96 blur-3xl opacity-80 md:opacity-40 z-10"
      ></div> -->
    </picture>
  </section>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

onMounted(() => {
  const tl = $gsap.timeline({
    repeatDelay: 2,
  });

  $gsap.to("#glassy-bg", {
    repeat: -1,
    scale: 1.5,
    y: 20,
    x: 50,
    duration: 10,
    yoyo: true,
    ease: "none",
    repeatDelay: 1,
    rotate: 360,
  });

  tl.to("picture img", {
    scale: 1,
    // boxShadow: "10px 10px 50px 0 rgba(0, 0, 0, 0.2)",
    opacity: 1,
    duration: 0.5,
    ease: "sine.inOut",
  });

  tl.to("#intro-btn", {
    opacity: 1,
    y: 0,
    delay: 0.2,
    duration: 0.5,
    ease: "circ.out",
  });
});
</script>
