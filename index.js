// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/
const dosya1 = ""
const dosya2 ="Beethoven_5.mp3"
const dosya3 = "C:/Users/johnsmith/Music/Beethoven_5.mp3"
function dosyaAdiniBul(path) {
  if (!path){
    return "";
  }
  return path.split('/').pop();
}
console.log(dosyaAdiniBul(dosya1));
console.log(dosyaAdiniBul(dosya2));
console.log(dosyaAdiniBul(dosya3));
/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/
const ort1 = [];
const ort2 = [4];
const ort3 =  [50, -26, 153, 7];
const ort4 = [109, 216, 288, 143, 71, 185, -278, 194, 5];

function ortalamaBul(sayilar) {
  if(sayilar.length === 0) {
    return null;
  }
  let toplam = 0;
  for (let i=0; i<sayilar.length; i++){
    toplam += sayilar[i];
  }
  return toplam / sayilar.length 
}
console.log(ortalamaBul(ort1));
console.log(ortalamaBul(ort2));
console.log(ortalamaBul(ort3));
console.log(ortalamaBul(ort4));

/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

function ortalamadanBuyukleriBul(sayilar) {
  const buyukSayilar =[];
  if(sayilar.length === 0) {
    return null;
  }
  for (let i=0; i<sayilar.length; i++){
    if (sayilar[i] >= ortalamaBul(sayilar)){
      buyukSayilar.push(sayilar[i]);
      
    } 
      
  }
   return buyukSayilar
}
console.log(ortalamadanBuyukleriBul(ort1));
console.log(ortalamadanBuyukleriBul(ort2));
console.log(ortalamadanBuyukleriBul(ort3));
console.log(ortalamadanBuyukleriBul(ort4));







/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
