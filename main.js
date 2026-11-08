// fetch("https://api.adviceslip.com/advice")
// 	.then(response => response.json())
// 	.then(data => console.log(data.slip.id))
// 	// .then(data => console.log(data.slip.advise))
// 	.catch((error) => console.error(error));

// text.style.color = "red";
// console.log(text);
//Same as above
// const pElement = document.getElementsByClassName("message");
// pElement[0].style.color = 'red';

const adviseId = document.querySelector("#adviceId");
const advise = document.getElementById("message");

const dice = document.querySelector(".dice");

function clickHandle() {
	advise.textContent = "Loading new advice...";
	fetch("https://api.adviceslip.com/advice")
		.then((response) => response.json())
		.then((data) => (
			adviseId.textContent = `Advice #${data.slip.id}`
		))
		.catch((error) => console.error(error));

	fetch("https://api.adviceslip.com/advice")
		.then((response) => response.json())
		.then((data) => {
			advise.textContent = `"${data.slip.advice}"`;
		})
		// .then((advise.textContent = data))
		.catch((error) => {
			advise.textContent = "Can't Load file now. Refresh for new advice";
		});
}
clickHandle();
dice.addEventListener("click", clickHandle);
