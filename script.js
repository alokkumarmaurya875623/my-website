/* =========================================================
   ALOK KUMAR PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   THEME
========================================================= */

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.remove("dark");
} else {
    document.body.classList.add("dark");
}


function updateThemeIcon() {

    if (!themeToggle) return;

    if (document.body.classList.contains("dark")) {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    } else {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';
    }
}

updateThemeIcon();


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


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.getElementById("menu-toggle");

const navMenu =
    document.getElementById("nav-menu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", (event) => {

        event.stopPropagation();

        navMenu.classList.toggle("active");

        const icon =
            menuToggle.querySelector("i");

        const isOpen =
            navMenu.classList.contains("active");

        if (icon) {

            icon.classList.toggle(
                "fa-bars",
                !isOpen
            );

            icon.classList.toggle(
                "fa-xmark",
                isOpen
            );
        }

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );
    });


    /* Close after clicking link */

    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon =
                menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    });


    /* Close outside */

    document.addEventListener("click", event => {

        if (
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navMenu.classList.remove("active");

            const icon =
                menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });
}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (
            elementTop <
            windowHeight - 80
        ) {

            element.classList.add("active");
        }
    });
}


window.addEventListener(
    "scroll",
    revealOnScroll,
    { passive: true }
);

window.addEventListener(
    "load",
    revealOnScroll
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(
        "#nav-menu a, .nav-menu a"
    );


function updateActiveNav() {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            current =
                section.getAttribute("id");
        }
    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");
        }
    });
}


window.addEventListener(
    "scroll",
    updateActiveNav,
    { passive: true }
);

window.addEventListener(
    "load",
    updateActiveNav
);


/* =========================================================
   PROJECT PLACEHOLDER
========================================================= */

document
    .querySelectorAll('.project-btn[href="#"]')
    .forEach(button => {

        button.addEventListener("click", event => {

            event.preventDefault();

            alert(
                "Project link will be added soon."
            );
        });
    });


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "🚀 Alok Kumar Portfolio loaded successfully!"
);