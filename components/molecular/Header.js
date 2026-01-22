
import DropdownButton from "./DropdownButton.js";


const Header = (userOrAdmin = "user") => {

    const style = `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Kosugi&display=swap');

        header {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 80px;
        align-items: center;
        padding: 10px 20px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        img {
            height: 40px;
            width: auto 
        }

        #logo {
            height: 200px;
        }

        .logo-and-links {
        flex: 9;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 50px;
        }

        .cart-and-user {
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 15px;
        }

        nav div {
        font-size: 20px;
        color: #333;
        cursor: pointer;
        text-transform: uppercase;
        font-family: 'Kosugi', sans-serif;
        }

        #shopping-cart, #user-icon {
        cursor: pointer;
        }

    </style>`;

    return ( style +
        `<style src="Header.css" rel="stylesheet"></style>
        <header class="header">
            <nav class="logo-and-links">
                <div class="types" data-type="Clothing">Clothes</div>
                <div class="types" data-type="Shoes">Shoes</div>
                <img style="cursor: pointer;" class="reset-filters" id="logo" src="/assets/logo-fms-boutique.png" alt="FMS Boutique Logo"/>
                <div class="types" data-type="Accessory">Accessories</div>
            </nav>
            <nav class="cart-and-user">
                <img id="shopping-cart" src="/assets/icon-shopping-cart.png" alt="Shopping Cart Icon"/>
                ${DropdownButton('User Menu', ['Profile', 'Orders', 'Logout'], `<img id="user-icon" src="/assets/icon-user.png" alt="User Icon"/>`, userOrAdmin)}
            </nav>
        </header>`
    );
}

export default Header;