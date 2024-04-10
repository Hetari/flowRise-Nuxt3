<template>
  <div
    class="bg-white rounded-3xl px-12 py-10 w-full text-start text-2xl grid content-between"
  >
    <p>"{{ user.comment }}"</p>

    <div class="flex items-center gap-4 mt-8">
      <img :src="user.image" :alt="user.name" class="size-10 rounded-full" />
      <div>
        <h3 class="text-body-small !font-semibold">{{ user.name }}</h3>
        <p class="text-body-small text-[#6F6F6F]">{{ user.jobTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  user: {
    id: number;
    name: string;
    image: string;
    comment: string;
    jobTitle: string;
  };
}>();
</script>
