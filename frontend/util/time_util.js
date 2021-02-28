import moment from "moment";

export const formatTime = (time) => {
  let datetime = new Date(JSON.parse(`\"` + time + `\"`));
  // // console.log(datetime);
  // let hours = datetime.getHours();
  // console.log(hours);
  // let ampm = hours >= 12 ? "pm" : "am";
  // hours = hours % 12;
  // hours = hours ? hours : 12;
  // let minutes = datetime.getMinutes();
  // console.log(minutes);
  // if (minutes < 10) {
  //   minutes = `0${minutes}`;
  // }
  // return hours + ":" + minutes + ampm;

  let now = moment();
  console.log(now);
  let then = moment(datetime);
  let diff = (now - then) / 3600000;
  if (diff < 1) {
    return "less than an hour ago";
  } else if (diff >= 1 && diff < 24) {
    return `${diff} hours ago`;
  } else {
    console.log(then.date());
    return then.date();
  }
}