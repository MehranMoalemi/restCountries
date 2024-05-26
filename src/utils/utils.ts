export function classCombiner(classes: (string | undefined)[]): string {
  let combinedStyle = classes.join(" ").trim();
  return combinedStyle;
}

export const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export async function getCountryDetails(name: string) {
  try {
    const formattedCountryName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    const endpoint = `https://restcountries.com/v3.1/name/${formattedCountryName}?fullText=true`;
    const response = await fetch(endpoint);
    const data = await response.json();
    const formattedData = data.map((country: any) => ({
      name: country.name.common,
      flag: country.flags.svg,
      population: country.population,
      region: country.region,
      capital: country.capital ? country.capital[0] : "N/A",
    }));
    console.log(formattedData,data)
    return formattedData
  } catch (error) {
    console.log(error);
  }
}
