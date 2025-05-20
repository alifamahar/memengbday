var rows = 2;
var columns = 3;

var currTile;
var otherTile;

var turns = 0;

window.onload = function() {
    //initialize the 5x5 board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //<img>
            let tile = document.createElement("img");
            tile.src = "./images/blank.jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for (let i=1; i <= rows*columns; i++) {
        pieces.push(i.toString()); //put "1" to "25" into the array (puzzle images names)
    }
    pieces.reverse();
    for (let i =0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }

    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "./images/" + pieces[i] + ".jpg";

        //DRAG FUNCTIONALITY
        tile.addEventListener("dragstart", dragStart); //click on image to drag
        tile.addEventListener("dragover", dragOver);   //drag an image
        tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
        tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
        tile.addEventListener("drop", dragDrop);       //drop an image onto another one
        tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

        document.getElementById("pieces").append(tile);
    }
}

//DRAG TILES
function dragStart() {
    currTile = this; //this refers to image that was clicked on for dragging
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; //this refers to image that is being dropped on
}

function dragEnd() {
    if (currTile.src.includes("blank")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

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

    // Jika semua sudah terisi, tampilkan tombol "Next"
    if (allFilled) {
        document.getElementById("nextBtn").style.display = "inline-block";
    }
}


// Event listener for the "Next" button
const submitButton = document.getElementById('nextBtn');
submitButton.addEventListener('click', function() {
    window.location.href = 'kuis3.html'; // Arahkan ke halaman berikutnya
});

function goToNext() {
    // Kosongkan papan (ganti semua jadi blank)
    let boardTiles = document.getElementById("board").querySelectorAll("img");
    boardTiles.forEach(tile => {
        tile.src = "./images/blank.jpg";
    });

    // Reset dan acak ulang pieces
    let piecesContainer = document.getElementById("pieces");
    piecesContainer.innerHTML = ""; // hapus gambar sebelumnya

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

        tile.addEventListener("dragstart", dragStart);
        tile.addEventListener("dragover", dragOver);
        tile.addEventListener("dragenter", dragEnter);
        tile.addEventListener("dragleave", dragLeave);
        tile.addEventListener("drop", dragDrop);
        tile.addEventListener("dragend", dragEnd);

        piecesContainer.append(tile);
    }

    // Reset turn
    turns = 0;
    document.getElementById("turns").innerText = turns;

    // Sembunyikan tombol Next lagi
    document.getElementById("nextBtn").style.display = "none";
    
}
tile.addEventListener("touchstart", touchStart);
tile.addEventListener("touchend", touchEnd);
function touchStart(e) {
    currTile = e.target;
}

function touchEnd(e) {
    let touch = e.changedTouches[0];
    let element = document.elementFromPoint(touch.clientX, touch.clientY);

    if (element && element.tagName === "IMG" && element.parentNode.id === "board") {
        otherTile = element;

        if (currTile.src.includes("blank")) return;

        let currImg = currTile.src;
        let otherImg = otherTile.src;
        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;

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
}
