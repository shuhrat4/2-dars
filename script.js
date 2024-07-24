// let ism ="Shuhrat"
// let yosh ="20"
// let shahar= "toshkent"
// let matn= "mening ismim" + " " +ism+"."+"Yoshim "+yosh+"da"
// let text = `mening ismim ${ism}.Yoshim ${yosh}da.${shahar}da tugilganman`
// // <---- bu template literal yoki interpolation  
// console.log(text);
// console.log(matn); 
// let a = "15" 
// let b = 15
// console.log(a==b);
// console.log(a===b);
// let xoana = {
//     boy: 4,
//     eni: 5
// }
// console.log(coder);
// console.log(coder.boy);

// var num1 = +prompt("Birinchi soni kiriting")
// var num2 = +prompt("Ikkinchi soni kiriting")
// if (num1 < num2 && !isNaN(num1) && !isNaN(num2)) {
//     console.log(num1+ " kichik " + num2+ ' dan ');
// }
// else if (num1 > num2 && !isNaN(num1) && !isNaN(num2)) {
//     console.log(num1+ " katta " + num2+ ' dan ');
// }
// else if (num1 == num2 && !isNaN(num1) && !isNaN(num2)) {
//     console.log(num1+ " teng " + num2+ ' ga ');
// }
// else{
//    if (isNaN(num1) && isNaN(num2)) {
//     console.log("siz ikkalasiga ham sondan boshaqa narsa kiritdingiz");
//    }
//    else if (isNaN(num1)) {
//     console.log("siz num1 ga sondan boshaqa narsa kiritdingiz");
//    }
//    else if (isNaN(num2)) {
//     console.log("siz num2 ga sondan boshaqa narsa kiritdingiz");
//    }
// }


// var tezlik = +prompt("tezlikni kiriting")
//  if (tezlik <= 70) {
//     alert("hamasi yaxshi")
// }
// else {
//     let point = Math.round((tezlik -70 ) / 5)
//     if(point >= 12){
//         alert('parava olindi chunki sizda ' + point + 'ta point bor')
//     }

// else{
//     alert(point)
// }
// }

let num = +prompt("son kriting")
if (num % 3 == 0 && num % 5 == 0) {
    alert("fizzbuzz")
}
else if (num % 3 == 0) {
    alert("fizz")
}
else if (num % 5 == 0) {
    alert("buzz")
}
else{
    alert("siz boshqa narsa kiritdizgiz")
}