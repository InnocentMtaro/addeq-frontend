<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const posts = ref([]);
const expandedPostId = ref(null);
const expandedImageIndex = ref(null);

const togglePost = (post) => {
  if (expandedPostId.value === post.id) {
    expandedPostId.value = null;
    expandedImageIndex.value = null;
  } else {
    expandedPostId.value = post.id;
    expandedImageIndex.value = null;
  }
};

const toggleImage = (index) => {
  if (expandedImageIndex.value === index) {
    expandedImageIndex.value = null;
  } else {
    expandedImageIndex.value = index;
  }
};

onMounted(async () => {
  try {
    const response = await axios.get("https://addeq-backend-wzdx.vercel.app/api/posts/");
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
        :class="{ expanded: expandedPostId === post.id }"
        @click="togglePost(post)"
      >
        <img :src="post.thumbnail" class="thumbnail" />
        <h3>{{ post.title }}</h3>

        <!-- Additional images, shown only when this card is expanded -->
        <div
          v-if="expandedPostId === post.id && post.images.length > 0"
          class="additional-images"
          @click.stop
        >
          <div
            v-for="(img, index) in post.images"
            :key="index"
            class="image-wrapper"
            :class="{ 'image-expanded': expandedImageIndex === index }"
            @click="toggleImage(index)"
          >
            <img :src="img.image" />
          </div>
        </div>

        <!-- Collapse hint -->
        <div
          v-if="expandedPostId === post.id"
          class="collapse-hint"
          @click.stop="expandedPostId = null; expandedImageIndex = null"
        >
          ▲ Close
        </div>
      </div>
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

.thumbnail {
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

/* Expanded card state */
.card.expanded {
  border-color: rgba(0, 123, 255, 0.35);
  box-shadow:
    0 2px 6px rgba(15, 23, 42, 0.08),
    0 14px 40px rgba(15, 23, 42, 0.15);
}

/* Additional images grid inside the card */
.additional-images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
}

/* Wrapper handles both hover and tap-expanded states */
.image-wrapper {
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  transition: all 200ms ease;
}

/* When tapped on mobile — expands to full card width */
.image-wrapper.image-expanded {
  grid-column: 1 / -1;
}

.image-wrapper img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  display: block;
  transition: transform 250ms ease, box-shadow 250ms ease;
}

/* Expanded image fills more height */
.image-wrapper.image-expanded img {
  height: 260px;
}

/* Desktop hover — smoothly scales image up */
@media (hover: hover) {
  .image-wrapper:hover img {
    transform: scale(1.06);
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.18);
  }
}

/* Collapse hint at the bottom of expanded card */
.collapse-hint {
  margin-top: 12px;
  text-align: center;
  font-size: 12px;
  color: #6b7280;
  padding: 6px;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  cursor: pointer;
  transition: color 160ms ease;
}

.collapse-hint:hover {
  color: #007bff;
}
</style>