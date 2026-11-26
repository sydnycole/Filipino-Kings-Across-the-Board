const boardElement = document.getElementById("chessboard");
const modal = document.getElementById("info-modal");
const factModal = document.getElementById("fact-modal");
const guideDrawer = document.getElementById("guide-drawer");
const drawerBackdrop = document.getElementById("drawer-backdrop");

document.getElementById("menu-btn").addEventListener("click", function () {
  guideDrawer.classList.add("open");
  drawerBackdrop.classList.remove("hidden");
});
function closeDrawer() {
  guideDrawer.classList.remove("open");
  drawerBackdrop.classList.add("hidden");
}
document.getElementById("close-drawer-btn").addEventListener("click", closeDrawer);
drawerBackdrop.addEventListener("click", closeDrawer);

let factIndex = 0;

function showOpeningPreview(opening, sideLabel) {
  document.getElementById("preview-side-badge").textContent = sideLabel;
  document.getElementById("preview-opening-title").textContent = opening.name;
  document.getElementById("preview-opening-moves").textContent = opening.moves;
  document.getElementById("placeholder-filename").textContent = "Opening GIF: " + opening.image;

  const imgEl = document.getElementById("preview-opening-img");
  const placeholderEl = document.getElementById("preview-placeholder");
  imgEl.style.display = "block";
  placeholderEl.style.display = "none";
  imgEl.onerror = function () { imgEl.style.display = "none"; placeholderEl.style.display = "flex"; };
  imgEl.src = opening.image;
}


function renderOpeningButtons(list, containerId, label, autoSelectFirst) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  list.forEach(function (op, idx) {
    const btn = document.createElement("button");
    btn.className = "opening-item-btn" + (autoSelectFirst && idx === 0 ? " active" : "");
    btn.textContent = (idx + 1) + ". " + op.name;
    btn.addEventListener("click", function () {
      document.querySelectorAll(".opening-item-btn").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      showOpeningPreview(op, label);
    });
    container.appendChild(btn);
  });
}

function formatBioLinks(text) {
  return text.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener" style="color: #95bb4a; font-weight: 700; text-decoration: underline;">$1</a>');
}

function openPlayerModal(info) {
  document.querySelectorAll(".tab-btn, .tab-pane").forEach(function (el) { el.classList.remove("active"); });
  document.querySelector('[data-tab="tab-profile"]').classList.add("active");
  document.getElementById("tab-profile").classList.add("active");

  document.getElementById("modal-img").src = info.photo;
  document.getElementById("bio-tab-img").src = info.bioPhoto || info.photo;
  document.getElementById("modal-role").textContent = info.activeSince + " • " + info.role;

  const textMap = {
    "modal-name": info.name, "bio-tab-name": info.name,
    "modal-federation": info.federation, "bio-tab-personal": info.personalInfo,
    "modal-peak-rating": info.peakRating, "modal-current-rating": info.currentRating,
    "modal-all-games": info.allGames, "modal-ratio": info.ratio,
    "modal-white-wins": info.whiteWins, "modal-white-losses": info.whiteLosses, "modal-white-draws": info.whiteDraws,
    "modal-black-wins": info.blackWins, "modal-black-losses": info.blackLosses, "modal-black-draws": info.blackDraws
  };
  Object.keys(textMap).forEach(function (id) { document.getElementById(id).textContent = textMap[id]; });
  document.getElementById("modal-bio").innerHTML = formatBioLinks(info.bio);

  renderOpeningButtons(info.openings.white, "white-opening-btns", "TOP 5 AS WHITE", true);
  renderOpeningButtons(info.openings.black, "black-opening-btns", "TOP 5 AS BLACK", false);
  showOpeningPreview(info.openings.white.at(0), "TOP 5 AS WHITE");
  modal.classList.remove("hidden");
}

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const backRank = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];

for (let row = 8; row >= 1; row--) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement("div");
    const coord = files[col] + row;
    square.classList.add("square", (row + col) % 2 === 0 ? "light" : "dark");

    if (col === 0) square.innerHTML += '<span class="coord-rank">' + row + "</span>";
    if (row === 1) square.innerHTML += '<span class="coord-file">' + files[col] + "</span>";

    const color = row >= 7 ? "black" : row <= 2 ? "white" : null;
    const type = (row === 8 || row === 1) ? backRank[col] : (row === 7 || row === 2) ? "pawn" : null;

    if (color && type) {
      const pieceId = color + "-" + type + "-" + coord;
      const info = competitorData[pieceId];

      if (info) {
        const pieceImg = document.createElement("img");
        pieceImg.src = info.photo;
        pieceImg.alt = info.name;
        pieceImg.classList.add("piece-photo", color);
        pieceImg.title = "Click for " + info.name;
        pieceImg.addEventListener("click", function () { openPlayerModal(info); });
        square.appendChild(pieceImg);
      } else {
        const fact = chessFunFacts[factIndex % chessFunFacts.length];
        const svgMarkup = getPieceSVG(color, type);
        factIndex++;

        const pieceBtn = document.createElement("button");
        pieceBtn.className = "trivia-piece " + color;
        pieceBtn.innerHTML = svgMarkup;
        pieceBtn.title = "Click for Chess Gameplay Fact!";

        pieceBtn.addEventListener("click", function () {
          const emblemEl = document.getElementById("fact-icon");
          const layoutEl = document.querySelector(".fact-layout");
          emblemEl.classList.toggle("has-gif", fact.media);
          layoutEl.classList.toggle("has-gif", fact.media);
          emblemEl.innerHTML = fact.media ? '<img src="' + fact.media + '" alt="' + fact.title + '" />' : svgMarkup;

          document.getElementById("fact-badge").textContent = fact.badge;
          document.getElementById("fact-title").textContent = fact.title;
          document.getElementById("fact-text").textContent = fact.text;
          factModal.classList.remove("hidden");
        });

        square.appendChild(pieceBtn);
      }
    }
    boardElement.appendChild(square);
  }
}

const urlParams = new URLSearchParams(window.location.search);
const requestedPlayer = urlParams.get("player");
if (requestedPlayer && competitorData[requestedPlayer]) {
  openPlayerModal(competitorData[requestedPlayer]);
}

document.querySelectorAll(".tab-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".tab-btn, .tab-pane").forEach(function (el) { el.classList.remove("active"); });
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

document.getElementById("close-btn").addEventListener("click", function () { modal.classList.add("hidden"); });
modal.addEventListener("click", function (e) { if (e.target === modal) modal.classList.add("hidden"); });

document.getElementById("close-fact-btn").addEventListener("click", function () { factModal.classList.add("hidden"); });
factModal.addEventListener("click", function (e) { if (e.target === factModal) factModal.classList.add("hidden"); });