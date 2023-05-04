#include "../modules/layer.jsx"

function precompose(){
    if(not_layer_selected("Por favor, seleccione una capa para precomponer.")){}
    else {
        affect_layer_with(compose);
    }
}

function compose(layer){
    // Crea una nueva precomposición con la capa seleccionada
    var comp = app.project.activeItem;
    comp.hideShyLayers = true;
    
    var precomp = app.project.items.addComp(layer.name, comp.width, comp.height, comp.pixelAspect, comp.duration, comp.frameRate);
    
    layer.copyToComp(precomp);
    layer.property("ADBE Transform Group").property("ADBE Opacity").setValue(0);
    //agrego un slider para controlar la opacidad de la capa
    var slider = layer.property("ADBE Effect Parade").addProperty("ADBE Slider Control");
    slider.name = "Opacity";
    slider.property("ADBE Slider Control-0001").setValue(100);
    
    layer_precomp = comp.layers.add(precomp);
    layer_precomp.moveAfter(layer);
    layer_precomp.locked = true;
    layer_precomp.shy = true;
    
    var link_anchor="comp('"+comp.name+"').layer('"+layer.name+"').transform.anchorPoint";
    precomp.layer(1).property("ADBE Transform Group").property("ADBE Anchor Point").expression=link_anchor;
    
    var link_pos="comp('"+comp.name+"').layer('"+layer.name+"').transform.position";
    precomp.layer(1).property("ADBE Transform Group").property("ADBE Position").expression=link_pos;

    var link_scale="comp('"+comp.name+"').layer('"+layer.name+"').transform.scale";
    precomp.layer(1).property("ADBE Transform Group").property("ADBE Scale").expression=link_scale;
    
    var link_rotation="comp('"+comp.name+"').layer('"+layer.name+"').transform.rotation";
    precomp.layer(1).property("ADBE Transform Group").property("ADBE Rotate Z").expression=link_rotation;

    var link_opacity="comp('"+comp.name+"').layer('"+layer.name+"').effect('Opacity')('Slider')";
    precomp.layer(1).property("ADBE Transform Group").property("ADBE Opacity").expression=link_opacity;

}


function alert_one(message){
    var texto= "";
    if(main_panel.list1.selection==0){
        texto = main_panel.text1.text;
    }else{
        texto = main_panel.list1.selection.text;
    }

    if(main_panel.rb1.value==true){
        message = message.toUpperCase();
        texto = texto.toUpperCase();
    }else{
        message = message.toLowerCase();
        texto = texto.toLowerCase();
    }

    if (main_panel.ch1.value == true) {
        alert(message+" "+texto);
    }else{
        alert(texto);
    }
}

function alert_two(message){
    alert("function 2: "+message);
}

function alert_three(){
    alert(main_panel.slider1.value);
}
