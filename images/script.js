const cardsData = [
  { img: "images/card1.png", text: "โชคลาภกำลังมา" },
  { img: "images/card2.png", text: "ความรักสมหวัง" },
  { img: "images/card3.png", text: "ระวังการใช้เงิน" },
  { img: "images/card4.png", text: "โอกาสใหม่กำลังเข้ามา" },
  { img: "images/card5.png", text: "สุขภาพต้องดูแล" }
];

const cardContainer = document.getElementById("cards");
const result = document.getElementById("result");
<img src="images/back.png"></img>
cardsData.forEach((card, index) => {
  const cardEl = document.createElement("img");
  cardEl.src = "images/card-back.png";
  cardEl.className = "w-32 h-48 cursor-pointer hover:scale-105 transition";

  cardEl.addEventListener("click", () => {
    revealCard(cardEl, card);
  });

  cardContainer.appendChild(cardEl);
});

function revealCard(element, card) {
  element.src = card.img;
  result.textContent = card.text;

  // ป้องกันการเลือกซ้ำ
  document.querySelectorAll("#cards img").forEach(img => {
    img.style.pointerEvents = "none";
  });
}
