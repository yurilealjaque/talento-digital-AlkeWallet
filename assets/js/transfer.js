$(document).ready(function () {

    protectRoute(); 

    $("#transferForm").on("submit", function (e) {
        e.preventDefault();

        let recipient = $("#recipient").val().trim();
        let amount = parseFloat($("#transferAmount").val());

        const successMsg = $("#successMsg");
        const errorMsg = $("#errorMsg");

    
        successMsg.addClass("d-none");
        errorMsg.addClass("d-none");

      
        if (!recipient) {
            errorMsg.text("Debes ingresar un destinatario.").removeClass("d-none");
            return;
        }

        if (isNaN(amount) || amount <= 0) {
            errorMsg.text("Ingresa un monto válido mayor a 0.").removeClass("d-none");
            return;
        }

        let saldoActual = getSaldo();

        if (amount > saldoActual) {
            errorMsg.text("Saldo insuficiente para enviar esta transferencia.").removeClass("d-none");
            return;
        }

    
        const nuevoSaldo = saldoActual - amount;
        setSaldo(nuevoSaldo);

    
        addTransaction({
            type: "Transferencia",
            amount: amount,
            date: new Date().toLocaleString("es-CL"),
            recipient: recipient,
            status: "Completado"
        });


        successMsg.removeClass("d-none");


        $("#recipient").val("");
        $("#transferAmount").val("");
    });

});
