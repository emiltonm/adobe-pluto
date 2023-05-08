function create_panel(config){
    var panel = new Window(config.type, undefined, undefined, {resizable: config.resizable});    
    panel.text = config.title;
    panel.orientation = config.orientation;
    panel.alignChildren = [config.horizontal_align,config.vertical_align];
    panel.spacing = config.spacing;
    panel.margins = config.margins;
    create_components(panel, config.children);
    return panel;
}

function create_components(panel, components){
    for(var i = 0; i < components.length; i++){
        var c = components[i];
        switch(c.type){
            case "button"://
                var component = panel.add(c.type,undefined,undefined,{name:c.name});
                component.text = c.text;
                var arg_event = c;
                if(arg_event.click==undefined){
                     component.onClick=function(){};
                }else{
                component.onClick = (
                    function(arg_event){
                        return function(){
                            // app.beginUndoGroup(arg_event.text);
                            app.beginUndoGroup("arg_event.text");
                            if(arg_event.arguments==undefined){
                                arg_event.click();
                            }else{
                                arg_event.click.apply(null,arg_event.arguments);
                            }
                            app.endUndoGroup();
                        };
                    })(arg_event);
                }
                break;
            case "statictext"://
                var component = panel.add(c.type,undefined,undefined,{name:c.name});
                component.text = c.text;
                break;
            case "edittext":
                var component = panel.add(c.type+' {properties: {name:"'+c.name+'"}}');
                component.text = c.text;
                break;
            case "dropdownlist":
                var component = panel.add(c.type,undefined,undefined,{name:c.name, items:c.items});
                component.selection = c.default;
                //cuando escoja una opcion se ejecuta el evento
                var arg_event = c;
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
                break;
            case "checkbox":
                var component = panel.add(c.type,undefined,undefined,{name:c.name});
                component.text=c.text;
                component.value=c.default;
                break;
            case "progressbar":
                var component = panel.add(c.type,undefined,undefined,{name:c.name});
                component.maxvalue=c.maxvalue;
                component.value=c.value;
                component.preferredSize.height=c.height;
                break;
            case "panel":
                
                break;
            case "group":
                var component = panel.add(c.type,undefined,{name:c.name});
                component.orientation = c.orientation;
                component.alignment=["fill","top"]; 
                create_components(component, c.children);           
                break;
            case "tabbedpanel":

                break;
            case "slider":
                var component = panel.add(c.type,undefined,undefined,undefined,undefined,{name:c.name});
                component.minvalue=c.minvalue;
                component.maxvalue=c.maxvalue;
                component.value=c.default;
                break;
            case "listbox":
                var component = panel.add(c.type,undefined,undefined,{name:c.name, items:c.items, multiselect:c.multiselect});
                break;
            case "radiobutton":
                var component = panel.add(c.type,undefined,undefined,{name:c.name});
                component.text=c.text;
                component.value=c.default;            
                break;
            case "divider":
                var component = panel.add("panel",undefined,undefined,{name:c.name});
                component.alignment="fill";
                break;
        }
    }
}
