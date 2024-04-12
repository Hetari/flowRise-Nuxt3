<template>
  <div
    id="user-card"
    class="bg-white rounded-3xl px-12 py-10 w-full text-start text-2xl grid content-between shadow-md scale-75"
  >
    <p id="comment" class="translate-y-16 opacity-0">"{{ user.comment }}"</p>

    <div
      id="comment-author"
      class="flex items-center gap-4 mt-8 translate-y-16 opacity-0"
    >
      <img
        :src="'~/assets/images/' + user.image"
        :alt="user.name"
        class="size-10 rounded-full"
      />
      <div>
        <h3 class="text-body-small !font-semibold">{{ user.name }}</h3>
        <p class="text-body-small text-[#6F6F6F]">{{ user.jobTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";

const props = defineProps<{
  user: {
    id: number;
    name: string;
    image: string;
    comment: string;
    jobTitle: string;
  };
}>();

onMounted(() => {
  gsap.to("#user-card", {
    scale: 1,
    duration: 0.2,
    ease: "sine.inOut",
    scrollTrigger: {
      trigger: "#users-said",
      start: "top 80%",
      end: "bottom 60%",
      scrub: true,
    },
  });
  gsap.to("#comment", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "sine.inOut",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#users-said",
      start: "top 80%",
      end: "bottom 70%",
      scrub: true,
    },
  });
  gsap.to("#comment-author", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "sine.inOut",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#users-said",
      start: "top 80%",
      end: "bottom 70%",
      scrub: true,
    },
  });
});
</script>
