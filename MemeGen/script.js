// Meme resim URL'lerini içeren dizi
const memeArray = [
  "https://i.imgur.com/bSi4xLb.png", // Meme 1
  "https://i.imgur.com/6y0G7N0.png", // Meme 2
  "https://i.imgur.com/LXnRao1.png", // Meme 3
  "https://i.imgur.com/Qqoxh1N.png"  // Meme 4
];

// Meme açıklamalarını içeren dizi
const captionArray = [
  "I am a level 60 on inferno mode!",        // Açıklama 1
  "Voted most likely to change the world.",    // Açıklama 2
  "Get this hair off my head!",                // Açıklama 3
  "Oooh that must have hurt."                  // Açıklama 4
];

// HTML'deki generator butonunu seçiyoruz
const generatorButton = document.getElementById("generator-button");
// Rastgele meme gösterecek img etiketini seçiyoruz
const randomMeme = document.getElementById("random-meme");
// Rastgele açıklama yazacak elementi seçiyoruz
const randomCaption = document.getElementById("random-caption");

// Butona tıklandığında çalışacak olay dinleyicisini ekliyoruz
generatorButton.addEventListener("click", function() {
  // memeArray dizisinin uzunluğuna bağlı olarak rastgele bir indeks seç
  const randomMemeIndex = Math.floor(Math.random() * memeArray.length);
  // captionArray dizisinin uzunluğuna bağlı olarak rastgele bir indeks seç
  const randomCaptionIndex = Math.floor(Math.random() * captionArray.length);

  // Rastgele seçilen meme resmini, img etiketinin src özelliğine atıyoruz
  randomMeme.src = memeArray[randomMemeIndex];
  // Rastgele seçilen açıklamayı, ilgili elementin iç metni olarak atıyoruz
  randomCaption.innerText = captionArray[randomCaptionIndex];
});
