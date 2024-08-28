
// Callback functions, passando funções como parâmetro

function showFunction( sucessCallback , errorCallback){
    if(true){
        sucessCallback("Sucesso na requisição");
    }else{
        errorCallback("Falha na requisição");
    };
};

let sucessCallback = function(message){
    console.log(message)
};

let errorCallback = function(message){
    console.error
};

showFunction( sucessCallback , errorCallback );

//Funções pré mapeadas

console.log("Gabriel".length);
console.log("Gabriel".charAt(0));
