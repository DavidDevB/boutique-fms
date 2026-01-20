

const UserFilters = () => {

    const style = `
    <style>
         @import url('https://fonts.googleapis.com/css2?family=Kosugi&display=swap');

        .filters {
        font-family: 'Kosugi', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            margin-bottom: 20px;
            width: 100%;
            margin-top: 40px;
            margin-left: 40px;
        }
        .filters span {
            font-weight: bold;
        }
        .filters input[type="radio"] {
            margin-left: 10px;
        }
        .filter-options  {
            display: flex;
            gap: 10px;
            flex-direction: column;
        }
        .filter-option {
            display: flex;
            align-items: center;
            gap: 5px;
        }
    </style>
    `;

    return (style +`
        <div class="filters">
            <span>Genre:</span>
            <div class="filter-options">
                <div class="filter-option">
                    <input type="radio" id="men" name="genre" value="men"></input>
                    <label for="men">Men</label>
                </div>
                <div class="filter-option">
                    <input type="radio" id="women" name="genre" value="women"></input>
                    <label for="women">Women</label>
                </div>
                <div class="filter-option">
                    <input type="radio" id="all" name="genre" value="all" checked="checked"></input>
                    <label for="all">All</label>
                </div>
            </div>
        </div>
    `);
}

export default UserFilters;