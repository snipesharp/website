let userAgent = navigator.userAgent;
let downloadLink = document.getElementById("downloadLink");
let downloadButton = document.getElementById("downloadButton");
let downloadOptions = document.getElementById("downloadOptions");
let showAllOptions = document.getElementById("showAllOptions");
let showingAllOptions = false;

function getOS() {
    if (!userAgent) return "None"
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
        if (userAgent.includes("ARM64")) return "Linux ARM64"
        return "Linux"
    }
    return "None"
}

function toggleShowAllOptions(event) {
    if (getOS() != "None") {
        event.preventDefault();
        showingAllOptions = !showingAllOptions
        showAllOptions.textContent = !showingAllOptions ? "See all download options" : "See less download options"
        if (!showingAllOptions) downloadOptions.style.animationName = "minimize"
        else downloadOptions.style.animationName = "unminimize"
    }
}

(function () {
    let os = getOS();

    if (os == "None") {
        toggleShowAllOptions();
        downloadLink.textContent = "Downloads"
        downloadLink.classList.add("normalizeLink")
        downloadOptions.removeAttribute("hidden")
        return;
    }
    
    showAllOptions.setAttribute("href", "#")
    downloadOptions.classList.add("minimized")
    downloadOptions.removeAttribute("hidden")
    downloadLink.classList.remove("normalizeLink")
    downloadLink.textContent = "Download for " + os
    downloadLink.classList.add("downloadButton")

    if (os == "Linux") downloadLink.setAttribute("href", "https://github.com/snipesharp/snipesharp/releases/download/v1.7.0/snipesharp_linux-x86-64-v1.7.0");
    if (os == "Linux ARM64") downloadLink.setAttribute("href", "https://github.com/snipesharp/snipesharp/releases/download/v1.7.0/snipesharp_linux-arm64-v1.7.0");

    if (os == "Windows") downloadLink.setAttribute("href", "https://github.com/snipesharp/snipesharp/releases/download/v1.7.0/snipesharp_win-x86-64-v1.7.0.exe");
    if (os == "Windows ARM64") downloadLink.setAttribute("href", "https://github.com/snipesharp/snipesharp/releases/download/v1.7.0/snipesharp_win-arm64-v1.7.0.exe");

    if (os == "MacOS") downloadLink.setAttribute("href", "https://github.com/snipesharp/snipesharp/releases/download/v1.7.0/snipesharp_mac-os-x86-64-v1.7.0");
    if (os == "MacOS ARM64") downloadLink.setAttribute("href", "https://github.com/snipesharp/snipesharp/releases/download/v1.7.0/snipesharp_mac-os-arm64-v1.7.0");
}())