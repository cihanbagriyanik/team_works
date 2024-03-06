1. What is pre-middleware, and how does it work?

   Answer: Pre-middleware is a type of Express.js middleware used to preprocess a request. It is used to make
   changes to a request before or prior to processing it and then pass it to the subsequent middleware or
   routing function. For example, it can be used to validate incoming data, perform authentication, or restrict the
   request in some way

# "Ön-middleware (pre-middleware), bir Express.js ara yazılım türüdür ve bir isteği ön işleme tabi tutmak için kullanılır. İsteği işleme koymadan önce değişiklikler yapmak ve ardından sonraki ara yazılıma veya yönlendirme işlevine geçirmek için kullanılır. Örneğin, gelen verileri doğrulamak, kimlik doğrulama yapmak veya isteği belirli bir şekilde kısıtlamak için kullanılabilir."

2. What is a simple token-based authentication system in Express.js, and how does it work?

   Answer: A simple token-based authentication system in Express.js involves issuing a token to an authenticated
   user upon login. This token is then sent with subsequent requests to verify the user's identity. The server
   validates the token and allows or denies access based on its authenticity. It's a straightforward way to secure
   API endpoints.

   # "Express.js'te basit bir belirteç tabanlı kimlik doğrulama sistemi, oturum açan bir kullanıcıya bir belirteç (token) verilmesini içerir. Bu belirteç daha sonra kullanıcının kimliğini doğrulamak için sonraki isteklerle birlikte gönderilir. Sunucu belirteci doğrular ve kimlik doğruluğuna dayanarak erişime izin verir veya reddeder. API uç noktalarını güvence altına almanın basit bir yoludur."

3. How do you generate and issue tokens in Express.js for user authentication?

   Answer: To generate and issue tokens in Express.js, you can use libraries like jsonwebtoken. When a user logs
   in, you create a token with user-specific information, sign it with a secret key, and send it to the client. The
   client includes this token in the header of subsequent requests.

   # "Express.js'de tokenlari oluşturmak ve dağıtmak için jsonwebtoken gibi kütüphaneleri kullanabilirsiniz. Bir kullanıcı oturum açtığında, kullanıcıya özgü bilgilerle bir belirteç oluşturur, onu bir gizli anahtarla imzalarsınız ve istemciye gönderirsiniz. İstemci bu belirteci sonraki isteklerin başlığında dahil eder."

4. What are the advantages of using simple token-based authentication in Express.js over traditional
   username/password authentication?

   Answer: Simple token-based authentication offers several advantages over traditional methods, including
   better security, scalability, and flexibility. It eliminates the need to store sensitive user passwords on the server,
   reduces the risk of data breaches, and allows for seamless API access by clients without the need for session
   management.

   # "Basit token tabanlı kimlik doğrulamanın geleneksel yöntemlere göre birkaç avantajı vardır, bunlar arasında daha iyi güvenlik, ölçeklenebilirlik ve esneklik bulunur. Bu yöntem, hassas kullanıcı şifrelerini sunucuda depolama gereksinimini ortadan kaldırır, veri ihlalleri riskini azaltır ve istemcilerin oturum yönetimi gerektirmeden sorunsuz bir şekilde API'ye erişmesine olanak tanır."

5. E: Token-based authentication is a method used to establish secure communication between the
   client and the server. Users receive a token instead of **\_\_** and **\_\_** to log in, and they authenticate
   their identity with this token..

   # "Token tabanlı kimlik doğrulama, istemci ile sunucu arasında güvenli iletişim kurmak için kullanılan bir yöntemdir. Kullanıcılar, oturum açmak için ** ve ** yerine bir token alırlar ve kimlik doğrulamayı bu tokenle gerçekleştirirler."

   Answer: username and password

6. In Express.js, a type of middleware used to check user access permissions for specific resources is
   referred to as **\_\_** middleware. This middleware inspects the request, checks the user's permissions,
   and can modify the request **\_\_** or **\_\_** processing.

   # "Express.js'de, belirli kaynaklara kullanıcı erişim izinlerini kontrol etmek için kullanılan bir ara yazılım türü ** olarak adlandırılır. Bu ara yazılım, isteği denetler, kullanıcının izinlerini kontrol eder ve isteği işleme ** veya \_\_ değiştirebilir."

   Answer: permission, before, after

7. A type of middleware used in Express.js to preprocess a request before or after processing is known
   as **\_\_** middleware. For instance, this middleware can be used to validate incoming data, perform
   authentication, or restrict the request in some way.

   # "Express.js'de, bir isteği işlemden önce veya sonra ön işlemek için kullanılan bir ara yazılım türüne \_\_ middleware olarak adlandırılır. Örneğin, bu ara yazılım gelen verileri doğrulamak, kimlik doğrulama yapmak veya isteği belirli bir şekilde kısıtlamak için kullanılabilir."

   Answer: pre middleware

8. What methods and libraries can you use to send emails using Express.js?

   Answer: To send emails using Express.js, you can use the "Nodemailer" library. Nodemailer allows you to
   connect to an email server, create email messages, and send them.

   # "Express.js kullanarak e-postalar göndermek için 'Nodemailer' kütüphanesini kullanabilirsiniz. Nodemailer, bir e-posta sunucusuna bağlanmanıza, e-posta mesajları oluşturmanıza ve bunları göndermenize olanak tanır."

9. How can you perform file uploading in an Express.js application? Which middleware or libraries are
   commonly used for this purpose?

   Answer: To handle file uploads in Express.js applications, you can use middleware like "Multer." Multer
   simplifies file uploading and allows you to process incoming files. For example, how do you create and use a
   file upload endpoint?

   # "Express.js uygulamalarında dosya yüklemelerini işlemek için 'Multer' gibi bir ara yazılımı kullanabilirsiniz. Multer, dosya yükleme işlemini basitleştirir ve gelen dosyaları işlemenize olanak tanır. Örneğin, nasıl bir dosya yükleme uç noktası oluşturup kullanırsınız?"
