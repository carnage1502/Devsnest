const cards = document.querySelectorAll(".imgs");
var isFlip = false;
var firstcard , secondcard;
var lock = false;
cards.forEach(card => card.addEventListener("click",flip));
function flip(){
    if (lock) return;
        if(this === firstcard) return;
        this.classList.add("flip");
        if(!isFlip) {
            isFlip = true;
            firstcard = this;
            return;
        }
        secondcard = this;
        check();
}
function check() {
    var isMatch = firstcard.dataset.image === secondcard.dataset.image;
    isMatch ? success() : fail();
}
function success(){
    firstcard.removeEventListener("click",flip);
    secondcard.removeEventListener("click",flip);
    reset();
}
function fail() {
    lock = true;
    setTimeout(() =>{
        firstcard.classList.remove("flip");
        secondcard.classList.remove("flip");
        reset();
    }, 1000);
}
function reset(){
    [isFlip,lock] = [false,false];
    [firstcard,secondcard] = [null,null];
}
(function suffle(){
    cards.forEach(card => {
        var position = Math.floor(Math.random() *16);
        card.style.order = position;
    });
})();
