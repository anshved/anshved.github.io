$(function() {
    const d = new Date();
    const hours = d.getHours();
    const night = hours >= 19 || hours <= 7; // between 7pm and 7am
    const body = document.querySelector('body');
    const toggle = document.getElementById('toggle');
    const input = document.getElementById('switch');

if (night) {
  input.checked = true;
  body.classList.add('night');
}

toggle.addEventListener('click', function() {
  const isChecked = input.checked;
  if (isChecked) {
    body.classList.remove('night');
  } else {
    body.classList.add('night');
  }
});
});
//7 to 7 ka time dekh
// Sahi hai
// Ek no
// Shayad body.classList.toggle( ) bhi hai
// mene try nai kia
// yeh karneme bohot time gaya
// vanilla javascript ka video dekhte dekhte bohot google kia
// tab jaake hua
// css bhi dekhle chaiye toh
// Samjha
// Ye jquery hai na lekin
// haa wohi difference samajne me kal ka pura din chale gaya
// Haha uska syntax bahut ajeeb hai
// ik
// google hi use kia hai bohot
// nice

//yeh dekh