<template>
  <div v-if="country" class="outer-wrapper">
    <router-link class="back-link" to="/">
      <img
        :src="require(`@/assets/arrow-back-outline.svg`)"
        alt=""
        width="20"
        height="20"
        :class="iconStyle"
      />
      <span class="back-link__text">Back</span>
    </router-link>
    <div class="details-wrapper">
      <div
        class="flag"
        :style="'background-image: url(' + country[0].flag + ')'"
      ></div>
      <div class="info-wrapper">
        <h2 class="title">{{ country[0].name }}</h2>
        <div class="info">
          <ul class="left">
            <li><span>Native name:</span> {{ country[0].nativeName }}</li>
            <li>
              <span>Population:</span>
              {{ country[0].population.toLocaleString() }}
            </li>
            <li><span>Region:</span> {{ country[0].region }}</li>
            <li><span>Sub region:</span> {{ country[0].subregion }}</li>
            <li><span>Capital:</span> {{ country[0].capital }}</li>
          </ul>
          <ul class="right">
            <li>
              <span>Top level domain:</span>
              {{ country[0].topLevelDomain.map((item) => item).join() }}
            </li>
            <li>
              <span>Currencies:</span>
              {{ country[0].currencies.map((item) => item.name).join(", ") }}
            </li>
            <li>
              <span>Languages:</span>
              {{ country[0].languages.map((item) => item.name).join(", ") }}
            </li>
          </ul>
        </div>
        <div class="borders-wrapper">
          <span>Border Countries: </span>
          <div class="borders">
            <router-link
              v-for="border in country[0].borders"
              :to="{
                name: 'Country',
                params: { countryName: countryCodes[border] },
              }"
              :key="countryCodes[border]"
              class="border-link"
            >
              {{ countryCodes[border] }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useGetCountry } from "@/composables/useGetCountry";
import { useTheme } from "@/composables/useTheme";
import { computed, defineComponent, watch } from "vue";

export default defineComponent({
  props: ["countryName"],
  setup(props) {
    const { getCountryByName, country, countryCodes } = useGetCountry();
    const { theme } = useTheme();
    const iconStyle = computed(() => theme.value == "dark" && "toggle-icon");
    getCountryByName(props.countryName);
    watch(
      () => props.countryName,
      () => getCountryByName(props.countryName)
    );
    return { country, countryCodes, iconStyle };
  },
});
</script>

<style lang="scss" scoped>
.outer-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  max-width: 1440px;
  padding: 0 80px;
  @media (max-width: $desktop) {
    padding: 0 20px;
    margin-top: 40px;
  }
}

.back-link {
  width: 100px;
  height: 30px;
  font-family: "Nunito Sans", sans-serif;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  background: var(--input-box);
  color: var(--text-color);
  box-shadow: 0.5px 0.5px 2px 0.1px var(--button-shadow);
  &__text {
    margin-left: 10px;
  }
}

.toggle-icon {
  filter: invert(60%) sepia(0%) saturate(7443%) hue-rotate(198deg)
    brightness(126%) contrast(112%);
}

.details-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
  @media (max-width: $desktop) {
    flex-direction: column;
  }
}

.flag {
  background-size: cover;
  width: 50%;
  height: 100%;
  min-height: 22em;
  @media (max-width: $desktop) {
    width: 100%;
    height: calc(100vw - 22em);
    min-height: 12em;
    /* min-height: 100%; */
  }
}

.info-wrapper {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px 0 10px 80px;
  @media (max-width: $desktop) {
    width: 100%;
    padding: 0;
  }
}

.info {
  display: flex;
  justify-content: space-between;
  @media (max-width: $desktop) {
    flex-direction: column;
  }
}

.left,
.right {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 12px;
  li {
    padding: 4px 0;
  }
}

.right {
  @media (max-width: $desktop) {
    padding-top: 20px;
  }
}
span {
  font-weight: 600;
  font-size: 12px;
}

.borders-wrapper {
  margin-top: 40px;
  display: flex;
  align-items: center;
  @media (max-width: $desktop) {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 40px;
  }
}

.borders {
  display: flex;
  flex-wrap: wrap;
  margin-left: 5px;
  @media (max-width: $desktop) {
    margin: 10px 0 0 -5px;
  }
}

.border-link {
  min-width: 80px;
  min-height: 20px;
  font-family: "Nunito Sans", sans-serif;
  display: flex;
  margin: 5px 5px;
  padding: 2px 4px;
  text-decoration: none;
  text-align: center;
  color: var(--text-color);
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 12px;
  background: var(--input-box);
  box-shadow: 0.5px 0.5px 2px 0.1px var(--button-shadow);
}
</style>
