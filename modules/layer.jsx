function is_layer_selected(){
    if (app.project.activeItem == null){ return false; }
    if (!(app.project.activeItem instanceof CompItem)){ return false; }
    if (app.project.activeItem.selectedLayers.length == 0) { return false; }
    return true;
}

function not_layer_selected(message){
    if (!is_layer_selected()){
        alert(message);
        return true;
    }else{
        return false;
    }
}

function affect_layer_with(process_function){
    if (not_layer_selected("Debe seleccionar al menos una capa.")){}
    else{
        for (var i = 0; i < app.project.activeItem.selectedLayers.length; i++){
            process_function(app.project.activeItem.selectedLayers[i]);
        }
    }
}