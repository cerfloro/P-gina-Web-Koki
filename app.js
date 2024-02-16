const products = [
    { id: 1, name: 'Comida para Perro "Canbo" 7 Kg', category: 'Comida', pet: 'Perro', price: 'S/ 120', imageUrl: 'https://www.petexpressperu.com/wp-content/uploads/2021/01/ADULTO-RAZA-PEQUENA-1.jpg' },
    { id: 2, name: 'Comida para Gato "Taste of the Wild"', category: 'Comida', pet: 'Gato', price: 'S/ 150', imageUrl: 'https://demascotass.com/wp-content/uploads/2020/11/yotw-gato.png' },
    { id: 3, name: 'Pelota para Morder', category: 'Juguetes', pet: 'Perro', price: 'S/ 18', imageUrl: 'https://m.media-amazon.com/images/I/61wwFQh9DEL._AC_SX679_.jpg' },
    { id: 4, name: 'Puntero Láser', category: 'Juguetes', pet: 'Gato', price: 'S/ 12', imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_970191-MPE53183396058_012023-F.webp' },
    // Add more products as needed
];

function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; // Clear previous products
    products.forEach(product => {
        const productHTML = `
            <div class="border p-4 flex flex-col items-center">
                <img src="${product.imageUrl}" alt="${product.name}" class="w-32 h-32 object-cover mb-2">
                <h3 class="text-lg font-semibold">${product.name}</h3>
                <p>${product.price}</p>
                <button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 contact-to-buy">Contáctanos para comprarlo</button>
            </div>
        `;
        productsContainer.innerHTML += productHTML;
    });
}

// Load all products on page load
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});
function setupChat() {
    const chatModal = document.getElementById('chatModal');
    const closeModal = document.getElementById('closeModal');
    const sendMessage = document.getElementById('sendMessage');
    const chatMessage = document.getElementById('chatMessage');

    document.querySelectorAll('.contact-to-buy').forEach(button => {
        button.addEventListener('click', () => {
            chatModal.classList.remove('hidden'); // Show the chat modal
        });
    });

    closeModal.addEventListener('click', () => {
        chatModal.classList.add('hidden'); // Hide the chat modal
    });

    sendMessage.addEventListener('click', () => {
        const message = chatMessage.value;
        if (message.trim() !== '') {
            console.log('Message sent:', message); // Simulate sending the message
            chatMessage.value = ''; // Clear the message input
            chatModal.classList.add('hidden'); // Hide the modal
            alert('Tu mensaje ha sido enviado, se te responderá pronto.'); // Feedback to the user
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    setupChat();
});
