// fetch(
//   "https://api.openweathermap.org/data/2.5/forecast?q=balıkesir&appid=392b2f60556f3f3ff66b102138100d46"
// )
//   .then((a) => a.json())
//   .then((a) => {
//     console.log(a);
//   });

// fetch(
//   "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=39.8605&lon=27.785&lang=en",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
let button = document.querySelector(".konum");


button.onclick = function () {
   
    navigator.geolocation.getCurrentPosition((a)=>{
    const crd = a.coords;
    let lat=crd.latitude
    let lon=crd.longitude
        console.log(lat,lon);
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=392b2f60556f3f3ff66b102138100d46`
    )
      .then((a) => a.json())
      .then((a) => {
        console.log(a);
        let sonuc = document.querySelector(".a");
        let sehir = a.city.name;
        let gün1 = {
          tarih1: a.list[4].dt_txt,
          tarih2: a.list[12].dt_txt,
          tarih3: a.list[20].dt_txt,
        };
        let sıcak1 = {
          sıcaklık1: a.list[4].main.temp,
          sıcaklık2: a.list[12].main.temp,
          sıcaklık3: a.list[20].main.temp,
        };
        let durum = {
          durum1: a.list[4].weather[0].main,
          durum2: a.list[12].weather[0].main,
          durum3: a.list[20].weather[0].main,
        };
        sonuc.children[2].innerHTML = sonuc.children[1].innerHTML;
        sonuc.children[1].innerHTML = sonuc.children[0].innerHTML;

        console.log(sonuc.children);
        sonuc.children[0].innerHTML = `
    <div class="sonuc">
        <div class="gün1 günler" style="background-image: url(${
          durum.durum1
        }.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 17rem;">
          <div class="sehir">${sehir}</div>
          <div class="derece">
            <div class="sıcaklık">${(sıcak1.sıcaklık1 - 272.15).toFixed(
              0
            )}</div>
            <div>
              <p class="c">°C</p>
              <p class="durum">${durum.durum1}</p>
            </div>
          </div>
          <div class="tarih">Bugün <br>
          ${gün1.tarih1.slice(0, 10)}</div>
        </div>
        <div class="gün2 günler" style="background-image: url(${
          durum.durum2
        }.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 17rem;">
          <div class="sehir"></div>
          <div class="derece">
            <div class="sıcaklık">${(sıcak1.sıcaklık2 - 272.15).toFixed(
              0
            )}</div>
            <div>
              <p class="c">°C</p>
              <p class="durum">${durum.durum2}</p>
            </div>
          </div>
          <div class="tarih">Yarın <br>${gün1.tarih2.slice(0, 10)}</div>
        </div>
        <div class="gün3 günler" style="background-image: url(${
          durum.durum3
        }.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 17rem;">
          <div class="sehir"></div>
          <div class="derece">
            <div class="sıcaklık">${(sıcak1.sıcaklık3 - 272.15).toFixed(
              0
            )}</div>
            <div>
              <p class="c">°C</p>
              <p class="durum">${durum.durum3}</p>
            </div>
          </div>
          <div class="tarih">Yarından sonra <br> ${gün1.tarih3.slice(
            0,
            10
          )}</div>
        </div>
      </div>
    `;
      });
})
}

    
 



document.querySelector(".buton").onclick = () => {
  let inp = document.querySelector("#sehir").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${inp}&appid=392b2f60556f3f3ff66b102138100d46`
  )
    .then((a) => a.json())
    .then((a) => {
      console.log(a);
      let sonuc = document.querySelector(".a");
      let sehir = a.city.name;
      let gün1 = {
        tarih1: a.list[4].dt_txt,
        tarih2: a.list[12].dt_txt,
        tarih3: a.list[20].dt_txt,
      };
      let sıcak1 = {
        sıcaklık1: a.list[4].main.temp,
        sıcaklık2: a.list[12].main.temp,
        sıcaklık3: a.list[20].main.temp,
      };
      let durum = {
        durum1: a.list[4].weather[0].main,
        durum2: a.list[12].weather[0].main,
        durum3: a.list[20].weather[0].main,
      };
      sonuc.children[2].innerHTML = sonuc.children[1].innerHTML;
      sonuc.children[1].innerHTML = sonuc.children[0].innerHTML;

      console.log(sonuc.children);
      sonuc.children[0].innerHTML = `
    <div class="sonuc">
        <div class="gün1 günler" style="background-image: url(${
          durum.durum1
        }.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 17rem;">
          <div class="sehir">${sehir}</div>
          <div class="derece">
            <div class="sıcaklık">${(sıcak1.sıcaklık1 - 272.15).toFixed(
              0
            )}</div>
            <div>
              <p class="c">°C</p>
              <p class="durum">${durum.durum1}</p>
            </div>
          </div>
          <div class="tarih">Bugün <br>
          ${gün1.tarih1.slice(0, 10)}</div>
        </div>
        <div class="gün2 günler" style="background-image: url(${
          durum.durum2
        }.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 17rem;">
          <div class="sehir"></div>
          <div class="derece">
            <div class="sıcaklık">${(sıcak1.sıcaklık2 - 272.15).toFixed(
              0
            )}</div>
            <div>
              <p class="c">°C</p>
              <p class="durum">${durum.durum2}</p>
            </div>
          </div>
          <div class="tarih">Yarın <br>${gün1.tarih2.slice(0, 10)}</div>
        </div>
        <div class="gün3 günler" style="background-image: url(${
          durum.durum3
        }.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 17rem;">
          <div class="sehir"></div>
          <div class="derece">
            <div class="sıcaklık">${(sıcak1.sıcaklık3 - 272.15).toFixed(
              0
            )}</div>
            <div>
              <p class="c">°C</p>
              <p class="durum">${durum.durum3}</p>
            </div>
          </div>
          <div class="tarih">Yarından sonra <br> ${gün1.tarih3.slice(
            0,
            10
          )}</div>
        </div>
      </div>
    `;
    });
};
