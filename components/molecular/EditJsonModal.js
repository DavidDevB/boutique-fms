

const EditJsonModal = async () => {

    const style = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Kosugi&display=swap');

        .modal-title {
            font-family: 'Kosugi', sans-serif;
        }

        .modal-body input {
            font-family: 'Kosugi', sans-serif;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        .modal-footer {
            font-family: 'Kosugi', sans-serif;
                }
        </style>
    `;


    return style + (`
    <!-- Modal -->
    <div class="modal fade" id="editJsonModal" tabindex="-1" aria-labelledby="editJsonModalLabel" >
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">  
                    <h5 class="modal-title" id="editJsonModalLabel">Add an item</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="text" id="item-id-input" placeholder="Enter item name" style="width: 100%; margin-bottom: 10px;"/>
                    <input type="text" id="item-type-input" placeholder="Enter item type" style="width: 100%; margin-bottom: 10px;"/>
                    <input type="text" id="item-genre-input" placeholder="Enter item genre" style="width: 100%; margin-bottom: 10px;"/>
                    <input type="text" id="item-color-input" placeholder="Enter item color" style="width: 100%; margin-bottom: 10px;"/>
                    <input type="text" id="item-size-input" placeholder="Enter item size" style="width: 100%; margin-bottom: 10px;"/>
                    <input type="number" id="item-price-input" placeholder="Enter item price" style="width: 100%; margin-bottom: 10px;"/>
                    <input type="number" id="item-stock-input" placeholder="Enter item stock" style="width: 100%; margin-bottom: 10px;"/>
                    <input type="text" id="item-material-input" placeholder="Enter item material" style="width: 100%; margin-bottom: 10px;"/>
                </div>  
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>  
                    <button id="save-item-json-button" type="button" class="btn btn-primary">Save Changes</button>
                </div>
            </div>
        </div>
    </div>
    `);  

}

export default EditJsonModal;