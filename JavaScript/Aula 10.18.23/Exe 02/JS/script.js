preco = prompt("O valor do produto: ");
valor = prompt("O valor pago: ");
troco = (valor - preco);
if(troco < 0){
    alert("Valor insuficiente...");
}else{
    document.write("O troco e " + troco);
}