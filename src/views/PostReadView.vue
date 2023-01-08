<template>
  <v-container>
    <div v-if="post">
      <v-card class="mx-auto">
      <v-card-title>{{post.id}}. {{ post.title }}</v-card-title>
      <v-card-text>
        {{ post.body }}
      </v-card-text>
      <v-card-subtitle>User ID: {{ post.userId }}</v-card-subtitle>
    </v-card>
    </div>
  </v-container>
</template>

<script>
const axios = require("axios").default;
export default {
  name: "HomeView",
  data: () => ({
    post: {},
  }),
  components: {
  },
  methods: {
    getPost() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/"+this.$route.params.id)
        .then((response) => {
          console.log(response);
          this.post = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getPost();
  },
};
</script>
