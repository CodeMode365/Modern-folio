type projectItems = {
  title: string,
  img: string,
  github: string,
  live?: string
}

const projectsDetail: projectItems[] = [
  {
    title: "Champion Fido",
    img: "./img/folios/champ.png",
    github: "https://github.com/CodeMode365/Champion_Fido",
  }, {
    title: "Raven Hunter",
    img: "./img/folios/raven.png",
    github: "https://github.com/CodeMode365/Raven_hunter",
  }, {
    title: "University Site",
    img: "./img/folios/college.png",
    github: "https://github.com/CodeMode365/University"
  }, {
    title: "Quote Generator",
    img: "./img/folios/quote.png",
    github: "https://github.com/CodeMode365/Quote-Generator",
    live: "https://quote-gen-codemode365.netlify.app/"
  }, {
    title: "Chat-gpt clone",
    img: "./img/folios/gpt.png",
    github: "https://github.com/CodeMode365/ChatWithMe"
  }
]

export default projectsDetail