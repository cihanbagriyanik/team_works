
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

//* -------------------------------------------------------------------------- */

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

/* Use map to create an object with category as the key
and an array of products as the value */
const productsByCategory = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
        acc[category] = [];
    }
    acc[category].push(product);
    return acc;
}, {});
console.log(productsByCategory);
// Use map to calculate the average price for each category
const avgPriceByCategory = Object.keys(productsByCategory).map(category => {
    const sum = productsByCategory[category].reduce((acc, product) => acc +
        product.price, 0);
    return {
        category: category, average: sum / productsByCategory[category].length
    };
});
// Use filter to only select categories with an average above a certain threshold
const highPricedCategories = avgPriceByCategory.filter(category => category.average
    > 50);
console.log(highPricedCategories)

//* -------------------------------------------------------------------------- */

// const ilk = [];
// const ikinci = [];
// const ucuncu = [];

// products.map((a) => {
//     if (a.category == "Clothes") {
//         ilk.push(a);
//     } else if (a.category == "Electronics") {
//         ikinci.push(a);
//     } else {
//         ucuncu.push(a);
//     }
// });
// // console.log(ilk);
// // console.log(ikinci);
// // console.log(ucuncu);
// const birleşik = { Clothes: ilk, Electronics: ikinci, Home: ucuncu };
// // console.log(birleşik);

// // console.log(Object.keys(birleşik));
// const kategorideOrtalamaFiyat = Object.keys(birleşik).map((category) => {
//     const toplam = birleşik[category].reduce(
//         (toplam, urun) => toplam + urun.price,
//         0
//     );
//     return {
//         category: category,
//         ortalama: toplam / birleşik[category].length,
//     };
// });
// // console.log(kategorideOrtalamaFiyat);
// const yuksekFiyatKategori = kategorideOrtalamaFiyat.filter(eleman => eleman.ortalama > 50);
// console.log(yuksekFiyatKategori)






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
    { name: "Saban", salary: 100000, department: "IT" },
];

/* Use reduce to create an object with department as the key
and an array of employee objects as the value */
const employeesByDepartment = employees.reduce((acc, employee) => {
    const department = employee.department;
    if (!acc[department]) {
        acc[department] = [];
    }
    acc[department].push(employee);
    return acc;
}, {});
console.log(employeesByDepartment);
// Use map to calculate the average salary for each department
const avgSalaryByDepartment = Object.keys(employeesByDepartment).map(department => {
    const sum = employeesByDepartment[department].reduce((acc, employee) => acc +
        employee.salary, 0);
    return {
        department: department, average: sum /
            employeesByDepartment[department].length
    };
});
// Use filter to only select departments with an average above a certain threshold
const highPaidDepartments = avgSalaryByDepartment.filter(department =>
    department.average > 65000);
console.log(highPaidDepartments)

//* -------------------------------------------------------------------------- */

// const bir = [];
// const iki = [];

// employees.map((a) => {
//     if (a.department == "IT") {
//         bir.push(a);
//     } else {
//         iki.push(a);
//     }
// });

// // console.log(bir);
// // console.log(iki);
// const birleşik2 = { IT:bir, HR:iki};
// // console.log(birleşik2);


// const departmanOrtalamaGelir = Object.keys(birleşik2).map((department) => {
//     const toplam = birleşik2[department].reduce(
//         (toplam, a) => toplam + a.salary,
//         0
//     );
//     return {
//         department: department,
//         ortalama: (toplam / birleşik2[department].length).toFixed(),
//     };
// });

// const yuksekGelirDepartman = departmanOrtalamaGelir.filter(department => department.ortalama > 65000);
// console.log(yuksekGelirDepartman)




