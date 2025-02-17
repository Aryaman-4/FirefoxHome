// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Resource Data - Modify this to add/remove links
  const resources = {
      dsa: [
          { name: 'AlgoExpert', url: 'https://www.algoexpert.io/', icon: 'fas fa-bolt' },
          { name: 'InterviewCake', url: 'https://www.interviewcake.com/', icon: 'fas fa-birthday-cake' },
          { name: 'Codédex', url: 'https://codedex.io/', icon: 'fas fa-code' }
          { name: 'LeetCode', url: 'https://leetcode.com/', icon: 'fas fa-code' }
      ],
      fullstack: [
          { name: 'FrontendMasters', url: 'https://frontendmasters.com/', icon: 'fas fa-laptop-code' },
          { name: 'Scrimba', url: 'https://scrimba.com/', icon: 'fas fa-video' },
          { name: 'Heroku', url: 'https://www.heroku.com/', icon: 'fas fa-cloud' }
      ]
  };

  // Deadlines - Modify these dates
  const deadlines = [
      { month: 'Month 1', goal: 'Master arrays, strings, linked lists' },
      { month: 'Month 2', goal: 'Trees, graphs, dynamic programming' },
      { month: 'Month 3', goal: 'Complete 2 full-stack projects' }
  ];

  // Initialize resources
  function initResources() {
      for (const category in resources) {
          const container = document.getElementById(`${category}-links`);
          resources[category].forEach(resource => {
              const link = createElement('a', ['resource-item'], {
                  href: resource.url,
                  target: '_blank'
              });
              
              link.innerHTML = `
                  <i class="${resource.icon}"></i>
                  <span style="margin-left: 10px">${resource.name}</span>
              `;
              container.appendChild(link);
          });
      }
  }

  // Initialize deadlines
  function initDeadlines() {
      const list = document.getElementById('deadline-list');
      deadlines.forEach(deadline => {
          const item = createElement('li', [], {}, `
              <strong>${deadline.month}:</strong> ${deadline.goal}
          `);
          list.appendChild(item);
      });
  }

  // Days counter
  function updateDaysCounter() {
      const startDate = new Date();
      const endDate = new Date(startDate);
      endDate.setMonth(endDate.getMonth() + 6);
      
      const diff = endDate - startDate;
      document.getElementById('days').textContent = 
          Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  // Helper function to create elements
  function createElement(tag, classes = [], attributes = {}, html = '') {
      const el = document.createElement(tag);
      el.classList.add(...classes);
      Object.entries(attributes).forEach(([key, value]) => {
          el.setAttribute(key, value);
      });
      el.innerHTML = html;
      return el;
  }

  // Note saving functionality
  const noteInput = document.getElementById('note-input');
  noteInput.value = localStorage.getItem('dailyNote') || '';
  
  noteInput.addEventListener('input', () => {
      localStorage.setItem('dailyNote', noteInput.value);
  });

  // Initialize all components
  initResources();
  initDeadlines();
  updateDaysCounter();
});
