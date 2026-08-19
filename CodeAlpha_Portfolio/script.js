"use strict"
const currentYear = new Date().getFullYear();
console.log(currentYear)
const yearContainer = document.querySelector('.year-container');
yearContainer.innerHTML = `&copy;${currentYear}Segun Adewole`
const experieneContainer = document.querySelector('.Experience-container')
const projectsContainer = document.querySelector('.projects-container')
const Experiences = [
    {
        role: 'Frontend Developer',
        duration: '2023-Present',
        Company: 'Vercel',
        description: 'Loading the DX team building developer tooling and dashboard infrastructure. Shipped the new project overview redesign used by 1M+ developers'  
    },
    {
        role: 'Frontend Developer',
        duration: '2021-2023',
        Company: 'Linear',
        description: 'Core contributor to the issue tracking UI. Built the real-time collaboration layer and improved keyboard navigation accessibility across the product'  
    },
    {
        role: 'UI Engineer-Contract',
        duration: '2020-2021',
        Company: 'Stripe',
        description: 'Work on Stripe Dashboard internals - rebuilt the disputes flow and contributed performance improvements reducing LCP by 38%'  
    }
];

const mappingExperience = () => {
   const mappedExperiences = Experiences.map(experience => {
    return `<div class="experience">
    <p class="bullet">&#9654;</p>
    <section class="experience-details">
    <section class="role-duration">
    <h2>${experience.role}</h2>
    <p class="duration">${experience.duration}</p>
    </section>
    <h3>${experience.Company}</h3>
    <p class="description">${experience.description}</p>
    </section>
    </div>`
   }).join('')
 experieneContainer.innerHTML = mappedExperiences;
}
mappingExperience()
const Projects = [
    {
       classification: 'SaaS &bull; Analytics &bull; PosterCard',
       Name: 'Pulse Dashboard',
       description: 'Real-time analytics platform built for growth teams. Custom charting engine, live data streams over WebSockets, and a fully themeable design system.',
       stack: ['React js', 'TypeScript', 'Supabase'],
       link: 'https://github.com/',
       ImageUrl: 'images/Pict1.jpg'
    },
    {
       classification: 'Open Source &bull; UI Library',
       Name: 'Forma Design System',
       description: 'Accessible, headless component library.Zero dependencies, fully typed, shipped as an npm package with interactive docs',
       stack: ['React js', 'Redux UI', 'Rollup'],
       link: 'https://github.com/',
       ImageUrl: 'images/Pic2.jpg'
    },
    {
       classification: 'Mobile &bull; Productivity',
       Name: 'Pulse Dashboard',
       description: 'Real-time analytics platform built for growth teams. Custom charting engine, live data streams over WebSockets, and a fully themeable design system.',
       stack: ['React js', 'TypeScript', 'Supabase'],
       link: 'https://github.com/',
       ImageUrl: 'images/Pic3.jpg'
    },
    {
       classification: 'SaaS &bull; Analytics &bull; PosterCard',
       Name: 'Pulse Dashboard',
       description: 'Real-time analytics platform built for growth teams. Custom charting engine, live data streams over WebSockets, and a fully themeable design system.',
       stack: ['React js', 'TypeScript', 'Supabase'],
       link: 'https://github.com/',
       ImageUrl: 'images/Pic4.jpg'
    },
]
const mappingProjects = () => {
    const mappedProjects = Projects.map(project => {
        return `<div class="project">
        <div class="Project-image-container">
        <img src="${project.ImageUrl}">
        </div>
        <section class="project-details">
           <p class="project-classification">
           ${project.classification}
           </p>
           <h3>${project.Name}</h3>
           <p class="project-description">${project.description}</p>
           <ul class="project-stack">
           ${project.stack.map(stack =>{
            return `<li>${stack}</li>`
           }).join('')}
           </ul>
           <a class="project-link" href="${project.link}">View project &nearr;</a>
        </section>
        </div>`
    }).join('');
projectsContainer.innerHTML = mappedProjects;

}
mappingProjects()