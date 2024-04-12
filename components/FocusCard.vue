<template>
  <section
    class="w-[345px] text-center space-y-4 md:space-y-0 md:w-full md:flex md:even:flex-row-reverse md:items-center md:justify-evenly md:gap-36 md:pb-56 md:pt-32"
  >
    <!-- :src="`~/assets/images/${card.image}`" -->
    <img :src="cardImage" alt="relaxing woman" class="w-full md:w-2/4" />
    <div class="text-start space-y-2 max-w-sm">
      <h3>{{ card.title }}</h3>
      <p class="text-body-small">
        {{ card.body }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  card: {
    id: number;
    title: string;
    body: string;
    image: string;
  };
}>();

const cardImage = computed(() => {
  return "_nuxt/assets/images/" + props.card.image;
});
</script>
