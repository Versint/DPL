function cadena(){

let texto = "";
let textoCompleto="";
    do{
        
         texto = prompt("Escribe: ");

         if(textoCompleto == ""){
            textoCompleto += texto ;

         }else if(texto != null){
            textoCompleto += "-"+texto ;

         }else{
            let paco = "hasbulla";
         }
       

    }while(texto != null);
    
   
      document.write(textoCompleto);
    

    
}

cadena();