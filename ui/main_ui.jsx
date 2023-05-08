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
            "text": "escribe tu nombre:"
        },
        {
            "type": "edittext",
            "name": "text1",
            "text": "Emilton"
        },
        {
            "type": "statictext",
            "name": "tag2",
            "text": "o escoge uno de esta lista:"
        },
        {
            "type": "dropdownlist",
            "name": "list1",
            "items":["Select one...","Andrea","Genith","Maria","-","Eduardo","Juan Carlos","Sebastian"],
            "default": 0,
            //"change": alert_three,
            //"arguments": [""]
        },
        {
            "type": "listbox",
            "name": "list2",
            "items":["Queen","Ojeda","Angel","Mendoza","Zubiria","Quiroz"],
            "multiselect": false,
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
            "type": "slider",
            "name": "slider1",
            "minvalue": 0,
            "maxvalue": 500,
            "default": 50,
        },        
        {
            "type": "button",
            "name": "transparent",
            "text": "Valor del slider",
            "click": alert_three,
            //"arguments": ["mundo"]
        },
        {
            "type": "group",
            "name": "group1",
            "orientation": "row",
            "children": [
                {
                    "type": "statictext",
                    "name": "tag3",
                    "text": "Avance:"
                },
                {
                    "type": "button",
                    "name": "linker3",
                    "text": "-",
                    "click": previous_progress,
                },                
                {
                    "type": "progressbar",
                    "name": "progress1",
                    "maxvalue": 100,
                    "value": 0,
                    "height": 2
                },
                {
                    "type": "button",
                    "name": "linker2",
                    "text": "+",
                    "click": next_progress,
                }
            ]
        },
    ]
}