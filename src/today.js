export function today() {

    const contentDiv = document.querySelector(".content")

    // clears existing DOM elements
    contentDiv.replaceChildren();

    const header = document.createElement("h1");
    header.textContent = "Today";
    header.classList.add("today");
    contentDiv.appendChild(header);
}