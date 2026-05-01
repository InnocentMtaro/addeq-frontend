<template>
  <div class="project-detail-page">
    <div class="container py-5">
      <h2 class="text-center mb-4">{{ project.title }}</h2>
      <p class="text-center mb-5">{{ project.description }}</p>

      <div class="row g-4">
        <div v-for="(photo, index) in project.photos" :key="index" class="col-md-4">
          <div class="card shadow-sm">
            <img :src="photo" class="card-img-top" :alt="project.title + ' photo ' + (index + 1)" />
          </div>
        </div>
      </div>

      <div class="text-center mt-5">
        <router-link to="/#projects" class="btn btn-primary">Back to Projects</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

// Import project photos
import project1_1 from '@/assets/project1-1.jpg'
import project1_2 from '@/assets/project1-2.jpg'
import project1_3 from '@/assets/project1-3.jpg'
import project2_1 from '@/assets/project2-1.jpg'
import project2_2 from '@/assets/project2-2.jpg'
import project2_3 from '@/assets/project2-3.jpg'
import project3_1 from '@/assets/project3-1.jpg'
import project3_2 from '@/assets/project3-2.jpg'
import project3_3 from '@/assets/project3-3.jpg'

const projectsData = [
  { id: 1, title: 'Project One', description: 'Detailed description for Project One.', photos: [project1_1, project1_2, project1_3] },
  { id: 2, title: 'Project Two', description: 'Detailed description for Project Two.', photos: [project2_1, project2_2, project2_3] },
  { id: 3, title: 'Project Three', description: 'Detailed description for Project Three.', photos: [project3_1, project3_2, project3_3] },
]

const route = useRoute()
const projectId = parseInt(route.params.id)
const project = projectsData.find(p => p.id === projectId) || { title: 'Project Not Found', description: 'No details available.', photos: [] }
</script>

<style scoped>
.project-detail-page { min-height: 100vh; padding-top: 80px; }
.card img { height: 250px; object-fit: cover; border-radius: 0.5rem; }
</style>
