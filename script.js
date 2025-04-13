const box = document.querySelector(".login-card");
function login() {

}
function closeCard() {
    const box = document.querySelector(".model");
    box.style.display = "none";
}
function showCard() {
    const box = document.querySelector(".model");
    box.style.display = "flex";
}

document.getElementById("close-btn").addEventListener("click", closeCard);
document.getElementById("login-btn").addEventListener("click", showCard);

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll(".nav-links a");

    function updateActiveNavLink() {
        const scrollPosition = window.scrollY;
        const headerHeight = header.offsetHeight;

        const sections = document.querySelectorAll("section");

        sections.forEach((section) => {
            const sectionContent = section.querySelector("div[id]");
            if (!sectionContent) return;

            const sectionTop = sectionContent.offsetTop - headerHeight - 50;
            const sectionBottom = sectionTop + sectionContent.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const id = sectionContent.getAttribute("id");

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }

    updateActiveNavLink();
    window.addEventListener("scroll", updateActiveNavLink);
});
