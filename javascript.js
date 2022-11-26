var d1,d2,d3,d4,d5;
document.addEventListener("keypress",function(event)
{
    MakeSound(event.key);
});
for(var i=0;i<6;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        MakeSound(this.innerHTML);
    });
}
function Animate(a){
    var b = document.querySelector("#"+a);
    b.classList.add("animate");

    setTimeout(function(){
        b.classList.remove("animate");
    },150);
}
function MakeSound(c){
    Animate(c);
    switch (c) {
            case "a":
                d1 = new Audio("Drum_sounds/drum1.mp3");
                    d1.play();
                    break;
            case "d":
                d2 = new Audio("Drum_sounds/drum2.mp3");
                    d2.play();
                    //document.getElementById("b2").classList.add("animate");
                    break;
            case "f":
                d3 = new Audio("Drum_sounds/drum3.mp3");
                    d3.play();
                    //document.getElementById("b3").classList.add("animate");
                    break;
            case "j":
                d4 = new Audio("Drum_sounds/drum4.mp3");
                    d4.play();
                    //document.getElementById("b4").classList.add("animate");
                    break;
            case "l":
                    d5 = new Audio("Drum_sounds/drum5.mp3");
                    //document.getElementById("b5").classList.add("animate");
                    d5.play();
                    break;
            default:
                break;
        }
}

