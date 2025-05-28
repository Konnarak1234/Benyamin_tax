<template>
 <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-section">
        <div class="footer-section-detail">
            <div class="footer-section-logo">
              <router-link to='/' @click="handlePageName('Home page')">
                <img src="@/assets/logo.png" alt="Company Logo" class="footer-logo" />
              </router-link>
              
              <router-link to='/' @click="handlePageName('Home page')">
                <h3>Benyamin</h3>
              </router-link>
              
            </div>
            <label class="footer-container-address" >
              Adress: No. 1588 St. Lum, Sangkat Krang Thnung, Khan Sen Sok, Phnom Penh, Cambodia.
            </label>
            <ul class="footer-container-media">
              <li>
                <a href="https://google.com">
                  <img src="https://img.icons8.com/ios-filled/50/facebook--v1.png" alt="facebook--v1"/>
                </a>
              </li>
              <li>
                <a href="https://google.com">
                  <img src="https://img.icons8.com/ios-filled/50/telegram.png" alt="telegram"/>
                </a>
              </li>
              <li>
                <a href="https://google.com">
                  <img src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/>
                </a>
              </li>
            </ul>
        </div>
      </div>

      <div class="footer-section">
        <h4>Contact</h4>
        <p>Phone: +85598726999</p>
        <p>Email: info@benyamin.com</p>
      </div>

      
      <div class="footer-section">
        <h4 >Developer</h4>
        <a href="" class="footer-section-developer">Ya Hathkonnarak</a>
      </div>
      
    </div>

    
  </footer>
  <div class="footer-sub-container">
    <div>&copy; {{ new Date().getFullYear() }} Benyamin Co. All rights reserved.</div>
  </div>
</template>

<script>
export default {
  methods: {
    handlePageName($page){
      this.$emit('clickPage', $page)
    }
  }
}
</script>

<style>
.site-footer {
  background-color: #0d3b66;
  color: #fff;
  padding: 40px 20px;
  font-size: 14px;
}

.footer-container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-section {
  flex: 1;
  min-width: 200px;
}

.footer-section h4 {
  margin-bottom: 10px;
  color: #ffb703;
}

.footer-section-detail{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer-section-detail div{
  margin-bottom: 10px;
}

.footer-logo {
  height: 60px;
  display: block;
  border-radius: 30px;
  border: 1px solid #111c26;
  margin: 0 10px;
}

.footer-section-logo{
  display: flex;
  align-items: center;
}

.footer-section-logo a{
  text-decoration: none;
}


.footer-section-logo h3{
color: #ffb703;
letter-spacing: 1px;
}

.footer-section-logo h3{
color: #faa307;
}

.footer-container-address{
  line-height: 1.6;
  max-width: 400px;    
  text-align: left;
}

.footer-container-media{
display: flex;
align-items: center;
}

.footer-container-media img{
  margin-left: 4px;
  width: 28px;
  height: auto;
  transition: background-color 0.7s ease;
  
}

.footer-container-media img:hover{
  background-color: #B4D6E3;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 8px;
}

.footer-section a {
  color: #fff;
}


.footer-section a:hover {
  text-decoration: underline;
}

.footer-section-developer{
  cursor: pointer;
  text-decoration: none;
}

.footer-section-developer:hover{
  color: #eee;
}

.footer-sub-container{
  padding: 10px;
  background-color:#111c26;
}

.footer-sub-container div{
  padding: 10px 0;
  color: #ddd;

}

/* Responsive */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-section-detail{
    padding: 0 70px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }


}
</style>