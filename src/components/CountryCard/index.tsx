import Link from 'next/link';
import React from 'react';
import Image from 'next/image';


const CountryCard: React.FC<CountryCardPropsTypes> = (props) => {
  const { flagInfo } = props;
  const { flag, name, population, region, capital } = flagInfo;
  const url = name.split(' ').join('-')

  return (
    <Link href={url} className="bg-white rounded-lg shadow-md overflow-hidden w-64 m-4">
      <Image src={flag} alt={`${name} flag`} width={200} height={150} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p className="text-gray-700">
          <strong>Population:</strong> {population.toLocaleString()}
        </p>
        <p className="text-gray-700">
          <strong>Region:</strong> {region}
        </p>
        <p className="text-gray-700">
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
