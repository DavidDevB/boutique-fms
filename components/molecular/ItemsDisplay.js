
import Itemfactory from '../../classes/factories/ItemFactory.js';

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
            border-radius: 5px;
            background-color: #aec1c7;
            padding: 10px;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            gap: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
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
        
        .add-to-cart {
            border: none;
            color: white;
            padding: 10px 16px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 10px 2px;
            cursor: pointer;
            border-radius: 4px;
        }
    </style>
    `;

    // Fetch items data
    const response = await fetch('../../data/items.json');
    const data = await response.json();

    // Filtrer les articles en fonction des critères
    const filteredData = data.items.filter(item => {
        return (type ? item.type === type : true) && (genre ? item.genre === genre : true);
    });

    console.log('Filtered Data:', filteredData); // Debugging line

    // Générer le HTML des articles filtrés
    const itemsHTML = filteredData
    .map(itemData => Itemfactory.createItem(itemData))
    .map(item => item.toHTML())
    .join('');   

    // Retourner le HTML complet
    return ( style + `
    <section class="items-display">
        ${itemsHTML}
    </section>
  `);
    }

export default ItemsDisplay;


