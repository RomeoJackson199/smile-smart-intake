import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Aller au contenu principal
      </a>
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-medical-blue rounded">
            <div className="w-10 h-10 bg-medical-blue rounded-lg flex items-center justify-center" aria-hidden="true">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.682l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-medical-blue">Cabinet Dentaire Santé+</span>
          </Link>
          <nav aria-label="Navigation principale">
            <ul className="flex flex-col md:flex-row md:space-x-6 gap-2">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-medical-blue ${isActive ? 'text-medical-blue font-semibold' : ''}`
                  }
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/intake"
                  className={({ isActive }) =>
                    `px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-medical-blue ${isActive ? 'text-medical-blue font-semibold' : ''}`
                  }
                >
                  Consultation
                </NavLink>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </header>
    </>
  );
};

export default NavBar;
