document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById('categories');
    const currentCategory = document.getElementById('content');

    function createNavBar() {
        const buttons = resources.map((resource, index) => {
            const button = document.createElement('button');
            button.textContent = resource.category;
            button.classList.add('category-button');
            button.dataset.category = resource.category;
            if (index === 0) button.classList.add('active');
            return button;
        });

        buttons.forEach(button => nav.appendChild(button));
    }

    function showContent(category) {
        // Filtrer ressursene basert på valgt kategori
        const selectedResource = resources.filter(resource => resource.category === category)[0];
    
        // Bygg HTML-innholdet dynamisk for den filtrerte kategorien
        currentCategory.innerHTML = `
            <h2>${selectedResource.category}</h2>
            <p>${selectedResource.text}</p>
            <ul>
                ${selectedResource.sources.map(source => `
                    <li>
                        <a href="${source.url}" target="_blank">${source.title}</a>
                    </li>
                `).join('')}
            </ul>
        `;
    }

    // Legger til event-lytter på knapper
    nav.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            document.querySelectorAll('.category-button').forEach(button => button.classList.remove('active'));
            event.target.classList.add('active');
            showContent(event.target.dataset.category);
        }
    });

    createNavBar();
    showContent(resources[0].category); // Vis HTML-innhold ved første last
});
