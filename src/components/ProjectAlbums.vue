<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const posts = ref([]);
const selectedPost = ref(null);

const selectPost = (post) => {
  selectedPost.value = post;
};

onMounted(async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/posts/");
    posts.value = response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
});
</script>

<template>
  <div class="container py-5">
    <h1 class="text-center mb-5 display-6 fw-bold text-primary">
      Our Projects
    </h1>

    <div class="grid">
      <div
        class="card"
        v-for="post in posts"
        :key="post.id"
        @click="selectPost(post)"
      >
        <img :src="'http://127.0.0.1:8000' + post.thumbnail" />
        <h3>{{ post.title }}</h3>
      </div>
    </div>

    <div v-if="selectedPost" class="gallery">
      <h2>{{ selectedPost.title }}</h2>

      <div class="images">
        <img
          v-for="(img, index) in selectedPost.images"
          :key="index"
          :src="'http://127.0.0.1:8000' + img.image"
        />
      </div>

      <button @click="selectedPost = null" class="buttonBack">Back</button>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  padding: 0 16px 24px;
  box-sizing: border-box;
}

.buttonBack {
  display: inline-block;
  padding: 12px 24px;
  font-family: "Inter", sans-serif; /* Professional sans-serif font */
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 6px; /* Smooth, modern rounding */
  margin: 1rem;
  /* Colors & Depth */
  background-color: #007bff;
  color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  /* Smooth interaction */
  transition: all 0.3s ease;
}

.buttonBack:hover {
  background-color: #0056b3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-1px);
}

.buttonBack:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.buttonBack:focus {
  outline: 3px solid rgba(0, 123, 255, 0.4);
  outline-offset: 2px;
}

.card {
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-radius: 14px;
  overflow: hidden;
  padding: 12px;
  cursor: pointer;
  box-shadow:
    0 1px 2px rgba(15, 23, 42, 0.06),
    0 8px 24px rgba(15, 23, 42, 0.08);
  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    border-color 160ms ease;
}

.card:hover {
  transform: translateY(-2px);
  border-color: rgba(15, 23, 42, 0.18);
  box-shadow:
    0 2px 6px rgba(15, 23, 42, 0.08),
    0 14px 40px rgba(15, 23, 42, 0.12);
}

.card:active {
  transform: translateY(-1px);
}

.card:focus-visible {
  outline: 3px solid rgba(0, 123, 255, 0.35);
  outline-offset: 3px;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  display: block;
  background: #f1f5f9;
}

.card h3 {
  margin: 12px 4px 4px;
  font-size: 16px;
  line-height: 1.35;
  font-weight: 650;
  letter-spacing: -0.2px;
  color: #0f172a;
  text-align: left;
}

.gallery {
  margin-top: 20px;
}

.images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 10px;
  width: 100%;
}

.images img {
  width: 100%;
  max-width: 400px;
  height: 250px;
  object-fit: cover;
}
</style>
