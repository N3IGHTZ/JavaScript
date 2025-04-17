// 1) Kullanıcı ve etkinlik verisi:
const user = {
    name: "Ahmet",
    email: "ahmet@example.com"
  };
  const upcomingEvents = [
    { title: "Toplantı: Proje Sunumu", time: "09:30" },
    { title: "Doğum Günü Kutlaması", time: "15:00" },
    { title: "Spor Salonu", time: "18:00" }
  ];
  
  // 2) Template literal ile e‑posta içeriği oluşturma:
  function generateReminderEmail(user, events) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const dateStr = tomorrow.toLocaleDateString("tr-TR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  
    return `
  Merhaba ${user.name},
  
  Yarın, ${dateStr} için planladığınız etkinlikler aşağıda listelenmiştir:
  
  ${events.map((ev, i) => `  ${i + 1}. ${ev.title} @ ${ev.time}`).join("\n")}
  
  Keyifli günler dileriz!
  Takvim Uygulaması Ekibi
  `;
  }
  
  // 3) Çıktıyı konsola bas:
  console.log(generateReminderEmail(user, upcomingEvents));
  
  
  const fruits = ["elma", "muz", "çilek"];
  console.log(fruits)