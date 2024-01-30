"use strict";

/*----------------------------------

//!          Work Shop

------------------------------------*/

//? SORU-1 "Express nedir?
/* 
Cevap:
Express, NodeJS üzerine inşa edilmiş minimalist bir web çerçeve katmanıdır. Harika özellikler sunarak web ve mobil uygulamaları geliştirmemize olanak tanır. Express'i kullanarak tek sayfa, çok sayfa veya hibrit web uygulamaları oluşturabiliriz."
*/

//? SORU-2 "Express'in popülerliği nereden gelmektedir?
/*
Cevap:
Birçok Node.JS web uygulama çerçevesi bulunsa da, Express oldukça popülerdir ve tüm geliştiricilerin tanıdık olmaları beklenen "de facto" web uygulama çerçevesi olarak hizmet verir. Hem Express hem de NodeJS JavaScript'e dayandığı için dil öğrenmek, teknik olmayan insanlar için bile o kadar zor değildir. JS'nin popülerliği nedeniyle uygulamaların backend'inin geliştirilmesi son derece kolaydır.
Express'in neden popüler olduğunu sıralayabiliriz:

Basit ve kurulumu kolaydır ve özelleştirilebilir.
Web uygulamalarını tasarlamak için oldukça yaygın bir mimari olan MVC (Model-View-Controller) mimarisini destekler.
Google V8 Engine desteği ile daha az hata ile geliştirilmiş performans sağlar.
Herhangi bir belirli işletim sistemine sınırlı değildir, çapraz platformdır.
Uygulama rotalarını HTTP yöntemlerine ve URL'lere dayanarak tanımlamanıza olanak tanır.
İsteği ve yanıtı manipüle etmek için kullanılabilen bir dizi middleware bileşeni içerir.
Bir middleware'in hatayı ele almasına olanak tanır.
REST API'ye sahip bir sunucu oluşturmanıza olanak tanır.
MongoDB, MySQL, SQlite, PostgreSQL gibi veritabanlarına hızlı bir şekilde bağlanmanıza olanak tanır.
Varsayılan şablon motoruyla birlikte gelir ve diğer şablon motorlarını da destekler.
Uygulamanın statik dosyalarını ve servislerini kolayca yönetmenize olanak tanır."
*/

//? SORU-3 "3. Hiçbir zaman bakıp, hangi ünlü şirketlerin Express'i kullandığına dair bir araştırma yaptınız mı, Express'in diğer çerçeveler arasındaki yeri nedir? Biraz araştırma yapalım.
/*
https://www.statista.com/statistics/1124699/worldwide-developer-survey-most-used-frameworks-web/
https://www.apptension.com/blog-posts/top-backend-frameworks
*/

//? SORU-4 "4. Express ve NodeJS arasındaki farklar nelerdir?
/*
Cevap:
Express ve NodeJS birbirinden birçok açıdan farklılık gösterir. İşte bazı farklar; Node JS, JavaScript kodunun bir tarayıcı dışında (sunucu tarafında) çalıştırıldığı açık kaynaklı bir platformdur. Bu, bir web sunucusu olarak hareket eden bir platformdur ve bir programlama dili veya çerçeve değildir. Nodejs daha geniş bir amaç için kullanılır. Öte yandan, Express.js, NodeJS üzerine inşa edilmiş bir çerçevedir. NodeJS, JavaScript için hızlı ve verimli bir çalışma zamanı sağlamaya odaklanırken, Express, sunucu tarafı uygulamalarının geliştirilmesini basitleştirmeye odaklanır. Hem NodeJS hem de Express, web geliştiricileri için popüler seçeneklerdir, ancak Express, web uygulamaları ve RESTful API'lar oluşturmak için tercih edilen seçenektir.

Özellik	                Express	                                      NodeJS
Amaç	                Web çerçevesi	                              JavaScript çalışma zamanı
Üzerine İnşa	        NodeJS	                                      Chrome'un V8 JavaScript motoru
Odak	                Sunucu tarafı geliştirme    	              Genel amaçlı JavaScript programlama
Ana Özellikler  	    Rotalama, orta yazılım, şablona alma	      Non-blocking I/O, etkinlik yönlendirmeli programlama
Kullanım Alanları	    Web uygulamaları, RESTful API'lar	          Sunucu tarafı betikleme, komut satırı araçları oluşturma"
*/

//? SORU-5 "5. Middleware nedir ve görevleri nelerdir?
/*
Cevap:
Middleware nedir ve görevleri nelerdir? Middleware, express yönlendirme katmanından geçmeden önce çağırdığımız işlevdir. Middleware'in temel görevleri şunlardır:

Başlıkların ayarlanması, doğrulama vb. gibi kodlar herhangi bir işletilebilir.
Yanıt ve istek nesnelerine değişiklikler yapılabilir.
Middleware tarafından istek-cevap döngüsü sonlandırılabilir.
İlerlemek ve nihai isteği işlemek için yığındaki bir sonraki middleware işlevi çağrılabilir."
*/

//? SORU-6 "6. package.json dosyasında gördüğümüz anahtarların anlamını açıklayın.
/*
 Cevap:

Name: Bu alan, paketinizin veya projenizin adını belirtir. Benzersiz, küçük harfle ve boşluk veya özel karakter içermemelidir.
Version: Version alanı, paketinizin mevcut sürümünü belirtir. Semantik versiyonlama kurallarını takip eder (örneğin, 1.0.0) ve diğerlerine paketinizin sürüm geçmişini anlamalarında yardımcı olur.
Description: Burada, paketinizin kısa bir açıklamasını sağlayabilirsiniz. Bu, kullanıcıların ve işbirlikçilerin paketinizin amacını anlamalarına yardımcı olur.
Main: Bu alan, paketinizin giriş noktasını belirtir. Varsayılan olarak, genellikle "main": "index.js" olarak ayarlanır, varsayılan JavaScript dosyanızın adı index.js ise.
Scripts: Bu bölüm, npm run komutu kullanılarak çalıştırılabilen özel betikleri tanımlamanıza olanak tanır. Yaygın betikler arasında uygulamanızı çalıştırmak için "start" ve testleri çalıştırmak için "test" bulunabilir.
Dependencies: Bu alanda, projenizin bağımlı olduğu paketleri listelersiniz. Bu bağımlılıklar, projenizin doğru çalışması için gereklidir. Başka biri projenizi kullanmak istediğinde npm install komutunu çalıştırabilir ve burada listelenen tüm bağımlılıkları yükler."
*/

//? SORU-7 "7. Express.js'de res.send() ve res.json() arasındaki fark nedir?
/* 
Cevap:
res.send(), herhangi bir türde veri (dize, nesne, tampon vb.) içeren bir yanıt göndermek için kullanılır. Öte yandan res.json(), bir JSON yanıtı göndermek için kullanılır. res.json() aynı zamanda Content-Type başlığını application veya JSON olarak ayarlar."
*/

//? SORU-8 "8. Express.js'de app.use() ve app.get() arasındaki fark nedir?
/* 
Cevap:
app.use(), tüm HTTP yöntemleri için yürütülmesi gereken middleware'i belirtmek için kullanılır, app.get() ise yalnızca GET istekleri için yürütülmesi gereken middleware'i belirtmek için kullanılır."
*/

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
//? Soru-9 "9. Gelen isteğin methodunu ve URL'sini konsola yazdırmak için bir middleware yazın."

const express = require("express");
const app = express();

const PORT = 8000;

function logRequest(req, res, next) {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
}
app.use(logRequest);

// app.use((req, res, next) => {
//   console.log("request method:", req.method, "request url:", req.url);
//   next();
// });

app.get("/", (req, res) => {
  res.send("<h1>hello, user!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

/* -------------------------------------------------------------------------- */
//? Soru-10 "10. Express.js içinde, sorgu parametreleri olarak geçilen iki sayının toplamını hesaplayan bir fonksiyon yazın."
/*
const express = require("express"); // Assign expressFramework to express variable.
const app = express();

const PORT = 8000;

app.get("/sum", (req, res) => {
  const { num1, num2 } = req.query;
  const sum = parseInt(num1) + parseInt(num2);
  res.send(`The sum of ${num1} and ${num2} is ${sum}.`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
/* -------------------------------------------------------------------------- */
