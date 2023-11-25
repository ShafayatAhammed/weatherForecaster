let  btn = document.getElementById("searchbtn");
let input = document.getElementById("inputField")
let pdid = document.getElementById("pdid");
let pdid2 = document.getElementById("pdid2");
let h1 = document.querySelector("h1");
let pcel = document.getElementById("pcel");
let pdex = document.getElementById("pdes");
let phigh = document.getElementById("phigh");
let plow = document.getElementById("plow");
let windsp = document.getElementById("windsp");
let humpt = document.getElementById("humpt");
let span = document.getElementById("span");

let getUpdate = async (e)=>{
    e.preventDefault();
    let inputValue = input.value;
    let date = new Date();
    if(inputValue === ""){
       pdid.classList.remove("pd")
    }
    else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=fb379d4c6c9d7871fb5d99c8ec233080&units=metric`;
        let resDatas = await fetch(url);
        let datas = await resDatas.json();
        let arrDatas = [datas];
        console.log(arrDatas);
        h1.innerText = `${arrDatas[0].name},${arrDatas[0].sys.country}`;
        pcel.innerText = arrDatas[0].main.temp+"°";
        pdex.innerText = arrDatas[0].weather[0].main;
        phigh.innerText = arrDatas[0].main.temp_max+"°";
        plow.innerText = arrDatas[0].main.temp_min+"°";
        windsp.innerText = arrDatas[0].wind.speed+"mph";
        humpt.innerText = arrDatas[0].main.humidity;
        pdid.classList.add("pd");
        pdid2.classList.add("pd2");

        if(arrDatas[0].weather[0].main == "Clear"){
            span.innerHTML = "<i class='fa-solid fa-sun ms-4'></i>"
        }
        else if(arrDatas[0].weather[0].main == "Clouds"){
            span.innerHTML = "<i class='fa-solid fa-cloud'></i>"
        }
        else if(arrDatas[0].weather[0].main == "Rain"){
            span.innerHTML = "<i class='fa-solid fa-cloud-rain'></i>"
        }
        else if(arrDatas[0].weather[0].main == "Smoke"){
            span.innerHTML = "<i class='fa-solid fa-smog'></i>"
        }
        else{
            span.innerHTML = "<i class='fa-solid fa-sun ms-4'></i>"
        }
        }
        catch{
           pdid2.classList.remove("pd2")
        }
    }
}

btn.addEventListener("click",getUpdate)