document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");

  // Set a scroll event listener
  window.addEventListener("scroll", function () {
    // Add a background class when scrolling
    if (window.scrollY > 0) {
      navbar.classList.add("navbar-scrolled");
    } else {
      // Remove the background class when at the top
      navbar.classList.remove("navbar-scrolled");
    }
  });
});

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

