export const Header = () => {
  return (
    <header className="header" id="header">
      <div className="container">
        <a href="#" className="header__logo">
          balenciaga
        </a>
        <nav className="header__menu">
          <a href="#" className="header__link">
            Home
          </a>
          <a href="#" className="header__link">
            Top 3
          </a>
          <a href="#" className="header__link">
            The most expensive
          </a>
        </nav>
      </div>
    </header>
  );
};

// экспортируем в App.jsx