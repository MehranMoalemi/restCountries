import create from 'zustand';
import { persist } from 'zustand/middleware';



const useCountriesStore = create(
  persist(
    (set, get) => ({
      countries: [],
      filteredCountries: [],
      fetchCountries: async (region:string) => {
        try {
          const endpoint = region === 'all' ? 'https://restcountries.com/v3.1/all' : `https://restcountries.com/v3.1/region/${region}`;
          const response = await fetch(endpoint);
          const data = await response.json();
          const formattedData = data.map((country) => ({
            name: country.name.common,
            nativeName: country.name.nativeName ? (Object.values(country.name.nativeName)[0] as { common: string }).common : 'N/A',
            flag: country.flags.svg,
            population: country.population,
            region: country.region,
            subRegion: country.subregion, 
            capital: country.capital ? country.capital[0] : 'N/A',
            topLevelDomain: country.tld ? country.tld[0] : 'N/A', 
            currencies: country.currencies ? Object.values(country.currencies).map((currency) => currency.name).join(", ") : 'N/A',
            languages: country.languages ? Object.values(country.languages).join(", ") : 'N/A', 
            borderCountries: country.borders || [], 
          }));
          
          set({ countries: formattedData, filteredCountries: formattedData });
        } catch (error) {
          console.log(error)
        }
      },

      searchCountries: (query) => {
        const { countries } = get();
        const filteredCountries = countries.filter((country:string) =>
          country.name.toLowerCase().includes(query.toLowerCase())
        );
        set({ filteredCountries });
      },
      filterCountriesByName: (name: string) => {
        const { countries } = get();
        const filteredCountries = countries.filter((country) =>
          country.name.toLowerCase() === name.toLowerCase()
        );
        set({ filteredCountries });
      },
    }),
    {
      name: 'countries-store', // Name for the storage key
      getStorage: () => localStorage, // Choose between localStorage or sessionStorage
      include: ['filteredCountries'], // Specify which parts of the state to persist
    }
  )
);

export default useCountriesStore;
