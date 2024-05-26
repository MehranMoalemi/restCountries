"use client";
import React, { useState, useEffect } from 'react';
import useCountriesStore from '@/store/useFecth';
import useEffectAfterMount from '@/hooks/useEffectAfterMount';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [continent, setContinent] = useState<string | null>('Select a continent');
  const flags = useCountriesStore((state) => state.filteredCountries);
  const fetchCountries = useCountriesStore((state) => state.fetchCountries);


  // Fetch flags when component 
  useEffectAfterMount(() => fetchCountries(continent), [continent])

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setContinent(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center w-56 rounded-md border border-gray-300 shadow-sm px-4 py-4 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1  focus:ring-indigo-500"
      >
        {continent}
        <svg
          className="ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 01.707.293l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707A1 1 0 114.293 8.293l5-5A1 1 0 0110 3z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              onClick={() => handleOptionClick('all')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
            >
              All
            </button>
            <button
              onClick={() => handleOptionClick('africa')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
            >
              Africa
            </button>
            <button
              onClick={() => handleOptionClick('asia')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
            >
              Asia
            </button>
            {/* <button
              onClick={() => handleOptionClick('america')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
            >
              America
            </button> */}
            <button
              onClick={() => handleOptionClick('europe')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
            >
              Europe
            </button>
            {/* <button
              onClick={() => handleOptionClick('oceania')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
            >
              Oceania
            </button> */}

          </div>
        </div>
      )}


    </div>
  );
};

export default Dropdown;
