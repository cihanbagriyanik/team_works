const num1 = +prompt("Lutfen islem yapmak istediginiz ilk numarayi giriniz?")
const opr = prompt("Lutfen yapmak istedginiz islemin operatorunu giriniz?")
const num2 = +prompt("Lutfen islem yapmak istediginiz Ikinci numarayi giriniz?")
let result;

// switch (opr) {
//     case "+":
//         result = num1 + num2
//         break;
//     case "-":
//         result = num1 - num2
//         break;
//     case "*":
//         result = num1 * num2
//         break;
//     case "/":
//         result = num1 / num2
//         break;
//     default:
//         "Gecersiz veri serisi girdiniz."
//         break;
// }

// console.log(result);


result = opr === "+" ? num1 + num2 :
         opr === "-" ? num1 - num2 :
         opr === "*" ? num1 * num2 :
         opr === "/" ? num2 != 0 ? num1 / num2 :
         "Bir sayı sıfıra bolunemez." : 
         "Hatalı işlem yapıldı.";

console.log(`Sonuc:${result}`);
