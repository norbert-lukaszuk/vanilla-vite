import dayjs from "dayjs";

function clock(clockDiv) {
  const clock = document.createElement("p");
  clock.setAttribute("id", "clock");
  clock.setAttribute("class", "clock");
  clockDiv.appendChild(clock);
  console.log(clockDiv);
  setInterval(() => {
    clock.innerText = dayjs().format("HH:mm:ss");
  }, 1000);
}
export { clock };
