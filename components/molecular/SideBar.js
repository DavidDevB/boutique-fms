

const SideBar = ({ children }) => {
  return (`
    <aside className="sidebar">
        <span>Filters</span>
        ${children}
    </aside>
  `);
}

export default SideBar;