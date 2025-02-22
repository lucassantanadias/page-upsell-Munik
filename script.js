

// Simulação de barra de progresso
document.addEventListener("DOMContentLoaded", function () {
    let progressBar = document.getElementById("progress");
    let progressText = document.getElementById("progress-text");
    let progress = 0;

    let interval = setInterval(() => {
        if (progress < 95) {
            progress += 1;
            progressBar.style.width = progress + "%";
            progressText.innerText = progress + "%";
        } else {
            clearInterval(interval);
        }
    }, 50);
});
