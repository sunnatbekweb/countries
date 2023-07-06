// ----------------- Render Detail info-----------------

let [singleCountry] = countries.filter((v) => v.alpha3Code === localStorage.getItem("code"))
const wrapper2 = document.querySelector(".wrapper2")

console.log(singleCountry.code);

wrapper2.innerHTML = `
        <div class="flex justify-center 2xl:justify-start">
            <img src="${singleCountry.flag}" class="w-full lg:max-w-[560px] h-[230px] md:h-[400px] border dark:border-[#2B3844] mb-[45px] 2xl:m-0 flex justify-center 2xl:justify-start" alt="flag">
        </div>
        <div class="title">
            <h2 class="text-[#111517] dark:text-white text-4xl font-extrabold text-center 2xl:text-start">${singleCountry.name}</h2>

            <div class="flex flex-wrap items-start gap-8 xl:gap-[140px] mt-6 mb-[70px]">
                <ul class="font-semibold text-base leading-8 text-[#111517] dark:text-white w-[220px]">
                    <li class="list-none flex gap-3"><strong>Native Name: </strong>${singleCountry.nativeName}</li>
                    <li class="list-none flex gap-3"><strong>Population: </strong>${singleCountry.population}</li>
                    <li class="list-none flex gap-3"><strong>Region: </strong>${singleCountry.region}</li>
                    <li class="list-none flex gap-3"><strong>Sub Region: </strong>${singleCountry.subregion}</li>
                    <li class="list-none flex gap-3"><strong>Capital: </strong>${singleCountry.capital}</li>
                </ul>

                <ul class="font-semibold text-base leading-8 text-[#111517] dark:text-white">
                    <li class="list-none flex gap-3"><strong>Top Level Domain: </strong>${singleCountry.topLevelDomain}</li>
                    <li class="list-none flex gap-3"><strong>Currencies: </strong>${singleCountry.currencies.code},${singleCountry.currencies.name}</li>
                    <li class="list-none flex gap-3"><strong>Languages: </strong>${singleCountry.languages}</li>
                </ul>
            </div>

            <p><strong>Border Countries: </strong> <span class="px-[30px] py-[6px] border dark:bg-[#202C36] border-[#202C36]">${singleCountry.borders}</span> </p>
        </div>
        `

// --------------------- Dark mode ------------------------------

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