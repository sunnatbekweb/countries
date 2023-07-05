"use strict"

const wrapper = document.querySelector(".wrapper")
const filter = document.getElementById("filter")
const search = document.querySelector("#search_country")

const renderToHTML = (arr) => {
    let res = "";
    arr.map((data) => {
        res += `
            <div class="shadow border border-[rgba(0, 0, 0, 0.03)] dark:border-[#2B3844] bg-white dark:bg-[#2B3844] transition-all">
                <img src="${data.flags.svg}" class="w-full h-[160px] border border-white dark:border-[#2B3844]">
                <div class="px-6 pt-6 pb-12">
                    <h1 class="mb-4 text-[#111517] text-[18px] font-extrabold dark:text-white">${data.name}</h1>
                    <li class="list-none mb-2 text-[#111517] dark:text-white text-sm font-semibold leading-4"><strong>Population: </strong> ${data.population}</li>
                    <li class="list-none mb-2 text-[#111517] dark:text-white text-sm font-semibold leading-4"><strong>Region: </strong> ${data.region}</li>
                    <li class="list-none text-[#111517] dark:text-white text-sm font-semibold leading-4"><strong>Capital: </strong> ${data.capital}</li>
                </div>
            </div>
        `
        wrapper.innerHTML = res
    })
}

renderToHTML(countries)

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

function onLoad(){
    document.documentElement.classList.toggle("dark")
}

checkbox.addEventListener("change", () => {
    darkMode()
})

document.addEventListener("DOMContentLoaded", onLoad)