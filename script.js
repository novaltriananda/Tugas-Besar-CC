// Redirect ke login.html jika belum login
if (!sessionStorage.getItem('loggedIn')) {
    window.location.href = 'login.html';
}
console.log('Login berhasil, redirect ke index.html');
console.log('Pengguna login:', user.email);

// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika menu diklik
document.querySelector("#menu-extra").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const menu = document.querySelector("#menu-extra");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// login
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

