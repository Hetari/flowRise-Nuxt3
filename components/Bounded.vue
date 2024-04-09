<template>
  <component
    :is="as || 'section'"
    class="py-8 md:py-12 lg:py-16 xl:py-20 px-8 md:px-16 lg:px-24 xl:px-36 max-w-7xl mx-auto"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
defineProps<{
  as?: string;
}>();
</script>
