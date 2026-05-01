<template>
  <footer class="bg-dark text-light pt-5 pb-3 mt-5">
    <div class="container">
      <div class="row">

        <!-- Company Info -->
        <div class="col-md-4 mb-4">
          <h5 class="fw-bold">ADDEQ</h5>
          <p>
            Building & Interior Design Contractor<br />
            Delivering quality and creativity in every project.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="col-md-4 mb-4">
          <h5 class="fw-bold">Quick Links</h5>
          <ul class="list-unstyled">
            <li><a href="/" class="text-light text-decoration-none">Home</a></li>
            <li><a href="/services" class="text-light text-decoration-none">Services</a></li>
            <li><a href="/about" class="text-light text-decoration-none">About Us</a></li>
            <li><a href="/contact" class="text-light text-decoration-none">Contact</a></li>
          </ul>
        </div>

        <!-- Contact & Social -->
        <div class="col-md-4 mb-4">
          <h5 class="fw-bold">Get in Touch</h5>
          <p>Email: <a href="mailto:addeq@example.com" class="text-light">addeq@example.com</a></p>
          <p>Phone: <a href="tel:+255700000000" class="text-light">+255 767 123 867</a></p>

          <h6 class="mt-3">Follow Us</h6>
          <a href="https://facebook.com" target="_blank" class="me-2 text-light"><i class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/d_busanya?igsh=ajZzYnJseWJmNTFq" target="_blank" class="me-2 text-light"><i class="bi bi-instagram"></i></a>
          <a href="https://twitter.com" target="_blank" class="me-2 text-light"><i class="bi bi-twitter"></i></a>
          <a href="https://linkedin.com" target="_blank" class="text-light"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>

      <hr class="border-light" />

      <!-- Creator Info -->
      <div class="text-center small">
        <p class="mb-0">
          &copy; {{ new Date().getFullYear() }} ADDEQ. All Rights Reserved. <br />
          Website created by <strong>Innocent Mtaro</strong> | 
          Email: <a href="mailto:innocentmtaro2020@gmail.com" class="text-light">innocentmtaro2020@gmail.com</a> | 
          Phone: <a href="tel:+255764737521" class="text-light">0764 737 521</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer a:hover {
  text-decoration: underline;
}
</style>
