

const AdminFilters = () => {

    const style = `
    <style>
         @import url('https://fonts.googleapis.com/css2?family=Kosugi&display=swap');

        .filters {
            font-family: 'Kosugi', sans-serif;
            display: flex;
            flex: 2;
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
            flex-direction: column;
            align-items: center;
            gap: 5px;
        }
    </style>
    `;

    return (style +`
        <div class="filters">
            <div class="filter-options">
                <div class="filter-option">
                    <label style="cursor:pointer" for="date">Date</label>
                    <input style="cursor:pointer" type="date" id="date" name="date" value=""></input>
                </div>
            </div>
        </div>
    `);
}

export default AdminFilters;