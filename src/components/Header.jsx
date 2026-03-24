import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { isDarkMode, toggleTheme, resetTheme } = useTheme();
  console.log('Header render, isDarkMode:', isDarkMode);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-800 dark:to-gray-900 p-4 shadow-lg">
      <nav className="container mx-auto flex flex-wrap justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Hospital UI</h1>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-yellow-300 transition-colors">User Home</Link>
          <Link to="/hospitals" className="text-white hover:text-yellow-300 transition-colors">Hospital List</Link>
          <Link to="/hospital-login" className="text-white hover:text-yellow-300 transition-colors">Hospital Login</Link>
          <Link to="/hospital-dashboard" className="text-white hover:text-yellow-300 transition-colors">Hospital Dashboard</Link>
          <button
            onClick={() => {
              console.log('Toggle button clicked, current isDarkMode:', isDarkMode);
              toggleTheme();
            }}
            className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors duration-300"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <button
            onClick={resetTheme}
            className="bg-red-500/20 hover:bg-red-500/30 text-white p-2 rounded-lg transition-colors duration-300 text-xs"
            title="Reset Theme"
          >
            Reset
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;