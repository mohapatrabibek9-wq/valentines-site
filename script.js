let currentPage = 1;
let photoCount = 0;
let giftCount = 0;

function showPage(n) {
  document.querySelector('.active').classList.remove('active');
  document.getElementById('page' + n).classList.add('active');
  currentPage = n;

  if (n === 8) startCountdown();
}

function yesClicked() { showPage(2); }
function nextPage() { showPage(currentPage + 1); }

function noClicked() {
  document.getElementById('noText').innerText =
    "That’s not the right answer… 🤍";
}

/* PHOTO TYPE */
function photoClicked(card, text) {
  if (card.classList.contains('done')) return;
  card.classList.add('done');
  photoCount++;

  const t = card.querySelector('.photo-text');
  let i = 0;
  t.innerText = "";

  const type = setInterval(() => {
    t.innerText += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(type);
  }, 40);

  if (photoCount === 4) {
    document.getElementById('photoNext').disabled = false;
  }
}

/* GIFTS */
function openGift(el, msg) {
  if (el.classList.contains('open')) return;
  el.classList.add('open');
  el.innerText = msg;
  giftCount++;

  if (giftCount === 3) {
    document.getElementById('giftNext').disabled = false;
  }
}

/* FINAL COUNTDOWN */
function startCountdown() {
  let c = 3;
  const cd = document.getElementById('countdown');
  const timer = setInterval(() => {
    c--;
    cd.innerText = c;
    if (c === 0) {
      cd.innerText = "❤️";
      clearInterval(timer);
    }
  }, 1000);
}
