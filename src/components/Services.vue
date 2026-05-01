<template>
  <section class="services-page bg-light">
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="fw-bold">Our Services</h1>
        <p class="text-muted lead mb-0">
          Full-stack construction & interior design solutions — from concept to handover.
        </p>
      </div>

      <!-- Services grid -->
      <div class="row g-4">
        <div
          class="col-lg-4 col-md-6"
          v-for="(svc, i) in services"
          :key="svc.title"
        >
          <div
            class="card service-card h-100 shadow-lg border-0 rounded-4 p-4"
            :style="{ animationDelay: (i * 0.15) + 's' }"
          >
            <!-- icon -->
            <div class="icon-circle mx-auto mb-3">
              <i :class="['bi', svc.icon]"></i>
            </div>

            <div class="card-body text-center">
              <h5 class="fw-bold text-dark mb-2">{{ svc.title }}</h5>
              <p class="text-muted mb-3">{{ svc.desc }}</p>

              <ul class="list-unstyled text-start small text-muted mb-0">
                <li v-for="(p, idx) in svc.points" :key="idx" class="mb-1">
                  <i class="bi bi-check2-circle me-2"></i>{{ p }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Process / CTA -->
      <div class="row align-items-center mt-5 g-4">
        <div class="col-lg-7">
          <div class="card border-0 shadow-lg rounded-4 p-4 process-card">
            <h4 class="fw-bold mb-3">How We Work</h4>
            <ol class="timeline ps-3 mb-0">
              <li><span>Consultation & Site Assessment</span></li>
              <li><span>Design & 3D Visualization</span></li>
              <li><span>Budgeting & Transparent Quotation</span></li>
              <li><span>Execution with Safety & Quality Control</span></li>
              <li><span>Handover & Post-Project Support</span></li>
            </ol>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="cta-box rounded-4 shadow-lg p-4 text-center text-white">
            <h4 class="fw-bold mb-2">Ready to build something amazing?</h4>
            <p class="mb-4">Talk to our team and get a tailored proposal.</p>
            <router-link to="/contact" class="btn btn-light btn-lg">
              Get a Free Consultation
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      services: [
        {
          title: "Architectural Design",
          icon: "bi-building",
          desc:
            "Contemporary, functional designs aligned with your goals and site context.",
          points: [
            "Concept & schematic design",
            "Permit & construction drawings",
            "Sustainable design guidance",
          ],
        },
        {
          title: "Interior Design",
          icon: "bi-palette",
          desc:
            "Aesthetic, ergonomic interiors that balance style, comfort, and durability.",
          points: [
            "Mood boards & material specs",
            "Space planning & joinery details",
            "Lighting & finishes selection",
          ],
        },
        {
          title: "Renovations & Fit-outs",
          icon: "bi-hammer",
          desc:
            "Transform existing spaces with minimal disruption and maximum impact.",
          points: [
            "Structural & cosmetic upgrades",
            "Commercial & residential fit-outs",
            "Value engineering",
          ],
        },
        {
          title: "Project Management",
          icon: "bi-kanban",
          desc:
            "On-time, on-budget delivery with rigorous coordination and reporting.",
          points: [
            "Scheduling & procurement",
            "Site supervision & QA/QC",
            "Cost tracking & reports",
          ],
        },
        {
          title: "3D Visualization & BIM",
          icon: "bi-cpu",
          desc:
            "See it before we build it — precise visuals for clarity and confidence.",
          points: [
            "3D renders & animations",
            "BIM coordination",
            "Clash detection",
          ],
        },
        {
          title: "MEP & Smart Upgrades",
          icon: "bi-lightning-charge",
          desc:
            "Efficient mechanical, electrical & plumbing with smart integrations.",
          points: [
            "Energy-efficient systems",
            "Smart home/office solutions",
            "Compliance & commissioning",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.services-page {
  min-height: 100vh;
}

/* Card look & motion */
.service-card {
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  transform: translateY(18px);
  opacity: 0;
  animation: fadeUp 0.8s ease forwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.18);
}

/* Icon circle (consistent with your WhyChooseUs style) */
.icon-circle {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: #f1f5f9;
  display: grid;
  place-items: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}
.icon-circle i {
  font-size: 2rem;
  color: #0d6efd;
}

/* Reveal animation */
@keyframes fadeUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Process timeline */
.process-card {
  background: #fff;
}
.timeline {
  counter-reset: step;
}
.timeline li {
  list-style: none;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  padding-left: 8px;
}
.timeline li::before {
  counter-increment: step;
  content: counter(step);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #0d6efd;
  color: #fff;
  font-weight: 700;
  flex: 0 0 32px;
  box-shadow: 0 6px 14px rgba(13, 110, 253, 0.35);
}
.timeline span {
  flex: 1;
}

/* CTA box on right */
.cta-box {
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  border: none;
}
</style>
