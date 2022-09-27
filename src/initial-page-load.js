 export function initialPageLoad() {

    const contentDiv = document.querySelector(".content")

    

    const header = document.createElement("h1");
    header.textContent = "Inbox";
    header.classList.add("inbox");
    contentDiv.appendChild(header);

 }