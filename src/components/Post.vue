<template>
  <v-container>
    <v-card class="mx-auto">
      <v-card-title>{{ post.title }}</v-card-title>
      <v-card-text>
        {{ post.body }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <div class="text-right">
        <v-btn color="primary" :to="{name:'postRead',params:{id:post.id}}">View</v-btn>
      </div>
      </v-card-actions>
     
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["post"],
  data: () => ({
    view: null,
    map: null,
    coordinates: 0,
  }),

  mounted() {},
  methods: {},
};
</script>
<style>
.map {
  width: 100% !important;
  height: 100% !important;
  border: 2px solid black;
}
</style>
