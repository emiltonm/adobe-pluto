
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
            "type": "statictext",
            "name": "statictext_1",
            "text": "Hi, I'm a static text!",
        },
        {
            "type": "edittext",
            "name": "OK",
            "text": "OK",
        },
        {
            "type": "dropdownlist",
            "name": "lista",
            "items": ["Top","Bottom","Left","Right"],
            "default": 1
        },                
        {
            "type": "button",
            "name": "OK",
            "text": "OK",
            "click": function(){alert("solo siento odioooooo");}
        },        
    ]
}
