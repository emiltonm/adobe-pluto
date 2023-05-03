#include "../events/main_events.jsx"
#include "../modules/ui.jsx"
panel={
    "type": "palette",
    "title": "Caronte",
    "orientation": "column",
    "resizable": false, 
    "horizontal_align": "fill",
    "vertical_align": "top",
    "spacing": 4,
    "margins": 4,
    children:[
        {
            "type": "statictext",
            "name": "tag",
            "text": "escribe un texto:"
        },
        {
            "type": "edittext",
            "name": "text1",
            "text": "placeholder"
        },
        {
            "type": "divider",
            "name": "divider1"
        },
        {
            "type": "checkbox",
            "name": "ch1",
            "text": "imprimir pre-texto",
            "default": true
        },
        {
            "type": "radiobutton",
            "name": "rb1",
            "text": "todo en mayusculas",
            "default": true
        },
        {
            "type": "radiobutton",
            "name": "rb2",
            "text": "todo en minusculas",
            "default": false
        },                        
        {
            "type": "divider",
            "name": "divider2"
        },                          
        {
            "type": "button",
            "name": "linker",
            "text": "funcion one",
            "click": alert_one,
            "arguments": ["hola"]
        },        
        {
            "type": "button",
            "name": "transparent",
            "text": "funcion two",
            "click": alert_two,
            "arguments": ["mundo"]
        }
    ]
}