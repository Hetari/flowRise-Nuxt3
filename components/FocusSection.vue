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
import { FocusCardInfo } from "~/constant";
</script>
