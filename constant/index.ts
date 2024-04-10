type navLink = {
  name: string;
  path: string;
};

const navLinks: navLink[] = [
  {
    name: "Features",
    path: "/features",
  },
  {
    name: "About",
    path: "/about",
  },
];

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
    image: "Emily W.png",
    jobTitle: "UX Designer",
  },
  {
    id: 2,
    name: "Mark R.",
    comment:
      "Before Flowrise, I was always running against the clock. Now, I work in harmony with my natural rhythms. My productivity and wellbeing have never been better!",
    image: "Mark R.png",
    jobTitle: "Nonprofit founder",
  },
  {
    id: 3,
    name: "Ayesha W.",
    comment:
      "Flowrise has made burnout a thing of the past. It's a game-changer for work-life balance. It's not just a productivity app—it's a lifestyle enhancer.",
    image: "Ayesha W.png",
    jobTitle: "Digital Marketing Specialist",
  },
];

export { navLinks, usersCommunity };
