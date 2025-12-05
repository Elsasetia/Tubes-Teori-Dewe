// DATA PRODUK
const products = {
  fotocopy: [
    { name: "Canon IR 3235", price: 12000000, year: 2021 },
    { name: "Fuji Xerox 3370", price: 10500000, year: 2020 }
  ],
  printer: [
    { name: "Epson L1800", price: 6500000, year: 2022 },
    { name: "Canon G3010", price: 2900000, year: 2023 }
  ],
  percetakan: [
    { name: "Riso ComColor GD", price: 45000000, year: 2020 },
    { name: "Duplo DP-U950", price: 25000000, year: 2019 }
  ]
};

const produkList = document.getElementById("produkList");
const kategoriBtn = document.querySelectorAll(".btnKategori");

kategoriBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    const kat = btn.dataset.kategori;
    tampilkanProduk(products[kat]);
  });
});

function tampilkanProduk(data) {
  produkList.innerHTML = "";
  data.forEach(p => {
    produkList.innerHTML += `
      <div class="produk-card">
        <h3>${p.name}</h3>
        <p>Harga: Rp ${p.price.toLocaleString()}</p>
        <p>Tahun: ${p.year}</p>
        <button class="addCart">Tambah Keranjang 🛒</button>
      </div>
    `;
  });
}

// LOGIN POPUP
const loginPopup = document.getElementById("loginPopup");
document.getElementById("btnLogin").onclick = () => loginPopup.style.display = "block";
document.getElementById("closePopup").onclick = () => loginPopup.style.display = "none";
