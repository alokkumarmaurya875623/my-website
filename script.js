/* =========================================================
   ALOK KUMAR PORTFOLIO - FINAL JAVASCRIPT
   Theme + Mobile Menu + Scroll Reveal + Active Navigation
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ================= THEME ================= */

    const themeToggle = document.getElementById("theme-toggle");

    function updateThemeIcon() {
        if (!themeToggle) return;

        if (document.body.classList.contains("dark")) {
            themeToggle.innerHTML =
                '<i class="fa-solid fa-sun"></i>';
            themeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );
        } else {
            themeToggle.innerHTML =
                '<i class="fa-solid fa-moon"></i>';
            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );
        }
    }

    /* Load saved theme */
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }

    updateThemeIcon();


    /* Theme button */
    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            const isDark =
                document.body.classList.contains("dark");

            localStorage.setItem(
                "theme",
                isDark ? "dark" : "light"
            );

            updateThemeIcon();

        });

    }


    /* ================= MOBILE MENU ================= */

    const menuToggle =
        document.getElementById("menu-toggle");

    const navMenu =
        document.getElementById("nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", (event) => {

            event.stopPropagation();

            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("active");

            const isOpen =
                navMenu.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        /* Close menu after clicking navigation link */

        const navLinks =
            navMenu.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        /* Close menu when clicking outside */

        document.addEventListener("click", (event) => {

            if (
                !navMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    /* ================= SCROLL REVEAL ================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    function revealOnScroll() {

        const windowHeight =
            window.innerHeight;

        revealElements.forEach(element => {

            const elementTop =
                element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 80) {

                element.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        revealOnScroll
    );

    window.addEventListener(
        "load",
        revealOnScroll
    );

    revealOnScroll();


    /* ================= ACTIVE NAVIGATION ================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(
            "#nav-menu a"
        );

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNav
    );

    updateActiveNav();


    /* ================= PROJECT BUTTONS ================= */

    document.querySelectorAll(
        '.project-btn[href="#"]'
    ).forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                alert(
                    "Project link will be added soon."
                );

            }
        );

    });


    /* ================= ESC KEY ================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            if (navMenu && menuToggle) {

                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    });


    /* ================= CONSOLE ================= */

    console.log(
        "🚀 Alok Kumar Portfolio loaded successfully!"
    );

});