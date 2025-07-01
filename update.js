function togglePanel() {
    const panel = document.getElementById("updatePanel");
    const speaker = document.getElementById("speakerBtn");
    panel.classList.toggle("open");
    speaker.style.display = panel.classList.contains("open") ? "none" : "block";
  }
