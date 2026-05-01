<script setup>
import Navbar from "./components/navbar.vue";
import Footer from "./components/Footer.vue";

// Page sections
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import Testimonials from "./components/Testimonials.vue";
import WhyChooseUs from "./components/WhyChooseUs.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import ProjectAlbums from "./components/ProjectAlbums.vue";
</script>

<template>
  <div class="app">
    <navbar />

    <main>
      <!-- One-page sections -->
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="whychooseus"><WhyChooseUs /></section>
      <!--<section id="projects"><Projects /></section>-->
      <section id="projectAlbums"><ProjectAlbums /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><Contact /></section>

      <!-- Router view for special pages like ProjectDetail -->
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  padding-top: 70px;
  padding-bottom: 20px;
}

section {
  scroll-margin-top: 80px;
}
</style>
