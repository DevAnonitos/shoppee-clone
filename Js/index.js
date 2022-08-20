// function myFunction() {
//     document.getElementById("none-category");
//     var close = document.getElementsByClassName("category-items");
//     for (var i = 0; i < close.length; i++) {
//         close[i].style.display = "none";
//     }
// }

// function myFunction() {
//     alert("Shopee will be open soon!");
// }
// like event
function like() {
    document.getElementById("like").style.color = "#eb3b5a";
}
for (var i = 0; i < document.getElementById("like").length; i++) {
    document.getElementById("like")[i].addEventListener("click", like);
}

// function run(){
// 	var person = {
// 		name: "Tuan Phong",
// 		age: 1,
// 		addr: "Ha Noi",
// 		is_boy: true
// 	};
// 	for (i  in person) {
// 	  console.log(`${i}` + ' is ' + person[i])
// 	}
// }

// run();

// on scroll



