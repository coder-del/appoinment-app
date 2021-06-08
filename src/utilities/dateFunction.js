const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const dayAfterTomorrow = new Date(today);
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

function formatDate(date) {
  var month = date.getMonth() + 1,
    day = date.getDate(),
    year = date.getFullYear();
  return day + '/' + month + '/' + year;
}

const now = formatDate(today),
  next = formatDate(tomorrow),
  dayAfter = formatDate(dayAfterTomorrow);

const DateFunction = {
  today: now,
  tomorrow: next,
  dayAfterTomorrow: dayAfter,
};

export default DateFunction;
