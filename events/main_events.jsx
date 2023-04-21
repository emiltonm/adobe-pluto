function transparent(visibility){
    alert("funcion transparent");
    var selectedLayers=app.project.activeItem.selectedLayers;
    if(selectedLayers.length==0){alert('Debes seleccionar al menos una capa');}
    for(var i=0;i<selectedLayers.length;i++){
        selectedLayers[i].property("ADBE Transform Group").property("ADBE Opacity").setValue(visibility);
    }
}


function precompose(){
    if (app.project.activeItem == null || app.project.activeItem.selectedLayers.length == 0) {
        alert("Por favor, seleccione una capa para precomponer.");
    } else {
        // Obtener la capa seleccionada
        var selectedLayer = app.project.activeItem.selectedLayers[0];
        var indicies = selectedLayer.index
        // Crear una nueva precomposición con la capa seleccionada
        var precomp=app.project.activeItem.layers.precompose([indicies], selectedLayer.name, false)
        var control_precomp=app.project.activeItem.layers.addNull(precomp.duration)
        //tener encuenta si hay varias con el mismo nombre
        //comp("Comp 1").layer("Null 4").transform.position
        var link_pos="comp('"+app.project.activeItem.name+"').layer("+control_precomp.name+").transform.position";
        alert(link_pos);
        precomp.layer(1).property("ADBE Transform Group").property("ADBE Position").expression=link_pos;
        //comp("EMI_COMP").layer("VARIABLES").effect(color)("Color")
        //app.project.item(index).layer(1).moveAfter(indicies);
        //selectedLayers[i].selectedProperties[j].expression=expresion;
        alert("Precomposición creada con éxito.");
    }
    alert("funcion precompose final");
}