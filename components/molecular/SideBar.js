

const SideBar = (children) => {

    const style = `
    <style>
         @import url('https://fonts.googleapis.com/css2?family=Kosugi&display=swap');

        .sidebar {
        font-family: 'Kosugi', sans-serif;
            width: 250px;
            padding: 20px;
            border-right: 1px solid #ccc;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
            height: 100%;
            background-color: #7391a0;
        }
        .sidebar span {
            font-weight: bold;
            display: block;
            margin-bottom: 15px;
        }
    </style>
    `;

  return ( style + `
    <aside class="sidebar">
        <span>Filters</span>
        ${children}
    </aside>
  `);
}

export default SideBar;