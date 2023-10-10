function loadData(){
    fetch('https://restcountries.com/v3.1/all')
    .then (res => res.json())
    .then(data => displayCountry(data))
    // console.log(data);
}
function displayCountry(data){
     const countrys = document.getElementById("country");
     data.forEach(d => {
        const div = document.createElement('div');
        div.innerHTML = `
        <h2>${d.name.common}</h2>
        <img src="${d.flags.png}"/>
        <button onclick= "displaySinglaData('${d.name.common}')">Details</button>
        `
        countrys.appendChild(div)
     });
}

const countrys2 = document.getElementById("country2");
const div = document.createElement('div')

function displaySinglaData(data){
    fetch(`https://restcountries.com/v3.1/name/${data}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        div.innerHTML = `
        <h1>${data[0].name.common}</h1>
        <img src="${data[0].flags.png}"/>
        `
        countrys2.appendChild(div)
    })
    
    window.scrollTo(0, 0);
}


loadData()