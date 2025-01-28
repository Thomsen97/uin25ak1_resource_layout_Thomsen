

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById('categories');
    const content = document.getElementById('content');

    function navBar() {
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
        const selectedResource = resources.find(resource => resource.category === category);

        content.innerHTML = `
        <h2>${selectedResource.category}</h2>
        <p>${selectedResource.text}</p>
        <ul>
            ${selectedResource.sources.map(source => `
                <li>
                    <a href="${source.url}" target="_blank">${source.title}</a>
                </li>`).join('')}
        </ul>
        `;
    }

    nav.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            document.querySelectorAll('.category-button').forEach(button => button.classList.remove('active'));

            event.target.classList.add('active');

            showContent(event.target.dataset.category);
        }
    });

    navBar();
    showContent(resources[0].category);
});