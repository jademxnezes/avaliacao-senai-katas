

export default function stringcalculator(numbers:string){
    
    var ArrayDeNumerosString = numbers.split(",")
    var ArrayDeNumeros = ArrayDeNumerosString.map(Number)
    

    for( var i = 0; i < ArrayDeNumeros.length; i++){ 
                                   
        if ( ArrayDeNumeros[i] >= 1000) { 
            
            ArrayDeNumeros.splice(i, 1); 
            i--; 
        }
        if(ArrayDeNumeros[i] < 0){
           return console.error("Não pode ser negativo")
        }
        
    }
    
    var SomaDosArrays = ArrayDeNumeros.reduce(
        (valoranterior, valoratual) =>  valoranterior + valoratual
        ,0)

    return SomaDosArrays
}

