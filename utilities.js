const weekDaysPl = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nd"];
// function to set first day of month in correct weekday
function getFirstDayOfMonth(date) {
  let day = date.startOf("month").day();
  if (day === 0) {
    day = 7;
  }
  return day;
}
// populate whole calendar with days of month in right order
function populateCalendar(date, calendarDiv) {
  calendarDiv.innerHTML = "";
  const monthName = document.createElement("span");
  monthName.setAttribute("id", "monthName");
  monthName.setAttribute("class", "monthName");
  monthName.innerText = date.format("MMMM YYYY");

  const plusButton = document.createElement("button");
  plusButton.setAttribute("id", "plusButton");
  plusButton.setAttribute("class", "calendarButton");
  plusButton.innerHTML =
    '<img id="arrowRight" src="/assets/icons/arrow-big-right.svg"/>';

  const minusButton = document.createElement("button");
  minusButton.setAttribute("id", "minusButton");
  minusButton.setAttribute("class", "calendarButton");
  minusButton.innerHTML =
    '<img id="arrowLeft" src="/assets/icons/arrow-big-left.svg"/>';

  calendarDiv.appendChild(minusButton);
  calendarDiv.appendChild(monthName);
  calendarDiv.appendChild(plusButton);

  // populate calendar with names of weekdays in Polish
  weekDaysPl.forEach((item) => {
    const day = document.createElement("span");
    day.setAttribute("class", "weekDaySpan");
    day.innerText = item;
    calendarDiv.appendChild(day);
  });
  // populate beginning of calenar with empty filds until first day of month
  const startDay = getFirstDayOfMonth(date);
  for (let i = 1; i < startDay; i++) {
    const day = document.createElement("span");
    // day.setAttribute("class", "daySpan");
    calendarDiv.appendChild(day);
  }
  const daysInMonth = date.endOf("month").date();
  for (let i = 1; i <= daysInMonth; i++) {
    const daySpan = document.createElement("span");
    Object.assign(daySpan, {
      className: "daySpan",
      id: `day-${i}`,
    });
    daySpan.innerText = i;
    calendarDiv.appendChild(daySpan);
  }
}

export { populateCalendar };
