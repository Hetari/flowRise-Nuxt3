<template>
  <section class="grid justify-items-center gap-10 max-w-[1400px] m-auto">
    <FocusCard
      v-for="(card, index) in FocusCardInfo"
      :key="card.id"
      :card="card"
      :index="index"
      :pos="index % 2 === 0 ? -100 : 100"
    />
  </section>
</template>

<script setup lang="ts">
type focusCard = {
  id: number;
  title: string;
  body: string;
  image: string;
};

const FocusCardInfo: focusCard[] = [
  {
    id: 0,
    title: "Harmonize your schedule",
    body: "Align tasks with your natural energy rhythms. Embrace tailored productivity.",
    image: "./image 20-1.png",
  },
  {
    id: 1,
    title: "Mindful task tracking",
    body: "Blend productivity with mindfulness. Understand your patterns, enhance focus.",
    image: "./image 16-1.png",
  },
  {
    id: 2,
    title: "Productivity and self care",
    body: "Beyond task completion. Embrace self-care routines, foster a healthier lifestyle.",
    image: "./image 17-1.png",
  },
];
</script>
