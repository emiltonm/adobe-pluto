#include "ui/main_ui.jsx"

main_panel = create_panel(panel);
main_panel.show();


ventana={
    "name":"ventana",
    "type":"window",
    "children":{
        "label1":{
            "type":"statictext",
            "text":"hola"
        },
        "input1":{
            "type":"edittext",
            "text":"mundo"
        },
        "group1":{
            "type":"group",
            "children":{
                "label2":{
                    "type":"statictext",
                    "text":"hola2"
                },
                "input2":{
                    "type":"edittext",
                    "text":"mundo2"
                }
            }
        }
    }
}

alert(ventana.components.group1.components.label2.text)

//convirtiendo arrays en lista de objetos para poder identificar los en codigo
//que la lista reacciones a los clicks
//validar hijos vacios o inexistentes
//corregir la seleccion multiple en la lista devuelve una lista y no un string
//empezar a aplicar patrones

//colocar composiciones creadas en una carpeta
//activar capa seleccionada cuando termina d eaplicar el proceso
//agregar limites al slider de opacity