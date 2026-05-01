<template>
  <section class="projects-section">
    <div class="container">
      <h2 class="text-center mb-5">Our Projects</h2>

      <div class="row g-4">
        <div v-for="project in projects" :key="project.id" class="col-md-4">
          <div class="card h-100 shadow-sm project-card" @click="goToProject(project.id)">
            <img :src="project.image" class="card-img-top" :alt="project.title" />
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.shortDescription }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

// Import images for Vite
import project1Img from '@/assets/project1-1.jpg'
import project2Img from '@/assets/project2-1.jpg'
import project3Img from '@/assets/project3-1.jpg'

const router = useRouter()

const projects = [
  { id: 1, title: 'Project One', shortDescription: 'Short description of project one', image: project1Img },
  { id: 2, title: 'Project Two', shortDescription: 'Short description of project two', image: project2Img },
  { id: 3, title: 'Project Three', shortDescription: 'Short description of project three', image: project3Img },
]

function goToProject(id) {
  router.push(`/projects/${id}`)
}
</script>

<style scoped>
.projects-section { padding: 80px 0; }
.project-card { cursor: pointer; transition: transform 0.3s, box-shadow 0.3s; }
.project-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.2); }
.card-img-top { height: 200px; object-fit: cover; }
</style>
