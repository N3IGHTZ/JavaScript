// ********* let ve const ile değişken tanımlama *********


// 1)
// LET :
// let serverName = "Lethost"; // Değişken tanımlama
// console.log(serverName); // Değişkeni yazdırma

// let değişken tanımlamak için kullanılır. Değişkenin değeri sonradan değiştirilebilir.
// const ise sabit tanımlamak için kullanılır. Değişkenin değeri sonradan değiştirilemez.
// let ve const ile tanımlanan değişkenler block scope'a sahiptir. Yani sadece tanımlandıkları blok içinde geçerlidir.


// 2)
// CONST : 
// const serverName = "ConstHost"; // Değişken tanımlama
// console.log(serverName); // değişken yazdırma
// serverName = "NewConstHost"; // Değişkeni değiştirmeye çalışırsak hata alırız. Çünkü const ile tanımlanan değişkenler sabittir.


// 3)
// VAR : 
// var serverName = "Localhost"; // Değişken tanımlama
// console.log(serverName); // Değişkeni yazdırma

// var ise function scope'a sahiptir. Yani sadece tanımlandıkları fonksiyon içinde geçerlidir.
// var ile tanımlanan değişkenler global scope'a sahiptir. Yani her yerden erişilebilir.
// var ile tanımlanan değişkenler hoisting özelliğine sahiptir. Yani tanımlanmadan önce kullanılabilirler. Ancak bu durumda undefined değeri alırlar.


