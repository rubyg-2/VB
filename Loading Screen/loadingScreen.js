const targetText = "VIRTUAL BREW";  // The final text
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";
let outputText = Array(targetText.length).fill("_");

function decipherEffect(index = 0) {
    if (index >= targetText.length) return; // Stop when done

    let interval = setInterval(() => {
        if (targetText[index] === " ") {  // Preserve spaces
            outputText[index] = " ";
            document.getElementById("text").textContent = outputText.join("");
            clearInterval(interval);
            decipherEffect(index + 1);
            return;
        }

        outputText[index] = chars[Math.floor(Math.random() * chars.length)];
        document.getElementById("text").textContent = outputText.join("");
        document.getElementById("text").classList.add("glitch"); // Add glitch effect

    }, 50);

    // Lock in the correct letter after a short delay
    setTimeout(() => {
        clearInterval(interval);
        outputText[index] = targetText[index];
        document.getElementById("text").textContent = outputText.join("");
        document.getElementById("text").classList.remove("glitch"); // Remove glitch effect
        decipherEffect(index + 1);
    }, 500); // Adjust timing for smooth transition
}


// Trigger animation on load and when clicked
window.onload = () => decipherEffect();
document.getElementById("text").addEventListener("click", () => decipherEffect());

