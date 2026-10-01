/* =========================================================
   ALOK KUMAR PORTFOLIO
   MAIN JAVASCRIPT
========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navMenu.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    /* Close menu after clicking a link */

    const navLinks =
        navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
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

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}


/* ================= THEME TOGGLE ================= */

const themeToggle =
    document.getElementById("theme-toggle");

const themeIcon =
    themeToggle?.querySelector("i");


function setTheme(isLight) {

    document.body.classList.toggle(
        "light-mode",
        isLight
    );

    if (themeIcon) {

        themeIcon.className =
            isLight
                ? "fa-solid fa-moon"
                : "fa-solid fa-sun";
    }

    localStorage.setItem(
        "portfolio-theme",
        isLight ? "light" : "dark"
    );
}


/* Load saved theme */

const savedTheme =
    localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

    setTheme(true);

} else {

    setTheme(false);
}


/* Theme button */

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        const isLight =
            !document.body.classList.contains(
                "light-mode"
            );

        setTheme(isLight);

    });

}


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "active"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        ".nav-menu a"
    );


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {

            currentSection =
                section.getAttribute("id");
        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (
            target === `#${currentSection}`
        ) {

            link.classList.add("active");
        }

    });

});


/* ================= BACK TO TOP ================= */

const backToTop =
    document.querySelector(
        'footer a[href="#home"]'
    );

if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* ================= CONSOLE ================= */

console.log(
    "Alok Kumar Portfolio Loaded Successfully."
);