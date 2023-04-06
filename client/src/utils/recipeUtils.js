export const formatCookingTime = (timeString) => {
  let parts = timeString.split(":");
  let hours = parseInt(parts[0]);
  let minutes = parseInt(parts[1]);

  let hourText = hours === 1 ? "hour" : "hours";
  let minuteText = minutes === 1 ? "min" : "mins";

  if (hours === 0) {
    return minutes + " " + minuteText;
  } else if (minutes === 0) {
    return hours + " " + hourText;
  } else {
    return hours + " " + hourText + " and " + minutes + " " + minuteText;
  }
};
