export function ohce (palavra: string){
    let palavraInvertida = palavra.split("").reverse().join("")
       if(palavraInvertida === palavra){ 
           return 'Gostei da palavra!'
       }else{
           return palavraInvertida
       }

   }
   