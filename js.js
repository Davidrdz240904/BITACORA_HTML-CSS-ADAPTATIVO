function boton() {
    alert("Bienvenidos a los bucles de la f1")
console.log("Bienvenido alos Bucles de la formula 1");
//ciclo do while
do {
    var ini=prompt("Quieres iniciar la carrera 1)si 2)no");
    //ciclo if
    if (ini==1) {

            alert("Carrera iniciada");
            var carros=prompt("cuantos carros estan saliendo")
            console.log("Numero de Monoplaza",carros);
            //Ciclo for
            for (let i = 0; i <carros; i++) {
                console.log("Monoplaza",(i+1),"Saliendo");
            }
            var vuel=prompt("Cuantas vueltas faltan");
            var i=0;

            //ciclo while
            while (i<vuel) {
                console.log("Vuelta",(i+1),"Completada");
                i++;
            }


        var escu=prompt("Que escuderia quieres que gane 1) red bull , 2) mclaren ,3 )ferrari, 4) mercedes");
        //Ciclo switch
        switch (escu) {
            case "1":
                alert("Red bull a ganado la carrera");
                console.log("Red bull a ganado la carrera");
                
            break;
            case "2":
                alert("Mclaren a ganado la carrera");
                console.log("Mclaren a ganado la carrera");
            break;
            case "3":
                alert("Ferrari a ganado la carrera");
                console.log("Ferrari a ganado la carrera");
            break;
            
            case "4":
                alert("Mercedes a ganado la carrera");
                console.log("Mercedes a ganado la carrera");
            break;
        
            default:
                alert("Esa escuderia no existe");
                console.log("Esa escuderia no existe");
                break;
        }
    }
    var terminar=prompt("quires terminar los ciclos de f1??  1) si o 2) no")
} while (terminar==2);
    
}
