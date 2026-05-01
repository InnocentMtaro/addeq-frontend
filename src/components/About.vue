<template>
  <section class="about-section">
    <!-- Background overlay -->
    <div class="overlay"></div>

    <!-- Content -->
    <div class="container about-content">
      <div class="row justify-content-center text-center text-light mb-5">
        <h1 class="fw-bold display-5 animate-fade">About ADDEQ Construction</h1>
        <p class="lead animate-fade delay-1">
          Founded with a passion for innovation and excellence, 
          <strong>ADDEQ</strong> has grown into a trusted name in the construction and interior design industry. 
          Every structure tells a story — our mission is to craft spaces that inspire and endure.
        </p>
        <p class="lead animate-fade delay-2">
          With years of experience, our architects, engineers, and designers blend creativity with precision to deliver outstanding results. 
          Whether building from the ground up or transforming interiors, we prioritize quality, safety, and customer satisfaction above all else.
        </p>
      </div>

      <!-- Vision & Mission -->
      <div class="row text-dark g-4">
        <div class="col-md-6">
          <div class="card animate-vision h-100 shadow">
            <div class="card-body">
              <h4 class="fw-bold">Our Vision</h4>
              <p class="lead">To inspire spaces that combine creativity, functionality, and sustainability for every client.</p>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card animate-mission h-100 shadow">
            <div class="card-body">
              <h4 class="fw-bold">Our Mission</h4>
              <p class="lead">To deliver high-quality construction and interior design services with integrity, efficiency, and attention to detail.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Values -->
      <div class="row mt-5 text-center">
        <h2 class="fw-bold text-light mb-4 animate-fade">Our Core Values</h2>
        <div class="col-md-4">
          <div class="card p-3 h-100 shadow-sm">
            <h5 class="fw-bold">Innovation</h5>
            <p class="text-muted">We embrace modern technologies and creative solutions to bring unique designs to life.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card p-3 h-100 shadow-sm">
            <h5 class="fw-bold">Quality</h5>
            <p class="text-muted">Every detail matters — we deliver excellence in both construction and design execution.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card p-3 h-100 shadow-sm">
            <h5 class="fw-bold">Sustainability</h5>
            <p class="text-muted">We are committed to eco-friendly practices that respect people, communities, and the environment.</p>
          </div>
        </div>
      </div>

      <!-- Message from Founder -->
      <div class="row justify-content-center mt-5">
        <div class="col-lg-8">
          <div class="card p-4 shadow-lg founder-card">
            <h4 class="fw-bold">Message From Our Founder</h4>
            <p class="lead">
              The quality of human life begins with the living space we inhabit. A good and comfortable living environment is crucial for the development of both body and mind.  
              I call on all building and construction professionals, industry stakeholders, and Tanzanians in general to embrace architecture and interior design for the spiritual, social, and psychological well-being of humanity.
            </p>
            <h6 class="fw-bold text-primary">Dominic Busanya</h6>
            <p class="mb-0 text-muted">Founder & CEO, ADDEQ Construction</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
/* Section styling */
.about-section {
  position: relative;
  background: url("@/assets/New_Addeq_Logo_2.png") no-repeat center center/cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 60px 0;
}

/* Dark overlay */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 15, 15, 0.75);
  z-index: 1;
}

/* Content */
.about-content {
  position: relative;
  z-index: 2;
  color: #fff;
}

/* Cards */
.card {
  border-radius: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

/* Founder card */
.founder-card {
  background: #ffffff;
  border-left: 6px solid #0d6efd;
}

/* Animations */
.animate-fade {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 1s forwards;
}
.animate-fade.delay-1 { animation-delay: 0.3s; }
.animate-fade.delay-2 { animation-delay: 0.6s; }

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Sliding for Vision & Mission */
@keyframes slideInOut {
  0% { opacity: 0; transform: translateX(-100%); }
  20% { opacity: 1; transform: translateX(0); }
  50% { opacity: 1; transform: translateX(0); }
  70% { opacity: 0; transform: translateX(100%); }
  100% { opacity: 0; transform: translateX(100%); }
}
.animate-vision { animation: slideInOut 10s ease-in-out infinite; }
.animate-mission { animation: slideInOut 10s ease-in-out infinite; animation-delay: 5s; }
</style>
