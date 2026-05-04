<template>
  <div class="bg-light py-5">
    <div class="container">
      <!-- Section Heading -->
      <h2 class="text-center mb-5 display-6 fw-bold text-primary">
        Why Choose ADDEQ
      </h2>

      <div class="row g-4">
        <div
          class="col-md-4 col-sm-6"
          v-for="(item, index) in reasons"
          :key="index"
        >
          <div
            class="card shadow-lg border-0 h-100 text-center rounded-4 p-4 reason-card animate-card"
            :style="{ animationDelay: index * 0.2 + 's' }"
          >
            <!-- Circular Icon Slot -->
            <div class="icon-circle mx-auto mb-3">
              <img :src="item.icon" alt="icon" class="img-fluid" />
            </div>

            <div class="card-body">
              <h5 class="card-title fw-bold text-dark">{{ item.title }}</h5>
              <p class="card-text text-muted">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import safetyicon from "../assets/icons/safety.svg";
import pricingicon from "../assets/icons/pricing.svg";
import fasticon from "../assets/icons/fast.svg";
import detailicon from "../assets/icons/detail.svg";
import designicon from "../assets/icons/design.svg";
import teamicon from "../assets/icons/team.svg";

export default {
  name: "WhyChooseUs",
  data() {
    return {
      reasons: [
        {
          title: "Safety and Security",
          description:
            "We prioritize the safety of our workers, clients, and projects with the highest standards of compliance.",
          icon: safetyicon,
        },
        {
          title: "Transparent Pricing",
          description:
            "We provide clear, upfront pricing with no hidden fees — ensuring trust and accountability.",
          icon: pricingicon,
        },
        {
          title: "Fast and Efficient Delivery",
          description:
            "Our team works efficiently to deliver on time without compromising on quality or craftsmanship.",
          icon: fasticon,
        },
        {
          title: "Attention to Detail",
          description:
            "From planning to finishing touches, every detail is handled with precision and care.",
          icon: detailicon,
        },
        {
          title: "Innovative Designs",
          description:
            "We combine creativity with functionality to deliver modern and unique construction & interior solutions.",
          icon: designicon,
        },
        {
          title: "Experienced Professionals",
          description:
            "Our skilled architects, engineers, and craftsmen bring years of expertise to every project.",
          icon: teamicon,
        },
      ],
    };
  },
};
</script>

<style scoped>
.reason-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.reason-card:hover {
  transform: translateY(-8px);
  box-shadow:
    0px 12px 30px rgba(0, 0, 0, 0.15),
    0 0 0 2px rgba(13, 110, 253, 0.3);
}

.icon-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.icon-circle img {
  width: 50%;
  height: 50%;
  object-fit: contain;
  transition:
    transform 0.3s ease,
    filter 0.3s ease;
}

/* On card hover change the icon color */

.reason-card:hover .icon-circle img {
  transform: scale(1.2);
  filter: brightness(0) saturate(100%) invert(31%) sepia(97%) saturate(2084%)
    hue-rotate(199deg) brightness(95%) contrast(97%);
}

/* === New Animation for Load-in Effect === */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-card {
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}
</style>
