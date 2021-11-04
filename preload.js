const { ipcRenderer } = require("electron");
window.addEventListener("load", () => {
    document.querySelectorAll(".window-tool").forEach((tool) => {
        tool.addEventListener("click", onToolClick);
    });
    ipcRenderer.on("toggleMaxTools", () => {
        Array.from(document.querySelector(".window-tool[data-role='maximize']").children).forEach(element => {
            element.classList.toggle("displayNone");
        });
    });
});

const onToolClick = (event) => {
    ipcRenderer.send(event.currentTarget.getAttribute("data-role"));
}