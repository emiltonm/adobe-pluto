/* panel={
    "titulo": "titulo",
    "type": ["dialog","palette","window"],
    "orientation": ["column","row"],
    "resizeable": true, 
    "horizontal_align": ["left","center","right","fill"],
    "vertical_align": ["top","center","bottom"],
    "spacing": 4,
    "margins": 4,
} */

function create_panel(config){
    var panel = new Window(config.type, undefined, undefined, {resizeable: config.resizeable});    
    panel.text = config.titulo;
    panel.orientation = config.orientation;
    panel.alignChildren = [config.horizontal_align,config.vertical_align];
    panel.spacing = config.spacing;
    panel.margins = config.margins;
    for (var i = 0; i < config.children.length; i++) {
        component=panel.add(config.children[i].type,undefined,undefined,{name:config.children[i].name});
        component.text = config.children[i].text;
    }
    return panel;
}

