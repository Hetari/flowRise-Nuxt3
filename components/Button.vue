<template>
  <button
    class="bg-secondary text-white py-3 px-10 text-[16px] rounded-full hover:bg-primary hover:scale-105 hover:shadow-lg transition-[background-color|scale|shadow] duration-300"
    @click="$emit('click')"
  >
    Try for free
  </button>
</template>

<script setup lang="ts"></script>
