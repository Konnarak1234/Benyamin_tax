<template>
<div class="home-cta-section">
  <div class="home-cta-left"></div>
  <div class="home-cta-content">
    <div class="home-cta-text">
      <h2>GET YOUR FREE CONSULTANT</h2>
      <p>
        We are an accounting firm that offers Business Registration, Accounting Services & Accounting Software
        for your business from startup to a successful business.
      </p>
    </div>
    <div class="home-cta-button">
      <router-link to="">CONTACT US →</router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
/* CSS */
.home-cta-section {
  display: flex;
  background-color: #111c26;
  color: #ddd;
  height: 200px;
  align-items: center;
  position: relative;
  overflow: hidden;
  font-family: sans-serif;
}

.home-cta-left {
  width: 160px;
  height: 100%;
  background-color: #ffb703;
  clip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%);
  flex-shrink: 0;
}

.home-cta-content {
max-width: 1000px;
margin: 0 auto;
text-align: left;

}


.home-cta-text h2 {
color: #ffb703;
margin: 0;
font-size: 18px;
font-weight: 700;
}

.home-cta-text p {
  font-size: 14px;
  margin: 10px 0 10px;
  line-height: 1.6;
  max-width: 600px;
}

.home-cta-button a {
  display: inline-block;
  color: white;
  border: 2px solid white;
  padding: 10px 20px;
  border-radius: 0 20px 0 0;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
}

.home-cta-button a:hover {
  background-color: white;
  color: #1e2b2e;
}

@media(max-width: 768px){
.home-cta-left{
width: 8px;
margin-right: 20px;
/* clip-path:none; */
}
}
</style>