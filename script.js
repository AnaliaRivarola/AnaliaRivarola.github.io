const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const DIARIO = document.getElementById('diario');
const METODO = document.getElementById('metodo')

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
        //validamos que se cargue un dato:
    if (DATO > 0 && DATO < 30) {
        ERROR.style.display = 'none'
        METODO.innerHTML = "Método Holliday-Segar"
        let flujo = calcFlujo(DATO);
        let diario = flujo;
        let mantenimiento = Math.round(flujo / 24);
        let mm = Math.round(mantenimiento * 1.5);
        DIARIO.innerHTML = "<strong>Volumen diario: </strong>" + diario + 'cc/hr';
        MAN.innerHTML = '<strong> Mantenimiento: </strong>' + mantenimiento + ' cc/hr';
        FLU.innerHTML = '<strong> m+m/2: </strong>' + mm + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        DIARIO.style.display = 'block';
        METODO.style.display = 'block'

    } else if (DATO >= 30) {
        METODO.innerHTML = "Método de Superficie Corporal"
        ERROR.style.display = 'none';
        let flujo = superficieCorp(DATO);
        let res1 = Math.round(flujo * 1500);
        let res2 = Math.round(flujo * 2000);
        FLU.innerHTML = '<strong>SC * 1500:</strong> ' + res1 + ' cc/hr';
        MAN.innerHTML = '<strong>SC * 2000:</strong> ' + res2 + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        DIARIO.style.display = 'none';
        METODO.style.display = 'block'


    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})

function calcFlujo(peso) {
    let resto = peso;
    let flujo = 0;
    if (resto <= 10) {
        flujo = (resto * 100)
    } else if (resto > 10 && resto < 20) {
        flujo = (10 * 100) + ((resto - 10) * 50)
    } else if (resto === 20) {
        flujo = (10 * 100) + ((resto - 10) * 50)
    } else {
        flujo = (10 * 100) + (10 * 50) + ((peso - 20) * 20);
    }
    return flujo;

}

function superficieCorp(peso) {
    let resto = peso;
    let flujo;
    flujo = ((resto * 4) + 7) / (resto + 90)
    return flujo;
}