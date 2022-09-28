import { displayTodo  } from "./dom-manip";

export function saveToDoToLocal({ Title }) {
    console.log("Saving object to storage");
    localStorage.setItem("Title", document.getElementById("Title").value);
    displayTodo();
    return { Title };
}