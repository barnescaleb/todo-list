 export function initialPageLoad() {

    const contentDiv = document.querySelector(".content")

    // clears existing DOM elements
    contentDiv.replaceChildren();

    const header = document.createElement("h1");
    header.textContent = "Inbox";
    header.classList.add("inbox");
    contentDiv.appendChild(header);

 }