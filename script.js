const itemsPerPage = 4;
let currentPage = 1;

function displayProjects(data) {
  const projectList = document.getElementById('projectList');
  projectList.innerHTML = ''; // Clear existing content

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const projectsToDisplay = data.slice(startIndex, endIndex);

  projectsToDisplay.forEach((project) => {
    const projectItem = document.createElement('li');
    projectItem.className = 'project';
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
            }" target="_blank"><img width="30" height="30" src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png" alt="GitHub">Git Repo</a>
          </div>
        </div>
      </div>
    `;
    projectList.appendChild(projectItem);
  });
}

function fetchDataAndDisplay() {
  fetch('projects.json')
    .then((response) => response.json())
    .then((data) => {
      displayProjects(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

// Fetch and display initial data
fetchDataAndDisplay();

// Example: Add event listeners for next and previous buttons
document.getElementById('nextButton').addEventListener('click', () => {
  currentPage++;
  fetchDataAndDisplay();
});

document.getElementById('prevButton').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    fetchDataAndDisplay();
  }
});
