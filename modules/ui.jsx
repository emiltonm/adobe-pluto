function create_panel(config){
    var panel = new Window(config.type, undefined, undefined, {resizable: config.resizable});    
    panel.text = config.title;
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
            var arg_event = config.children[i];

            component.onClick = (
                function(arg_event){
                    return function(){
                        app.beginUndoGroup(arg_event.text);
                        if(arg_event.arguments.length==0){
                            arg_event.click();
                        }else{
                            arg_event.click.apply(null,arg_event.arguments);
                        }
                        app.endUndoGroup();
                    };
                })(arg_event);
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
            //cuando escoja una opcion se ejecuta el evento
            var arg_event = config.children[i];
            if(arg_event.change==undefined){
                component.onChange=function(){};
            }else{
                component.onChange = (
                    function(arg_event){
                        return function(){
                            app.beginUndoGroup("Selection Dropdown");
                            if(arg_event.arguments==undefined){
                                arg_event.change();
                            }
                            else{
                                arg_event.change.apply(null,arg_event.arguments);
                            }
                            app.endUndoGroup();
                        };
                    })(arg_event);
            }
            continue;
        }
        //divider
        if(config.children[i].type==="divider"){
            var component = panel.add("panel",undefined,undefined,{name:config.children[i].name});
            component.alignment="fill";
            continue;
        }
        //checkbox
        if(config.children[i].type==="checkbox"){
            var component = panel.add(config.children[i].type,undefined,undefined,{name:config.children[i].name});
            component.text=config.children[i].text;
            component.value=config.children[i].default;
            continue;
        }
        //radiobutton
        if(config.children[i].type==="radiobutton"){
            var component = panel.add(config.children[i].type,undefined,undefined,{name:config.children[i].name});
            component.text=config.children[i].text;
            component.value=config.children[i].default;
            continue;
        }
        //slider
        if(config.children[i].type==="slider"){
            var component = panel.add(config.children[i].type,undefined,undefined,undefined,undefined,{name:config.children[i].name});
            component.minvalue=config.children[i].minvalue;
            component.maxvalue=config.children[i].maxvalue;
            component.value=config.children[i].default;
            continue;
        }

    }
    return panel;
}

