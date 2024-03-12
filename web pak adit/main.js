


document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi Lightbox
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
  });

  // Inisialisasi galeri dengan Lightbox
  const galleryItems = document.querySelectorAll(".portfokio-lightbox");
  galleryItems.forEach(function (item) {
    item.setAttribute("data-lightbox", "portfolioGallery");
  });
});

const filterContainer = document.querySelector(".gallery-filter");
const galleryItem = document.querySelectorAll(".gallery-item");

// Fungsi untuk menginisialisasi filter berdasarkan kelas yang aktif
function initializeFilter() {
  const activeFilter = filterContainer.querySelector(".active");
  const filterValue = activeFilter.getAttribute("data-filter");

  galleryItem.forEach((item) => {
    if (item.classList.contains(filterValue) || filterValue === "all") {
      item.classList.remove("hide");
      item.classList.add("show");
    } else {
      item.classList.remove("show");
      item.classList.add("hide");
    }
  });
}

// Panggil fungsi inisialisasi saat halaman pertama dimuat
document.addEventListener("DOMContentLoaded", initializeFilter);

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {
    filterContainer.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");

    const filterValue = event.target.getAttribute("data-filter");

    galleryItem.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});



