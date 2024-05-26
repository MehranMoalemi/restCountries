"use client";
import React, { useCallback, useEffect } from 'react';
import useCountriesStore from '@/store/useFecth';
import CountryCard from '../CountryCard';

const CountryGrid: React.FC = React.memo(() => {
  const { filteredCountries, fetchCountries } = useCountriesStore();
  
  // Memoize fetchCountries call
  const memoizedfetchCountries = useCallback(() => {
    fetchCountries('all');
  }, [fetchCountries]);

  useEffect(() => {
    memoizedfetchCountries();
  }, [memoizedfetchCountries]);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCountries.map((country:Country) => (
          <CountryCard
            key={country.name}
            flagInfo={country}
          />
        ))}
      </div>
    </div>
  );
})

export default CountryGrid;
