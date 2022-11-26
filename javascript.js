var d1,d2,d3,d4,d5;
document.addEventListener("keypress",function(event)
{
    MakesoundbykeyB(event.key);
});

function MakesoundbykeyB(a){
    switch (a) {
        case "a":
            d1 = new Audio("Drum_sounds/drum1.mp3");
            d1.play();
            break;
        case "d":
            d2 = new Audio("Drum_sounds/drum2.mp3");
            d2.play();
            break;
        case "f":
            d3 = new Audio("Drum_sounds/drum3.mp3");
            d3.play();
            break;
        case "l":
            d4 = new Audio("Drum_sounds/drum4.mp3");
            d4.play();
            break;   
        case "j":
            d5 = new Audio("Drum_sounds/drum5.mp3");
            d5.play();
            break;   
        default:
            break;
    }
}
for(var i=0;i<6;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        MakeSound(this.innerHTML);
    });
}

function MakeSound(c){
        switch (c) {
            case "A":
                d1 = new Audio("Drum_sounds/drum1.mp3");
                    d1.play();
                    break;
            case "D":
                d2 = new Audio("Drum_sounds/drum2.mp3");
                    d2.play();
                    break;
            case "F":
                d3 = new Audio("Drum_sounds/drum3.mp3");
                    d3.play();
                    break;
            case "J":
                d4 = new Audio("Drum_sounds/drum4.mp3");
                    d4.play();
                    break;
            case "L":
                    d5 = new Audio("Drum_sounds/drum5.mp3");
                    d5.play();
                    break;
            default:
                break;
        }
}
