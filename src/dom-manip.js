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


