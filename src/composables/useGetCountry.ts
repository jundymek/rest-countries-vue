import { computed, Ref, ref } from "vue";

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface CountryType {
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string;
  currences: Currency[];
  languages: Language[];
  borders: string[];
  flag: string;
  alpha3Code: string;
}

export interface CountryCodesType {
  [key: string]: string;
}

const countries = ref<CountryType[] | undefined>(undefined);
const country = ref<CountryType | undefined>(undefined);
const countryCodes = ref<CountryCodesType | undefined>(undefined);
const filteredCountries = ref<CountryType[] | undefined>(undefined);
const error = ref("");
const isLoading = ref(false);

export const useGetCountry = (): {
  error: Ref<string>;
  isLoading: Ref<boolean>;
  countries: Ref<CountryType[] | undefined>;
  country: Ref<CountryType | undefined>;
  countryCodes: Ref<CountryCodesType | undefined>;
  getAllCountries: () => Promise<void>;
  getCountriesByRegion: (region: string) => Promise<void>;
  getCountriesByInputValue: (input: string) => void;
  getCountryByName: (country: string) => Promise<void>;
  filteredCountries: Ref<CountryType[] | undefined>;
} => {
  const getAllCountries = async () => {
    if (isLoading.value) return;
    isLoading.value = true;

    try {
      const response = await fetch(
        "https://restcountries.eu/rest/v2/all?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;flag;alpha3Code"
      );
      const data = await response.json();
      isLoading.value = false;
      countries.value = data;
      filteredCountries.value = data;
      createCountryCodes();
    } catch (error) {
      console.log(error);
      isLoading.value = false;
    }
  };

  const getCountriesByRegion = async (region: string) => {
    if (!region.length) {
      filteredCountries.value = countries.value;
      return;
    }
    if (isLoading.value) return;
    isLoading.value = true;

    try {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/region/${region}`
      );
      const data = await response.json();
      isLoading.value = false;
      countries.value = data;
      filteredCountries.value = data;
    } catch (error) {
      console.log(error);
      isLoading.value = false;
    }
  };

  const getCountriesByInputValue = (input: string) => {
    if (!input.length) {
      filteredCountries.value = countries.value;
      return;
    }
    const filtered = countries.value?.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    if (filtered?.length) {
      filteredCountries.value = filtered;
    } else {
      filteredCountries.value = undefined;
    }
  };

  const getCountryByName = async (countryName: string) => {
    if (isLoading.value) return;
    isLoading.value = true;

    try {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${countryName}?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;flag;alpha3Code`
      );
      const data = await response.json();
      isLoading.value = false;
      country.value = data;
    } catch (error) {
      console.log(error);
      isLoading.value = false;
    }
  };

  const createCountryCodes = () => {
    const borders: CountryCodesType = {};
    if (countries.value) {
      for (const key of countries.value) {
        borders[key.alpha3Code] = key.name;
      }
    }
    countryCodes.value = borders;
  };

  return {
    error,
    isLoading: computed(() => isLoading.value),
    countries,
    country,
    getAllCountries,
    getCountriesByRegion,
    getCountriesByInputValue,
    getCountryByName,
    filteredCountries,
    countryCodes,
  };
};
