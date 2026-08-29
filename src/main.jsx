import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowUpRight,Menu,X,Code2,Layers,Box,ShoppingBag,Sparkles,Mail,Phone,ExternalLink,ChevronDown} from 'lucide-react';
import {motion} from 'framer-motion';
import './style.css';

const liveProjects=[
 {n:'01',title:'InfoTag',cat:'Mobile Application',type:'LIVE PRODUCT',desc:'A production mobile application built with Flutter, Firebase and Node.js, focused on secure authentication, onboarding and practical safety workflows.',url:'https://play.google.com/store/apps/details?id=com.infotag',img:'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=85',stack:['Flutter','Firebase','Node.js','Express']},
 {n:'02',title:'FiguredOutAI',cat:'AI Business Website',type:'LIVE WEBSITE',desc:'A modern AI-focused business website designed to present services, generate leads and communicate automation, workflow and intelligence solutions.',url:'https://figuredoutai.com/',img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85',stack:['React','Vite','Tailwind','Framer Motion']}
];
const templates=[
 {n:'01',title:'House of Aureoné',cat:'Fashion / E-commerce',desc:'Quiet-luxury fashion storefront concept for suits, sarees and fine jewellery, with a streamlined WhatsApp ordering journey.',url:'https://house-of-aureone.vercel.app/',img:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=85'},
 {n:'02',title:'Ember & Bean',cat:'Café / Restaurant',desc:'Warm editorial café experience combining premium brand storytelling, menu presentation and an interactive 3D layer.',url:'https://cafe-template-theta.vercel.app/',img:'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1400&q=85'},
 {n:'03',title:'Nova Estates',cat:'Real Estate',desc:'Premium property concept built around architecture, listings, investment storytelling and an interactive day/night building scene.',url:'https://real-estate-template-ecru.vercel.app/',img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85'},
 {n:'04',title:'FORMA',cat:'Interior Design',desc:'Editorial interior architecture concept focused on materiality, proportion, project storytelling and interactive spatial details.',url:'https://interior-designer-template-navy.vercel.app/',img:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85'},
 {n:'05',title:'Aurelia Grand',cat:'Hospitality',desc:'Cinematic hotel experience showcasing rooms, amenities, dining and immersive 3D spaces for premium hospitality brands.',url:'https://hotel-management-template.vercel.app/',img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85'}
];
const skills=['React','JavaScript','TypeScript','HTML / CSS','Node.js','MongoDB','REST APIs','Three.js','Framer Motion','Tailwind CSS','Git / GitHub','Vercel','Python','PyTorch','TensorFlow','Playwright'];

function ProjectCard({p,live=false,index=0}){return <motion.article className="card" initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.55,delay:index*.06}}>
 <a href={p.url} target="_blank" rel="noreferrer" className="cardVisual"><img src={p.img} alt={p.title}/><div className="visualTop"><span>{p.n}</span><span>{live?'↗ LIVE':'↗'}</span></div><div className="visualHover">Open project <ExternalLink size={15}/></div></a>
 <div className="cardBody"><div className="cardMeta"><span className={live?'liveTag':'templateTag'}>{p.type||'SHOWCASE TEMPLATE'}</span><span>{p.cat}</span></div><h3>{p.title}</h3><p>{p.desc}</p>{live&&<div className="chips">{p.stack.map(s=><span key={s}>{s}</span>)}</div>}<a className="textLink" href={p.url} target="_blank" rel="noreferrer">View live <ArrowUpRight size={15}/></a></div>
 </motion.article>}

function App(){
 const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const f=()=>setScrolled(window.scrollY>25);window.addEventListener('scroll',f);return()=>window.removeEventListener('scroll',f)},[]);
 return <div className="site">
  <nav className={scrolled?'nav scrolled':'nav'}><a className="logo" href="#home">K<span>T</span><i>.</i></a><div className={open?'links show':'links'}>{['Work','Services','About','Contact'].map(x=><a key={x} href={'#'+x.toLowerCase()} onClick={()=>setOpen(false)}>{x}</a>)}<a className="navCta" href="#contact">Start a project <ArrowUpRight size={14}/></a></div><button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></nav>
  <main id="home">
   <section className="hero">
    <div className="heroGrid"><div className="heroCopy"><div className="eyebrow"><span/> FREELANCE WEB DEVELOPER</div><h1>Building digital<br/><em>experiences</em><br/>that matter.</h1><p>I design and develop modern websites, e-commerce products, interactive 3D experiences and practical digital solutions for ambitious businesses.</p><div className="heroBtns"><a className="primary" href="#work">View selected work <ArrowUpRight size={17}/></a><a className="secondary" href="#contact">Let's talk</a></div></div><div className="heroArt"><div className="artGrid"/><div className="portraitCard"><div className="monogram">KT</div><div><small>AVAILABLE FOR</small><strong>FREELANCE<br/>PROJECTS</strong></div><ArrowUpRight size={18}/></div><div className="orbit o1"/><div className="orbit o2"/><div className="heroStat"><b>05+</b><span>showcase<br/>templates</span></div></div></div>
    <div className="heroBottom"><span>BASED IN INDIA · WORKING REMOTELY</span><span>WEB · 3D · E-COMMERCE · AI</span><ChevronDown size={16}/></div>
   </section>
   <section className="ticker"><div>{['WEB DEVELOPMENT','E-COMMERCE','3D EXPERIENCES','FULL-STACK','AI INTEGRATION','RESPONSIVE DESIGN'].map((x,i)=><span key={i}>{x}<b>✦</b></span>)}</div></section>

   <section id="work" className="section work"><div className="sectionIntroHead"><div><p className="kicker">01 / SELECTED WORK</p><h2>Real work.<br/><em>Real proof.</em></h2></div><p>Live products and websites that show how I approach interface design, development, responsiveness and shipping.</p></div><div className="grid two">{liveProjects.map((p,i)=><ProjectCard key={p.title} p={p} live index={i}/>)}</div></section>

   <section className="templateSection"><div className="sectionIntroHead"><div><p className="kicker">02 / SHOWCASE TEMPLATES</p><h2>Designed to show<br/><em>what's possible.</em></h2></div><p>These are concept templates created to demonstrate how a premium digital experience can be shaped for different industries. They are not presented as commissioned client projects.</p></div><div className="grid two">{templates.map((p,i)=><ProjectCard key={p.title} p={p} index={i}/>)}</div></section>

   <section id="services" className="section services"><div className="sectionIntroHead"><div><p className="kicker">03 / WHAT I BUILD</p><h2>From idea<br/><em>to launch.</em></h2></div><p>Focused on clean systems, sharp visual direction and websites that are actually useful to the businesses behind them.</p></div><div className="serviceGrid">{[[Code2,'Business Websites','Responsive, conversion-focused websites for brands, startups and local businesses.'],[ShoppingBag,'E-commerce','Product catalogues, ordering flows, payment-ready interfaces and business integrations.'],[Box,'Interactive 3D','Three.js/WebGL experiences, product showcases and immersive digital scenes.'],[Layers,'Full-Stack Development','Frontend, backend, APIs, databases, authentication and admin dashboards.'],[Sparkles,'AI & Automation','AI features, API integrations and practical workflows that reduce repetitive work.'],[Code2,'Launch & Support','Responsive QA, performance checks, deployment and post-launch improvements.']].map(([Icon,t,d])=><div className="service" key={t}><div className="serviceNo">0{['Business Websites','E-commerce','Interactive 3D','Full-Stack Development','AI & Automation','Launch & Support'].indexOf(t)+1}</div><Icon/><h3>{t}</h3><p>{d}</p><span>↗</span></div>)}</div></section>

   <section className="stack"><div><p className="kicker">04 / TOOLKIT</p><h2>Built with<br/><em>modern tools.</em></h2></div><div className="skillList">{skills.map((s,i)=><span key={i}>{s}</span>)}</div></section>

   <section id="about" className="section about"><div className="aboutGrid"><div><p className="kicker">05 / ABOUT</p><h2>Engineering<br/>with <em>visual craft.</em></h2></div><div className="aboutText"><p>I’m Kartik Thakur, a freelance web developer focused on turning ideas into polished digital products. My work sits across frontend engineering, interactive experiences, AI/ML and software quality.</p><p>I care about the details that make a website feel finished: responsive behavior, clear user journeys, performance, reliable interactions and a visual system that makes a brand memorable.</p><div className="facts"><div><strong>01</strong><span>Modern web development</span></div><div><strong>02</strong><span>Interactive 3D experiences</span></div><div><strong>03</strong><span>AI & digital products</span></div></div></div></div></section>

   <section className="process"><p className="kicker">06 / PROCESS</p><h2>A clear path from<br/><em>idea to production.</em></h2><div className="steps">{[['01','Discover','Understand the business, audience and goals.'],['02','Design','Shape the structure, visual direction and user journey.'],['03','Develop','Build responsive, interactive and maintainable experiences.'],['04','Launch','Test, optimize, deploy and hand over production-ready work.']].map(x=><div className="step" key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></section>

   <section id="contact" className="contact"><div className="contactInner"><p className="kicker">07 / START A PROJECT</p><h2>Have an idea?<br/><em>Let's build it.</em></h2><p>Tell me what you're building, what you need and where you want to take it. I'll help shape the right digital experience.</p><div className="contactBtns"><a href="mailto:kartikthakur2004@gmail.com" className="primary"><Mail size={16}/> Email me</a><a href="tel:+919816278345" className="secondary"><Phone size={16}/> Call me</a></div><div className="contactInfo"><span>kartikthakur2004@gmail.com</span><span>+91 98162 78345</span><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></section>
  </main>
  <footer><span>KT.</span><p>© 2026 Kartik Thakur · Freelance Web Developer</p><a href="#home">Back to top ↑</a></footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
