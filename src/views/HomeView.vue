<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <Post :post="post" />
    </div>
  </div>
</template>

<script>
import Post from "../components/Post";
const axios = require("axios").default;
export default {
  name: "HomeView",
  data: () => ({
    posts: [],
  }),
  components: {
    Post,
  },
  methods: {
    getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          console.log(response);
          this.posts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>
