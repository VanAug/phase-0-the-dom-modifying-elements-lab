document.querySelector("main#main").remove();

const newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.innerHTML = "Brian Okello is the champion"; 

document.body.appendChild(newHeader);
