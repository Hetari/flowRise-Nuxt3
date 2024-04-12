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

type focusCard = {
  id: number;
  title: string;
  body: string;
  image: string;
};

const FocusCardInfo: focusCard[] = [
  {
    id: 0,
    title: "Harmonize your schedule",
    body: "Align tasks with your natural energy rhythms. Embrace tailored productivity.",
    image: "image 20-1.png",
  },
  {
    id: 1,
    title: "Mindful task tracking",
    body: "Blend productivity with mindfulness. Understand your patterns, enhance focus.",
    image: "image 16-1.png",
  },
  {
    id: 2,
    title: "Productivity and self care",
    body: "Beyond task completion. Embrace self-care routines, foster a healthier lifestyle.",
    image: "image 17-1.png",
  },
];

export { navLinks, usersCommunity, FocusCardInfo };
