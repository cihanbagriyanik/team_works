
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

const clothes = products.filter((a) => a.category === "Clothes")
const a = clothes.reduce((toplam, a) => toplam + a.price, 0) / clothes.length

const electronics = products.filter((a) => a.category === "Electronics")
const b = electronics.reduce((toplam, a) => toplam + a.price, 0) / electronics.length

const home = products.filter((a) => a.category === "Home")
const c = home.reduce((toplam, a) => toplam + a.price, 0) / home.length

let sonuc = []
sonuc.push(a)
sonuc.push(b)
sonuc.push(c)
console.log(sonuc);

sonuc = sonuc.filter((a) => a > 50)
console.log(sonuc);

//* -------------------------------------------------------------------------- */

/* Use map to create an object with category as the key
and an array of products as the value */
const productsByCategory = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
        acc[category] = [];
    } // else yazarsa ilki ni almiyor o yuzden else kullanmiyoruz
    acc[category].push(product);
    return acc;
}, {}); // burda sus lu obje seklinde dondurmek icin kullaniliyor
console.log(productsByCategory);


console.log(Object.keys(productsByCategory));
// Use map to calculate the average price for each category
const avgPriceByCategory = Object.keys(productsByCategory).map(category => {
    const sum = productsByCategory[category].reduce((acc, product) => acc + product.price, 0);
    console.log(sum); // 3 ayri toplam oluyor
    return {
        category: category, average: sum / productsByCategory[category].length
    };
});
console.log(avgPriceByCategory);
// Use filter to only select categories with an average above a certain threshold
const highPricedCategories = avgPriceByCategory.filter(category => category.average > 50);
console.log(highPricedCategories)



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

// Use map to calculate the average salary for each department
const avgSalaryByDepartment = Object.keys(employeesByDepartment).map(department => {
    const sum = employeesByDepartment[department].reduce((acc, employee) => acc + employee.salary, 0);
    return {
        department: department, average: (sum / employeesByDepartment[department].length).toFixed()
    };
});
// Use filter to only select departments with an average above a certain threshold
const highPaidDepartments = avgSalaryByDepartment.filter(department => department.average > 65000);
console.log(highPaidDepartments)