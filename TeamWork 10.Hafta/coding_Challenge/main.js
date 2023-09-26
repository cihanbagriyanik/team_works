
/* -------------------------------------------------------------------------- */
//* 1.SORU               High Priced Product Categories                       */
/* -------------------------------------------------------------------------- */
//? Size, her biri bir ad, fiyat ve kategoriye sahip, bir ürün koleksiyonunu temsil eden bir dizi nesne verilir. Göreviniz, her kategorideki ürünlerin ortalama fiyatını hesaplamak için eşleme, filtreleme ve azaltma işlemlerini kullanmak ve ardından yalnızca ortalama fiyatı 50'nin üzerinde olan kategorileri içeren bir dizi nesne döndürmektir.
//! SAMPLE INPUT
//! Expected outcome
// [
//     { category: 'Clothes', average: 55 },
//     { category: 'Electronics', average: 55 }
// ]

const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
    { name: "Product 9", price: 40, category: "Home" },
    { name: "Product 10", price: 40, category: "Home" },
];

// const clothes = products.filter((a) => a.category === "Clothes")
// const a = clothes.reduce((toplam, a) => toplam + a.price, 0) / clothes.length

// const electronics = products.filter((a) => a.category === "Electronics")
// const b = electronics.reduce((toplam, a) => toplam + a.price, 0) / electronics.length

// const home = products.filter((a) => a.category === "Home")
// const c = home.reduce((toplam, a) => toplam + a.price, 0) / home.length

// let sonuc = []
// sonuc.push(a)
// sonuc.push(b)
// sonuc.push(c)
// console.log(sonuc);

// sonuc = sonuc.filter((a) => a > 50)
// console.log(sonuc);

//* -------------------------------------------------------------------------- */

const ilk = [];
const ikinci = [];
const ucuncu = [];

products.map((a) => {
    if (a.category == "Clothes") {
        ilk.push(a);
    } else if (a.category == "Electronics") {
        ikinci.push(a);
    } else {
        ucuncu.push(a);
    }
});
// console.log(ilk);
// console.log(ikinci);
// console.log(ucuncu);
const birleşik = { Clothes: ilk, Electronics: ikinci, Home: ucuncu };
// console.log(birleşik);

// console.log(Object.keys(birleşik));
const kategorideOrtalamaFiyat = Object.keys(birleşik).map((category) => {
    const toplam = birleşik[category].reduce(
        (toplam, urun) => toplam + urun.price,
        0
    );
    return {
        category: category,
        ortalama: toplam / birleşik[category].length,
    };
});
// console.log(kategorideOrtalamaFiyat);
const yuksekFiyatKategori = kategorideOrtalamaFiyat.filter(eleman => eleman.ortalama > 50);
console.log(yuksekFiyatKategori)






/* -------------------------------------------------------------------------- */
//* 2.SORU                    HR VS IT Department                             */
/* -------------------------------------------------------------------------- */
//? Size, bir grup çalışanı temsil eden, her birinin adı, maaşı ve departmanı olan bir dizi nesne verilir. Göreviniz, her departman için ortalama maaşı hesaplamak için harita, filtre ve azaltma kullanmak ve ardından yalnızca ortalama maaşı 65000'in üzerinde olan departmanları içeren bir dizi nesne döndürmektir.
//! Expected outcome
// [
//     { department: 'HR', average: 71666 }
// ]
//! SAMPLE INPUT
const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
    // { name: "Saban", salary: 100000, department: "IT" },
];

const bir = [];
const iki = [];

employees.map((a) => {
    if (a.department == "IT") {
        bir.push(a);
    } else {
        iki.push(a);
    }
});

// console.log(bir);
// console.log(iki);
const birleşik2 = { IT:bir, HR:iki};
// console.log(birleşik2);


const departmanOrtalamaGelir = Object.keys(birleşik2).map((department) => {
    const toplam = birleşik2[department].reduce(
        (toplam, a) => toplam + a.salary,
        0
    );
    return {
        department: department,
        ortalama: (toplam / birleşik2[department].length).toFixed(),
    };
});

const yuksekGelirDepartman = departmanOrtalamaGelir.filter(department => department.ortalama > 65000);
console.log(yuksekGelirDepartman)




