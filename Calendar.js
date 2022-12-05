import dayjs from "dayjs";
import "./Calendar.css";
let calendarDiv = document.createElement("div");
Object.assign(calendarDiv, {
  className: "calendarDiv",
  id: "calendarDiv",
});
const daysInMonth = dayjs().endOf("month").date();
for (let i = 1; i <= daysInMonth; i++) {
  const daySpan = document.createElement("span");
  Object.assign(daySpan, {
    className: "daySpan",
    id: `day-${i}`,
    onclick: (e) => console.log(e.target.innerText),
  });
  daySpan.innerText = i;
  calendarDiv.appendChild(daySpan);
}

export { calendarDiv };
