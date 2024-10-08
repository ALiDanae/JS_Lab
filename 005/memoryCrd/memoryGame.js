// dom nodes
const boxes = document.querySelectorAll("div");
const OPEN_CARDS = [];
let counter = 0;


function showCard(event) {
    event.target.classList.add("show");
    OPEN_CARDS.push(event.target);
    if (OPEN_CARDS.length === 2) {
        if (OPEN_CARDS[0].innerHTML === OPEN_CARDS[1].innerHTML) {

            matchCards()
        } else {

            unmatchedCards()
        }
    }
}



function matchCards() {
    OPEN_CARDS[0].classList.add("matched")
    OPEN_CARDS[1].classList.add("matched");
    OPEN_CARDS.length = 0;
    counter++;
    if (counter === 8) {
        console.log("CONGRADULATION")
    }
}

function unmatchedCards() {
    OPEN_CARDS[0].classList.add("unmatched")
    OPEN_CARDS[1].classList.add("unmatched");
    boxes.map((card) => {
        card.classList.add("disable")
    })
    setTimeout(function () {
        OPEN_CARDS[0].classList.remove("show")
        OPEN_CARDS[1].classList.remove("show");
        OPEN_CARDS[0].classList.remove("unmatched")
        OPEN_CARDS[1].classList.remove("unmatched");
        OPEN_CARDS.length = 0;
        OPEN_CARDS.map((card) => {
            card.classList.add("disable")
        })
    }, 1000);


}

// events
for (const box of boxes) {
    box.addEventListener("click", showCard);
}