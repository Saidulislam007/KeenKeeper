import { BarChart2, Clock, Home,Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const [open, setOpen] = useState(false);
    return (
        <div className="bg-white p-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center  p-2">
        
       
        <h1 className="text-3xl font-bold px-3 py-1 flex items-center">
  Keen <span className="text-emerald-900">Keeper</span>
</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3 p-2">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-900 text-white border border-emerald-900"
                : "flex items-center gap-2 px-4 py-2 rounded-md border border-dashed border-gray-400 text-gray-700"
            }
          >
            <Home size={18} />
            Home
          </NavLink>

          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-900 text-white border border-emerald-900"
                : "flex items-center gap-2 px-4 py-2 rounded-md border border-dashed border-gray-400 text-gray-700"
            }
          >
            <Clock size={18} />
            Timeline
          </NavLink>

          <NavLink
            to="/stats"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-900 text-white border border-emerald-900"
                : "flex items-center gap-2 px-4 py-2 rounded-md border border-dashed border-gray-400 text-gray-700"
            }
          >
            <BarChart2 size={18} />
            Stats
          </NavLink>

        </div>

       
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden border p-2 rounded-md"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-2 p-4 flex flex-col gap-3 bg-gray-100">

          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-900 text-white border border-emerald-900"
                : "flex items-center gap-2 px-4 py-2 rounded-md border border-dashed border-gray-400 text-gray-700"
            }
          >
            <Home size={18} />
            Home
          </NavLink>

          <NavLink
            to="/timeline"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-900 text-white border border-emerald-900"
                : "flex items-center gap-2 px-4 py-2 rounded-md border border-dashed border-gray-400 text-gray-700"
            }
          >
            <Clock size={18} />
            Timeline
          </NavLink>

          <NavLink
            to="/stats"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-900 text-white border border-emerald-900"
                : "flex items-center gap-2 px-4 py-2 rounded-md border border-dashed border-gray-400 text-gray-700"
            }
          >
            <BarChart2 size={18} />
            Stats
          </NavLink>

        </div>
      )}
    </div>
    );
};

export default Navbar;