const endDate = new Date();
endDate.setDate(endDate.getDate() + 7);
let diff;

document.getElementById("end-date").textContent = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
  const end = new Date(endDate); //Gives time stamp till endDate
  const now = new Date(); //gives time stamp till now
  diff = (end - now) / 1000; //time difference in seconds

  if (diff < 0) {
    return; //So that timer don't show negative values after the end time
  }

  inputs[0].value = dayCount();
  inputs[1].value = hourCount();
  inputs[2].value = minCount();
  inputs[3].value = secCount();
};

function dayCount() {
  return Math.floor(diff / 60 / 60 / 24);
}
function hourCount() {
  return Math.floor(diff / 60 / 60) % 24;
}
function minCount() {
  return Math.floor(diff / 60) % 60;
}
function secCount() {
  return Math.floor(diff) % 60;
}

//Call on page load
clock();

//call on 1 sec interval
setInterval(() => {
  clock();
}, 1000);
