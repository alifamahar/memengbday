var rows = 2;
var columns = 3;

var currTile;
var otherTile;

var turns = 0;

window.onload = function () {
    // Inisialisasi papan kosong
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.src = "./images/blank.jpg";
            addTileEvents(tile);
            document.getElementById("board").append(tile);
        }
    }

    // Inisialisasi potongan puzzle acak
    initPieces();
};

// Membuat dan mengacak potongan puzzle
function initPieces() {
    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString());
    }

    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);
        [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
    }

    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "./images/" + pieces[i] + ".jpg";
        addTileEvents(tile);
        document.getElementById("pieces").append(tile);
    }

    turns = 0;
    document.getElementById("turns").innerText = turns;
    document.getElementById("nextBtn").style.display = "none";
}

// Tambahkan semua event listener (mouse + touch)
function addTileEvents(tile) {
    // Drag & drop untuk desktop
    tile.setAttribute("draggable", true);
    tile.addEventListener("dragstart", dragStart);
    tile.addEventListener("dragover", dragOver);
    tile.addEventListener("dragenter", dragEnter);
    tile.addEventListener("dragleave", dragLeave);
    tile.addEventListener("drop", dragDrop);
    tile.addEventListener("dragend", dragEnd);

    // Touch support untuk HP
    tile.addEventListener("touchstart", touchStart, { passive: false });
    tile.addEventListener("touchend", touchEnd);
}

// Drag Events
function dragStart() {
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
    otherTile = this;
}

function dragEnd() {
    if (!currTile || !otherTile || currTile.src.includes("blank")) return;
    swapTiles(currTile, otherTile);
}

// Touch Events
function touchStart(e) {
    e.preventDefault();
    currTile = e.target;
}

function touchEnd(e) {
    let touch = e.changedTouches[0];
    let element = document.elementFromPoint(touch.clientX, touch.clientY);

    if (element && element.tagName === "IMG") {
        otherTile = element;
        if (currTile && !currTile.src.includes("blank")) {
            swapTiles(currTile, otherTile);
        }
    }
}

// Menukar posisi 2 tile
function swapTiles(tile1, tile2) {
    let tempSrc = tile1.src;
    tile1.src = tile2.src;
    tile2.src = tempSrc;

    turns += 1;
    document.getElementById("turns").innerText = turns;

    // Cek apakah semua tile di board sudah terisi
    let boardTiles = document.getElementById("board").querySelectorAll("img");
    let allFilled = true;
    boardTiles.forEach(tile => {
        if (tile.src.includes("blank")) {
            allFilled = false;
        }
    });

    if (allFilled) {
        document.getElementById("nextBtn").style.display = "inline-block";
    }
}

// Tombol Next
const submitButton = document.getElementById('nextBtn');
submitButton.addEventListener('click', function () {
    window.location.href = 'kuis3.html';
});

// Fungsi untuk reset dan lanjut ke soal selanjutnya
function goToNext() {
    // Reset papan
    let boardTiles = document.getElementById("board").querySelectorAll("img");
    boardTiles.forEach(tile => {
        tile.src = "./images/blank.jpg";
    });

    // Reset potongan
    document.getElementById("pieces").innerHTML = "";
    initPieces();
}
