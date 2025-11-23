$(document).ready(function () {

    protectRoute(); 

    updateDisplay();

    $("#withdrawForm").on("submit", function (e) {
        e.preventDefault();

        let amount = parseFloat($("#withdrawAmount").val());

        const successMsg = $("#successMsg");
        const errorMsg = $("#errorMsg");

       
        successMsg.addClass("d-none");
        errorMsg.addClass("d-none");

     
        if (isNaN(amount) || amount <= 0) {
            errorMsg.text("Ingrese un monto válido mayor a 0.").removeClass("d-none");
            return;
        }

        const saldoActual = getSaldo();

        if (amount > saldoActual) {
            errorMsg.text("Saldo insuficiente para retirar.").removeClass("d-none");
            return;
        }

    
        const nuevoSaldo = saldoActual - amount;
        setSaldo(nuevoSaldo);

    
        addTransaction({
            type: "Retiro",
            amount: amount,
            date: new Date().toLocaleString("es-CL"),
            recipient: "Retiro en efectivo",
            status: "Completado"
        });

        updateDisplay();

        successMsg.removeClass("d-none");
        $("#withdrawAmount").val("");
    });

});


function updateDisplay() {
    $("#saldo").text(formatCurrency(getSaldo()));
}
