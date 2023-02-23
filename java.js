var cuentas = [
    ['Shuy', 111, 'Shuy123', 'shuy.html'],
    ['Leo', 222, 'Leo123', 'leo.html'],
    ['Anna', 333, 'Anna123', 'anna.html']
];

function Verificacion(persona) {

    let password = prompt("Escribe la contraseña para la cuenta de " + cuentas[persona][0]);

    if (password == cuentas[persona][2]) {
        alert('Contraseña correcta');
        window.location.href = cuentas[persona][3];
    }

    else {
        alert('Nope');
    }

}

function Consultar(persona) {
    alert('Tu saldo es: ' + cuentas[persona][1]);
}

function IngresarSaldo(persona) {
    let sumaCuenta = parseFloat(prompt('¿Cuánto dinero deseas ingresar?'));
    alert('Has añadido ' + sumaCuenta + ' a tu cuenta.');
    cuentas[persona][1] = cuentas[persona][1] + sumaCuenta;
    alert('Tu nuevo saldo es: ' + cuentas[persona][1]);
}

function RetirarMonto(persona) {
    let restaCuenta = parseFloat(prompt('¿Cuánto dinero deseas retirar?'));
    alert('Has retirado ' + restaCuenta + ' a tu cuenta.');
    cuentas[persona][1] = cuentas[persona][1] - restaCuenta;
    alert('Tu nuevo saldo es: ' + cuentas[persona][1]);
}


function Home() {
    window.location.href = "index.html";

}