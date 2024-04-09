<template>
  <Header />
  <slot />

  <Header :isFooter="true" />

  <div
    class="fixed inset-0 z-[-1] bg-gradient-to-tr from-emerald-50 to-cyan-50"
  />
</template>

<script setup lang="ts"></script>
