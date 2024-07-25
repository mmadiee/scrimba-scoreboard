let scoreHome = 0
let scoreGuest = 0

let scoreHomeEl = document.getElementById("score-home");
let scoreGuestEl = document.getElementById("score-guest");

function add(point, team) {
    if(team === 'home'){
        scoreHome += point;
        console.log("Home: " + scoreHome);
        scoreHomeEl.textContent = scoreHome;
    } else if(team === 'guest'){
        scoreGuest += point;
        console.log("Guest: " + scoreGuest) ;
        scoreGuestEl.textContent = scoreGuest;
    }
}