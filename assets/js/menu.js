
protectRoute();

$(document).ready(function () {


    const user = getCurrentUser();
    $("#welcomeUser").text(user);

   
    const saldo = getSaldo();
    $("#currentBalance").text(formatCurrency(saldo));

    
    const hoy = new Date();
    const fechaFormateada = hoy.toLocaleDateString("es-CL");
    $("#balanceDate").text("Actualizado al " + fechaFormateada);

  
    $("#logoutBtn").click(function () {
        logoutUser();
    });

});
