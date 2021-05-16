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

const inPageLink = () => {
  const occ = document.querySelector(".occ-lobe");
  const par = document.querySelector(".par-lobe");
  const temp = document.querySelector(".temp-lobe");
  const fron = document.querySelector(".fron-lobe");

  const occLobe = document.querySelector(".wrap:nth-child(1)");
  const parLobe = document.querySelector(".wrap:nth-child(2)");
  const tempLobe = document.querySelector(".wrap:nth-child(3)");
  const fronLobe = document.querySelector(".wrap:nth-child(4)");

  occ.addEventListener("click", (e) => {
    e.preventDefault();
    occLobe.classList.add("active");
  });
  par.addEventListener("click", (e) => {
    e.preventDefault();
    parLobe.classList.add("active");
  });
  temp.addEventListener("click", (e) => {
    e.preventDefault();
    tempLobe.classList.add("active");
  });
  fron.addEventListener("click", (e) => {
    e.preventDefault();
    fronLobe.classList.add("active");
  });
  const okBtn = document.querySelectorAll(".ok");

  okBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      occLobe.classList.remove("active");
      parLobe.classList.remove("active");
      tempLobe.classList.remove("active");
      fronLobe.classList.remove("active");
    });
  });
};

inPageLink();
