opc = prompt("Digite uma das 4 operacoes: 1 : +, 2 : -, 3 : *, 4 : /");
n1 = Number(prompt("Digite o primeiro numero: "));
n2 = Number(prompt("Digite o segundo numero: "));

if(opc==1){
        document.write(n1+n2);
    }else if(opc==2){
        document.write(n1-n2);
    }else if(opc==3){
        document.write(n1*n2);
    }else if(opc==4){
        document.write(n1/n2);
    }else{
        alert("Escolha uma operacao valida...");
    }