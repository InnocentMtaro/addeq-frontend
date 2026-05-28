<template>
  <div class="container py-5">
    <h2 class="text-center mb-5 fw-bold">📞 Contact Us</h2>
    <div class="row g-4">
      <!-- Email -->
      <div class="col-md-4">
        <div class="card contact-card text-center h-100 shadow-lg border-0">
          <div class="card-body">
            <i class="bi bi-envelope-fill icon"></i>
            <h5 class="card-title mt-3">Email</h5>
            <p class="card-text text-muted">info@addeq.com</p>
          </div>
        </div>
      </div>
      <!-- Address -->
      <div class="col-md-4">
        <div class="card contact-card text-center h-100 shadow-lg border-0">
          <div class="card-body">
            <i class="bi bi-geo-alt-fill icon"></i>
            <h5 class="card-title mt-3">Address</h5>
            <p class="card-text text-muted">
              Rufungira, Sam Nujoma Road, Dar es Salaam, Tanzania
            </p>
          </div>
        </div>
      </div>
      <!-- Phone -->
      <div class="col-md-4">
        <div class="card contact-card text-center h-100 shadow-lg border-0">
          <div class="card-body">
            <i class="bi bi-telephone-fill icon"></i>
            <h5 class="card-title mt-3">Phone</h5>
            <p class="card-text text-muted">+255 700 123 456</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Form and Map -->
    <div class="row mt-5">
      <!-- Form -->
      <div class="col-md-6">
        <div class="card shadow-lg border-0 p-4">
          <h4 class="fw-bold mb-3">Send Us a Message</h4>
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="name" class="form-label">Full Name</label>
              <input
                v-model="full_name"
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email Address</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="subject" class="form-label">Subject</label>
              <input
                v-model="subject"
                type="text"
                class="form-control"
                id="subject"
                placeholder="Enter subject"
                required
              />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea
                v-model="message"
                class="form-control"
                id="message"
                rows="4"
                placeholder="Type your message..."
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100">Submit</button>
          </form>

          <p v-if="successMessage" style="color: green">
            {{ successMessage }}
          </p>

          <p v-if="errorMessage" style="color: red">
            {{ errorMessage }}
          </p>
        </div>
      </div>

      <!-- Google Map -->
      <div class="col-md-6">
        <div class="card shadow-lg border-0">
          <iframe
            src="https://www.google.com/maps?q=-6.768028,39.225917&z=17&output=embed"
            width="100%"
            height="400"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const full_name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

const successMessage = ref("");
const errorMessage = ref("");

//submit function

const submitForm = async () => {
  successMessage.value = "";
  errorMessage.value = "";

  try {
    const response = await axios.post("https://addeq-backend-wzdx.vercel.app/api/contact/", {
      full_name: full_name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    });

    successMessage.value = "Message sent successfully!";

    // Clear form
    full_name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  } catch (error) {
    errorMessage.value = "Failed to send message.";

    console.error(error.response?.data || error);
  }
};
</script>

<style scoped>
.contact-card {
  border-radius: 1rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
}

.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.icon {
  font-size: 2.5rem;
  color: #007bff;
}
</style>
