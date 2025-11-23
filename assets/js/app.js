
const LS_USER_KEY = "currentUser";

function handleSuccessfulLogin(username) {
    localStorage.setItem(LS_USER_KEY, username);
    window.location.href = "menu.html";
}

function getCurrentUser() {
    return localStorage.getItem(LS_USER_KEY);
}

function logoutUser() {
    localStorage.removeItem(LS_USER_KEY);
    window.location.href = "login.html";
}

function protectRoute() {
    if (!getCurrentUser()) {
        window.location.href = "login.html";
    }
}



const LS_BALANCE_KEY = "userBalance";
const INITIAL_BALANCE = 150000;

function getSaldo() {
    const saldo = localStorage.getItem(LS_BALANCE_KEY);
    if (saldo === null) {
        localStorage.setItem(LS_BALANCE_KEY, INITIAL_BALANCE);
        return INITIAL_BALANCE;
    }
    return parseFloat(saldo);
}

function setSaldo(nuevoSaldo) {
    localStorage.setItem(LS_BALANCE_KEY, nuevoSaldo);
}


const LS_TRANSACTIONS_KEY = "transactions";

function getTransactions() {
    return JSON.parse(localStorage.getItem(LS_TRANSACTIONS_KEY) || "[]");
}

function addTransaction(tx) {
    const all = getTransactions();
    all.push(tx);
    localStorage.setItem(LS_TRANSACTIONS_KEY, JSON.stringify(all));
}



function formatCurrency(amount) {
    return new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP"
    }).format(amount);
}
