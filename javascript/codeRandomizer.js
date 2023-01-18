const subtitleChoices = ["Programmer", "Web Developer", "Graphic Designer", 
                  "Video Editor", "Tech Wizard", "Car Enthusiast"];
var arrayLength = subtitleChoices.length;
let index = 2;
const subtitleComponent = document.getElementById("subtitle");
setInterval(() => {
    if(index > arrayLength - 1) {
        index = 0;
    }
    subtitleComponent.innerText = ` < ${subtitleChoices[index]} > `;
    index++;
}, 8500);