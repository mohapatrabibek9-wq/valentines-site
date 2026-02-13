let currentPage = 1;
let photoCount = 0;
let giftCount = 0;

function showPage(n) {
  document.querySelector('.active').classList.remove('active');
  document.getElementById('page' + n).classList.add('active');
  currentPage = n;
  if (n === 8) startCountdown();
}

function yesClicked(){ showPage(2); }
function nextPage(){ showPage(currentPage + 1); }

function noClicked(){
  document.getElementById('noText').innerText =
    "That’s not the right answer… 🤍";
}

function photoClicked(card, text){
  if(card.classList.contains('done')) return;
  card.classList.add('done');
  photoCount++;

  const t = card.querySelector('.photo-text');
  let i = 0;
  t.innerText = "";

  const type = setInterval(()=>{
    t.innerText += text.charAt(i);
    i++;
    if(i >= text.length) clearInterval(type);
  },40);

  if(photoCount === 4)
    document.getElementById('photoNext').disabled = false;
}

function openGift(el, msg){
  if(el.classList.contains('open')) return;
  el.classList.add('open');
  el.innerText = msg;
  giftCount++;
  if(giftCount === 3)
    document.getElementById('giftNext').disabled = false;
}

function startCountdown(){
  let c = 3;
  const cd = document.getElementById('countdown');
  const heart = document.querySelector('.big-heart');
  heart.style.display = "none";
  cd.innerText = c;

  const timer = setInterval(()=>{
    c--;
    cd.innerText = c;
    if(c === 0){
      clearInterval(timer);
      cd.style.display = "none";
      heart.style.display = "block";

      for(let i=0;i<25;i++){
        const h = document.createElement("div");
        h.innerText = "❤️";
        h.className = "emoji";
        h.style.left = Math.random()*100 + "%";
        h.style.animationDuration = (5+Math.random()*5)+"s";
        document.getElementById("page8").appendChild(h);
      }
    }
  },1000);
}
