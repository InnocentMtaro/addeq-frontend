<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
    <div class="container-fluid">
      <router-link to="/#home" class="navbar-brand">
        <img src="@/assets/New_Addeq_Logo_2.png" alt="ADDEQ Logo" height="50" />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/#home" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/#about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/#services" class="nav-link">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/#whychooseus" class="nav-link"
              >Why Choose Us</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/#projectAlbums" class="nav-link"
              >Projects</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/#testimonials" class="nav-link"
              >Testimonials</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/#contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
.custom-navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  /*background: rgba(255, 255, 255, 0.08);*/
  background: rgba(0, 0, 0, 0.3);
  color: white;
  backdrop-filter: blur(15px) saturate(140%);
  -webkit-backdrop-filter: blur(10px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1000;
}
</style>
