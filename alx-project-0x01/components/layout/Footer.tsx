import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full p-4 text-center text-white bg-gray-800">
      <p>&copy; {new Date().getFullYear()} Footer</p>
    </footer>
  );
};

export default Footer;
