const skills: {
  title: string
  learnt: string
}[] = [
    { title: "html 5", learnt: "90%", },
    { title: "css", learnt: "65%" },
    { title: "javascript", learnt: "65%", },
    { title: "react", learnt: "65%", },
    { title: "typescript", learnt: "75%", },
    { title: "node js", learnt: "35%", },
    { title: "figma", learnt: "60%" },
    { title: "illustrator", learnt: "60%" }
  ]

const FuturePlans: { title: string, status?: string }[] = [
  { title: "web developer", status: "Present" },
  { title: "software engineer" },
  { title: "Ethical hacker", },
  { title: "Designer" },
  { title: "Teachear & learner" },
  { title: "maybe polition too" }
]

const folios: { title: string[], count: string }[] = [
  { title: ["Projects", "completed"], count: "10+" },
  { title: ["Years", "of experience"], count: "2years+" },
  { title: ["Served", "clients"], count: "0" },
  { title: ["Custorer", "reviews"], count: "0" }
]
export { skills, FuturePlans, folios }