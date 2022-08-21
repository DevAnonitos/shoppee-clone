// function myFunction() {
//     document.getElementById("none-category");
//     var close = document.getElementsByClassName("category-items");
//     for (var i = 0; i < close.length; i++) {
//         close[i].style.display = "none";
//     }
// }

// function myFunction() {
//     alert("Hello! I am an alert box!");
// }
// like event
function like() {
    document.getElementById("like").style.color = "#eb3b5a";
}
for (var i = 0; i < document.getElementById("like").length; i++) {
    document.getElementById("like")[i].addEventListener("click", like);
}

function Scroll(){
    window.scrollTo(0,document.body.scrollHeight);

}



