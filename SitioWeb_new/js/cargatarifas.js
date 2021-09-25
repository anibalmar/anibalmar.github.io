/***
 * Carga las tarifas de archivos json
 */
const tabla = document.getElementById('tabla1');
const tabla2 = document.getElementById('tabla2');

recorrerTarifas1();
recorrerTarifas2();

/**
 * Función que recorre la primera tabla de tarifas
 */
function recorrerTarifas1() {
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', '../docs/tarifas.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let tarifas = JSON.parse(this.responseText);
            tabla.innerHTML = "";
            for (tarifa of tarifas) {
                switch (tarifa.tipo) {
                    case 'T': // Título barra
                        tabla.innerHTML += `
                        <div class="row text-center text-light bg-dark">
                            <div class="col-12"> ${tarifa.destino} </div>
                        </div>                        
                        `
                        break;
                    case 'E': // Títulos encabezados
                        tabla.innerHTML += `
                        <div class="row text-center text-light bg-secondary">
                        <div class="col-3">${tarifa.destino}</div>
                        <div class="col-3">${tarifa.dias}</div>
                        <div class="col-3">${tarifa.primlibra}</div>
                        <div class="col-3">${tarifa.libraadic}</div>
                        </div>                        
                        `
                        break;
                    case 'P': // Párrafo
                        tabla.innerHTML += `
                        <div class="row text-center">
                            <div class="col-12"> ${tarifa.destino} </div>
                        </div>                        
                        `
                        break;
                    default:
                        tabla.innerHTML += `
                        <div class="row text-center">
                            <div class="col-3">${tarifa.destino}</div>
                            <div class="col-3">${tarifa.dias}</div>
                            <div class="col-3">${tarifa.primlibra}</div>
                            <div class="col-3">${tarifa.libraadic}</div>
                        </div>
                        `
                        break;
                }
            }
        }
    }
}

/**
 * Función que recorre la segunda tabla de tarifas
 */
function recorrerTarifas2() {
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', '../docs/tarifas2.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let tarifas = JSON.parse(this.responseText);
            tabla2.innerHTML = "";
            for (tarifa of tarifas) {
                switch (tarifa.tipo) {
                    case 'T': // Título barra
                        tabla2.innerHTML += `
                        <div class="row text-center text-light bg-dark">
                            <div class="col-12"> ${tarifa.destino} </div>
                        </div>                        
                        `
                        break;
                    case 'E': // Títulos encabezados
                        tabla2.innerHTML += `
                        <div class="row text-center text-light bg-secondary">
                        <div class="col-3">${tarifa.destino}</div>
                        <div class="col-3">${tarifa.dias}</div>
                        <div class="col-3">${tarifa.primlibra}</div>
                        <div class="col-3">${tarifa.libraadic}</div>
                        </div>                        
                        `
                        break;
                    case 'S': // Título barra secundaria
                        tabla2.innerHTML += `
                        <div class="row text-center text-light bg-success">
                            <div class="col-12"> ${tarifa.destino} </div>
                        </div>                        
                        `
                        break;
                    case 'P': // Párrafo
                        tabla2.innerHTML += `
                        <div class="row text-center">
                            <div class="col-12"> ${tarifa.destino} </div>
                        </div>                        
                        `
                        break;
                    case 'C': // Encabezados de la tercera tabla
                        tabla2.innerHTML += `
                        <div class="row text-center">
                            <div class="col-4"> ${tarifa.destino} </div>
                            <div class="col-4"> ${tarifa.primerkl} </div>
                            <div class="col-4"> ${tarifa.kladi} </div>
                        </div>                        
                        `
                        break;
                    case 'Y': // Detalles de la tercera tabla
                        tabla2.innerHTML += `
                        <div class="row text-center">
                            <div class="col-4"> ${tarifa.destino} </div>
                            <div class="col-4"> ${tarifa.primerkl} </div>
                            <div class="col-4"> ${tarifa.kladi} </div>
                        </div>                        
                        `
                        break;
                    default:
                        tabla2.innerHTML += `
                        <div class="row text-center">
                            <div class="col-6"> ${tarifa.destino} </div>
                            <div class="col-6"> ${tarifa.kilos} </div>
                        </div>                        
                        `
                        break;
                }
            }
        }
    }
}
