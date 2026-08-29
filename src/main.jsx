import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowUpRight,Menu,X,Code2,Layers,Box,ShoppingBag,Sparkles,Mail,Phone,ExternalLink,ChevronDown,Smartphone,Globe2} from 'lucide-react';
import {motion} from 'framer-motion';
import './style.css';

const productionProjects=[
 {n:'01',title:'InfoTag',cat:'AI Safety / Mobile Application',type:'LIVE PRODUCTION APP',status:'Published on Google Play',desc:'An AI-powered personal safety app with SOS alerts, live location sharing, smart risk detection, Human Radar, emergency evidence capture and secure OTP login.',url:'https://play.google.com/store/apps/details?id=com.infotag',img:'https://play-lh.googleusercontent.com/svwSdCa9yONqYl0uiAs-Z3sGbVfor-NU-agpUrnVIowKk9m4JTRTuWyohzDDNGmTm-gDlw1WBioFRI5jpN02Quw%3Dw526-h296',tech:['Flutter','Firebase','Node.js','Express','Firestore'],icon:'mobile'},
 {n:'02',title:'FiguredOutAI',cat:'AI Business / Web Platform',type:'LIVE WEBSITE',status:'Live',desc:'A premium AI business website focused on revenue, operations, automation and intelligent systems, with strong conversion-focused presentation and service storytelling.',url:'https://figuredoutai.com/',img:null,tech:['React','Vite','Tailwind','Framer Motion'],icon:'ai'}
];

const templates=[
 {n:'01',title:'House of Aureoné',cat:'Fashion / E-commerce',desc:'A quiet-luxury fashion storefront concept for suits, sarees and fine jewellery, with a streamlined WhatsApp ordering journey.',url:'https://house-of-aureone.vercel.app/',img:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85'},
 {n:'02',title:'Ember & Bean',cat:'Café / Restaurant',desc:'A warm editorial café experience combining premium brand storytelling, menu presentation and interactive 3D elements.',url:'https://cafe-template-theta.vercel.app/',img:'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85'},
 {n:'03',title:'Nova Estates',cat:'Real Estate',desc:'A premium property experience built around architecture, listings, investment storytelling and an interactive day/night scene.',url:'https://real-estate-template-ecru.vercel.app/',img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85'},
 {n:'04',title:'FORMA',cat:'Interior Design',desc:'An editorial interior architecture concept focused on materiality, proportion, project storytelling and interactive spatial details.',url:'https://interior-designer-template-navy.vercel.app/',img:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85'},
 {n:'05',title:'Aurelia Grand',cat:'Hospitality',desc:'A cinematic hotel experience showcasing rooms, amenities, dining and immersive 3D spaces for premium hospitality brands.',url:'https://hotel-management-template.vercel.app/',img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85'}
];

const skills=['React','JavaScript','HTML / CSS','Node.js','MongoDB','REST APIs','Three.js','Framer Motion','Tailwind CSS','Git / GitHub','Vercel','Python','PyTorch','TensorFlow','Playwright'];

function ProjectVisual({p}){
 if(p.icon==='ai') return <div className="aiVisual"><div className="aiGlow"/><div className="dashTop"><span>FIGUREDOUT AI</span><i>● LIVE</i></div><div className="dashStats"><b><small>PIPELINE LIFT</small>+28%</b><b><small>RESPONSE</small>-64%</b><b><small>AI COVERAGE</small>91%</b></div><div className="dashChart"><span/><span/><span/><span/><span/><span/></div><div className="dashRows"><div>Lead Routing <b>94%</b></div><div>Client Delivery <b>88%</b></div><div>Reporting Sync <b>91%</b></div></div></div>;
 return <img src={p.img} alt={p.title}/>;
}

function App(){
 const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const f=()=>setScrolled(window.scrollY>30);window.addEventListener('scroll',f);return()=>window.removeEventListener('scroll',f)},[]);
 const nav=['Work','Services','About','Contact'];
 return <div className="app">
  <nav className={scrolled?'nav scrolled':'nav'}><a className="logo" href="#home">KT<span>.</span></a><div className={open?'links show':'links'}>{nav.map(x=><a key={x} href={'#'+x.toLowerCase()} onClick={()=>setOpen(false)}>{x}</a>)}<a className="navCta" href="#contact">Start a project <ArrowUpRight size={15}/></a></div><button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></nav>
  <main id="home">
   <section className="hero"><div className="orb orb1"/><div className="orb orb2"/><div className="eyebrow"><span/> FREELANCE WEB DEVELOPER · INDIA</div><motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.8}}>Digital experiences<br/><em>built to stand out.</em></motion.h1><p className="lead">I design and develop modern websites, e-commerce experiences, full-stack products and interactive 3D interfaces for businesses, brands and ambitious ideas.</p><div className="heroBtns"><a className="primary" href="#work">Explore my work <ArrowUpRight/></a><a className="secondary" href="#contact">Let's talk</a></div><div className="scroll">SCROLL TO EXPLORE <ChevronDown size={15}/></div></section>
   <section className="marquee"><div>{['WEB DEVELOPMENT','E-COMMERCE','3D EXPERIENCES','FULL-STACK','AI INTEGRATION','RESPONSIVE DESIGN'].map((x,i)=><span key={i}>{x} <b>✦</b></span>)}</div></section>

   <section id="work" className="section work">
    <div className="sectionHead"><div><p className="kicker">01 / SELECTED WORK</p><h2>Built for<br/><em>the real world.</em></h2></div><p className="sectionIntro">Production work and live digital products, followed by a collection of showcase templates created to demonstrate different industries and visual directions.</p></div>
    <div className="projectGrid productionGrid">{productionProjects.map((p,i)=><motion.article className="projectCard productionCard" key={p.title} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-70px'}} transition={{duration:.55,delay:i*.08}}>
      <a href={p.url} target="_blank" rel="noreferrer" className="cardVisual"><ProjectVisual p={p}/><div className="visualHover">OPEN PROJECT <ExternalLink size={14}/></div><span className="number">{p.n}</span></a>
      <div className="cardBody"><div className="cardTitle"><div><span className="tag liveTag">{p.type}</span><h3>{p.title}</h3><p>{p.cat}</p></div><span className="status">{p.status}</span></div><p className="cardDesc">{p.desc}</p><div className="cardBottom"><div className="techs">{p.tech.map(t=><span key={t}>{t}</span>)}</div><a className="cardLink" href={p.url} target="_blank" rel="noreferrer">View <ArrowUpRight size={15}/></a></div></div>
    </motion.article>)}</div>

    <div className="templateHead"><div><p className="kicker">SHOWCASE TEMPLATES</p><h3>Designed to show<br/><em>what's possible.</em></h3></div><p>These are concept templates — not presented as client projects. Each one demonstrates a polished direction that can be adapted for a real business.</p></div>
    <div className="projectGrid templateGrid">{templates.map((p,i)=><motion.article className="projectCard templateCard" key={p.title} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.5,delay:i*.05}}>
      <a href={p.url} target="_blank" rel="noreferrer" className="cardVisual"><img src={p.img} alt={p.title}/><div className="visualHover">VIEW TEMPLATE <ExternalLink size={14}/></div><span className="number">{p.n}</span><span className="templateBadge">TEMPLATE / CONCEPT</span></a>
      <div className="cardBody"><div className="cardTitle"><div><h3>{p.title}</h3><p>{p.cat}</p></div></div><p className="cardDesc">{p.desc}</p><div className="cardBottom"><span className="miniLabel">SHOWCASE WORK</span><a className="cardLink" href={p.url} target="_blank" rel="noreferrer">Explore <ArrowUpRight size={15}/></a></div></div>
    </motion.article>)}</div>
   </section>

   <section id="services" className="section services"><div className="sectionHead"><div><p className="kicker">02 / WHAT I BUILD</p><h2>From idea to<br/><em>live website.</em></h2></div><p className="sectionIntro">Websites that look premium, communicate clearly and are practical to launch, maintain and grow.</p></div><div className="serviceGrid">{[[Code2,'Business Websites','Responsive, conversion-focused websites for brands, startups and local businesses.'],[ShoppingBag,'E-commerce','Product experiences, catalogues, ordering flows and business integrations.'],[Box,'Interactive 3D','Three.js/WebGL experiences, 3D showcases and immersive product or property presentations.'],[Layers,'Full-Stack Development','Frontend, backend, APIs, databases, authentication and admin dashboards.'],[Sparkles,'AI & Automation','AI-powered features, API integrations and workflows that reduce repetitive work.'],[Smartphone,'Apps & Product UI','Mobile applications, product interfaces and supporting web experiences.']].map(([Icon,t,d])=><div className="service" key={t}><Icon/><h3>{t}</h3><p>{d}</p><span>↗</span></div>)}</div></section>
   <section className="stack"><div><p className="kicker">03 / THE TOOLKIT</p><h2>A stack chosen<br/>for <em>shipping.</em></h2></div><div className="skillList">{skills.map((s,i)=><span key={i}>{s}</span>)}</div></section>
   <section id="about" className="section about"><div className="aboutGrid"><div><p className="kicker">04 / ABOUT</p><h2>Engineering meets<br/><em>visual craft.</em></h2></div><div className="aboutText"><p>I’m Kartik Thakur, a developer who enjoys turning rough ideas into polished digital products. My work sits at the intersection of frontend engineering, interactive experiences, AI/ML and software quality.</p><p>I care about the details that make a site feel finished: responsive behavior, clear user journeys, performance, reliable interactions and a visual system that makes the brand memorable.</p><div className="facts"><div><strong>Web</strong><span>Modern responsive experiences</span></div><div><strong>3D</strong><span>Interactive digital showcases</span></div><div><strong>AI</strong><span>Practical intelligent features</span></div></div></div></div></section>
   <section className="process"><p className="kicker">05 / PROCESS</p><h2>Simple process.<br/><em>Serious output.</em></h2><div className="steps">{[['01','Discover','Understand the business, audience and goals.'],['02','Design','Shape the structure, visual direction and user journey.'],['03','Develop','Build responsive, interactive and maintainable experiences.'],['04','Launch','Test, optimize, deploy and hand over a production-ready site.']].map(x=><div className="step" key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></section>
   <section id="contact" className="contact"><div className="contactInner"><p className="kicker">06 / HAVE A PROJECT?</p><h2>Let's build something<br/><em>worth remembering.</em></h2><p>Tell me what you're building. I'll help turn the idea into a fast, polished and scalable digital experience.</p><div className="contactBtns"><a href="mailto:kartikthakur2004@gmail.com" className="primary"><Mail/> Email me</a><a href="tel:+919816278345" className="secondary"><Phone/> Call me</a></div><div className="contactInfo"><span>kartikthakur2004@gmail.com</span><span>+91 98162 78345</span><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></section>
  </main><footer><span>KT.</span><p>© 2026 Kartik Thakur · Freelance Web Developer</p><a href="#home">Back to top ↑</a></footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
