/* Portfolio renderer — edit content in data.js instead of changing this file. */
(() => {
 'use strict';
 const d = window.PORTFOLIO;
 const $ = s => document.querySelector(s);
 const el = (tag, cls, text) => {const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=String(text);return n};
 const add = (node,...children) => {children.forEach(c=>node.append(c));return node};
 const safeLink = url => { if(!url)return ''; try {const u=new URL(url,location.href);return ['http:','https:','mailto:'].includes(u.protocol)?url:''}catch{return ''}};
 const tags = values => {const t=el('div','tags');(values||[]).forEach(v=>add(t,el('span','tag',v)));return t};
 const image = (src,alt,cls='')=>{const n=el('img',cls);n.src=src||'assets/project-dashboard.svg';n.alt=alt||'';n.loading='lazy';n.onerror=()=>{n.onerror=null;n.src='assets/project-dashboard.svg'};return n};
 const setText = (id,value) => {const n=$(id);if(n)n.textContent=value||''};
 const setHref = (id,url) => {const n=$(id);if(n){const v=safeLink(url);if(v)n.href=v;else {n.removeAttribute('href');n.title='Add a valid link in data.js';}}};
 document.title=`${d.name} | ${d.headline}`;
 $('meta[name="description"]').content=`${d.name} — ${d.headline}. Explore projects, experience and achievements.`;
 setText('#brand-initials',d.initials||d.name.split(' ').map(x=>x[0]).slice(0,2).join(''));
 setText('#brand-name',d.name);setText('#footer-name',d.name+'.');setText('#eyebrow',d.eyebrow);setText('#first-name',d.name.toUpperCase());setText('#summary',d.summary);setText('#about-text',d.about);setText('#location',d.location);setText('#year',new Date().getFullYear());
 setHref('#github-link',d.github);setHref('#linkedin-link',d.linkedin);setHref('#contact-linkedin',d.linkedin);setHref('#email-link','mailto:'+d.email);setHref('#contact-email','mailto:'+d.email);setHref('#resume-link',d.resume);
 (d.focus||[]).forEach(v=>add($('#focus'),el('span','',v)));
 (d.stats||[]).forEach(s=>{const box=el('div');add(box,el('strong','',s.value),el('span','',s.label));add($('#stats'),box)});
 const modal=$('#detail-modal'),body=$('#modal-body');
 function openDetail(kind,item){body.replaceChildren();const head=image(item.image,`${item.title} image`,'modal-hero');body.append(head,el('div','modal-kicker',`${kind.toUpperCase()}${item.category?' / '+item.category:''}`),el('h2','',item.title));
 const meta=el('div','modal-meta',[item.organization,item.issuer,item.period,item.date,item.year,item.role,item.duration,item.location].filter(Boolean).join(' • '));body.append(meta);
 if(item.overview||item.details||item.summary)body.append(el('p','',item.overview||item.details||item.summary));
 if(item.details && item.summary && !item.overview)body.append(el('p','',item.summary));
 if(item.stack?.length){body.append(el('h3','','TECHNOLOGIES'),tags(item.stack))}
 if(item.highlights?.length){body.append(el('h3','','KEY DETAILS'));const ul=el('ul');item.highlights.forEach(h=>add(ul,el('li','',h)));body.append(ul)}
 if(item.gallery?.length){body.append(el('h3','','GALLERY'));const g=el('div','modal-gallery');item.gallery.forEach((src,i)=>g.append(image(src,`${item.title} screenshot ${i+1}`)));body.append(g)}
 const links=el('div','modal-links');[['Source code',item.github],['Live demo',item.demo],['Read more',item.link]].forEach(([label,url])=>{if(safeLink(url)){const a=el('a','',label+' ↗');a.href=url;a.target='_blank';a.rel='noopener noreferrer';links.append(a)}});if(links.childElementCount)body.append(links);
 modal.showModal();document.body.style.overflow='hidden';history.replaceState(null,'',`#${kind}-${encodeURIComponent(item.id)}`);$('#modal-close').focus();}
 function closeDetail(){modal.close();document.body.style.overflow='';history.replaceState(null,'',`#${modal.dataset.section||'projects'}`)};
 $('#modal-close').addEventListener('click',closeDetail);
 modal.addEventListener('click',e=>{if(e.target===modal)closeDetail()});modal.addEventListener('close',()=>{document.body.style.overflow=''});
 modal.addEventListener('cancel',e=>{e.preventDefault();closeDetail()});
 function projectCard(p){const b=el('button','card');b.type='button';b.setAttribute('aria-label',`View ${p.title} project details`);const art=el('div','card-image');add(art,image(p.image,p.imageAlt||`${p.title} image`),el('span','card-type',p.category));const content=el('div','card-body');content.append(el('span','card-meta',p.year+(p.featured?'  /  FEATURED':'')),el('h3','',p.title),el('p','',p.teaser),tags(p.stack.slice(0,4)));const base=el('div','card-bottom');add(base,el('span','','View case study'),el('b','','↗'));content.append(base);add(b,art,content);b.addEventListener('click',()=>{modal.dataset.section='projects';openDetail('project',p)});return b}
 function renderProjects(filter='All'){const grid=$('#projects-grid');grid.replaceChildren();const projects=(d.projects||[]).filter(p=>filter==='All'||p.category===filter);projects.forEach(p=>grid.append(projectCard(p)));if(!projects.length)grid.append(el('div','empty','No projects in this category yet. Add one in data.js.'))}
 const filters=['All',...new Set((d.projects||[]).map(p=>p.category))];filters.forEach((f,i)=>{const btn=el('button','filter-btn'+(!i?' active':''),f);btn.type='button';btn.addEventListener('click',()=>{$$('.filter-btn').forEach(x=>x.classList.remove('active'));btn.classList.add('active');renderProjects(f)});$('#project-filters').append(btn)});function $$(s){return document.querySelectorAll(s)}renderProjects();
 (d.experience||[]).forEach(x=>{const b=el('button','exp-card');b.type='button';b.setAttribute('aria-label',`Read about ${x.title}`);const content=el('div','exp-content');add(content,el('span','exp-period',x.period),el('h3','',x.title),el('div','exp-org',x.organization),el('p','',x.summary));add(b,el('span','exp-icon','✧'),content,el('span','exp-arrow','↗'));b.addEventListener('click',()=>{modal.dataset.section='experience';openDetail('experience',x)});$('#experience-grid').append(b)});
 (d.achievements||[]).forEach(x=>{const b=el('button','card');b.type='button';const art=el('div','card-image');add(art,image(x.image,`${x.title} illustration`),el('span','card-type','Recognition'));const content=el('div','card-body');add(content,el('span','card-meta',x.date+' / '+x.issuer),el('h3','',x.title),el('p','',x.summary));const base=el('div','card-bottom');add(base,el('span','','View achievement'),el('b','','↗'));content.append(base);add(b,art,content);b.addEventListener('click',()=>{modal.dataset.section='achievements';openDetail('achievement',x)});$('#achievements-grid').append(b)});
 (d.skills||[]).forEach(s=>{const box=el('div','skill-group');add(box,el('h3','',s.group),tags(s.items));$('#skills-grid').append(box)});
 (d.education||[]).forEach(e=>{const card=el('div','edu-card'),inside=el('div');add(inside,el('h3','',e.degree),el('p','',e.school),el('p','',e.details));add(card,inside,el('span','',e.period));$('#education-grid').append(card)});
 const nav=$('#nav-links');$('#menu-button').addEventListener('click',()=>{const opened=nav.classList.toggle('open');$('#menu-button').setAttribute('aria-expanded',String(opened))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');$('#menu-button').setAttribute('aria-expanded','false')}));
 const fragment=decodeURIComponent(location.hash.substring(1));const parts=/^(project|experience|achievement)-(.+)$/.exec(fragment);if(parts){const kind=parts[1],items=kind==='project'?d.projects:kind==='experience'?d.experience:d.achievements;const found=items.find(i=>i.id===parts[2]);if(found){modal.dataset.section=kind==='project'?'projects':kind==='achievement'?'achievements':'experience';openDetail(kind,found)}}
})();
