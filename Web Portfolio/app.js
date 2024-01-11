const boxContainer = document.querySelector(".boxContainer")
const saluteTextContainer = document.querySelector(".saluteTextContainer")
const saluteImgContainer = document.querySelector(".saluteImgContainer")
const authorName = document.querySelector(".name")
const jobTitleContainers = document.querySelectorAll(".jobTitleContainer")
const jobTitles = document.querySelectorAll(".jobTitle")
const projectsTitle = document.querySelector(".projectsTitle")
const phones = document.querySelectorAll(".phone")
const laptop = document.querySelector(".laptop")


const backgroundMusic = document.getElementById("backgroundMusic");
const toggleMusicButton = document.getElementById("toggleMusic");

toggleMusicButton.addEventListener("click", () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
});


// on a utilisé une structure repetitive JS
for(let i = 0; i<365; i++){

  const list = [
    0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
    205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
    211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132,
    133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218,
    259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259,
    260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141,
    144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306,
    24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230,
    270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275,
    316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116,
    156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78,
    79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282,
    283, 284, 285, 323, 324, 325, 326,
  ];


  const el = document.createElement("div")
  el.classList = list.includes(i) ? "box active" : "box"
  boxContainer.appendChild(el)
}

window.addEventListener("scroll", ()=>{
  let offsetY = window.scrollY
  saluteTextContainer.style.transform= `translateY(${offsetY * 0.1}px)`
  saluteImgContainer.style.transform= `translate(${offsetY * 0.4}px, ${offsetY * 0.7}px)`
  authorName.style.transform= `translateX(${offsetY * 0.1}px)`
  jobTitleContainers[0].style.backgroundPositionY = `${offsetY * 0.5}px`
  jobTitleContainers[1].style.backgroundPositionY = `${-offsetY * 0.5}px`
  jobTitles[0].style.transform = `translateX(calc(200vh - ${offsetY}px))`
  jobTitles[1].style.transform = `translateX(calc(-300vh + ${offsetY}px))`
  projectsTitle.style.transform = `translateY(calc(400vh - ${offsetY}px))`
  phones[0].style.transform = `translateX(calc(500vh - ${offsetY}px))`
  laptop.style.transform = `translateX(calc(600vh - ${offsetY}px))`
  phones[1].style.transform = `translateX(calc(750vh - ${offsetY}px))`
})
// edhi fonction personnalisée pour changer le background en gris
function changeBackgroundColor(element, color) {
  if (element) {
    element.style.backgroundColor = color;
  } else {
    console.error("L'élément n'existe pas.");
  }
}
const myElement = document.querySelector("#myElementId");
changeBackgroundColor(myElement, "grey");
let feedbackPromptShown = false; 

// la on a utilisé prompt () JS , alert () js et des structures conditionnelles JS 
//et on a utilisé la technique de la programmation evenementielle JS : La programmation événementielle 
//en JavaScript est basée 
//sur la réaction aux événements déclenchés par l'utilisateur en faisant une action tq un défilement 
window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;

  // Your existing code...

  // Add a prompt when the user scrolls past a specific position (for example, 5200 pixels)
  if (offsetY > 5200 && !feedbackPromptShown) {
    const userInput = prompt("Thanks for exploring my portfolio! Feel free to provide feedback:");

    // Check if the user clicked "OK" and provided feedback
    if (userInput !== null && userInput !== "") {
      alert(`YOUR FEEDBACK IS HIGHLY APPRECIATED🎖`);
      feedbackPromptShown = true; // Set the flag to true to prevent showing the prompt again
    }
  }

});

// ... (your existing code)
 