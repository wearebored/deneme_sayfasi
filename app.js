


  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((res) => {
      for (i in res) {
        document.querySelector(
          "#select"
        ).innerHTML += `<option class="select" selected>${res[i].name.common}</option>`;
      }
      val.disabled=false
    });



let val = document.querySelector("#select");
let sayac = 0;
val.disabled=true
val.onclick = () => {
  sayac += 1;
  console.log(sayac);
  if (sayac == "2") {
    sayac = 0;
    let sehir = val.value;
    let url = `https://restcountries.com/v3.1/name/${sehir}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const countryDiv = document.querySelector(".div1");
        console.log(res[0]);
        let {
          capital,
          currencies,
          flags: { svg },
          languages,
          name: { common },
          region,
        } = res[0];

        console.log(Object.values(languages));
        console.log(Object.values(currencies)[0].name);
        console.log(Object.values(currencies)[0].symbol);
        console.log(countryDiv.children);
        countryDiv.children[2].innerHTML = countryDiv.children[1].innerHTML;
        countryDiv.children[1].innerHTML = countryDiv.children[0].innerHTML;
        countryDiv.children[0].innerHTML = `
            <div class="card mx-auto m-3 shadow-lg" style="width: 18rem;">
            <img src="${svg}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${common}</h5>
                <p class="card-text">${region}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                <i class="fas fa-lg fa-landmark"></i> ${capital}
                </li>
                <li class="list-group-item">
                <i class="fas fa-lg fa-comments"></i> ${Object.values(
                  languages
                )}
                </li>
                <li class="list-group-item">
                <i class="fas fa-lg fa-money-bill-wave"></i>
                ${Object.values(currencies).map(
                  (item) => Object.values(item) + " "
                )}
            </li>
            </ul>
            <div class="card-body">
                
            
            </div>
            </div>


        `;
      });
  }
};

