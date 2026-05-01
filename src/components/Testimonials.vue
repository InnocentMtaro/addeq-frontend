<template>
  <div class="bg-light py-5">
    <div class="container">
      <!-- Section Heading -->
      <h2 class="text-center mb-5 display-6 fw-bold text-primary">
        What Our Clients Say
      </h2>

      <div class="row g-4">
        <div
          class="col-md-4"
          v-for="(testimonial, index) in testimonials"
          :key="index"
        >
          <div
            class="card h-100 shadow-lg border-0 rounded-4 p-4 testimonial-card"
          >
            <!-- Client image -->
            <div class="text-center mb-3">
              <img
                :src="testimonial.image"
                alt="Client"
                class="rounded-circle shadow"
                width="80"
                height="80"
              />
            </div>
            <div class="card-body text-center">
              <p class="card-text fst-italic">
                “{{ testimonial.quote }}”
              </p>
              <h6 class="mt-3 fw-bold text-dark">- {{ testimonial.author }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import innocentimage from '@/assets/Innocent.JPG' //********************CONTINUE FROM HERE ***********************
export default {
  name: "Testimonials",
  data() {
    return {
      testimonials: [
        {
          quote: "ADDEQ exceeded our expectations! I truly received much more than what I expected!",
          author: "Innocent M.",
          image: innocentimage, // imported at top
        },
        {
          quote: "Fast, reliable, and professional service. Our home is currently under construction, and the service from ADDEQ has been phenomenal.",
          author: "Flora Runana",
          image: "https://via.placeholder.com/80",
        },
        {
          quote: "Truly a partner you can count on.",
          author: "David Runana",
          image: "https://via.placeholder.com/80",
        },
      ],
    };
  },
};
</script>

<style scoped>
.testimonial-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.testimonial-card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.15);
}
</style>
