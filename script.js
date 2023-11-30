fetch('projects.json')
  .then((response) => response.json())
  .then((data) => {
    const projectList = document.getElementById('projectList')
    data.forEach((project) => {
      const projectItem = document.createElement('li')
      projectItem.className = 'project'
      projectItem.innerHTML = `
      <div class="project-info">
        <img id="bottom" src="${project.image}" alt="${project.name}">
        <div class="newPadding">
          <h3 id="zero-bottom">${project.name}</h3>
          
          <p>${project.description}</p>
          <div class="project-actions">
          ${
            project.liveDemo
              ? `<a href="${project.liveDemo}" id="live" target="_blank">Live Demo</a>`
              : `<button disabled>Live Demo</button>`
          }
          <a href="${
            project.githubLink
          }" target="_blank"><img width="30" height="30" src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png" alt="GitHub"> Visit Project</a>
        </div>
        </div>
      </div>
          
        
      `
      projectList.appendChild(projectItem)
    })
  })
  .catch((error) => {
    console.error('Error fetching data:', error)
  })
