const buttons = document.querySelectorAll("button");
const screen = document.getElementById("screen");

for (const button of buttons) {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.innerText;
    if (buttonText === "c") {
      screen.value = "";
    } else if (buttonText === "x") {
      screen.value += "*";
    } else if (buttonText === "=") {
      try {
        screen.value = eval(screen.value);
      } catch (e) {
        screen.value = "invalid operation";
      }
      screen.value = eval(screen.value);
    } else {
      screen.value += buttonText;
    }
  });
}
