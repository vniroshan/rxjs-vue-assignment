<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center text-h5">Assignment 2</div>

      <v-spacer></v-spacer>
      <v-btn text :to="{ name: 'home' }"> posts </v-btn>
      <v-btn text :to="{ name: 'stopWatch' }"> stop watch </v-btn>
      <div class="ml-2">NIROSHAN SE-2017-031</div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
