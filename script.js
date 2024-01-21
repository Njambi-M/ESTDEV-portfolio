function toggleSkills(card) {
    // Close all open cards
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(otherCard => {
        if (otherCard !== card && otherCard.classList.contains('selected')) {
            otherCard.classList.remove('selected');
        }
    });
    card.classList.toggle('selected');
}
