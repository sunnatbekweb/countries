"use strict"

const wrapper = document.querySelector(".wrapper")

const renderToHTML = () => {
    countries.countries1.map((data) => {
        const element = document.createElement('div')
        element.classList.add("card")
        element.classList.add('shadow')

        element.innerHTML = `
        <img src="${data.flags.svg}" class="w-full h-[160px]">
        <div class="px-6 pt-6 pb-12">
            <h1 class="mb-4 text-[#111517] text-[18px] font-extrabold">${data.name}</h1>
            <li class="list-none mb-2 text-[#111517] text-sm font-semibold leading-4"><strong>Population:</strong>${data.population}</li>
            <li class="list-none mb-2 text-[#111517] text-sm font-semibold leading-4"><strong>Region:</strong>${data.region}</li>
            <li class="list-none text-[#111517] text-sm font-semibold leading-4"><strong>Capital:</strong>${data.capital}</li>
        </div>
        `
        wrapper.appendChild(element)
    })
}

renderToHTML()