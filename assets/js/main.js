let button = document.getElementById("liveAlertBtn");

const body = document.querySelector("body");

console.log(body);

const text = () => {
  let p = document.createElement("p");
  p.innerHTML = "lorem";
  body.append(p);
};

button.addEventListener("click", text);

console.log(button);
// mashixaal