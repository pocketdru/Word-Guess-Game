window.onload = function () {

    // var selectedCandy = ""; 
    var sweets = [
        "Caramel",
        "Chocolate",
        "Gummies",
        "Hard candy",
        "Licorice",
        "Lollipop",
        "Gum",
        "pie",
        "bun",
        "cookie"
    ];

    var images = {
        caramelURL: "../images/caramel.png",
        chocolatelURL: "../images/chocolate.png",
        gummiesURL: "../images/gummies.png",
        hardCandyURL: "../images/hard-cendies.png",
        licoriceURL: "assets/images/licorice.png",
        lollipopURL: "assets/images/lollipop.png",
        gumURL: "assets/images/gum.png",
        pieURL: "assets/images/pie.png",
        bunURL: "assets/images/buns.png",
        cookieURL: "assets/images/cookies.png"
    };

    var keyPressed = document.getElementById("keyPressed");
    var wins = document.getElementById("wins");
    var currentWord = document.getElementById("currentWord");
    var remaining = document.getElementById("remaining");
    var guessed = document.getElementById("guessed");
    var current_img = document.getElementById("picture_field");

    var rem = 10;
    remaining.innerText = rem;


    var guess = [];
    var word = [];
    var selectedCandy = sweets[Math.floor(Math.random() * sweets.length)];
  

    function selectRandomCandy() {
        console.log(selectedCandy);
        var n = selectedCandy.length;
        console.log(n);
        var l = " _ ";
        for (i = 0; i < n; i++) {
            word.push(l);
        }
        currentWord.innerText = word;
    };


    document.onkeyup = function () {
        var ev = event.key;
        if (guess.includes(ev)) {
            
        } else {
        guess.push(ev);
        console.log(guess);
        guessed.innerText = guess;
        };

        for (i = 0; i < selectedCandy.length; i++) {
            if (event.key == selectedCandy[i]) {
                console.log("s");
                var k = selectedCandy[i];
                word[i] = k;
                currentWord.innerText = word;
            };
            
        };
        for (j = 0; j < selectedCandy.length; j++) {
            if (event.key===selectedCandy[j]) {
                console.log("k");
            } else if (event.key !== selectedCandy[j]) {
                rem--;
                remaining.innerHTML = rem;
                break;
            }
        };
        if(rem == -1){
            alert("You lost");
        }





    };
    selectRandomCandy();
}