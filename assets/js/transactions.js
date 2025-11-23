function renderTransactions() {
    const transactions = getTransactions();
    const list = $("#transactionsList");

    list.empty();

    if (!transactions || transactions.length === 0) {
        list.append(`<li class="list-group-item text-center text-muted">
            Aún no hay movimientos. ¡Realiza un depósito o transferencia!
        </li>`);
        return;
    }


    transactions.slice().reverse().forEach(tx => {

        const isDeposit = tx.type === "Depósito";
        const isWithdraw = tx.type === "Retiro";
        const cssClass = isDeposit ? "text-success" :
                         isWithdraw ? "text-warning" : "text-primary";

        const amountDisplay = formatCurrency(tx.amount);

        const item = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                
                <div>
                    <strong>${tx.type}</strong>
                    <br>
                    <small class="text-muted">${tx.date}</small>
                </div>

                <div class="text-end">
                    <span class="${cssClass} fw-bold">${amountDisplay}</span>
                    <br>
                    <small>${tx.recipient}</small>
                </div>

            </li>
        `;

        list.append(item);
    });
}

$(document).ready(function () {
    protectRoute();
    renderTransactions();
});
