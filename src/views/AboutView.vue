<template>
  <section class="about-section">
  <div class="about-container">
    <div class="about-content">
      <div class="about-image">
        <img src="../assets/about.jpg" alt="About us">
        <div class="image-border"></div>
      </div>
      <div class="about-text">
        <p><strong>Welcome to Benyamin Business Co., Ltd.</strong>
        Benyamin Business Co., Ltd. is a trusted provider of professional business services, offering expert solutions in accounting, taxation, business registration, and trademark protection. Our mission is to empower entrepreneurs, startups, and established companies with the tools, insights, and compliance support needed to thrive in today’s competitive marketplace.</p>
        <p>With a strong commitment to accuracy, efficiency, and client success, we take pride in being a one-stop partner for businesses seeking reliable financial and legal support. Whether you're launching a new venture, managing tax obligations, or safeguarding your brand, Benyamin Business Co., Ltd. is here to guide you every step of the way.</p>
        <p>At BBC, we are a dedicated team of finance, legal, and business professionals committed to empowering individuals and businesses through expert guidance and comprehensive support. Specializing in accounting, taxation, business registration, and trademark services, we provide end-to-end solutions tailored to your unique goals.
        With a focus on accuracy, compliance, and strategic growth, we work with startups, SMEs, and established enterprises to simplify complexity and unlock long-term value. Whether you're launching a new business, managing financial obligations, or protecting your brand, our team ensures clarity, confidence, and peace of mind every step of the way.
        Driven by integrity, transparency, and results, BBC is more than a service provider — we are your trusted partner in business success.</p>
      </div>
    </div>

    <div class="info-box">
      <div class="info-column">
        <h3>Who we are</h3>
        <p>we are a dedicated team of finance, legal, and business professionals committed to empowering individuals and businesses through expert guidance and comprehensive support.</p>

        <h3>Our Vision</h3>
        <p>"To be the leading provider of business support services in the region.".</p>
      </div>

      <div class="info-column">
        <h3>Our Services</h3>
        <p>We offer a full spectrum of business registration, accounting services, tax service, and accounting software designed to create efficient, cost-effective answers...</p>

        <h3>Our Mission</h3>
        <p>"To simplify the process of starting and managing a business for our clients while ensuring compliance with legal and financial regulations.".</p>
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