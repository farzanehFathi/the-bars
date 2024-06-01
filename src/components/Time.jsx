export default function Time() {
  const time = new Date();

  const daysList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = time.getDay();
  let month = time.getMonth();
  let date = time.getDate();

  return `${daysList[day]}, ${monthList[month]} ${date}`;
}
