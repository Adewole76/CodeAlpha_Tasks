"use strict"
const currentYear = new Date().getFullYear();
console.log(currentYear)
const yearContainer = document.querySelector('.year-container');
yearContainer.innerHTML = `&copy;${currentYear} Segun Adewole`
const hamburgerImage = document.querySelector('.hamburger-image');
const experieneContainer = document.querySelector('.Experience-container')
const projectsContainer = document.querySelector('.projects-container')
const sideBar = document.querySelector('.sidebar');
const hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', function(){
if(sideBar.classList.contains('active')){
  sideBar.classList.remove('active');
  hamburgerImage.src = 'images/hamburger.png';
}else{
  sideBar.classList.add('active');
  hamburgerImage.src = 'images/close.png'
}
})
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

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});


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


  // Ease-out function: fast start, slow finish — feels more natural than linear counting
  function easeOutQuad(t) {
    return t * (2 - t);
  }

  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const duration = 1500; // ms
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuad(progress);
      const current = Math.floor(eased * target);

      el.textContent = current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Snap to exact target at the end to avoid rounding drift
        el.textContent = target.toLocaleString() + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  // Only trigger animation once the element scrolls into view
  const counters = document.querySelectorAll('.stat-number');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target); // run once per element
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));