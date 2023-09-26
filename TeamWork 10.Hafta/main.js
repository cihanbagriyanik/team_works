
/* -------------------------------------------------------------------------- */
//*                                  SORU 2                                   */
/* -------------------------------------------------------------------------- */
console.log("***** SORU 2 *****");
const person = {
    name: "Bob"
};
console.log(person.hasOwnProperty("name")); // true - Using hasOwnProperty
console.log("age" in person); // false - Using the 'in' operator


/* -------------------------------------------------------------------------- */
//*                                  SORU 3                                   */
/* -------------------------------------------------------------------------- */
console.log("***** SORU 3 *****");
const person1 = {
    name: "John",
    age: 30
};
delete person1.age; // Removing the 'age' property
console.log(person1);


/* -------------------------------------------------------------------------- */
//*                                  SORU 6                                   */
/* -------------------------------------------------------------------------- */
console.log("***** SORU 6 *****");
emptyObject = {};
console.log(emptyObject);


/* -------------------------------------------------------------------------- */
//*                                  SORU 7                                   */
/* -------------------------------------------------------------------------- */
console.log("***** SORU 7 *****");
const originalObject = { name: "John", age: 30 };
// Clone the original object using Object.assign()
const clonedObject = Object.assign({}, originalObject);
// Now, 'clonedObject' is a separate copy of 'originalObject'
console.log(clonedObject); // { name: 'John', age: 30 }

//*By spread operator :
const originalObject1 = { name: "John", age: 30 };
// Clone the original object using the spread operator
const clonedObject1 = { ...originalObject1 };
// Now, 'clonedObject1' is a separate copy of 'originalObject'
console.log(clonedObject1); // { name: 'John', age: 30 }


/* -------------------------------------------------------------------------- */
//*                                  SORU 11                                  */
/* -------------------------------------------------------------------------- */
console.log("***** SORU 11 *****");
// Example 1: Collecting remaining elements
const numbers = [1, 2, 3, 4, 5];
// Using rest element to collect the remaining elements
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]


/* -------------------------------------------------------------------------- */
//*                                  SORU 13                                  */
/* -------------------------------------------------------------------------- */
console.log("***** SORU 13 *****");
const dizi = [1, -4, 12, 0, -3, 30, 42, -150];

const toplam = dizi.filter(function (num) {
    return num > 0;
}).reduce(function (toplam, a) {
    return toplam + a;
}, 0);
console.log(toplam);
//!-----------------------------------------------------------VEYA--------------
// or written with Arrow function
const sum = dizi.filter((num) => num > 0).reduce((toplam, a) => toplam + a, 0);
console.log(sum);//output: 85


/* -------------------------------------------------------------------------- */
//*                                  SORU 14                                  */
/* -------------------------------------------------------------------------- */
console.log("***** SORU 14 *****");
const input = "John Ronald Reuel Tolkien"
const a = input.split(" ").map(function (x) {
    return x[0];
}).join("");
console.log(a);//output: JRRT
//!-----------------------------------------------------------VEYA--------------
// or written with Arrow function
const b = input.split(" ").map((x) => x[0]).join("");
console.log(b);//output: JRRT


/* -------------------------------------------------------------------------- */
//*                                  SORU 15                                  */
/* -------------------------------------------------------------------------- */
console.log("***** SORU 15 *****");
const numbers1 = [1, 2, 3, 4, 5];
const sonuc = numbers1.map((a) => a ** 2)//.forEach((a) => console.log(a));   //*ARRAY ZRUNLU OLMAZ ISE FOR EACH ILE DE YAPILIR
console.log(sonuc);


/* -------------------------------------------------------------------------- */
//*                                  SORU 16                                  */
/* -------------------------------------------------------------------------- */
console.log("***** SORU 16 *****");
const numbers2 = [1, 2, 3, 4, 5];
const ciftSayToplam = numbers2.reduce((toplam, a) => (a % 2 === 0 ? toplam + a : toplam), 0);
console.log(ciftSayToplam);


/* -------------------------------------------------------------------------- */
//*                                  SORU 17                                  */
/* -------------------------------------------------------------------------- */
console.log("***** SORU 17 *****");
const names = ["Alice", "Bob", "Charlie"];
const nameLengths = names.map((a) => a.length);
console.log(nameLengths) // [5, 3, 7]


/* -------------------------------------------------------------------------- */
//*                                  SORU 18                                  */
/* -------------------------------------------------------------------------- */
console.log("***** SORU 18 *****");
const words = ["apple", "banana", "cherry"];
const capitalizedWords = words.map((a) => a.toUpperCase());
console.log(capitalizedWords) //['APPLE', 'BANANA', 'CHERRY']



/* -------------------------------------------------------------------------- */
//!                            INTERVIEW QUESTION                             */
/* -------------------------------------------------------------------------- */
console.log("*****  INTERVIEW QUESTION *****");
console.log("*****  SORU1 *****");
//! Elbette, JavaScript'te Object.keys(), Object.values(), ve Object.entries() yöntemleri bir nesnenin özelliklerini işlemek için kullanılır. İşte her birinin ne yaptığını daha ayrıntılı olarak açıklamak için:

//* Object.keys(): Bu yöntem, bir nesnenin sahip olduğu özelliklerin adlarını bir dizi olarak döndürür. Yani, nesnenin içindeki anahtarları (property names) alır. Özellikle bir nesnenin içinde hangi anahtarların bulunduğunu öğrenmek veya bu anahtarlarla döngü oluşturmak için kullanışlıdır.
//? örnek:
const personA = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};
const keys = Object.keys(personA);
console.log(keys); // ['firstName', 'lastName', 'age']


//* Object.values(): Bu yöntem, bir nesnenin sahip olduğu özelliklerin değerlerini bir dizi olarak döndürür. Yani, nesnenin için deki değerleri alır. Özellikle bir nesnenin içindeki değerlere erişmek veya bu değerlerle çalışmak için kullanışlıdır.  
//? örnek:
const personB = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};
const values = Object.values(personB);
console.log(values); // ['John', 'Doe', 30]


//* Object.entries(): Bu yöntem, bir nesnenin sahip olduğu özellikleri (anahtarlar ve değerler) bir dizi içinde alt dizilere ayırarak döndürür. Yani, nesnenin içindeki her bir özelliği, anahtar ve değer olarak bir dizi içinde tutar.
//? örnek:
const personC = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};
const entries = Object.entries(personC);
console.log(entries); // [['firstName', 'John'], ['lastName', 'Doe'], ['age', 30]]

//! -------------------------------------------------------------------------- */

console.log("*****  SORU2 *****");
//* Object.freeze() yöntemi, bir JavaScript nesnesini değişmez hale getirmek için kullanılır. Bu, bir nesnenin özelliklerinin dondurulduğu anlamına gelir; yani, bir nesne dondurulduktan sonra özellikleri veya bu özelliklerin değerleri eklenemez, değiştirilemez veya kaldırılamaz.
//? örnek:
const myObject = {
    prop1: 10,
    prop2: "Merhaba",
};

Object.freeze(myObject);
console.log(myObject);

// Nesneyi değiştirmeye çalışmak etkili olmaz:
myObject.prop1 = 20; // prop1'in değerini değiştirmez
myObject.prop3 = "Dünya"; // Yeni bir özellik eklemeyi sağlamaz
console.log(myObject);

// Aynı zamanda özellikleri silemezsiniz:
delete myObject.prop2; // Bu, prop2'yi silmez
console.log(myObject);

//! Bu şekilde, bir nesneyi dondurduğunuzda, bu nesne "salt okunur" hale gelir ve özelliklerini veya değerlerini değiştiremezsiniz veya onları kaldıramazsınız.

//! -------------------------------------------------------------------------- */

console.log("*****  SORU3 *****");
//* JavaScript'te "constructor" fonksiyonları, yeni nesneler oluşturmak için kullanılan özel fonksiyonlardır. Bu fonksiyonlar, bir nesnenin özelliklerini ve davranışlarını tanımlarlar ve bu nesnenin birden çok kopyasını oluşturmanıza olanak tanır.
//? örnek: 
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

//! Constructor fonksiyonları, nesnelerin özelliklerini başlatmak ve benzer nesneleri hızlıca oluşturmak için kullanılır. Bu şekilde, aynı yapıdaki nesneleri tekrar tekrar oluşturmak zorunda kalmazsınız.

//! -------------------------------------------------------------------------- */

console.log("*****  SORU4 *****");
//*JavaScript'te reduce() yöntemi, bir dizi (array) içindeki öğeleri bir araya getirerek veya birleştirerek tek bir değere indirgeyen bir dizi yöntemidir. Bu yöntem, dizi içindeki öğeler üzerinde özel bir işlem yapmak veya bir dizi öğeyi tek bir sonuç değerine dönüştürmek için kullanılır. reduce() yöntemi, bir başlangıç değeri (initial value) ve bir geri çağırma fonksiyonu (callback function) alır.
//? örnek:

const d = [1, 2, 3, 4, 5];

const toplama = d.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

//*Bu örnekte, reduce() yöntemi başlangıç değeri olarak 0 alır ve her adımda önceki değeri (accumulator) ve mevcut öğeyi (currentValue) toplar. İlk adımda, accumulator 0'dır ve currentValue 1'dir, bu yüzden toplam 1 olur. Daha sonra bu toplam, bir sonraki adımda accumulator olarak kullanılır ve işlem devam eder.
//!reduce() yöntemi, dizideki öğeleri birleştirmek veya özel bir işlem yapmak için güçlü bir araçtır. İşlevsel programlama ve veri işleme görevlerinde sıkça kullanılır.

console.log(toplama); // Sonuç: 15

//! -------------------------------------------------------------------------- */

console.log("*****  SORU5 *****");
//* DOM, Document Object Model'ın (Belge Nesne Modeli) kısaltmasıdır ve web sayfalarını programların işleyebileceği bir şekilde temsil eden bir programlama arayüzünü ifade eder. DOM, web sayfalarının yapısını ve içeriğini temsil eden bir ağaç yapısını kullanır.

//* DOM, bir web tarayıcısı tarafından oluşturulur ve bir web sayfasının tüm öğelerini (HTML etiketleri, metin, resimler, bağlantılar vb.) nesne olarak temsil eder. Bu nesneler, programlar tarafından erişilebilir ve değiştirilebilir. Yani, JavaScript gibi programlama dilleri kullanılarak DOM üzerinde işlem yapabilirsiniz.

//* Örneğin, DOM'u kullanarak bir web sayfasındaki metni değiştirebilir, yeni HTML öğeleri ekleyebilir veya mevcut öğeleri silerek web sayfasını dinamik olarak güncelleyebilirsiniz.

//* DOM'un temel amaçları şunlardır:

//* -Web sayfalarını programlar tarafından erişilebilir ve işlenebilir hale getirmek.
//* -Web sayfasının yapısını ve içeriğini değiştirmek veya güncellemek için bir programlama arayüzü sunmak.
//* -Web sayfasındaki öğeler arasındaki etkileşimi yönetmek ve kullanıcı etkileşimleri için tepki vermek.
//* -Özetle, DOM, web geliştirme süreçlerinde web sayfalarını dinamik ve etkileşimli hale getirmek için kullanılan temel bir yapıdır.









