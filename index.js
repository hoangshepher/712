const keys = ["1","2","3","4","5","6","7","8","9","Delete","0","Go"]
const pad = document.getElementById("pad");
keys.forEach(key => {
    const button = document.createElement("div");
    button.classList.add("key");
    button.textContent = key;
    button.dataset.value = key;
    pad.appendChild(button);
})