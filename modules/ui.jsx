function create_panel(config){
    var panel = new Window(config.type, undefined, undefined, {resizeable: config.resizeable});    
    panel.text = config.titulo;
    panel.orientation = config.orientation;
    panel.alignChildren = [config.horizontal_align,config.vertical_align];
    panel.spacing = config.spacing;
    panel.margins = config.margins;
    for (var i = 0; i < config.children.length; i++) {
        //label
        if(config.children[i].type==="statictext"){
            var component = panel.add(config.children[i].type,undefined,undefined,{name:config.children[i].name});
            component.text = config.children[i].text;
            continue;
        }
        //boton
        if(config.children[i].type==="button"){
            var component = panel.add(config.children[i].type,undefined,undefined,{name:config.children[i].name});
            component.text = config.children[i].text;
            // para que function pueda acceder a los parametros de config.children[i].click
            // necesito utilizar una variable local del mismo ambito que la funcion
            var arg_event = config.children[i];
            component.onClick = function(){
                app.beginUndoGroup(arg_event.text);
                //si la longitud de los argumentos es 0, no se envian argumentos
                if(arg_event.arguments.length==0){
                    arg_event.click();
                }else{
                    arg_event.click.apply(null,arg_event.arguments);
                }
                app.endUndoGroup();
            }
            continue;
        }
        //input
        if(config.children[i].type==="edittext"){
            var component = panel.add(config.children[i].type+' {properties: {name:"'+config.children[i].name+'"}}');
            component.text = config.children[i].text;
            continue;
        }
        //dropdown
        if(config.children[i].type==="dropdownlist"){
            var component = panel.add(config.children[i].type,undefined,undefined,{name:config.children[i].name, items:config.children[i].items});
            component.selection = config.children[i].default;
            continue;
        }
    }
    return panel;
}

