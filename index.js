document.addEventListener("DOMContentLoaded", function () {
    const trail = document.getElementById("trail");

    document.addEventListener("mousemove", function (e) {
        const dot = document.createElement("div");
        dot.className = "trail-dot";
        dot.style.left = e.pageX + "px";
        dot.style.top = e.pageY + "px";
        trail.appendChild(dot);

        // Trazado blanco
        const lightDot = document.createElement("div");
        lightDot.className = "trail-dot light";
        lightDot.style.left = e.pageX + "px";
        lightDot.style.top = e.pageY + "px";
        trail.appendChild(lightDot);

        // Tiempo en pantalla
        setTimeout(() => {
            dot.remove();
            lightDot.remove();
        }, 100);
    });
});

