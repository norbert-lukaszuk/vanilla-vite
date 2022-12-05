import dayjs from "dayjs";
import "dayjs/locale/pl";
import "./Calendar.css";
import { populateCalendar } from "./utilities.js";
dayjs.locale("pl");
let month = dayjs().month();
let date = dayjs();
const calendarDiv = document.getElementById("calendarDiv");
// Object.assign(calendarDiv, {
//   className: "calendarDiv",
//   id: "calendarDiv",
// });
const monthName = document.createElement("span");
monthName.setAttribute("id", "monthName");
monthName.setAttribute("class", "monthName");
monthName.innerText = date.format("MMMM YYYY");

const plusButton = document.createElement("button");
plusButton.setAttribute("id", "plusButton");
plusButton.setAttribute("class", "calendarButton");
plusButton.innerText = ">>";
const minusButton = document.createElement("button");
minusButton.setAttribute("id", "minusButton");
minusButton.setAttribute("class", "calendarButton");
minusButton.innerText = "<<";
calendarDiv.appendChild(minusButton);
calendarDiv.appendChild(monthName);
calendarDiv.appendChild(plusButton);

populateCalendar(date, calendarDiv);

calendarDiv.addEventListener("click", (e) => {
  const dayNum = parseInt(e.target.innerText);
  date = dayjs().date(dayNum).month(month);
  console.log(date, month);
});
export { calendarDiv };
