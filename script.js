const btn = document.querySelector("button");
const list = document.querySelector("ul");

let number = 1;

addElement = () => {
    const newEl = document.createElement("li");
    newEl.textContent = number;
    list.appendChild(newEl);

    if (number % 3 == 0) {
        newEl.style.fontSize = "26px";
        newEl.style.fontWeight = "900";
    }
    number += 2;
     
    
}
btn.addEventListener("click", addElement);