document.addEventListener('DOMContentLoaded', () => {
    //Adam
    const correctOrder = "Merry Xmas CheerMerry Xmas CheerMerry Xmas CheerMerry Xmas CheerMerry Xmas Cheer".replace(/\s/g, '').toUpperCase();
    const letterBoxes = document.querySelectorAll('.letter-box');

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
});