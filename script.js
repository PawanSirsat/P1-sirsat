const itemsPerPage = 12
let currentPage1 = 1
let currentPage2 = 1

function displayProjects1(data) {
  const projectList = document.getElementById('projectList')
  projectList.innerHTML = '' // Clear existing content

  const startIndex = (currentPage1 - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const projectsToDisplay = data.slice(startIndex, endIndex)

  projectsToDisplay.forEach((project) => {
    const projectItem = document.createElement('li')
    projectItem.className = 'project'
    projectItem.innerHTML = `
      <div class="project-info">
        <img id="bottom" src="${project.image}" alt="${project.name}">
        <div class="newPadding">
          <h3 id="zero-bottom">${project.name}</h3>
          <div id="tech">
            ${project.tech
              .map((tech) => `<img src="${tech}" alt="${tech}" />`)
              .join('')}
          </div>
          <p>${project.description}</p>
          <div class="project-actions">
            ${
              project.liveDemo
                ? `<a href="${project.liveDemo}" id="live" target="_blank">Live Demo</a>`
                : `<button disabled>Live Demo</button>`
            }
            <a href="${
              project.githubLink
            }" target="_blank"><img width="30" height="30" src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png" alt="GitHub">Git Repo</a>
          </div>
        </div>
      </div>
    `
    projectList.appendChild(projectItem)
  })

  // Disable nextButton if there is no next page
  const nextButton = document.getElementById('nextButton')
  nextButton.disabled = endIndex >= data.length
}

function displayProjects2(data) {
  const projectList = document.getElementById('projectList2')
  projectList.innerHTML = '' // Clear existing content

  const startIndex = (currentPage2 - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const projectsToDisplay = data.slice(startIndex, endIndex)

  projectsToDisplay.forEach((project) => {
    const projectItem = document.createElement('li')
    projectItem.className = 'project'
    projectItem.innerHTML = `
      <div class="project-info2">
        <img id="bottom" src="${project.image}" alt="${project.name}">
        <div class="newPadding">
          <h3 id="zero-bottom">${project.name}</h3>
           <div id="tech">
            ${project.tech
              .map((tech) => `<img src="${tech}" alt="${tech}" />`)
              .join('')}
          </div>
          <p>${project.description}</p>
          <div class="project-actions">
            ${
              project.liveDemo
                ? `<a href="${project.liveDemo}" id="live" target="_blank">Live Demo</a>`
                : `<button disabled>Live Demo</button>`
            }
            <a href="${
              project.githubLink
            }" target="_blank"><img width="30" height="30" src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png" alt="GitHub">Git Repo</a>
          </div>
        </div>
      </div>
    `
    projectList.appendChild(projectItem)
  })

  // Disable nextButton2 if there is no next page
  const nextButton2 = document.getElementById('nextButton2')
  nextButton2.disabled = endIndex >= data.length
}

function fetchDataAndDisplay1() {
  fetch('projects.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      displayProjects1(data)
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })
}

function fetchDataAndDisplay2() {
  fetch('projects2.json')
    .then((response) => response.json())
    .then((data) => {
      displayProjects2(data)
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })
}

// Fetch and display initial data
fetchDataAndDisplay1()
fetchDataAndDisplay2()

// Example: Add event listeners for next and previous buttons
document.getElementById('nextButton').addEventListener('click', () => {
  currentPage1++
  fetchDataAndDisplay1()
})

document.getElementById('prevButton').addEventListener('click', () => {
  if (currentPage1 > 1) {
    currentPage1--
    fetchDataAndDisplay1()
  }
})

document.getElementById('nextButton2').addEventListener('click', () => {
  currentPage2++
  fetchDataAndDisplay2()
})

document.getElementById('prevButton2').addEventListener('click', () => {
  if (currentPage2 > 1) {
    currentPage2--
    fetchDataAndDisplay2()
  }
})
