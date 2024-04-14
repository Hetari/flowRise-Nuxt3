<template>
  <section
    class="space-y-8 max-w-[1400px] m-auto opacity-0 translate-y-20"
    id="users-said"
  >
    <h2 class="text-body-normal text-center">What our users say</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <UserCard v-for="user in usersCommunity" :key="user.id" :user="user" />
    </div>
  </section>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

type user = {
  id: number;
  name: string;
  comment: string;
  image: string;
  jobTitle: string;
};

const usersCommunity: user[] = [
  {
    id: 1,
    name: "Emily W.",
    comment:
      "Flowrise has revolutionized my workday! It adapts to my  energy and helps me optimize my daily tasks. I'm more productive and happier than ever!",
    image: "./Emily W.png",
    jobTitle: "UX Designer",
  },
  {
    id: 2,
    name: "Mark R.",
    comment:
      "Before Flowrise, I was always running against the clock. Now, I work in harmony with my natural rhythms. My productivity and wellbeing have never been better!",
    image: "./Mark R.png",
    jobTitle: "Nonprofit founder",
  },
  {
    id: 3,
    name: "Ayesha W.",
    comment:
      "Flowrise has made burnout a thing of the past. It's a game-changer for work-life balance. It's not just a productivity app—it's a lifestyle enhancer.",
    image: "./Ayesha W.png",
    jobTitle: "Digital Marketing Specialist",
  },
];

onMounted(() => {
  $gsap.to("#users-said", {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#users-said",
      start: "top 80%",
      end: "bottom 70%",
      scrub: true,
    },
    duration: 1,
    ease: "circ.out",
  });
});
</script>
