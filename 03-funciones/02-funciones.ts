function main(){
    calculadora();
}
function sumar(numeroUno:number,numeroDos:number): number{
    return numeroUno + numeroDos;
}
function restar(numeroUno:number,numeroDos:number): number{
    return numeroUno - numeroDos;
}
function multiplicar(numeroUno:number,numeroDos:number): number{
    return numeroUno * numeroDos;
}
function dividir(numeroUno:number,numeroDos:number): number{
    return numeroUno / numeroDos;
}
function calculadora(){
    const operacion:string=prompt('Selecciona una operacion:\n"1. Suma"\n"2. Resta"\n"3. Multiplicacion"\n"4. Dividision"\n"5. Salir"');
    const esSuma:boolean=operacion=='Suma'||
    operacion=='1'||
    operacion=='suma';
    const esResta:boolean=operacion=='Resta'||
    operacion=='2'||
    operacion=='resta';
    const esMulti:boolean=operacion=='Multiplicacion'||
    operacion=='3'||
    operacion=='multiplicacion';
    const esDivi:boolean=operacion=='Division'||
    operacion=='4'||
    operacion=='dividision';
    const salir:boolean=operacion=='Salir'||
    operacion=='5'||
    operacion=='salir';
    const esValida:boolean=esSuma||esResta||esMulti||esDivi||salir;
    let resultado=0;
    if(esValida){
        const numeroUno:number=+prompt("Numero 1");
        const numeroDos:number=+prompt("Numero 1");
        if(esSuma){
            resultado=sumar(numeroUno,numeroDos);
        }
        if(esResta){
            resultado=restar(numeroUno,numeroDos);
        }
        if(esMulti){
            resultado=multiplicar(numeroUno,numeroDos);
        }
        if(esDivi){
            resultado=dividir(numeroUno,numeroDos);
        }
        if(salir){
            console.log("Adios");
        }else{        
            console.log(resultado);
        }
    } else{
        calculadora();
    }
}
