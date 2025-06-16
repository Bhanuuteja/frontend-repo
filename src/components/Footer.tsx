import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-center py-6 shadow-top mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} React To-Do List App.
          Powered by React & Tailwind CSS.
        </p>
         <p className="text-slate-500 text-xs mt-1">
          This is a frontend demonstration. A full MERN stack would include Node.js, Express, and MongoDB.
        </p>
      </div>
    </footer>
  );
};

export default Footer;