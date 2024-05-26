"use client";
import useCountriesStore from '@/store/useFecth';
import { debounce } from '@/utils/utils';
import React, { useCallback, useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const searchCountries = useCountriesStore((state) => state.searchCountries);



  const debouncedSearch = useCallback(debounce(searchCountries, 500), [searchCountries]);

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a country..."
        className="w-full max-w-lg  p-4 pl-20 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1  focus:ring-indigo-500 focus:border-indigo-500"
      />
      <CiSearch className='absolute top-1/2 left-6 transform -translate-y-1/2 h-6 w-6 text-gray-400' />

    </div>
  );
};

export default Search;
