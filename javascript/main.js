/* ================================
   MAIN JS
   ================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       ACTIVE NAV LINK ON SCROLL
       ================================ */
    const sections  = document.querySelectorAll("section[id], header[id]");
    const navLinks  = document.querySelectorAll(".header-nav a");

    const activateLink = () => {
        let current = "";
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 120) {
                current = sec.getAttribute("id");
            }
        });
        navLinks.forEach(a => {
            a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
        });
    };

    window.addEventListener("scroll", activateLink, { passive: true });
    activateLink();

    /* ================================
       SCROLL-IN ANIMATIONS
       ================================ */
    const animatedEls = document.querySelectorAll(
        ".project-card, .about-media, .about-content, .hero-copy, .hero-highlights, " +
        ".highlight-card, .section-heading, .contact-layout"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    animatedEls.forEach(el => {
        el.classList.add("fade-up");
        observer.observe(el);
    });

    /* ================================
       CONTACT FORM FEEDBACK
       ================================ */
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector("button[type='submit']");
            const original = btn.textContent;
            btn.textContent = "Message Sent ✓";
            btn.style.background = "linear-gradient(135deg, #2c8a4a, #3daa5e)";
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = original;
                btn.style.background = "";
                btn.disabled = false;
                contactForm.reset();
            }, 3200);
        });
    }

});
