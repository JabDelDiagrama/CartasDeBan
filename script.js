// Selecciona el contenedor donde se mostrarán las cartas
const cardContainer = document.getElementById("card-container");

// Renderiza las cartas en el DOM
function renderCards(cards) {
    cards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        cardElement.innerHTML = `
            <h2>Código: ${card.code}</h2>
            <p><strong>Descripción:</strong> ${card.description}</p>
            <p><strong>Comentario extra:</strong> ${card.statBroma}</p>
            
            <p><strong>Estado:</strong> ${card.status}</p>
            <p><strong>Razon de Expulsion:</strong> ${card.razonExpulsion}</p>
            <p><strong>Errores del servidor:</strong> ${card.serverErrors}</p>
            <p><strong>Sanciones:</strong></p>
            <ul>${card.sanctions.map(s => `<li>${s}</li>`).join("")}</ul>
        `;

        cardContainer.appendChild(cardElement);
    });
}

// Llama a la función para renderizar las cartas
renderCards(data);
