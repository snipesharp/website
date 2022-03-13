let userAgent = navigator.userAgent;
let downloadLink = document.getElementById("downloadLink");
let downloadOptions = document.getElementById("downloadOptions");
let showAllOptions = document.getElementById("showAllOptions");
let showingAllOptions = false;

function getOS() {
    if (userAgent.includes("Android")) return "None"
    if (userAgent.includes("Windows")) {
        if (userAgent.includes("ARM64")) return "Windows ARM64"
        return "Windows"
    }
    if (userAgent.includes("Macintosh")) {
        if (userAgent.includes("ARM64")) return "MacOS ARM64"
        return "MacOS"
    }
    if (userAgent.includes("nux")) {
        if (userAgent.includes("ARM64")) return "Windows ARM64"
        return "Linux"
    }
    return "None"
}

function toggleShowAllOptions(event) {
    event.preventDefault();
    showingAllOptions = !showingAllOptions
    showAllOptions.textContent = !showingAllOptions ? "See all download options" : "See less download options"
    if (!showingAllOptions) downloadOptions.style.animationName = "minimize"
    else downloadOptions.style.animationName = "unminimize"
}

(function () {
    showAllOptions.setAttribute("href", "#")
    downloadOptions.classList.add("minimized")
    downloadOptions.removeAttribute("hidden")
    downloadLink.classList.remove("normalizeLink")
    let os = getOS();

    if (os == "None") {
        toggleShowAllOptions();
        downloadLink.textContent = "Downloads"
        downloadOptions.removeAttribute("hidden")
        downloadLink.classList.add("normalizeLink")
        return;
    }

    downloadLink.textContent = "Download for " + os;

    if (os == "Linux") downloadLink.setAttribute("href", "https://github.com/snipesharp/snipesharp/releases/download/v1.5.7/snipesharp_linux-x86-64-v1.5.7");
    if (os == "Linux ARM64") downloadLink.setAttribute("href", "https://github.com/snipesharp/snipesharp/releases/download/v1.5.7/snipesharp_linux-arm64-v1.5.7");

    if (os == "Windows") downloadLink.setAttribute("href", "https://github.com/snipesharp/snipesharp/releases/download/v1.5.7/snipesharp_win-x86-64-v1.5.7.exe");
    if (os == "Windows ARM64") downloadLink.setAttribute("href", "https://github.com/snipesharp/snipesharp/releases/download/v1.5.7/snipesharp_win-arm64-v1.5.7.exe");

    if (os == "MacOS") downloadLink.setAttribute("href", "https://github.com/snipesharp/snipesharp/releases/download/v1.5.7/snipesharp_mac-os-x86-64-v1.5.7");
    if (os == "MacOS ARM64") downloadLink.setAttribute("href", "https://github.com/snipesharp/snipesharp/releases/download/v1.5.7/snipesharp_mac-os-arm64-v1.5.7");
}())