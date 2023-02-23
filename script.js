const refreshbtn = document.querySelector(".refresh-btn");
const container = document.querySelector(".container");

const maxBoxes = 32;

const myFun = () => {
	container.innerHTML = "";
  for (let i = 0; i < maxBoxes; i++) {
    let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
    randomColor = `#${randomColor.padStart(6, "0")}`;

    let color = document.createElement("div");
    color.classList.add("color");
    color.innerHTML = `
		  <div class="rect-box" style ="background-color: ${randomColor}"></div>
			<span class="text">${randomColor}</span>`;

			color.addEventListener("click", () => copyColor(color, randomColor))

    container.appendChild(color);
  }
};

myFun()

const copyColor = (element, hexVal) => {
	const colorElement = element.querySelector(".text")
	navigator.clipboard.writeText(hexVal).then(() => {
		colorElement.innerText = "Copied"
		setTimeout(() => {
			colorElement.innerText = hexVal
		}, 1000);
	})
}

refreshbtn.addEventListener("click", myFun);
