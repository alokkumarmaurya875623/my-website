/* =========================================================
   ALOK KUMAR PORTFOLIO — STEP 15
========================================================= */


/* =========================================================
   THEME
========================================================= */

const themeToggle =
    document.getElementById("theme-toggle");

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

function updateThemeIcon() {

    if (!themeToggle) return;

    const isDark =
        document.body.classList.contains("dark") ||
        document.body.classList.contains("dark-mode");

    themeToggle.innerHTML = isDark
        ? '<i class="fa-solid fa-moon"></i>'
        : '<i class="fa-solid fa-sun"></i>';
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

        menuToggle.classList.toggle("active");

        const isOpen =
            navMenu.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );
    });


    /* Close after clicking navigation */

    navMenu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });
        });


    /* Close outside */

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


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    const trigger =
        window.innerHeight - 80;

    revealElements.forEach(element => {

        const top =
            element.getBoundingClientRect().top;

        if (top < trigger) {

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
    document.querySelectorAll("#nav-menu a");


function updateActiveNav() {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 180;

        const bottom =
            top + section.offsetHeight;

        if (
            window.scrollY >= top &&
            window.scrollY < bottom
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
    "🚀 Alok Kumar Portfolio — Step 15 loaded successfully!"
);