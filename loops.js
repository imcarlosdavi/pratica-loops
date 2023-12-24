// exercício de loops com tabuada e contagem

let numero = 50;
 
for(i = 0; i <= numero; i += 5){
    document.body.innerHTML += `${(i)}<br>`
}

document.body.innerHTML += `-------------<br>`

let number = 0;
 
for(i = 50; i >= number; i -= 5){
    document.body.innerHTML += `${(i)}<br>`
}

document.body.innerHTML += `-------------<br>`

let tabu = parseInt(prompt("Coloque o número da tabuada desejada: "))

for(i = tabu; i <= tabu; i++){
    
    document.body.innerHTML += `Tabuada do Número: ${(i)}<br>`

    for(j = 0; j <= 10; j++){
        document.body.innerHTML += i+" X "+j+" = "+ (i * j)
    }
}