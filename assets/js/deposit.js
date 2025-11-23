$(document).ready(function () {

    protectRoute(); 

    updateDisplay();

    $("#depositForm").on("submit", function (e) {
        e.preventDefault();

        const montoInput = $("#monto");
        let monto = parseFloat(montoInput.val());

        const successMsg = $("#successMsg");
        const errorMsg = $("#errorMsg");


        successMsg.addClass("d-none");
        errorMsg.addClass("d-none");

   
        if (isNaN(monto) || monto <= 0) {
            errorMsg.text("Ingresa un monto válido.").removeClass("d-none");
            return;
        }

        let saldoActual = getSaldo();
        let nuevoSaldo = saldoActual + monto;

        setSaldo(nuevoSaldo);

        addTransaction({
            type: "Depósito",
            amount: monto,
            date: new Date().toLocaleString("es-CL"),
            recipient: "Cuenta propia",
            status: "Completado"
        });

        updateDisplay();

        successMsg.removeClass("d-none");

        montoInput.val("");
        montoInput.focus();
    });

});


function updateDisplay() {
    const saldo = getSaldo();
    $("#saldo").text(formatCurrency(saldo));
}
