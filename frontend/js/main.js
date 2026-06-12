import { getProfile, getProjects } from './api.js';
import {
  renderHero,
  renderSkills,
  renderProjects,
  renderExperience,
  renderContact,
  renderError,
} from './render.js';

document.getElementById('year').textContent = new Date().getFullYear();

async function init() {
  try {
    const [profile, projectsData] = await Promise.all([getProfile(), getProjects()]);
    renderHero(profile);
    renderSkills(profile);
    renderProjects(projectsData.projects);
    renderExperience(profile);
    renderContact(profile);
  } catch (err) {
    console.error(err);
    renderError(err.message);
  }
}

// Smooth scroll for in-page nav links.
document.querySelectorAll('.nav-links a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

init();
