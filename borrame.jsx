// Crea una ventana con un dropdownlist
var win = new Window("palette", "Dropdownlist Example");
var dropdown = win.add("dropdownlist", undefined, ["Item 1", "Item 2", "Item 3"]);
dropdown.selection = 0;

// Función que muestra una alerta con el texto del item seleccionado
function showSelectedItem() {
  var selectedItem = dropdown.selection.text;
  alert("Selected Item: " + selectedItem);
}

// Evento que se dispara al cambiar la selección del dropdownlist
dropdown.onChange = showSelectedItem;

// Muestra la ventana
win.show();
