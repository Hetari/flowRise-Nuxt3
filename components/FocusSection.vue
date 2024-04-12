<template>
  <section class="grid justify-items-center gap-10 max-w-[1400px] m-auto">
    <FocusCard v-for="card in FocusCardInfo" :key="card.id" :card="card" />
  </section>
</template>

<script setup lang="ts">
import { FocusCardInfo } from "~/constant";
</script>
