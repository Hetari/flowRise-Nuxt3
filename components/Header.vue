<template>
  <Bounded
    :as="isFooter ? 'footer' : 'Header'"
    class="flex items-center justify-between"
    :class="{ 'bg-white': isFooter }"
  >
    <NuxtLink class="p-3 -m-3" to="/"> <Logo /> </NuxtLink>

    <p v-if="isFooter" class="text-xs text-black">
      &copy; {{ new Date().getFullYear() }} Flow Rise
    </p>

    <!-- <ul class="flex gap-10">
      <li v-for="link in navLinks" :key="link.name">
        <NuxtLink :to="link.path" class="nav-link p-3 -m-3">
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul> -->
  </Bounded>
</template>

<script setup lang="ts">
type navLink = {
  name: string;
  path: string;
};

const navLinks: navLink[] = [
  {
    name: "Features",
    path: "Features",
  },
  {
    name: "About",
    path: "About",
  },
];

defineProps<{
  isFooter?: boolean;
}>();
</script>
