
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
];
// Adım 1: Kategorilere göre ürünleri gruplayın
const groupedProducts = {};
products.forEach(product => {
    if (!groupedProducts[product.category]) {
        groupedProducts[product.category] = [];
    }
    groupedProducts[product.category].push(product);
});
// Adım 2: Ortalama fiyatları hesaplayın
const categoryAverages = [];
Object.keys(groupedProducts).forEach(category => {
    const productsInCategory = groupedProducts[category];
    const totalPrice = productsInCategory.reduce((sum, product) => sum + product.price, 0);
    const averagePrice = totalPrice / productsInCategory.length;
    categoryAverages.push({ category, average: averagePrice });
});
// Adım 3: Ortalama fiyatı 50'nin üstündeki kategorileri filtreleyin
const result = categoryAverages.filter(categoryAverage => categoryAverage.average > 50);

console.log(result);


















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
];
