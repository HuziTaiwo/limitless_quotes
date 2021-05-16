const navigation = () => {
  const bugerIcon = document.querySelector(".menu button");
  const links = document.querySelectorAll(".nav-links li");

  bugerIcon.addEventListener("click", () => {
    links.forEach((link) => {
      link.classList.toggle("active");
    });
  });
};

navigation();
