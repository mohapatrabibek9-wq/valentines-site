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

/* PHOTO CLICK + TYPEWRITER */
function photoClicked(card, text) {
  if (card.classList.contains('done')) return;

  card.classList.add('done');
  photoCount++;

  const textEl = card.querySelector('.photo-text');
  textEl.innerText = "";
  let i = 0;

  const typing = setInterval(() => {
    textEl.innerText += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(typing);
  }, 35);

  if (photoCount === 4) {
    document.getElementById('photoNext').disabled = false;
  }
}

/* GIFTS */
function giftClicked(el, msg) {
  if (el.classList.contains('done')) return;

  el.classList.add('done');
  giftCount++;
  el.innerText = msg;

  if (giftCount === 3) {
    document.getElementById('giftNext').disabled = false;
  }
}
