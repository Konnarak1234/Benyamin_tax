<template>
  <section class="about-section">
  <div class="about-container">
    <div class="about-content">
      <div class="about-image">
        <img src="../assets/angkorwat.jpg" alt="About us">
        <div class="image-border"></div>
      </div>
      <div class="about-text">
        <p><strong>GIANTBROTHER ADVISORY CO., LTD</strong> s the one of professional accounting firm, business registration, tax agent & accounting software company in Cambodia, Our firm has been providing outstanding service to our clients because of our dedication to three underlying principles: professionalism, responsiveness, and quality.</p>
        <p>A big part of that value is our legendary customer care because we know what a difference a top-notch accounting specialist makes in your business experience. That is why we devote substantial training and resources developing a team of the best accounting specialists to serve our clients.</p>
        <p>We provide full-fledged professional services including accounting services, tax services, accounting software (Xero Cloud Accounting, QuickBooks, Sage 50, QNE Business Accounting) and business advisory and all kinds of business registration & trademarks registration.</p>
      </div>
    </div>

    <div class="info-box">
      <div class="info-column">
        <h3>Who we are</h3>
        <p>We are one of the professional accounting firm & accounting software company in Cambodia...</p>

        <h3>Our Vision</h3>
        <p>"To Deliver the Highest Level of Professional Services with Digital Solutions to Our Clients".</p>
      </div>

      <div class="info-column">
        <h3>Our Services</h3>
        <p>We offer a full spectrum of business registration, accounting services, tax service, and accounting software designed to create efficient, cost-effective answers...</p>

        <h3>Our Mission</h3>
        <p>"Be the Well-Recognized Business Advisory Company in Cambodia".</p>
      </div>
    </div>
  </div>
</section>

</template>

<script>
export default {

}
</script>

<style>
.about-section {
  background: #f7f7f7;
  padding: 40px 20px;
}

.about-container {
  max-width: 1200px;
  margin: auto;
  background: #fff;
  padding: 40px;
}

.about-content {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: flex-start;
}

.about-image {
  position: relative;
  max-width: 500px;
  /* flex: 1; */
}

.about-image img {
  width: 100%;
  display: block;
  border: 4px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index:2;
}

.image-border{
  bottom: -10px;
  border-bottom: 6px solid #ffb703;
  z-index: -1;
}

.about-text {
  flex: 2;
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  text-align: left;
}

.about-text strong {
  font-size: 16px;
}

.info-box {
  display: flex;
  flex-wrap: wrap;
  background: #111c26;
  color: #fff;
  padding: 30px;
  margin-top: 40px;
  gap: 30px;
}

.info-column {
  flex: 1;
  min-width: 250px;
  text-align: left;
}

.info-column h3 {
  color: #ffb703;
  margin-bottom: 10px;
  font-size: 18px;
}

.info-column p {
  font-size: 14px;
  line-height: 1.6;
  color: #ddd;
}

@media(max-width: 768px){
  .about-content{
    flex-direction: column;
  }
}
</style>