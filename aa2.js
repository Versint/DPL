function notas(){
    let n = parseInt(prompt("Dame una nota"));

    if(n >=0 && n <= 10){
    switch (n) {
        case 0:
           
        case 1:
           
        case 2:
            document.write("muy deficiente");

            break;
            case 3:
          
        case 4:
            document.write("insuficiente");
            break;

        case 5:
            document.write("suficiente");
        break;
            
        case 6:
            document.write("bien");
            break;
        case 7:
         
        case 8:
            document.write("notable");

            break;
        default:
            document.write("sobresaliente");

            break;
    }
}

}

notas();