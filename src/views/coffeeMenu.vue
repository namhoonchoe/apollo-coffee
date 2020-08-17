<template>
  <div>
    <section class="menu">
      <div v-for="coffee in coffees" :key="coffee">
        <p>{{ coffee.name }}</p>
      </div>
    </section>
    <Navigation />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import { getCoffees } from "@/queries";

export default {
  name: "CoffeeMenu",
  components: {
    Navigation
  },
  data() {
    return {
      coffees: []
    };
  },
  apollo: {
    coffees() {
      return {
        query: getCoffees
      };
    }
  }
};
</script>

<style></style>
