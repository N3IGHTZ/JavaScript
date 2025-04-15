// ************* number veri türü tanımlama *************
// number veri türü tanımlama:
let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + tax;
console.log(
    "Fiyat:",price, 
    "KDV Oranı:", tax, 
    "KDV Tutarı:", priceTax, 
    "Fiyat:",total
);

// arttırma ve azaltma islemleri:
let counter = 320;
counter = counter + 1; // arttırma islemi - uzun yöntem
counter += 1; // arttırma islemi - kisa yöntem
counter++; // arttırma islemi - en kisa yöntem
console.log("Arttırma:",counter); // 1

counter = counter - 1; // azaltma islemi - uzun yöntem
counter -= 1; // azaltma islemi - kisa yöntem
counter --; // azaltma islemi - en kisa yöntem
console.log("Azaltma:",counter); // 0

counter = counter * 2; // çarpma islemi - uzun yöntem
counter *= 2; // çarpma islemi - kisa yöntem
console.log("Çarpma:",counter); // 0

counter = counter / 2; // bölme islemi - uzun yöntem
counter /= 2; // bölme islemi - kisa yöntem
console.log("Bölme:",counter); // 0

// islem önceligi:
console.log("1- Işlem Önceliği:", 2 + 3 * 5); // 17
console.log("2- Parantez Işlem Önceliği:", (2 + 3) * 5); // 25, parantez içindeki işlemler önceliklidir.

// mod(kalan) alma %:
// sayi tek mi çift mi?

console.log("3- Tek Mod Alma:",3 % 2); // 1, tek sayı
console.log("4- Cift Mod Alma:",4 % 2); // 0, çift sayı

// 8 ürün alan koliye tüm ürünler sığar mı?

console.log("5- Koli Mod Alma: ", 12 % 8); // 4 ürün kalır

// üs alma **:

console.log("6- Üs Alma:", 2 ** 4); // 16, 2 üssü 4

// asagi yuvarlama islemi -> Math.floor():
console.log("7- Aşağı Yuvarlama:", Math.floor(3.9)); // 3, 3.9 sayısını aşağı yuvarlar

// yukari yuvarlama islemi -> Math.ceil():
console.log("8- Yukarı Yuvarlama:", Math.ceil(3.6)); // 4, 3.1 sayısını yukarı yuvarlar

// tam sayiya yuvarlama islemi -> Math.round():
console.log("9- Tam Sayıya Yuvarlama:", Math.round(1.5)); // 2, 1.5 sayısını en yakın tam sayıya yuvarlar "1.2 -> 1, 1.6 -> 2"
