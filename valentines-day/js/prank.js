let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
let page = document.getElementById("page");

let currentPadding = 24;

function onNoButtonClick() {
    currentPadding += 12;
    yesButton.style.fontSize = currentPadding + "px";
    yesButton.style.padding =
        `${currentPadding}px ${currentPadding*2}px`;
}

noButton.onclick = onNoButtonClick;

yesButton.onclick = () => {
    page.innerHTML =
        `<img id='gif' src='images/jjk.webp'>
        <h2 id='yay'>YAY</h2>`;
}