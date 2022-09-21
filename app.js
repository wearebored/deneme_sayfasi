let hesap = document.querySelector(".btns");
let alt = document.querySelector(".alt");
let ust = document.querySelector(".ust");
let del = document.querySelector(".del");

hesap.onclick = function (e) {
  // ------İŞLEM BÖLÜMÜNDE 4 İŞLEM KONTROLÜ YAPARLAR------
  let bölme = alt.textContent.indexOf("÷");
  let cikarma = alt.textContent.indexOf("-");
  let carpma = alt.textContent.indexOf("x");
  let toplama = alt.textContent.indexOf("+");
// -------TIKLANILAN ALANIN KARAKTER BİLGİSİ-------
  let tik = e.path[0].childNodes[0].data;
  // -----ALT VE ÜST SON KARAKTER------
  let il = alt.textContent.slice(-1);
  let us = ust.textContent.slice(-1);
  // ---------NUMARALARA TIKLAMA---------
  if (tik in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) {
    document.createElement("p");
    let sayı = document.createTextNode(tik);
    alt.appendChild(sayı);
  } 
  // -----------İŞLEMLERE TIKLAMA--------
  else if (tik == "÷" || tik == "-" || tik == "x" || tik == "+") {
    // ------ALT VE ÜST ALAN BOŞKEN SADECE "-" İŞLEMİNİN KULLANIMI--------
    if (il == "" && us == "") {
      if (tik == "-") {
        alt.textContent = ust.textContent;
        ust.textContent = "";
        alt.textContent += tik;
      }
    } 
    // ------ÜSTTEKİ SONUÇ ÜZERİNDE İŞLEM YAPMAYA DEVAM ETME-----
    // ---ALT ALAN BOŞSA ÜSTTEKİ SAYI DEĞERİ 4 İŞLEM KARAKTERLERİ KULLANILARAK İŞLEME DEVAM ETTRİLİR------
    else if (il == "") {
      alt.textContent = ust.textContent;
      ust.textContent = "";
      alt.textContent += tik;
    }
    // -----İŞLEM ALANININ SON KARAKTERİ SAYI İSE----
    else if (il in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) {
      // ------2. BİR 4 İŞLEM KARAKTERİ KULLANILIRSA OTOMATİK EŞİTLEME YAPAR VE KALDIĞI YERDEN DEVAM EDER-----
      // -----ÖRNEK: "4+5+" YAZILDIĞI ANDA "9+" ŞEKLİNDE DEĞİŞTİRİR------
      if (bölme >= 1 || cikarma >= 1 || carpma >= 1 || toplama >= 1) {
        islem();
        alt.textContent = ust.textContent;
        ust.textContent = "";
        alt.textContent += tik;
      } 
      // ----4 İŞLEM İLK DEFA KULLANILIYORSA KULLANILAN 4 İŞLEM KARAKTERİNİ YAZDIRI-----
      else {
        document.createElement("p");
        let sayı = document.createTextNode(tik);
        alt.appendChild(sayı);
      }
    }
    // -------KULLANILAN İŞLEMİN DEĞİŞTİRİLMESİ--------
    else {
      console.log(alt.textContent.length);
      if (alt.textContent.length > 1) {
        let al = alt.textContent.slice(0, -1).concat(tik);
        alt.textContent = al;
      }
    }
  } 
  // -------EŞİTTİR KULLANMA-----
  else if (tik == "=") {
    document.createElement("p");
    let sayı = document.createTextNode("");
    ust.appendChild(sayı);
    islem();
  } 

  // -------SIFIRLAMA İŞLEMİ-------
  else if (tik == "AC") {
    ust.textContent = "";
    alt.textContent = "";
  } 
  // -------SAYIYI NEGATİF-POZİTİF YAPMA-------
  else if (tik == "±") {
    if (alt.textContent == "") {
      ust.textContent = -ust.textContent;
      alt.textContent = ust.textContent;
      ust.textContent = "";
    } else {
      alt.textContent = -alt.textContent;
    }
  } 

  // -------YÜZDE KULLANMA-------
  else if (tik == "%") {
    if (alt.textContent == "" && !ust.textContent == "") {
      alt.textContent = (ust.textContent / 100).toFixed(2);
      ust.textContent = "";
    } else if (!alt.textContent == "" && !ust.textContent == "") {
      alt.textContent = (alt.textContent / 100).toFixed(2);
    } else if (!alt.textContent == "" && ust.textContent == "") {
      alt.textContent = (alt.textContent / 100).toFixed(2);
    }
  }

  // -----NOKTA KOYMA------
  else if (tik == ".") {
    let noktaal = alt.textContent.indexOf(".");
    let noktaus = ust.textContent.indexOf(".");
    // -----İŞLEM ALANINDA NOKTA KOYMAYA UYGUNLU KONTROLÜ------
    if (il in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) {
      // ------4 KARAKTERİNDEN SONRAKİ SAYIDA "." KULLANILMIŞMI DİYE KONTROL EDER------
      if (bölme >= 1 || cikarma >= 1 || carpma >= 1 || toplama >= 1) {
        sayac = 0;
        for (i of [toplama, carpma, cikarma, bölme]) {
          if (i > sayac) {
            sayac = i;
          }
        }
        let a = alt.textContent.slice(sayac + 1);
       
        if (a.indexOf(".") < 0) {
          alt.textContent += tik;
        }
      } 

      else if (noktaal == "-1") {
        alt.textContent += tik;
      }
      // ------SONUÇA NOKTA KOYMA-------
    } else if (us in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) {
      if (noktaus == "-1") {
        ust.textContent += tik;
        alt.textContent = ust.textContent;
        ust.textContent = "";
      }
    }
  }
};

// ---------HESAPLAMA FONKSİYONU---------
function islem() {
  let bölme = alt.textContent.indexOf("÷");
  let cikarma = alt.textContent.indexOf("-");
  let carpma = alt.textContent.indexOf("x");
  let toplama = alt.textContent.indexOf("+");
  
  // ---------BÖLME İŞLEMİ-------
  if (bölme > 0) {
    let sonuc =
      Number(alt.textContent.slice(0, bölme)) /
      Number(alt.textContent.slice(bölme + 1));
    ust.textContent = sonuc.toFixed(2);
    alt.textContent = "";
    console.log(sonuc);
  } 
  // ---------ÇARPMA İŞLEMİ---------
  else if (carpma > 0) {
    let sonuc =
      Number(alt.textContent.slice(0, carpma)) *
      Number(alt.textContent.slice(carpma + 1));
    ust.textContent = sonuc;
    alt.textContent = "";
    console.log(sonuc);
  } 
  // ----------TOPLAMA İŞLEMİ--------
  else if (toplama > 0) {
    let sonuc =
      Number(alt.textContent.slice(0, toplama)) +
      Number(alt.textContent.slice(toplama + 1));
    ust.textContent = sonuc;
    alt.textContent = "";
    console.log(sonuc);
  } 
  // ----------ÇIKARMA İŞLEMİ---------
  else if (cikarma >= 0) {
    if (cikarma == "0") {
      let ifade = alt.textContent.slice(1);
      let cikarma2 = ifade.indexOf("-");
      let sonuc =
        (Number(ifade.slice(0, cikarma2)) + Number(ifade.slice(cikarma2 + 1))) *
        -1;
      ust.textContent = sonuc;
      alt.textContent = "";
      console.log(sonuc);
    } else {
      let sonuc =
        Number(alt.textContent.slice(0, cikarma)) -
        Number(alt.textContent.slice(cikarma + 1));
      ust.textContent = sonuc;
      alt.textContent = "";
      console.log(sonuc);
    }
  }
}

