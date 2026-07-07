// ข้อมูลตัวอย่าง — จะถูกแทนที่ด้วย API ในขั้นตอนถัดไป
// โครงสร้างตรงกับ response จาก GET /trips?keywords=...
const mockTrips = [
  {
    title: "คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!",
    eid: "1",
    url: "https://www.wongnai.com/trips/travel-koh-chang",
    description:
      "วันว่างนี้ไปเที่ยวเกาะช้างกัน พร้อมทำกิจกรรมต่าง ๆ เช่น เที่ยวน้ำตก ล่องเรือชมป่าชายเลน ขี่ช้างท่องป่า ผจญภัยเหนือยอดไม้ และดำน้ำตื้น รับรอทริปนี้สนุกแน่!",
    photos: [
      "https://img.wongnai.com/p/1600x0/2019/07/02/3c758646aa6c426ba3c6a81f57b20bd6.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/941dbb607f0742bbadd63bbbd993e187.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/bd1d256256c14c208d0843a345f75741.jpg",
    ],
    tags: ["เกาะ", "ทะเล", "จุดชมวิว", "ธรรมชาติ", "ตราด"],
  },
  {
    title: "ลัดเลาะ 10 ที่เที่ยวย่าน BTS สายสีเขียว",
    eid: "2",
    url: "https://www.wongnai.com/trips/new-bts-route-trips",
    description:
      "BTS สายสีเขียวเปิดให้บริการเพิ่ม 5 สถานีทั้งที งานนี้ต้องไม่มีพลาด รีบไปอัปเดต เช็กอินที่เที่ยวคูล ๆ ไปได้ง่ายก่อนใคร",
    photos: [
      "https://img.wongnai.com/p/1600x0/2020/02/18/458b9a31b62b408d91137fbe152f7450.jpg",
      "https://img.wongnai.com/p/1600x0/2020/02/18/08bca1c784db4d7f92e93656b5376681.jpg",
      "https://img.wongnai.com/p/1600x0/2020/02/18/95bd2ca371e24436bcb24d432a86836c.jpg",
      "https://img.wongnai.com/p/1600x0/2020/02/18/68289e188ea54e00b5e9d806cfd0fc54.jpg",
    ],
    tags: ["คาเฟ่", "ร้านกาแฟ", "จุดถ่ายรูป", "เที่ยวใกล้กรุง", "กรุงเทพมหานคร"],
  },
];

export default mockTrips;
