import dayjs from "dayjs";
import "dayjs/locale/pl";
import "./Calendar.css";
import { populateCalendar } from "./utilities.js";

dayjs.locale("pl");
let month = dayjs().month();
let date = dayjs();

const calendarDiv = document.getElementById("calendarDiv");

populateCalendar(date, calendarDiv);

calendarDiv.addEventListener("click", (e) => {
  const whatWasClicked = e.target.id;
  if (whatWasClicked.includes("day")) {
    const dayNum = parseInt(e.target.innerText);
    date = dayjs().date(dayNum).month(month);
    console.log(date, month);
  }
  if (whatWasClicked === "plusButton" || whatWasClicked === "arrowRight") {
    date = date.add(1, "month").date(1);
    populateCalendar(date, calendarDiv);
    console.log(date);
  }
  if (whatWasClicked === "minusButton" || whatWasClicked === "arrowLeft") {
    date = date.subtract(1, "month").date(1);
    populateCalendar(date, calendarDiv);
    console.log(date);
  }
});
export { calendarDiv };
