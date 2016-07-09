function guardarItem() {
    var key = element('producto').value;
    var value = element('cantidad').value;
    localStorage.setItem(key, value);
    cargarItems();
}

function removerItem() {
    var name = element('producto').value;
    localStorage.removeItem(name);
    cargarItems();
}

function limpiar() {
    localStorage.clear();
    cargarItems();
}

function cargarItems() {
    if (existeStorage()) {
        var key = "";
        var list = "<tr><th>Nombre</th><th>Valor</th></tr>\n";
        for (var i = 0; i <= localStorage.length - 1; i++) {
            key = localStorage.key(i);
            list += "<tr><td>" + key + "</td>\n<td>"
                + localStorage.getItem(key) + "</td></tr>\n";
        }
        if (list == "<tr><th>Nombre</th><th>Valor</th></tr>\n") {
            list += "<tr><td><i>vacío</i></td>\n<td><i>vacío</i></td></tr>\n";
        }
        element('list').innerHTML = list;
    } else {
        alert('Tu navegador no soporta Local Storage');
    }
}

function existeStorage() {
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

function element(id) {
    return document.getElementById(id);
}