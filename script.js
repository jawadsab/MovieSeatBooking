const selectMovie = document.getElementById("selectMovie");
const allSeats = document.querySelectorAll(".row .seat");
const spanNumOfSeats = document.getElementById("count");
const spanTotalCost = document.getElementById("total");

let totalNumberOfSeatsSelected = 0;
let movieCost = 0;
let totalCost = 0;

// select option --> onchange eventlistener
selectMovie.addEventListener("change",e => {
    movieCost = parseInt(e.target.value);
    totalCost = 0;
    totalCost += (totalNumberOfSeatsSelected*movieCost);
    spanTotalCost.innerText = totalCost;
})


// eventlistener for each seat
allSeats.forEach(seat => {
    seat.addEventListener("click",selectSeat);
});

function selectSeat(e) {
    // check if seat is not occupied and if movie is selected
    if(e.target.className !== "seat occupied" && movieCost!=0) {
        // can selectSeat
        const selectedSeat = e.target;

        // toggle class
        selectedSeat.classList.toggle("selected"); 
        if(selectedSeat.className === "seat selected") {

            // update seat
            totalNumberOfSeatsSelected++;
            spanNumOfSeats.innerText = totalNumberOfSeatsSelected;
            // update cost
            updateCost(selectedSeat.className);
        } else {
            // update seat
            totalNumberOfSeatsSelected--;
            spanNumOfSeats.innerText = totalNumberOfSeatsSelected;
            // update cost
            updateCost(totalCost,selectedSeat.className);

        }

    }
}
// helper function
function updateCost(cls) {
    if(cls === "seat selected") {
        totalCost += movieCost;
        spanTotalCost.innerText = totalCost;
    } else {
        totalCost -= movieCost;
        spanTotalCost.innerText = totalCost;
    }
}

