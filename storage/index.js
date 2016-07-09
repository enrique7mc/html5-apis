function SaveItem() {
    var key = element('producto').value;
    var value = element('cantidad').value;
    localStorage.setItem(key, value);
    doShowAll();
}

function ModifyItem() {
    var name = element('producto').value;
    var data = element('cantidad').value;
    localStorage.setItem(name, data);
    doShowAll();
}

function RemoveItem() {
    var name = element('producto').value;
    localStorage.removeItem(name);
    doShowAll();
}

function ClearAll() {
    localStorage.clear();
    doShowAll();
}

function doShowAll() {
    if (CheckBrowser()) {
        var key = "";
        var list = "<tr><th>Name</th><th>Value</th></tr>\n";
        var i = 0;
        for (i = 0; i <= localStorage.length - 1; i++) {
            key = localStorage.key(i);
            list += "<tr><td>" + key + "</td>\n<td>"
                + localStorage.getItem(key) + "</td></tr>\n";
        }
        if (list == "<tr><th>Nombre</th><th>Valor</th></tr>\n") {
            list += "<tr><td><i>vacío</i></td>\n<td><i>vacío</i></td></tr>\n";
        }
        document.getElementById('list').innerHTML = list;
    } else {
        alert('Tu navegador no soporta Local Storage');
    }
}

function CheckBrowser() {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return false;
    }
}

function element(id) {
    return document.getElementById(id);
}