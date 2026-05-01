<template>
  <div>
    <!-- Hero Section -->
    <section
      class="hero-section d-flex align-items-center text-white text-center"
    >
      <div class="container hero-content">
        <h1 class="display-3 fw-bold">
          <span class="hero-word animate-loop me-4" style="--delay: 0s">
            Welcome
          </span>

          <span class="hero-word animate-loop me-4" style="--delay: 0.3s">
            to
          </span>

          <span class="hero-word animate-loop" style="--delay: 0.6s">
            ADDEQ
          </span>
        </h1>

        <p class="lead mb-4 animate-fade delay-1">
          Innovative Building & Interior Design Solutions
        </p>

        <router-link
          to="/#services"
          class="btn btn-lg btn-primary px-4 shadow animate-fade delay-2"
        >
          Explore Our Services
        </router-link>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="services-section py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold">Our Core Values</h2>

          <p class="text-muted">
            High quality. Timely delivery. Exceptional design.
          </p>
        </div>

        <!-- Scrolling Cards -->
        <div class="scroll-wrapper">
          <div class="scroll-inner">
            <!-- Original Cards -->
            <div
              class="service-card-wrapper"
              v-for="(service, index) in services"
              :key="index"
            >
              <div class="card h-100 shadow-sm service-card">
                <div class="card-img-wrapper" v-if="service.image">
                  <img
                    :src="service.image"
                    class="card-img-top"
                    :alt="service.title"
                  />
                </div>

                <div class="card-body text-center">
                  <h5 class="card-title fw-bold">
                    {{ service.title }}
                  </h5>

                  <p class="card-text">
                    {{ service.description }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Duplicate Cards -->
            <div
              class="service-card-wrapper"
              v-for="(service, index) in services"
              :key="'dup-' + index"
            >
              <div class="card h-100 shadow-sm service-card">
                <div class="card-img-wrapper" v-if="service.image">
                  <img
                    :src="service.image"
                    class="card-img-top"
                    :alt="service.title"
                  />
                </div>

                <div class="card-body text-center">
                  <h5 class="card-title fw-bold">
                    {{ service.title }}
                  </h5>

                  <p class="card-text">
                    {{ service.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

/* IMPORT IMAGES */
import kitchen from "../assets/kitchen.jpg";
import architecture1 from "../assets/architecture1.jpg";
import renovation from "../assets/renovation.jpg";
import landscape1 from "../assets/landscape1.jpg";
import projectManagement from "../assets/ProjectManagement.jpg";
import consultancy from "../assets/Consultancy.jpg";

export default {
  name: "Home",

  data() {
    return {
      services: [
        {
          title: "Interior Design",
          description:
            "Creative and functional interiors tailored to your taste.",
          image: kitchen,
        },

        {
          title: "Architecture",
          description:
            "Modern architectural designs for commercial and residential spaces.",
          image: architecture1,
        },

        {
          title: "Renovation",
          description:
            "Transform your old spaces into something new and stunning.",
          image: renovation,
        },

        {
          title: "Landscape Design",
          description: "Enhancing outdoor spaces with creativity and harmony.",
          image: landscape1,
        },

        {
          title: "Project Management",
          description:
            "Efficient planning, execution, and delivery of construction projects.",
          image: projectManagement,
        },

        {
          title: "Consultancy",
          description:
            "Expert advice for your architectural and design decisions.",
          image: consultancy,
        },
      ],
    };
  },

  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
    url("../assets/interiorphoto.jpg") center center/cover repeat;

  height: 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content {
  z-index: 2;
}

.hero-section h1 {
  letter-spacing: 2px;
}

.hero-section p {
  font-size: 1.25rem;
}

/* Animate each word individually */
.hero-word {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);

  animation: fadeUpWord 0.8s forwards;
  animation-delay: var(--delay);
}

@keyframes fadeUpWord {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Existing Fade Animation */
.animate-fade {
  opacity: 0;
  transform: translateY(20px);

  animation: fadeUp 0.8s forwards;
}

.animate-fade.delay-1 {
  animation-delay: 0.3s;
}

.animate-fade.delay-2 {
  animation-delay: 0.6s;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Services Card Scroll */
.scroll-wrapper {
  overflow: hidden;
  width: 100%;
}

.scroll-inner {
  display: flex;
  width: max-content;

  animation: scrollLeft 20s linear infinite;
}

.scroll-wrapper:hover .scroll-inner {
  animation-play-state: paused;
}

.service-card-wrapper {
  flex: 0 0 auto;
  margin-right: 20px;
  width: 250px;
}

.service-card {
  border-radius: 1rem;
  overflow: hidden;

  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.card-img-wrapper {
  overflow: hidden;
}

.card-img-wrapper img {
  transition: transform 0.4s ease;
}

.service-card:hover img {
  transform: scale(1.1);
}

@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

/* Hero Word Animation */
.hero-word {
  display: inline-block;
  opacity: 0;

  transform: translateY(20px);

  animation: slideInOut 3s ease-in-out infinite;
  animation-delay: var(--delay, 0s);
}

@keyframes slideInOut {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  10% {
    opacity: 1;
    transform: translateY(0);
  }

  40% {
    opacity: 1;
    transform: translateY(0);
  }

  60% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 0;
    transform: translateY(20px);
  }
}
</style>
