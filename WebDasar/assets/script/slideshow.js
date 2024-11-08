  //***Slide Show gambar
  const imagesJumbo = [
    'url("assets/images/tugu_jogja_bg.jpg")',
    'url("assets/images/keraton_jogja.jpeg")',
    'url("assets/images/merapi.jpg")'
]

let curIndex = 0; //Untuk index slide berdasarkan pada array daftar gambar

const slideJumbo = document.querySelector('.head-jumbo')

//Fungsi untuk mengubah background image
function changeBackground() {
    curIndex = (curIndex + 1) % imagesJumbo.length; //Agar index tetap maximal sesuai jumlah gambar
    slideJumbo.style.backgroundImage = imagesJumbo[curIndex];
}

//Interval untuk mengubah gambar setiap 3 detik
setInterval(changeBackground, 3000)

//Inisialisasi gambar pertama
slideJumbo.style.backgroundImage = imagesJumbo[curIndex]