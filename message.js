let popuptimeout;
let popupclosetimeout;

alertPopupEl = document.createElement("div")
alertPopupEl.classList.add("message")
alertPopupEl.classList.add("hidden")


document.body.appendChild(alertPopupEl)

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const message = async (text, timeout = 1000) => {
    if (!alertPopupEl.classList.contains('hidden')) {
        alertPopupEl.classList.add("hidden")
        await sleep(50)
    }
    
    alertPopupEl.innerHTML = text;
    
    alertPopupEl.classList.remove("hidden")
    alertPopupEl.style.removeProperty('pointer-events')
    
    clearTimeout(popuptimeout)

    popuptimeout = setTimeout(() => {
        alertPopupEl.classList.add("hidden")
        alertPopupEl.style.pointerEvents = "none"
    }, timeout)
}

alertPopupEl.onclick = () => {
    clearTimeout(popuptimeout)
    alertPopupEl.classList.add("hidden")
    alertPopupEl.style.pointerEvents = "none"
}