import { useEffect } from 'react';
import { Navigation, Footer, QualificationCard, SocialIcon, Arrow, useAnnotations, useScrollAnimations } from './components';
import { profile, education, experience, featuredProjects, projects, teachingStory } from './content';
import { TeachingPhoto, TeachingSectionPhotos } from './TeachingPhotos';
import computer from '../images/computer.svg';
import portrait from '../images/prabesh.jpg';
import contact from '../images/contact.svg';
import artjunks from '../images/artjunks.png';
import fardi from '../images/fardi.png';
import calculator from '../images/calculator.png';

const webProjects = [
  {
    title: 'The Point', stack: 'HTML · CSS',
    description: 'A front-end implementation of The Point website template, with navigation, profile layouts, project previews, and a multi-column footer.',
    source: 'https://github.com/prabesh013/Design-Final-Assignment',
    preview: 'https://prabesh013.github.io/Design-Final-Assignment/index.html',
  },
  { title: 'ArtJunks', image: artjunks, description: 'Responsive website design from Figma.', preview: 'https://figma-responsive-design-mockup.vercel.app/', source: 'https://github.com/prabesh013/figma-responsive-design-mockup' },
  { title: 'Fardi Sahin', image: fardi, description: 'Responsive website design from Figma.', preview: 'https://figma-design-desktop.vercel.app/', source: 'https://github.com/prabesh013/figma-design-desktop' },
  { title: 'Scientific Calculator', image: calculator, description: 'A replica of Google’s scientific calculator. An experimental project with known bugs.', preview: 'https://scientific-calculator-dun.vercel.app/', source: 'https://github.com/prabesh013/scientific-calculator' },
];

function ProjectGrid({ items }) {
  return <div className="row gy-4">
    {items.map(project => <div className="col-12 col-md-6 col-lg-4" data-aos="flip-left" key={project.title}>
      <article className="card h-100">
        <div className="card-body p-4 d-flex flex-column">
          <h4 className="h5 card-title">{project.title}</h4>
          <p className="project-stack">{project.stack}</p>
          <p className="card-text">{project.description}</p>
          {project.status && <p className="project-status">{project.status}</p>}
          {(project.preview || project.source) && <div className="project-actions mt-auto pt-3">
            {project.preview && <a href={project.preview} className="text-link" aria-label={`${project.previewLabel || 'Preview'}: ${project.title}`}>
              {project.previewLabel || 'Preview'} <Arrow />
            </a>}
            {project.source && <a href={project.source} className="text-link" aria-label={`${project.title} on GitHub`}>GitHub <Arrow /></a>}
          </div>}
        </div>
      </article>
    </div>)}
  </div>;
}

function Home() {
  return <>
    <section id="hero" className="full-height d-flex">
      <div className="container d-flex"><div className="row mx-auto w-100">
        <div className="col-12 col-lg-8 d-flex flex-column justify-content-center text-center text-lg-start">
          <h1>I'm <span className="name">Prabesh</span> Nepal</h1>
          <p className="lead mt-3">I love to solve <span className="cs">CS</span> problems <span className="fw-bold">[P != NP]</span> <span className="fs-4">🤔</span><br />and scratch my head.<span className="st"> Live Long and Prosper</span> <span className="fs-4">🖖</span></p>
          {profile.resume && <a href={profile.resume} className="mt-5 align-self-center align-self-lg-start btns" id="resume">Resume/CV</a>}
        </div>
        <div className="d-none d-lg-block col-lg-4"><img src={computer} alt="" className="img-fluid h-100" /></div>
      </div></div>
    </section>
    <section id="about" className="full-height d-flex">
      <div className="container"><h2>About me</h2><div className="row pt-5">
        <div className="col-12 col-lg-6 px-5" data-aos="fade-left"><img src={portrait} alt="Prabesh Nepal" className="img-fluid" id="personal-img" width="1242" height="1533" loading="lazy" /></div>
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between" data-aos="fade-right"><div>
          <p className="about-text mt-5 mt-lg-0">Hello there!<br />I'm Prabesh, a <span className="fw-bold fst-italic ce">computer engineer</span> from <span className="location">Kathmandu, Nepal</span>. I started learning to code in ninth grade, and I still enjoy a problem that makes me scratch my head. A little mathematics, a question from theoretical computer science, or figuring out why a piece of code behaves the way it does—that's my kind of curiosity.</p>
          <p>I never pictured myself standing in front of a classroom. Then I tried teaching, and I was hooked. Years after learning to code as a ninth-grader, I found myself teaching ninth-graders. Their questions, enthusiasm, and those “Ah, okay!” moments made teaching a much more personal part of my life than I had expected.</p>
          <p>These days, I'm a student again, studying computer science at Northeastern University in Boston. This is my little corner of the internet for things I'm building, ideas I'm exploring, and stories I want to remember. I'm glad you're here.</p>
          <a className="text-link" href="./teaching-journey.html">Read my teaching journey <Arrow /></a>
          <hr />
          <ul className="social-links ps-0 fs-1">
            <li className="mx-1 d-inline-block"><a href={profile.github} className="social-icons" aria-label="Prabesh on GitHub"><SocialIcon kind="github" /></a></li>
            <li className="mx-1 d-inline-block"><a href={profile.linkedin} className="social-icons" aria-label="Prabesh on LinkedIn"><SocialIcon kind="linkedin" /></a></li>
          </ul>
        </div><p id="sign" className="mb-0">Prabesh . N</p></div>
      </div></div>
    </section>
    <section id="qualifications" className="full-height d-flex">
      <div className="container"><h2 className="mb-5">Qualifications</h2><div className="row g-5">
        <div className="col-12 col-lg-6"><h3 className="mb-3" id="edu">Education</h3><div className="educations d-flex flex-column qualification-list">{education.map(item => <QualificationCard item={item} animation="fade-right" key={item.title} />)}</div></div>
        <div className="col-12 col-lg-6"><h3 className="mb-3" id="exe">Experience</h3><div className="experiences d-flex flex-column qualification-list">{experience.map(item => <QualificationCard item={item} animation="fade-left" key={item.organization} />)}</div></div>
      </div></div>
    </section>
    <section id="projects" className="full-height d-flex">
      <div className="container"><h2 className="mb-5">Projects</h2>
        <h3 className="mb-4">Selected projects</h3>
        <ProjectGrid items={featuredProjects} />
        <h3 className="mt-5 mb-4">More projects</h3>
        <ProjectGrid items={projects} />
        <h3 className="mt-5 mb-4">Web experiments</h3><div className="row gy-4">
        {webProjects.map(project => <div className="col-12 col-md-6 col-lg-4" data-aos="flip-left" key={project.title}><article className="card h-100">
          {project.image && <img src={project.image} className="card-img-top" alt={`${project.title} website preview`} loading="lazy" />}
          <div className="card-body"><h4 className="h5 card-title">{project.title}</h4><p className="card-text">{project.description}</p>
            <a href={project.preview} className="project-links" aria-label={`Preview ${project.title}`}>Preview <Arrow /></a><span aria-hidden="true"> | </span><a href={project.source} className="project-links" aria-label={`${project.title} on GitHub`}>GitHub <Arrow /></a>
          </div>
        </article></div>)}
      </div></div>
    </section>
    <section id="contact" className="full-height d-flex">
      <div className="container"><h2>Get In Touch</h2><div className="row">
        <div className="col-12 col-lg-6 p-5 text-center" data-aos="fade-right"><img src={contact} alt="" className="img-fluid w-75" loading="lazy" /></div>
        <div className="col-12 col-lg-6 p-4 p-md-5" data-aos="fade-left">
          <form action="https://formbold.com/s/3VpZd" method="POST"><div className="row g-3">
            <div className="col-12 col-sm-6"><label htmlFor="contact-name" className="form-label">Your name</label><input id="contact-name" type="text" className="form-control" name="name" autoComplete="name" required /></div>
            <div className="col-12 col-sm-6"><label htmlFor="contact-email" className="form-label">Your email</label><input id="contact-email" type="email" className="form-control" name="email" autoComplete="email" required /></div>
            <div className="col-12"><label htmlFor="contact-message" className="form-label">Your message</label><textarea className="form-control" id="contact-message" rows="6" name="message" required /></div>
          </div><button type="submit" className="btns mt-4">Send it</button></form>
        </div>
      </div></div>
    </section>
  </>;
}

function Blog() {
  return <section className="blog-page container">
    <h1 className="text-center mb-5">Latest Blog Posts</h1>
    <article className="card featured-story mx-auto"><div className="card-body p-4 p-md-5">
      <p className="story-meta">Personal reflections · {teachingStory.status}</p>
      <h2 className="story-card-title"><a href="./teaching-journey.html">{teachingStory.title}</a></h2>
      <p className="lead my-4">{teachingStory.subtitle}</p>
      <p>{teachingStory.introduction}</p>
      <a className="text-link" href="./teaching-journey.html">Read the story <Arrow /></a>
    </div></article>
  </section>;
}

function TeachingJourney() {
  return <article className="blog-page container teaching-story">
    <a href="./blog.html" className="text-link">← All posts</a>
    <header className="mt-5 mb-5"><p className="story-meta">Personal reflections · {teachingStory.status}</p>
      <h1>I never thought I would become a <span className="teaching-highlight">teacher</span></h1>
      <p className="lead mt-4">{teachingStory.subtitle}</p><p className="text-muted">By Prabesh Nepal</p>
    </header>
    <TeachingPhoto name="cover" eager />
    <div className="story-body"><p className="lead">{teachingStory.introduction}</p>
      {teachingStory.sections.map(section => <section key={section.heading}>
        <h2>{section.heading}</h2>
        {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <TeachingSectionPhotos section={section.heading} />
      </section>)}
    </div>
    <footer className="border-top mt-5 pt-4"><a href="./index.html#about" className="text-link">More about me <Arrow /></a></footer>
  </article>;
}

export default function App() {
  const pathname = window.location.pathname;
  const page = pathname.endsWith('/teaching-journey.html') ? 'story' : pathname.endsWith('/blog.html') ? 'blog' : 'home';
  useAnnotations();
  useScrollAnimations();
  useEffect(() => {
    // React renders after the browser's initial fragment lookup on a direct URL.
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);
  return <><Navigation page={page} /><main id="main" tabIndex="-1">{page === 'home' ? <Home /> : page === 'blog' ? <Blog /> : <TeachingJourney />}</main><Footer /></>;
}
