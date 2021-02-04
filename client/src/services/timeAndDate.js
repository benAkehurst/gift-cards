export function getTimeOfDay() {
  let today = new Date();
  let curHr = today.getHours();
  if (curHr < 12) {
    return 'Morning';
  } else if (curHr > 12 && curHr < 17) {
    return 'Afternoon';
  } else {
    return 'Evening';
  }
}
