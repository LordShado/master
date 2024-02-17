document.addEventListener('DOMContentLoaded', () => {
    const produitsAgricoles = [
        { nom: 'Tomates', image: 'tomates.jpg' },
        { nom: 'Carottes', image: 'carottes.jpg' },
        { nom: 'Pommes de terre', image: 'pommes_de_terre.webp' },
        { nom: 'Maïs', image: 'mais.jpg' },
        { nom: 'Fraises', image: 'fraises.jpg' },
        { nom: 'Courgettes', image: 'courgettes.webp' }
    ];

    const produitsContainer = document.getElementById('produits-container');

    produitsAgricoles.forEach(produit => {
        const produitCard = document.createElement('div');
        produitCard.classList.add('col-md-4', 'mb-4', 'card');

        produitCard.innerHTML = `
            <img src="images/${produit.image}" class="card-img-top" alt="${produit.nom}">
            <div class="card-body">
                <h5 class="card-title">${produit.nom}</h5>
                <p class="card-text">Description du produit ${produit.nom}.</p>
            </div>
        `;

        produitsContainer.appendChild(produitCard);
    });
});
