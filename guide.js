const pieceGuideData = [
  {
    symbol: "♔",
    name: "King",
    open: true,
    paragraphs: [
      "The king moves one square at a time in any direction: up and down, side to side, or diagonally.",
      "The objective of the game is to protect your own king and hunt for the opponent's king, so this is the most important piece on the board."
    ]
  },
  {
    symbol: "♕",
    name: "Queen",
    paragraphs: [
      "The queen is the strongest and most versatile piece on the chess board. It moves up and down, side to side, and diagonally, both backwards and forwards."
    ]
  },
  {
    symbol: "♖",
    name: "Rook",
    paragraphs: [
      "Rooks move in straight lines, side to side or up and down. In chess terms, rooks move along the ranks (horizontal rows) and files (vertical columns)."
    ]
  },
  {
    symbol: "♗",
    name: "Bishop",
    paragraphs: [
      "Bishops move diagonally, both forwards and backwards. Each player starts with two bishops: one that travels along the light-colored squares and one that travels along the dark-colored squares."
    ]
  },
  {
    symbol: "♘",
    name: "Knight",
    paragraphs: [
      "Knights move in an “L” shape, two squares in one direction and one square to the side. The knight is the only chess piece that can jump over other pieces."
    ]
  },
  {
    symbol: "♙",
    name: "Pawn",
    paragraphs: [
      "Pawns move forward one square at a time, never backwards, with two exceptions: first moves and capturing. On its first turn, a pawn can move two squares instead of one, but it doesn't have to. After it makes its first move, a pawn can only move forward one square at a time.",
      "Pawns capture other pieces by moving diagonally. Once a pawn has moved diagonally to capture a piece, it returns to its normal movement pattern.",
      "When a pawn reaches the other end of the chess board, it gets a promotion and transforms into a bigger piece of the player’s choice: a knight, bishop, rook, or queen."
    ]
  }
];

const accordionContainer = document.getElementById("piece-accordion");
if (accordionContainer) {
  pieceGuideData.forEach(function (piece) {
    const details = document.createElement("details");
    if (piece.open) details.open = true;

    const summary = document.createElement("summary");
    summary.innerHTML = "<span>" + piece.symbol + "</span> " + piece.name;
    details.appendChild(summary);

    const body = document.createElement("div");
    body.className = "accordion-body";
    piece.paragraphs.forEach(function (text) {
      const p = document.createElement("p");
      p.textContent = text;
      body.appendChild(p);
    });

    details.appendChild(body);
    accordionContainer.appendChild(details);
  });
}
