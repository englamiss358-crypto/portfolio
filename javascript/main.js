/* ================================
   MAIN JS – PRO STRUCTURE
   ================================ */

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       NAVIGATION ACTIVE LINK
       ================================ */
    const navLinks = document.querySelectorAll(".header-nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    /* ================================
       HERO BUTTONS EXAMPLE
       ================================ */
    const heroButtons = document.querySelectorAll(".hero-buttons button");

    heroButtons.forEach(button => {
        button.addEventListener("click", () => {
            const action = button.textContent.trim().toLowerCase();

            if(action.includes("projects")) {
                document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
            } else if(action.includes("contact")) {
                document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
            } else if(action.includes("register")) {
                alert("Register button clicked! You can add your form popup here.");
            }
        });
    });

    /* ================================
       ADD FUTURE JS FUNCTIONS HERE
       ================================ */
    // Example: toggle mobile menu, animations, dynamic content, etc.

});
