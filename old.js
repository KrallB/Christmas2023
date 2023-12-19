document.addEventListener('DOMContentLoaded', () => {
    // Define the correct orders for each line
    const correctOrders = {
        "adam": "Merry Xmas Cheer".replace(/\s/g, '').toUpperCase(),
        "lauren": "Another Example Here".replace(/\s/g, '').toUpperCase(),
        "bree": "Different Line Text".replace(/\s/g, '').toUpperCase(),
        "karina": "Yet Another Message".replace(/\s/g, '').toUpperCase(),
        "lana": "Final Line Example".replace(/\s/g, '').toUpperCase()
    };

    // Function to add event listeners to letter boxes
    const addValidation = (lineId, correctOrder) => {
        const letterBoxes = document.querySelectorAll(`.${lineId} .letter-box`);
        letterBoxes.forEach((box, index) => {
            box.addEventListener('input', () => {
                const currentLetter = box.value.toUpperCase();

                if (currentLetter === correctOrder[index]) {
                    box.classList.add('correct');
                    box.classList.remove('incorrect');
                    if (index < letterBoxes.length - 1) {
                        letterBoxes[index + 1].focus();
                    }
                } else {
                    box.classList.add('incorrect');
                    box.classList.remove('correct');
                    box.value = '';
                }
            });
        });
    };

    // Add validation for each line
    for (let lineId in correctOrders) {
        addValidation(lineId, correctOrders[lineId]);
    }
});
