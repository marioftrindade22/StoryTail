import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faUsers, faListCheck, faBook, faPencil, faTags, faChildReaching, faUserShield } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const menuItems = [
    { icon: faCubes, label: 'Dashboard' },
    { icon: faUsers, label: 'Profile' },
    { icon: faListCheck, label: 'Plans' },
    { icon: faBook, label: 'Books' },
    { icon: faPencil, label: 'Authors' },
    { icon: faTags, label: 'Tags' },
    { icon: faChildReaching, label: 'Age Groups' },
    { icon: faUserShield, label: 'Staff' },
  ];

  return (
    <nav className="fixed left-0 top-0 h-full bg-laranja text-white p-4 flex flex-col items-start justify-start shadow-md">
      <div className="mb-4">
        <a href="#" className="text-1xl font-bold text-white">
          Logo
        </a>
      </div>
      <hr className="border-t border-white w-full mb-4" />
      <div className="flex flex-col items-start justify-start space-y-4">
        {menuItems.map((item, index) => (
          <div key={index} className="relative group">
            <a href="#" className="flex items-center space-x-2 p-2 rounded transition duration-300 hover:bg-gray-400 relative">
              <FontAwesomeIcon icon={item.icon} className="text-xl" />
            </a>
            <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity absolute left-full top-1/2 transform -translate-y-1/2 ml-4 bg-gray-800 rounded px-4">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;

