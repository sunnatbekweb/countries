"use strict"

const wrapper = document.querySelector(".wrapper")
const filter = document.getElementById("filter")

const renderToHTML = (arr) => {
    let res = "";
    arr.map((data) => {
        res += `
            <div class="">
                <img src="${data.flags.svg}" class="w-full h-[160px]">
                <div class="px-6 pt-6 pb-12">
                    <h1 class="mb-4 text-[#111517] text-[18px] font-extrabold">${data.name}</h1>
                    <li class="list-none mb-2 text-[#111517] text-sm font-semibold leading-4"><strong>Population:</strong>${data.population}</li>
                    <li class="list-none mb-2 text-[#111517] text-sm font-semibold leading-4"><strong>Region:</strong>${data.region}</li>
                    <li class="list-none text-[#111517] text-sm font-semibold leading-4"><strong>Capital:</strong>${data.capital}</li>
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