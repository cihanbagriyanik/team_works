//* Soru 2 
console.log("***** Soru 2 *****");

const kisi = {
    name: "Saban"
}
console.log(kisi.hasOwnProperty("name"));
console.log("yas" in kisi);


delete kisi.name;

console.log(kisi);

kisi.name = "cihan"
kisi.yas = "80"
kisi.job = "developer"

console.log(kisi);


console.log("***** soru 6 *****");
// emptyObject = {};
emptyObject = new Object();
console.log(emptyObject);


console.log("***** soru 7 *****");

//* By Object.assign() :
const originalObject = { name: "John", age: 30 };
// Clone the original object using Object.assign()
const clonedObject = Object.assign({}, originalObject);
// Now, 'clonedObject' is a separate copy of 'originalObject'
console.log(clonedObject); // { name: 'John', age: 30 }


//* By spread operator :
const originalObject1 = { name: "John", age: 30 };
// Clone the original object using the spread operator
const clonedObject1 = { ...originalObject };
// Now, 'clonedObject' is a separate copy of 'originalObject'
console.log(clonedObject); // { name: 'John', age: 30 }


// const kisi = {
//     name: "Saban",
//     yas: 45
// }

// const {name} = kisi;
// console.log(name);

// const duzenle = (item) => {
//     //! Klasik erisim uzun yol
//     console.log(item);
//     console.log(item.name, item.yas); // cihan 80
//     //! Destructor 1.YOL 
//     const {name,yas} = item
//     console.log(name,yas); // cihan 80
// }
// duzenle(kisi)

// //! Destructor 2.YOL
// const parcala = ({name,yas}) => {

//     console.log(name,yas); // cihan 80
// }
// parcala(kisi)



// let a = 10
// let b = 20
// console.log(a,b);
// // [a, b] = [b, a];
// // console.log(a,b);
// [b, a] = [a, b];
// console.log(b,a);


const dizi1 = [1, 2]
const [a, b, c] = dizi1

// dizi1 = dizi2 

console.log(dizi1[2]);

console.log("***** SORU 11 *****");

const num = [1, 2, 3, 4, 5, 56]
const [birinci, ikinci, ab, ...kalan] = num;
console.log(birinci);
console.log(ab);
console.log(kalan);


console.log("***** SORU 13 *****");

const input = [1, -4, 12, 0, -3, 30, 42, -150];
// Write Your code here

const deger = input.filter((x) => x > 0).reduce((top, x) => top + x, 0)
console.log(deger);

const sum = input.filter((num) => num > 0).reduce((toplam, a) => toplam + a, 0);
console.log(sum);
//output: 85

const dizi = [1, -4, 12, 0, -3, 30, 42, -150];

const toplam = dizi.filter(function (num) {
    return num > 0;
}).reduce(function (toplam, a) {
    return toplam + a;
}, 0);
console.log(toplam);



console.log("***** SORU 14 *****");

const input1 = "John Ronald Reuel Tolkien"
// Write Your code here
function kisaltilmisAd(input1) {
    const kelime = input1.split(' ');
    let ilk = '';
    for (let i = 0; i < kelime.length; i++) {
        ilk += kelime[i][0].toUpperCase();
    }
    return ilk;
}
// const input1 = "Sir Harvey";
const result = kisaltilmisAd(input1);
console.log(result);
//output: JRRT

let sonuc = input1.split(" ")
console.log((sonuc.map((a) => a[0])).join(""));


const y = input1.split(" ").map((x) => x[0]).join("");
console.log(y)


console.log("***** SORU 15 *****");

const numbers = [1, 2, 3, 4, 5];

const karesi = numbers.map((num) => num ** 2).reduce((osman, veli) => osman + veli, 0)
console.log(karesi);
const karesi1 = numbers.filter((num) => num ** 2)
console.log(karesi1);
const karesi2 = numbers.reduce((num, a) => num ** a, 1)
console.log(karesi2);



const numberss = [1, 2, 3, 4, 5];

const sumOfEvens = numberss.reduce((acc, num) => (num % 2 === 0 ? acc + num : acc),
    0);
console.log(sumOfEvens);

const dizi2 = [2, 5, 7, 4, 8];
const diziyeni = dizi2.filter((a) => a % 2 == 0).reduce((toplam, a) => toplam + a)
console.log(diziyeni);

console.log("***** SORU 17 *****");

const names = ["Alice", "Bob", "Charlie"];

const nameLengths = names.map((a) => a.length)// Write Your code here
// names.filter((a) => a.length > 3).forEach ((a) => console.log(a)) // Write Your code here
// const nameLengths = names.filter((a) => a.length > 3)// Write Your code here

console.log(nameLengths) // [5, 3, 7]

console.log("***** SORU 18 *****");

const kelime = ["helen", "harvey", "ashley"];

const BüyükHarf = kelime.map((kelime) => kelime.toUpperCase());

console.log(BüyükHarf);


function Araba(marka, model, yil) {
    this.marka = marka;
    this.model = model;
    this.yil = yil;
}

// Yeni Araba nesneleri oluşturmak için constructor'ı kullanabiliriz:
const araba1 = new Araba("Toyota", "Corolla", 2020);
console.log(araba1);
const araba2 = new Araba("Honda", "Civic", 2021);
console.log(araba2);





