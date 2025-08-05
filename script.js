// Simulăm o bază de date de parfumuri
let parfumuri = [];

// Funcția pentru afișarea parfumurilor pe pagină
function afiseazaParfumuri() {
    const parfumuriContainer = document.getElementById('parfumuri');
    parfumuriContainer.innerHTML = '';

    parfumuri.forEach((parfum, index) => {
        const parfumElement = document.createElement('div');
        parfumElement.classList.add('parfum');
        parfumElement.innerHTML = `
            <h3>${parfum.nume}</h3>
            <p>${parfum.descriere}</p>
            <p><strong>Preț:</strong> ${parfum.pret} lei</p>
            <button onclick="stergeParfum(${index})">Șterge</button>
        `;
        parfumuriContainer.appendChild(parfumElement);
    });
}

// Funcția pentru adăugarea unui parfum nou
function adaugaParfum(event) {
    event.preventDefault();
    
    const nume = document.getElementById('nume-parfum').value;
    const descriere = document.getElementById('descriere-parfum').value;
    const pret = parseFloat(document.getElementById('pret-parfum').value);

    const parfumNou = {
        nume: nume,
        descriere: descriere,
        pret: pret
    };

    parfumuri.push(parfumNou);
    afiseazaParfumuri();
    document.getElementById('form-parfum').reset(); // Resetează formularul
}

// Funcția pentru ștergerea unui parfum din colecție
function stergeParfum(index) {
    parfumuri.splice(index, 1);
    afiseazaParfumuri();
}

// Eveniment pentru submit-ul formularului
document.getElementById('form-parfum').addEventListener('submit', adaugaParfum);
