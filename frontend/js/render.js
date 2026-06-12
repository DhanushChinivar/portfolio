// Pure DOM renderers. All data goes in via textContent — never innerHTML —
// so Phase 3 user-sourced data can't inject markup.

const PLACEHOLDER_PREFIX = 'PLACEHOLDER:';

function isPlaceholder(value) {
  return typeof value === 'string' && value.startsWith(PLACEHOLDER_PREFIX);
}

// Returns { text, placeholder } with the prefix stripped for display.
function unwrap(value) {
  if (isPlaceholder(value)) {
    return { text: value.slice(PLACEHOLDER_PREFIX.length).trim(), placeholder: true };
  }
  return { text: value, placeholder: false };
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) {
    const { text: display, placeholder } = unwrap(text);
    node.textContent = display;
    if (placeholder) node.classList.add('placeholder');
  }
  return node;
}

function link(href, text, className) {
  const { text: displayHref, placeholder } = unwrap(href);
  const a = el('a', className, text ?? displayHref);
  a.href = displayHref;
  if (placeholder) a.classList.add('placeholder');
  if (/^https?:/.test(displayHref)) {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  }
  return a;
}

export function renderHero(profile) {
  const root = document.getElementById('hero-content');
  root.replaceChildren();

  const avatar = el('img', 'hero-avatar');
  avatar.src = profile.avatarUrl;
  avatar.alt = profile.name;
  avatar.width = 120;
  avatar.height = 120;

  const text = el('div', 'hero-text');
  text.append(
    el('p', 'hero-greeting', 'Hi, my name is'),
    el('h1', 'hero-name', profile.name),
    el('p', 'hero-tagline', profile.tagline),
    el('p', 'hero-bio', profile.bio),
    el('p', 'hero-location', `📍 ${profile.location}`)
  );

  const links = el('div', 'hero-links');
  links.append(link(profile.links.github, 'GitHub', 'btn'));
  if (profile.resumeUrl) links.append(link(profile.resumeUrl, 'Resume', 'btn btn-outline'));
  text.append(links);

  root.append(avatar, text);
}

export function renderSkills(profile) {
  const root = document.getElementById('skills-list');
  root.replaceChildren();
  for (const group of profile.skills) {
    const card = el('div', 'skill-group');
    card.append(el('h3', 'skill-category', group.category));
    const tags = el('div', 'tags');
    for (const item of group.items) tags.append(el('span', 'tag', item));
    card.append(tags);
    root.append(card);
  }
}

export function renderProjects(projects) {
  const root = document.getElementById('projects-grid');
  root.replaceChildren();
  const sorted = [...projects].sort((a, b) => a.order - b.order);
  for (const project of sorted) {
    const card = el('article', 'project-card');
    card.append(
      el('h3', 'project-name', project.name),
      el('p', 'project-desc', project.description)
    );
    const tags = el('div', 'tags');
    for (const tech of project.tech) tags.append(el('span', 'tag', tech));
    card.append(tags);

    const links = el('div', 'project-links');
    links.append(link(project.repoUrl, 'Code ↗'));
    if (project.liveUrl) links.append(link(project.liveUrl, 'Live ↗'));
    card.append(links);
    root.append(card);
  }
}

export function renderExperience(profile) {
  const root = document.getElementById('experience-timeline');
  root.replaceChildren();

  const work = el('div', 'timeline');
  for (const job of profile.experience) {
    const item = el('div', 'timeline-item');
    const head = el('div', 'timeline-head');
    head.append(el('h3', 'timeline-role', job.role), el('span', 'timeline-company', job.company));
    const { text: start } = unwrap(job.start);
    const period = `${start} — ${job.end ? unwrap(job.end).text : 'Present'}`;
    item.append(
      head,
      el('p', 'timeline-meta', isPlaceholder(job.start) ? `PLACEHOLDER: ${period}` : period),
      el('p', 'timeline-summary', job.summary)
    );
    const highlights = el('ul', 'timeline-highlights');
    for (const h of job.highlights) highlights.append(el('li', null, h));
    item.append(highlights);
    work.append(item);
  }
  root.append(work);

  root.append(el('h3', 'subheading', 'Education'));
  const edu = el('div', 'timeline');
  for (const entry of profile.education) {
    const item = el('div', 'timeline-item');
    const head = el('div', 'timeline-head');
    head.append(el('h3', 'timeline-role', entry.degree), el('span', 'timeline-company', entry.institution));
    item.append(head, el('p', 'timeline-meta', `${unwrap(entry.start).text} — ${unwrap(entry.end).text}`));
    edu.append(item);
  }
  root.append(edu);
}

export function renderContact(profile) {
  const root = document.getElementById('contact-content');
  root.replaceChildren();
  root.append(el('p', 'contact-blurb', "Want to work together or just say hi? Reach out — I'm always open to interesting conversations."));

  const links = el('div', 'contact-links');
  const { text: email, placeholder: emailIsPlaceholder } = unwrap(profile.links.email);
  const emailLink = el('a', 'btn', profile.links.email);
  emailLink.textContent = email;
  emailLink.href = `mailto:${email}`;
  if (emailIsPlaceholder) emailLink.classList.add('placeholder');
  links.append(emailLink, link(profile.links.github, 'GitHub', 'btn btn-outline'), link(profile.links.linkedin, 'LinkedIn', 'btn btn-outline'));
  root.append(links);
}

export function renderError(message) {
  const root = document.getElementById('hero-content');
  root.replaceChildren(el('p', 'error', `Couldn't load site data: ${message}`));
}
