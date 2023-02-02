function mostrarProgreso(idBoton, idProgreso, idLabel) {
    document.getElementById(idBoton).addEventListener("click", function(){
        var progreso = document.getElementById(idProgreso);
        var label = document.getElementById(idLabel);
        if (progreso.style.display === "none") {
            progreso.style.display = "block";
            label.style.display = "block";
        } else {
            progreso.style.display = "none";
            label.style.display = "none";
        }
    });
}

//Btn front conocimientos:
mostrarProgreso("boton1", "archivo1","label1");
mostrarProgreso("boton2", "archivo2","label2");
mostrarProgreso("boton3", "archivo3","label3");
mostrarProgreso("boton4", "archivo4","label4");
mostrarProgreso("boton5", "archivo5","label5");

//btn backend conocimientos:
mostrarProgreso("boton6", "archivo6","label6");
mostrarProgreso("boton7", "archivo7","label7");
mostrarProgreso("boton8", "archivo8","label8");
mostrarProgreso("boton9", "archivo9","label9");

//btn SQL conocimientos:
mostrarProgreso("boton10", "archivo10","label10");
mostrarProgreso("boton11", "archivo11","label11")