const marqueeText = document.querySelector('.Marquee-item--text');
let wavePosition = 0;

function updateWave() {
    wavePosition += 0.1; // Adjust speed as needed
    const offsetX = Math.sin(wavePosition) * 20; // Adjust amplitude as needed
    marqueeText.style.transform = `translateX(${offsetX}px)`;
    requestAnimationFrame(updateWave);
}

updateWave();
