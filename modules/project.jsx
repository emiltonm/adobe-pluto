// INICIO SOBRECARGA FUNCION open_project
over_load_open_project =[
    //ruta del archivo
    function (ruta) {
        var my_file = new File(ruta);
        if (my_file.exists) {
            new_project = app.open(my_file);
            return new_project;        
        }else{
            alert("verifica que la ruta este bien escrita incluye doble \\\\ para los directorios");
        }
    },
    //variable tipo file
    function (my_file) {
        if (my_file.exists) {
            new_project = app.open(my_file);
            return new_project;        
        }else{
            alert("verifica que la ruta este bien escrita incluye doble \\\\ para los directorios");
        }
    }
];

// Abre un proyecto, se puede pasar como para un string o un objeto tipo file
// los tipos de datos son string,number,boolean,undefined,object,function
function open_project(parametro){
    if(typeof(parametro)==="string"){
        return over_load_open_project[0](parametro);
    }
    if(typeof(parametro)==="object"){
        return over_load_open_project[1](parametro);
    }
}
// FIN SOBRECARGA FUNCION open_project