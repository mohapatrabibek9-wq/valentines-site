let currentPage = 1;
let photoCount = 0;
let giftCount = 0;

function showPage(n) {
  document.querySelector('.active').classList.remove('active');
  document.getElementById('page' + n).classList.add('active');
  currentPage = n;
}

function yesClicked() {
  showPage(2);
}

function nextPage() {
  showPage(currentPage + 1);
}

function noClicked() {
  document.getElementById('noText').innerText =
    "WHAT?! 😤 That’s not the right answer… try again 💗";
}

function photoClicked(el, msg) {
  if (!el.classList.contains('done')) {
    el.classList.add('done');
    photoCount++;
  }
  document.getElementById('photoMsg').innerText = msg;
  if (photoCount === 4) {
    document.getElementById('photoNext').disabled = false;
  }
}

function giftClicked(el, msg) {
  if (!el.classList.contains('done')) {
    el.classList.add('done');
    giftCount++;
    el.innerText = msg;
  }
  if (giftCount === 3) {
    document.getElementById('giftNext').disabled = false;
  }
}

