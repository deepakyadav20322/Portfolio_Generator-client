// export interface Project {
//     id: string
//     title: string
//     description: string
//     image: string
//     technologies: string[]
//     demoUrl?: string
//     viewUrl?: string
//   }

export interface Project {
     id:string
    title: string
    description: string
    liveLink?: string
    codeLink?: string
    imageSource?: string
    tags?: string[]
  }