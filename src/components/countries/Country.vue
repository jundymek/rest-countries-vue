<template>
  <div class="box">{{ country.name }}</div>
</template>

<script lang="ts">
import { Country } from "@/composables/useGetCountry";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    country: {
      type: Object as PropType<Country>,
      required: true,
    },
  },
  setup(props) {
    return { props };
  },
});
</script>

<style lang="scss" scoped>
.box {
  width: 100px;
  padding: 0;
  margin: 20px;
}
</style>
