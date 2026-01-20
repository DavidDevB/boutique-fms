

const ItemsDisplay = async (type, genre) => {

    const style = `
    <style>
         @import url('https://fonts.googleapis.com/css2?family=Kosugi&display=swap');

        .items-display {
            font-family: 'Kosugi', sans-serif;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
            padding: 20px;
            margin-top: 20px;
        }

        .items-card {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            gap: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .items-card img {
            max-height: 150px;
            max-width: 100%;
            height: auto;
            border-radius: 5px;
        }

        .items-card h3 {
            margin: 10px 0 5px 0;
            font-size: 18px;
        }

        .items-card p {
            margin: 0;
            color: #666;
        }
    </style>
    `;

    const response = await fetch('../../data/items.json');
    const data = await response.json();

    const filteredItems = data.items.filter(item => {
        return (type ? item.type === type : true) && (genre ? item.genre === genre : true);
    });

    const itemsHTML = filteredItems.map(item => `
        <div class="items-card">
            <img src="../../assets/${item.image}" alt="${item.title}" />
            <h3>${item.title}</h3>
            <p>${item.price}€</p>
            <button style="cursor:pointer; border: none; box-shadow: 1px 1px 1px black;"><img src="../../assets/icon-shopping-cart.png" alt="Add to cart" style="width:20px; " /></button>
        </div>
    `).join('');   

    return ( style + `
    <section class="items-display">
        ${itemsHTML}
    </section>
  `);
    }

export default ItemsDisplay;


