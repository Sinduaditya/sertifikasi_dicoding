const c = document.getElementById('carousel');
const images = ["desa_panglipuran.jpg", "desa_tenganan.jpg", "desa_wisata.jpg", "manfaat.jpg"];

setInterval(() => {
    const rImg = images[Math.round(Math.random() * 2)];

    c.src = './assets/images/' + rImg;
}, 1500);