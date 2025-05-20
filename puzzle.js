var rows = 2;
var columns = 3;

var currTile;
var otherTile;

var turns = 0;

window.onload = function() {
    // Initialize the 2x3 board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.src = "./images/blank.jpg";

            // DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); 
            tile.addEventListener("dragover", dragOver);   
            tile.addEventListener("dragenter", dragEnter); 
            tile.addEventListener("dragleave", dragLeave); 
            tile.addEventListener("drop", dragDrop);       
            tile.addEventListener("dragend", dragEnd);    

            // Add touch event listeners for mobile devices
            tile.addEventListener("touchstart", dragStart); 
            tile.addEventListener("touchmove", dragMove);   
            tile.addEventListener("touchend", dragEnd);     

            document.getElementById("board").append(tile);
        }
    }

    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString());
    }
    pieces.reverse();

    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }

    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "./images/" + pieces[i] + ".jpg";

        // DRAG FUNCTIONALITY
        tile.addEventListener("dragstart", dragStart); 
        tile.addEventListener("dragover", dragOver);   
        tile.addEventListener("dragenter", dragEnter); 
        tile.addEventListener("dragleave", dragLeave); 
        tile.addEventListener("drop", dragDrop);       
        tile.addEventListener("dragend", dragEnd);    

        // Add touch event listeners for mobile devices
        tile.addEventListener("touchstart", dragStart); 
        tile.addEventListener("touchmove", dragMove);   
        tile.addEventListener("touchend", dragEnd);     

        document.getElementById("pieces").append(tile);
    }
}

function dragStart(e) {
    // This function is triggered when the user starts dragging the tile.
    currTile = this; 
}

function dragOver(e) {
    e.preventDefault(); // Allow dropping
}

function dragEnter(e) {
    e.preventDefault(); // Allow entering the drop zone
}

function dragLeave() {
    // Handle dragging away from the tile (if needed)
}

function dragMove(e) {
    e.preventDefault(); // Prevent default behavior for mobile touch events
    // Handle the movement of the dragged element based on touch positions
    if (currTile && e.touches) {
        let touch = e.touches[0];
        currTile.style.position = "absolute";
        currTile.style.left = touch.pageX - currTile.offsetWidth / 2 + "px";
        currTile.style.top = touch.pageY - currTile.offsetHeight / 2 + "px";
    }
}

function dragDrop(e) {
    // This function is triggered when a tile is dropped onto another one
    otherTile = this;
}

function dragEnd(e) {
    // Swap images between the dragged and dropped tiles
    if (currTile && otherTile) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;
        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;

        // Check if all tiles are filled
        let boardTiles = document.getElementById("board").querySelectorAll("img");
        let allFilled = true;
        boardTiles.forEach(tile => {
            if (tile.src.includes("blank")) {
                allFilled = false;
            }
        });

        // If all tiles are filled, show the "Next" button
        if (allFilled) {
            document.getElementById("nextBtn").style.display = "inline-block";
        }
    }
}

// Event listener for the "Next" button
const submitButton = document.getElementById('nextBtn');
submitButton.addEventListener('click', function() {
    window.location.href = 'kuis3.html'; // Navigate to the next page
});

function goToNext() {
    // Reset the puzzle
    let boardTiles = document.getElementById("board").querySelectorAll("img");
    boardTiles.forEach(tile => {
        tile.src = "./images/blank.jpg";
    });

    // Shuffle the pieces again
    let piecesContainer = document.getElementById("pieces");
    piecesContainer.innerHTML = ""; // Remove previous pieces

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

    // Reset turn counter
    turns = 0;
    document.getElementById("turns").innerText = turns;

    // Hide the "Next" button again
    document.getElementById("nextBtn").style.display = "none";
}
