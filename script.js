var projects = [
    {
        title: "GoLearn - Business Website",
        link: "https://the355axolotl.github.io/golearntutoring_site/",
        description: "Used vanilla HTML, CSS, and a bit of JS for a class group project.",
        img: "./assets/portfolio_shots/project_1.png"
    },
    {
        title: "Hello world",
        link: "https://the355axolotl.github.io/golearntutoring_site/",
        description: "Testing another one",
        img: "./assets/portfolio_shots/project_1.png"
    },
    {
        title: "Hello world 2",
        link: "https://the355axolotl.github.io/golearntutoring_site/",
        description: "Testing another two",
        img: "./assets/portfolio_shots/project_1.png"
    }
]

for (let i = 0; i < projects.length; i++) {
    var proj_holder = document.createElement('a');
    var proj_info = document.createElement('div');
    var proj_img = document.createElement('div');

    proj_holder.href = projects[i].link;
    proj_holder.target = "_blank";
    proj_holder.classList.add("project-placeholder", "helvetica");
    proj_holder.style.cssText = `
        width: 70%;
        min-width: 450px;
        color: black; 
        gap: 5px; 
        overflow: hidden;
    `;

    proj_info.classList.add("max-height");
    proj_info.innerHTML = `<h5>GoLearn - Business Website</h5>
                <br><br>
                ${projects[i].description}`;
    
    proj_img.classList.add("max-height");
    proj_img.style.cssText = `
        background: url(${projects[i].img}) repeat;
        background-position: center top;
        background-size: cover;
    `;

    document.getElementById("project-grid").appendChild(proj_holder);
    proj_holder.appendChild(proj_info);
    proj_holder.appendChild(proj_img);
}
