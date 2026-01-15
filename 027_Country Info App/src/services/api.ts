import { Country } from '../types/Country';

const BASE_URL = 'https://restcountries.com/v3.1';

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch(`${BASE_URL}/all?fields=name,capital,region,population,area,flags,currencies,languages,borders`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};

export const searchCountries = async (name: string): Promise<Country[]> => {
  try {
    const response = await fetch(`${BASE_URL}/name/${name}`);
    
    if (!response.ok) {
      throw new Error('Country not found');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error searching countries:', error);
    throw error;
  }
};