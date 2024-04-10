<template>
  <section class="space-y-8 max-w-7xl m-auto">
    <h2 class="text-body-normal text-center">What our users say</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <UserCard v-for="user in usersCommunity" :key="user.id" :user="user" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { usersCommunity } from "~/constant";
</script>
