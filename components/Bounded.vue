<template>
  <component
    :is="as || 'section'"
    class="py-4 md:py-6 lg:py-8 px-8 md:px-16 lg:px-24 xl:px-36"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
defineProps<{
  as?: string;
}>();
</script>
