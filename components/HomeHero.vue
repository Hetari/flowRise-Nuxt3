<template>
  <main
    class="max-w-md md:max-w-full m-auto p-12 text-center flex flex-col gap-2 md:gap-4"
  >
    <h1 class="text-body-large text-center">
      Productivity that flows <br />with your life.
    </h1>
    <p class="text-body-normal md:max-w-xl m-auto">
      Unleash your potential by harmonizing your daily tasks and habits with
      your unique energy rhythms.
    </p>

    <div class="pb-2">
      <Button />
    </div>

    <picture class="relative mx-1 md:mx-10">
      <source
        media="(min-width: 640px)"
        srcset="~/assets/images/image10-large.png"
      />

      <img
        src="~/assets/images/image10-small.png"
        alt="Home hero image"
        class="relative w-full z-20"
      />
      <div
        class="absolute -top-14 md:-top-12 left-0 md:left-10 bg-gradient-to-bl from-purple-700 to-cyan-900 size-32 md:size-72 blur-3xl opacity-80 md:opacity-60 z-10"
      ></div>

      <!-- <div
        class="absolute -bottom-10 md:-bottom-32 right-0 bg-gradient-to-br from-purple-700 to-cyan-900 size-40 md:size-96 blur-3xl opacity-80 md:opacity-40 z-10"
      ></div> -->
    </picture>
  </main>
</template>

<script setup lang="ts"></script>
