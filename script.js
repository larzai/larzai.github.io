// IntroLoad
const mainIntro = document.getElementById('intro');
window.addEventListener('load', () => {
  setTimeout(() => {
    if (mainIntro) {
      mainIntro.style.height = '0vh';
    }
  }, 3000);
});

// SideBarSistem
const navigationButtonOpen = document.getElementById('navButtonOpen');
const navigationButtonClose = document.getElementById('navButtonClose');
const sideBars = document.getElementById('sidebar');

navigationButtonOpen.addEventListener('click', () => {
  sideBars.style.width = '100vw';
  sideBars.style.backgroundColor = '#ffffff80';
});

navigationButtonClose.addEventListener('click', () => {
  sideBars.style.width = '0vw';
  sideBars.style.backgroundColor = '#00000000';
});

// AnimationTyping
const arrayTextTyping = [
  "Front-end Developer",
  "Back-end Developer",
  "Full Stack Developer",
  "Software Engineer",
  "Design Grafis",
  "Editor Video & Photo",
  "IoT Developer"
];

let currentTextIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("textTyping");
const typingSpeed = 100;
const delayBetweenTexts = 1500;

function typeTextTyping() {
  if (charIndex < arrayTextTyping[currentTextIndex].length) {
    typingElement.innerHTML += arrayTextTyping[currentTextIndex][charIndex];
    charIndex++;
    setTimeout(typeTextTyping, typingSpeed);
  } else {
    setTimeout(deleteTextTyping, delayBetweenTexts);
  }
}

function deleteTextTyping() {
  if (charIndex > 0) {
    typingElement.innerHTML = arrayTextTyping[currentTextIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteTextTyping, typingSpeed);
  } else {
    currentTextIndex = (currentTextIndex + 1) % arrayTextTyping.length;
    setTimeout(typeTextTyping, typingSpeed);
  }
}

typeTextTyping();

// Button Change About Skill
function showContainerSkill(containerId) {
  const containers = document.querySelectorAll('.container');
  containers.forEach(container => {
    container.classList.remove('active');
  });
  
  const activeContainer = document.getElementById(containerId);
  if (activeContainer) {
    activeContainer.classList.add('active');
  } else {
    console.log(`Kontainer dengan ID ${containerId} tidak ditemukan.`);
  }

  const buttons = document.querySelectorAll('.container-button button');
  buttons.forEach(button => {
    button.classList.remove('active');
  });
  
  const activeButton = Array.from(buttons).find(button => {
    return button.textContent.trim().toLowerCase().replace(' ', '-') === containerId.replace('container-', '').toLowerCase();
  });
}

function showContainerSkill(containerId, clickedButton) {
  let buttons = document.querySelectorAll('.container-button button');
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  clickedButton.classList.add('active');

  let containers = document.querySelectorAll('.container');
  containers.forEach(container => {
    container.classList.remove('active');
  });
  
  document.getElementById(containerId).classList.add('active');
}


