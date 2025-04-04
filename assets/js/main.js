//minha chave da API

const key = "e0283766cee7e7e70be7e75409ae8042"


//função para pegar o valor do input da cidade

function coletarValorCidade()  {
    //buscando valor do input no html e atribuindo a variável cidade
    let cidade = document.querySelector(".input-cidade").value
    //imprimindo a variável cidade
    console.log(cidade) 
    dadosAPI(cidade)

    
}

//função para pegar dados da API
 async function dadosAPI(cidade){
    let dados  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json())
    console.log(dados)
    dadosTela(dados)
}

function dadosTela(dados){
    document.querySelector(".cidade").innerHTML = dados.name;
    document.querySelector(".Temperatura").innerHTML =  Math.floor(dados.main.temp) + "°C";
    document.querySelector(".icone").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png` 
    document.querySelector(".previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade:  " + dados.main.humidity + "%" ;
}
