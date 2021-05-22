<template>
  <div class="home">
    <countries />
  </div>
</template>

<script>
// @ is an alias to /src
import Countries from "@/components/countries/Countries.vue";

export default {
  name: "Home",
  components: {
    Countries,
  },
};
</script>
