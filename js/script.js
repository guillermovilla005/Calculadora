var display = ""
var todo = ""



function uno() {

    display = display + "1"
    document.getElementById("pantalla").innerHTML = display

}
function dos() {
    display = display + "2"
    document.getElementById("pantalla").innerHTML = display

}
function tres() {
    display = display + "3"
    document.getElementById("pantalla").innerHTML = display

}
function cuatro() {
    display = display + "4"
    document.getElementById("pantalla").innerHTML = display

}
function cinco() {
    display = display + "5"
    document.getElementById("pantalla").innerHTML = display

}
function seis() {
    display = display + "6"
    document.getElementById("pantalla").innerHTML = display

}
function siete() {
    display = display + "7"
    document.getElementById("pantalla").innerHTML = display

}
function ocho() {
    display = display + "8"
    document.getElementById("pantalla").innerHTML = display

}
function nueve() {
    display = display + "9"
    document.getElementById("pantalla").innerHTML = display

}
function cero() {
    display = display + "0"
    document.getElementById("pantalla").innerHTML = display

}
function coma() {
    if (display != "") {
        if (display.includes(".")) {

        } else {
            display = display + "."
        }
    } else {
        display = "0."
    }


    document.getElementById("pantalla").innerHTML = display

}
function para() {
    if (todo.endsWith("(") == false) {
        todo = todo + "("
        document.getElementById("pantalla2").innerHTML = todo
    }
}
function parc() {
    if (todo.endsWith(")") == false && todo.includes("(") == true) {

        todo = todo + display + ")"
        document.getElementById("pantalla2").innerHTML = todo
        display= ""
    }
}
function borrar() {
    display = display.substring(0, display.length - 1)
    document.getElementById("pantalla").innerHTML = display
}

function dividido() {
    if (display != "") {

        todo = todo + display + "/"

        document.getElementById("pantalla2").innerHTML = todo
        display = ""
    }

    if (todo.endsWith(")") == true){
        todo = todo +"/"
                document.getElementById("pantalla2").innerHTML = todo
    }
}
function suma() {
    if (display != "") {

        todo = todo + display + "+"

        document.getElementById("pantalla2").innerHTML = todo
        display = ""
    }
    
    if (todo.endsWith(")") == true){
        todo = todo +"+"
                document.getElementById("pantalla2").innerHTML = todo
    }
}
function resta() {
    if (display != "") {

        todo = todo + display + "-"


        document.getElementById("pantalla2").innerHTML = todo
        display = ""
    }
    
    if (todo.endsWith(")") == true){
        todo = todo +"-"
                document.getElementById("pantalla2").innerHTML = todo
    }
}
function multiplicacion() {
    if (display != "") {

        todo = todo + display + "*"


        document.getElementById("pantalla2").innerHTML = todo
        display = ""
    }
    
    if (todo.endsWith(")") == true){
        todo = todo +"*"
                document.getElementById("pantalla2").innerHTML = todo
    }
}

function igual() {
    if (display != "" && todo != "") {

        todo = todo + display
        display = eval(todo)
        document.getElementById("pantalla").innerHTML = display
        document.getElementById("pantalla2").innerHTML = todo
        todo = ""
        display = ""

    }

}





function AC() {
    todo = ""
    display = ""

    document.getElementById("pantalla2").innerHTML = todo
    document.getElementById("pantalla").innerHTML = display

}
