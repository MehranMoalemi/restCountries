interface StoreStateTypes {
  filter: string;
  search: string;
  setFilter: (filter: string) => void;
  setSearch: (search: string) => void;
}

interface Country {
  name: string;
  nativeName: string;
  flag: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  topLevelDomain: string;
  currencies: string;
  languages: string;
  borderCountries: string[];
}

interface CountriesState {
  countries: Country[];
  filteredCountries: Country[];
  fetchCountries: (region?: string | null) => Promise<void>;
  searchCountries: (query: string) => void;
  filterCountriesByName:(name: string) => void;
}
