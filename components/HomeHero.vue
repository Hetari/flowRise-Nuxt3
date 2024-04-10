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

    <picture class="mx-1 md:mx-10">
      <source
        media="(min-width: 640px)"
        srcset="~/assets/images/image10-large.png"
      />

      <img
        src="~/assets/images/image10-small.png"
        alt="Home hero image"
        class="w-full"
      />
    </picture>
  </main>
</template>

<script setup lang="ts"></script>
