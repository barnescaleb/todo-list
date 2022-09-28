import { initialPageLoad  } from "./initial-page-load";


// DOM maniptulation to display UI 
export function displayDefaultProject() {

     // DOM for default page load
    const projectsDiv = document.createElement("div");
    projectsDiv.textContent = initialPageLoad().projectTitle;
    contentDiv.appendChild(projectsDiv);
}

export function displayTheForm() {
    document.getElementById("add-todo-form").style.display = "";

}

export function clearForm() {
    document.getElementById("add-todo").reset();
}

export function displayTodo() {

    // checks and clears any DOM
    const removeDivs = document.querySelectorAll(".card");
    console.log("show current DOM card divs", removeDivs);
    for ( let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    }

    // creats display card DOM
    const projects = document.querySelector(".projects");
    const card = document.createElement("div");
    card.classList.add("card");
    projects.appendChild(card);

    // Takes data from local and stores
    let Title = localStorage.getItem("Title");

    // Place data in local array to display to DOM
    let _displayArray = { Title };
    console.log(_displayArray);

    for (let key in _displayArray) {
        console.log(`${key}: ${_displayArray[key]}`);
        const para = document.createElement("p");
        para.textContent = (`${key}: ${_displayArray[key]}`);
        card.appendChild(para);
    }
}


