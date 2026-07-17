// ===============================
// LUMINAR STORE - SCRIPT.JS
// ===============================

// -------------------------------
// ELEMENT
// -------------------------------

const landing = document.getElementById("landing");
const dashboard = document.getElementById("dashboard");

const playBtn = document.getElementById("playBtn");

const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.querySelector(".closeBtn");

const popup = document.getElementById("popup");

const username = document.getElementById("username");
const roleInput = document.getElementById("role");
const priceInput = document.getElementById("price");
const payment = document.getElementById("payment");

let selectedRole = "";
let selectedPrice = "";

// -------------------------------
// PLAY NOW
// -------------------------------

playBtn.onclick = function () {

    landing.style.display = "none";

    dashboard.style.display = "block";

};

// -------------------------------
// SIDEBAR
// -------------------------------

menuBtn.onclick = function () {

    sidebar.style.left = "0";

};

closeBtn.onclick = function () {

    sidebar.style.left = "-270px";

};

window.onclick = function (e) {

    if (e.target == sidebar) {

        sidebar.style.left = "-270px";

    }

};

// -------------------------------
// PAGE
// -------------------------------

function showPage(page) {

    let pages = document.querySelectorAll(".page");

    pages.forEach(function (item) {

        item.style.display = "none";

    });

    document.getElementById(page).style.display = "block";

    sidebar.style.left = "-270px";

}

// -------------------------------
// BUY ROLE
// -------------------------------

function buyRole(role, price) {

    selectedRole = role;

    selectedPrice = price;

    roleInput.value = role;

    priceInput.value = price;

    username.value = "";

    payment.value = "";

    popup.style.display = "flex";

}

// -------------------------------
// CLOSE POPUP
// -------------------------------

function closePopup() {

    popup.style.display = "none";

}

// -------------------------------
// CONTINUE BUY
// -------------------------------

function continueBuy() {

    if (username.value.trim() == "") {

        alert("Silahkan masukkan nama gtps anda");

        return;

    }

    if (payment.value == "") {

        alert("Silahkan pilih metode pembayaran");

        return;

    }

    const text =
`Halo Admin Luminar PS

🛒 PURCHASE LUMINAR PS

Nama GTPS : ${username.value}

Role : ${selectedRole}

Harga : ${selectedPrice}

Metode Pembayaran : ${payment.value}`;

    const url =
"https://wa.me/6285177475595?text=" +
encodeURIComponent(text);

    window.open(url, "_blank");

    popup.style.display = "none";

}

// -------------------------------
// GLOBAL TIME
// -------------------------------

function updateClock() {

    const now = new Date();

    const jam = String(now.getHours()).padStart(2, "0");

    const menit = String(now.getMinutes()).padStart(2, "0");

    const detik = String(now.getSeconds()).padStart(2, "0");

    const waktu = jam + ":" + menit + ":" + detik;

    const clock = document.getElementById("clock");

    if (clock) {

        clock.innerHTML = waktu;

    }

}

setInterval(updateClock, 1000);

updateClock();

// -------------------------------
// ESC CLOSE POPUP
// -------------------------------

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        closePopup();

    }

});

// -------------------------------
// CLICK OUTSIDE POPUP
// -------------------------------

window.addEventListener("click", function (e) {

    if (e.target === popup) {

        closePopup();

    }

});

// ===============================
// END SCRIPT
// ===============================