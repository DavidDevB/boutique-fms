
const Header = () => {

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
        gap: 15px;
        }

        nav {
        font-size: 20px;
        color: #333;
        cursor: pointer;
        text-transform: uppercase;
        font-family: 'Kosugi', sans-serif;
        }

    </style>`;

    return ( style +
        `<style src="Header.css" rel="stylesheet"></style>
        <header class="header">
            <div class="logo-and-links">
                <nav>Clothes</nav>
                <nav>Shoes</nav>
                <img id="logo" src="/assets/logo-fms-boutique.png" alt="FMS Boutique Logo"/>
                <nav>Accessories</nav>
            </div>
            <div class="cart-and-user">
                <img src="/assets/icon-shopping-cart.png" alt="Shopping Cart Icon"/>
                <img src="/assets/icon-user.png" alt="User Icon"/>
            </div>
        </header>`
    );
}

export default Header;