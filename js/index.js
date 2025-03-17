const navBar = document.querySelector(".navbar-container");
const btnTop = document.querySelector(".btn-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    btnTop.style.display = "grid";
  } else {
    btnTop.style.display = "none";
  }

  if (window.scrollY > 700) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
});

btnTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Skills section

const Codingskills = [
  {
    name: "JavaScript",
    rate: 86,
  },
  {
    name: "HTML / CSS",
    rate: 90,
  },
  {
    name: "React",
    rate: 80,
  },
];

const DesignSkills = [
  {
    name: "UI / UX Design",
    rate: 92,
  },
  {
    name: "Adobe Photoshop",
    rate: 88,
  },
  {
    name: "Figma",
    rate: 85,
  },
];

const createSkillBars = (skillsArray, categoryClass) => {
  const skillCategory = document.querySelector(categoryClass);
  if (skillCategory) {
    skillsArray.forEach((skill) => {
      const progressWrapper = document.createElement("div");
      progressWrapper.classList.add("progress-wrapper");

      const caption = document.createElement("span");
      caption.classList.add("caption");
      caption.textContent = skill.name;

      const progress = document.createElement("div");
      progress.classList.add("progress");

      const progressBar = document.createElement("div");
      progressBar.classList.add("progress-bar");
      progressBar.textContent = `${skill.rate}%`;
      progressBar.style.width = `${skill.rate}%`;

      progress.appendChild(progressBar);
      progressWrapper.appendChild(caption);
      progressWrapper.appendChild(progress);
      skillCategory.appendChild(progressWrapper);
    });
  }
};

createSkillBars(Codingskills, ".column-coding-skills .skill-category");
createSkillBars(DesignSkills, ".column-design-skills .skill-category");

const filterButtons = document.querySelectorAll(
  ".filter-buttons .button-outline"
);

const projects = [
  {
    name: "Mobile Travel App",
    description: "Travel, Discovery",
    imgUrl: "img/assets/work-1.jpg",
    category: "apps",
  },
  {
    name: "Music App",
    description: "Music",
    imgUrl: "img/assets/work-2.jpg",
    category: "apps",
  },
  {
    name: "Gaming Dashboard",
    description: "Games, Streaming",
    imgUrl: "img/assets/work-3.jpg",
    category: "website",
  },
  {
    name: "Drugs Delivery App",
    description: "Health, Drugs",
    imgUrl: "img/assets/work-4.jpg",
    category: "website",
  },
  {
    name: "Musics Discover",
    description: "Music, Dashboard",
    imgUrl: "img/assets/work-5.jpg",
    category: "apps",
  },
  {
    name: "Game Streaming",
    description: "Games, Streaming",
    imgUrl: "img/assets/work-6.jpg",
    category: "apps",
  },
];

// Dynamically generate projects
const portfolioGrid = document.querySelector(".portfolio-grid");

projects.forEach((project) => {
  const projectItem = document.createElement("div");
  projectItem.classList.add("grid-item", project.category);

  projectItem.innerHTML = `
    <div class="image-wrapper" data-src="${project.imgUrl}">
      <img src="${project.imgUrl}" alt="${project.name}" />
      <div class="image-caption">
        <h5 class="theme-text">${project.name}</h5>
        <p>${project.description}</p>
      </div>
    </div>
  `;
  if (portfolioGrid) {
    portfolioGrid.appendChild(projectItem);
  }
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    filterButtons.forEach((btn) => btn.classList.remove("selected"));
    this.classList.add("selected");

    const filterValue = this.getAttribute("data-filter");

    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((item) => {
      if (
        filterValue === "*" ||
        item.classList.contains(filterValue.slice(1))
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Project preview

const viewProjectBtns = document.querySelectorAll(".image-caption .theme-text");
const closeOverlayBtn = document.getElementById("closeOverlay");
const overlay = document.getElementById("overlay");

viewProjectBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    overlay.style.display = "flex";
    document.body.classList.add("no-scroll");
  });
});

if(closeOverlayBtn) {
  closeOverlayBtn.addEventListener("click", function (e) {
    e.preventDefault();
    overlay.style.display = "none";
    document.body.classList.remove("no-scroll");
  });
  
}

const submit = document.querySelector("form button");
const form = document.querySelector("form");

submit.addEventListener("click", function (e) {
  e.preventDefault(); 


  console.log("Message is sent...");

  form.reset();
});
