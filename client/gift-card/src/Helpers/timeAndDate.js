export function getTimeOfDay() {
  let today = new Date();
  let curHr = today.getHours();

  if (curHr < 12) {
    return 'Morning';
  } else if (curHr > 12 || curHr < 18) {
    return 'Afternoon';
  } else {
    return 'Evening';
  }
}

export function dateFormatter(date) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  let data = new Date(date);
  let formatted = data.toLocaleDateString('en-GB', options);
  return formatted;
}
