import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <div className="flex justify-between items-center p-3 bg-slate-400 mx-auto">
      <h1 className="font-bold text-lg">
        <span className="text-red-700 mx-3">Sara</span>
        <span className="text-blue-900">Real Estate</span>
      </h1>
      <form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
      <nav>
        <ul className="flex justify-between gap-4">
          <Link to="/ ">
            <li className="hover:underline font-bold hidden sm:inline">Home</li>
          </Link>
          <Link to="/about-us ">
            <li className="hover:underline font-bold hidden sm:inline">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="w-7 h-7 rounded-full object-fill"
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <Link to="/sign-in ">
                <li className="hover:underline font-bold hidden sm:inline">
                  Sign in
                </li>
              </Link>
            )}
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
