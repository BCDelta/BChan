const skills = ["React", "JQuery", "VSCode", "GIT Bash", 
        "WordPress", "Microsoft Office Suite", "Creative",
        "MySQL", "Ubuntu", "IT Operations", "Troubleshooting", 
        "Technical Support", "Software Installation", "Windows OS",
        "Critical Thinking", "Computers"]

function populateSkills() {
    skills.forEach((item) => {
        const node = document.createElement("h2");
        const skill = document.createTextNode(item);
        node.appendChild(skill);
        
        document.getElementById("soft-skills").appendChild(node);
    })    
}