'use client';
import useCountriesStore from '@/store/useFecth'
import Image from 'next/image';
import { Suspense, useEffect } from 'react'

export default function page({ params }: { params: { country: string } }) {
  const { country } = params
  const countryName = country.includes('-') ? country.split('-').join(' ') : country
  const { filterCountriesByName, filteredCountries } = useCountriesStore();
  
  useEffect(() => {
    filterCountriesByName(countryName);
  }, [countryName]);

  if (!filteredCountries[0]) {
    return <div>Loading...</div>;
  }

  const {
    name,
    nativeName,
    flag,
    population,
    region,
    subRegion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borderCountries,
  } = filteredCountries[0]





  return <>
    <div className="container mx-auto p-4">
      <button className="bg-gray-200 rounded-lg px-4 py-2 mb-4" onClick={() => history.back()}>
        &larr; Back
      </button>
      <div className="flex flex-col md:flex-row items-start">
        <Image src={flag} alt={countryName} className="w-full md:w-1/3 rounded-lg shadow-md mr-8" width={300} height={200} />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">{name}</h1>
          <div className="mt-4">
            <p><strong>Native Name:</strong> {nativeName}</p>
            <p><strong>Population:</strong> {population}</p>
            <p><strong>Region:</strong> {region}</p>
            <p><strong>Sub Region:</strong> {subRegion}</p>
            <p><strong>Capital:</strong> {capital}</p>
            <p><strong>Top Level Domain:</strong> {topLevelDomain}</p>
            <p><strong>Currencies:</strong> {currencies}</p>
            <p><strong>Languages:</strong> {languages}</p>
            <div className="mt-4">
              <strong>Border Countries:</strong>
              <div className="flex flex-wrap mt-2">
                {borderCountries.map((country: string) =>
                  <span className="bg-gray-200 rounded-lg px-4 py-2 m-1">${country}</span>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}