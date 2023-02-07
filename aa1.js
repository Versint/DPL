function edad(){
    let e = prompt("Dame tu edad");

    if(!isNaN(e)){
    if(e > 18){
        document.write("Puede conducir"); 
    }else{

    
            document.write("No puede conducir");
    }

    }else{
    document.write("NO ES UN NUMERO");
    }
}



edad();