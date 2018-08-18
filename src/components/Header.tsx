export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div>
          Some Logo
        </div>
        <div>
          <a href="#">Documentation</a>
          <a href="#">FAQ</a>
        </div>
        <div>
          <input type="text" name="search" placeholder="Search..." />
        </div>
      </div>
    </header>
  );
}
