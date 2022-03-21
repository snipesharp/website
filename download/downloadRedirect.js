let os = getOS()
let downloadText = document.getElementById("downloadText")

console.log(getOS())
if (os == "None") {
    location.replace("/")
    throw new Error("Non compatible user agent")
}

downloadText.textContent = "Downloading snipesharp for " + os;

if (os == "Linux") location.replace("https://github.com/snipesharp/snipesharp/releases/download/v1.6.3/snipesharp_linux-x86-64-v1.6.3")
if (os == "Linux ARM64") location.replace("https://github.com/snipesharp/snipesharp/releases/download/v1.6.3/snipesharp_linux-arm64-v1.6.3")

if (os == "Windows") location.replace("https://github.com/snipesharp/snipesharp/releases/download/v1.6.3/snipesharp_win-x86-64-v1.6.3.exe")
if (os == "Windows ARM64") location.replace("https://github.com/snipesharp/snipesharp/releases/download/v1.6.3/snipesharp_win-arm64-v1.6.3.exe")

if (os == "MacOS") location.replace("https://github.com/snipesharp/snipesharp/releases/download/v1.6.3/snipesharp_mac-os-x86-64-v1.6.3")
if (os == "MacOS ARM64") location.replace("https://github.com/snipesharp/snipesharp/releases/download/v1.6.3/snipesharp_mac-os-arm64-v1.6.3")