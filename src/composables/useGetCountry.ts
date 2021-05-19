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

export interface Country {
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
}

const countries = ref<Country[] | undefined>(undefined);
const error = ref("");
const isLoading = ref(false);

export const useGetCountry = (): {
  error: Ref<string>;
  isLoading: Ref<boolean>;
  countries: Ref<Country[] | undefined>;
  getAllCountries: () => Promise<void>;
} => {
  const getAllCountries = async () => {
    if (isLoading.value) return;
    isLoading.value = true;

    try {
      const response = await fetch(
        "https://restcountries.eu/rest/v2/all?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;flag"
      );
      const data = await response.json();
      isLoading.value = false;
      countries.value = data;
      console.log(data);
    } catch (error) {
      console.log(error);
      isLoading.value = false;
    }
  };

  return {
    error,
    isLoading: computed(() => isLoading.value),
    getAllCountries,
    countries,
  };
};
