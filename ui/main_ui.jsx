#include "../events/main_events.jsx"
#include "../modules/ui.jsx"
panel={
    "type": "palette",
    "titulo": "Caronte",
    "orientation": "column",
    "resizeable": false, 
    "horizontal_align": "fill",
    "vertical_align": "top",
    "spacing": 4,
    "margins": 4,
    children:[
        {
            "type": "button",
            "name": "linker",
            "text": "enlazar",
            "click": precompose,
            "arguments": []
        },        
        // {
        //     "type": "button",
        //     "name": "transparent",
        //     "text": "cambiar opacidad",
        //     "click": transparent,
        //     "arguments": [25]
        // }
    ]
}