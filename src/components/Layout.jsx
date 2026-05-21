import { NavLink, Outlet } from "react-router-dom";

export default function Layout({ pages }) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <h1>协议政策中心</h1>
        <nav className="tabs">
          {pages.map((page) => (
            <NavLink
              key={page.path}
              to={page.path}
              replace
              className={({ isActive }) =>
                `tab-link${isActive ? " tab-link-active" : ""}`
              }
            >
              {page.title}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="page-wrap">
        <Outlet />
      </main>
    </div>
  );
}
