import Shoe from '../models/Shoe.js';
import Clothing from '../models/Clothing.js';
import Accessory from '../models/Accessory.js';


class ItemFactory {

    static createItem(data) {
        switch (data.type) {
            case 'Shoes':
                return new Shoe(
                    data.id,
                    data.title,
                    data.type,
                    data.genre,
                    data.price,
                    data.stock,
                    data.image,
                    data.size,
                    data.brand
                );
            case 'Clothing':
                return new Clothing(
                    data.id,
                    data.title,
                    data.type,
                    data.genre,
                    data.price,
                    data.stock,
                    data.image,
                    data.size,
                    data.material
                );
            case 'Accessory':
                return new Accessory(
                    data.id,
                    data.title,
                    data.type,
                    data.genre,
                    data.price,
                    data.stock,
                    data.image,
                    data.size,
                    data.category
                );
            default:
                throw new Error(`Unknown item type: ${data.type}`);
        }  
    }
}

export default ItemFactory;
