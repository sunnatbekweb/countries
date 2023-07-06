"use strict"

const wrapper = document.querySelector(".wrapper")
const filter = document.getElementById("filter")
const search = document.querySelector("#search_country")


const renderToHTML = (arr) => {
    let res = "";
    arr.map((value) => {
        res += `
            <div id="country_card" data-code="${value.alpha3Code}" class="shadow border border-[rgba(0, 0, 0, 0.03)] dark:border-[#2B3844] bg-white dark:bg-[#2B3844] transition-all">
                <div class="w-full object-fill">
                    <img src="${value.flags.svg}" class="image w-full h-[160px] border border-white dark:border-[#2B3844]">
                </div>
                <div class="px-6 pt-6 pb-12">
                    <div class="w-full h-[135px]">
                        <h1 class="mb-4 text-[#111517] text-[18px] font-extrabold dark:text-white">${value.name}</h1>
                        <li class="list-none mb-2 text-[#111517] dark:text-white text-sm font-semibold leading-4"><strong>Population: </strong> ${value.population}</li>
                        <li class="list-none mb-2 text-[#111517] dark:text-white text-sm font-semibold leading-4"><strong>Region: </strong> ${value.region}</li>
                        <li class="list-none text-[#111517] dark:text-white text-sm font-semibold leading-4"><strong>Capital: </strong> ${value.capital}</li>
                    </div>
                    <button id="country_card_btn" class="w-full py-3 bg-blue-600 mt-6 text-white font-semibold">Details</button>
                </div>
            </div>
        `
        wrapper.innerHTML = res
    })
}

renderToHTML(countries)

// ----------------- Detail info-----------------

wrapper.addEventListener("click", (e) => {
    if (e.target.id.includes("country_card_btn")) {
        let alphaCode = e.target.parentElement.parentElement.getAttribute("data-code");

        window.localStorage.setItem("code", alphaCode)

        window.location.href = "./details.html"
    }
})

// const renderDetails = (arr) => {
//     let res = "";
//     arr.map((value) => {
//         res += `
//         <img src="${singleCountry.flag}" class="w-[560px] h-[400px]" alt="flag">
//         <div class="title ">
//             <h2 class="text-[#111517] text-4xl font-extrabold">${singleCountry.name}</h2>

//             <div class="flex items-start gap-[140px] mt-6 mb-[70px]">
//                 <ul class="font-semibold text-base leading-8 text-[#111517]">
//                     <li class="list-none"><strong>Native Name: </strong>${singleCountry.nativeName}</li>
//                     <li class="list-none"><strong>Population: </strong>${singleCountry.population}</li>
//                     <li class="list-none"><strong>Region: </strong>${singleCountry.region}</li>
//                     <li class="list-none"><strong>Sub Region: </strong>${singleCountry.subregion}</li>
//                     <li class="list-none"><strong>Capital: </strong>${singleCountry.capital}</li>
//                 </ul>

//                 <ul class="font-semibold text-base leading-8 text-[#111517]">
//                     <li class="list-none"><strong>Top Level Domain: </strong>${singleCountry.topLevelDomain}</li>
//                     <li class="list-none"><strong>Currencies: </strong>${singleCountry.currencies}</li>
//                     <li class="list-none"><strong>Languages: </strong>${singleCountry.languages}</li>
//                 </ul>
//             </div>

//             <p><strong>Border Countries: </strong></p>
//         </div>
//         `
//     })

//     wrapper2.innerHTML = res
// }

// renderDetails(singleCountry)

let reg = []

countries.forEach(val => {
    reg.push(val.region)
});
let regions = [...new Set(reg)]

regions.map((v) => {
    let opt = document.createElement("option")
    opt.value = v
    opt.textContent = v
    filter.append(opt)
})

filter.addEventListener("input", (e) => {
    let res = countries.filter((v) => v.region === e.target.value);
    renderToHTML(res)
})

search.addEventListener("input", (e) => {
    let result = countries.filter((v) => v.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    renderToHTML(result)
})

// -----------------Dark Mode --------------------

const checkbox = document.getElementById('check')

function darkMode() {
    document.documentElement.classList.toggle("dark")
}

function onLoad() {
    document.documentElement.classList.toggle("dark")
}

checkbox.addEventListener("change", () => {
    darkMode()
})

document.addEventListener("DOMContentLoaded", onLoad)