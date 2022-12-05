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
