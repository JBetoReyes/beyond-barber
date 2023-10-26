const themeSwitcher = document.querySelector(".theme-switcher");
let activeTheme = localStorage.getItem("theme") as "system" | "light" | "dark";

if (themeSwitcher) {
    themeSwitcher.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (target && target.tagName != "INPUT") {
            return;
        }

        const themeToActivate = target.id as "system" | "light" | "dark";
        changeTheme(themeToActivate);
    });
}



function changeTheme(theme: "system" | "light" | "dark") {
    document.body.classList.add("theme-switch");
    if (theme === "system") {
        localStorage.removeItem("theme");
        document.body.removeAttribute("data-theme");
    } else {
        localStorage.setItem("theme", theme);
        document.body.setAttribute("data-theme", theme);
    }

    document.body.addEventListener(
        "transitionend",
        () => {
            document.body.classList.remove("theme-switch");
        },
        {}
    );
}

window.onload = () => {
    if (activeTheme) {
        const inputElement = document.getElementById(activeTheme) as HTMLInputElement;
        inputElement.checked = true;
        changeTheme(activeTheme);
    }
};