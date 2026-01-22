


const DropdownButton = (label, options, children, userOrAdmin) => {
    
   const switchTo = userOrAdmin === "user" ? "admin" : "user";
    const switchLabel = userOrAdmin === "user" ? "Switch to Admin" : "Switch to User";

    const style = `
    <style>
        .btn-group {
            margin: 10px;
        }
        .dropdown-menu {
            margin-top: 20px;
        }
        #user-name {
            padding: 10px 20px;
            font-weight: bold;
        }

        #switch-admin {
            cursor: pointer;
            padding: 10px 20px;
        }
    </style>
    `;  
    return (style + `
        <div class="btn-group">
  <button type="button" style="border:none; background-color: white;" data-bs-toggle="dropdown" aria-expanded="false">
    ${children}
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li id="user-name">John DOE</li>
    <li id="switch-admin"><a href="/pages/${switchTo}/${switchTo}.html" class="dropdown-item" type="button">${switchLabel}</a></li>
  </ul>
</div>
    `);
}

export default DropdownButton;