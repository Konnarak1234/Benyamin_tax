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
                <h3>BENYAMIN</h3>
              </router-link>
              
            </div>
            <label class="footer-container-address" >
              Adress: No. 1588 St. 610K-3, Phum Krang Angkrorng, Sangkat Krang Thnung, Khan Sen Sok, Phnom Penh, Cambodia.
            </label>
            <ul class="footer-container-media">
              <li>
                <a href="https://www.facebook.com/share/p/16mL3UHECz/?mibextid=wwXIfr">
                  <img src="https://img.icons8.com/ios-filled/50/facebook--v1.png" alt="facebook--v1"/>
                </a>
              </li>
              <li>
                <a href="https://t.me/BoryUk777">
                  <img src="https://img.icons8.com/ios-filled/50/telegram.png" alt="telegram"/>
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/qr/IABTQACGSL42I1?autoload=1&app_absent=0">
                  <img src="https://img.icons8.com/ios-filled/50/whatsapp--v1.png" alt="whatsapp--v1"/>
                </a>
              </li>
              <li>
                <a href="https://www.wechat.com">
                  <img src="https://img.icons8.com/sf-black-filled/64/weixing.png" alt="weixing"/>
                </a>
              </li>
            </ul>
        </div>
      </div>

      <div class="footer-section">
        <h4 >Services</h4>
        <router-link :to="{name: 'service1'}"><p>Business Registration & Compliance</p></router-link>
        <div class="footer-spacing"></div>
        <router-link :to="{name: 'service2'}"><p>Taxation Service</p></router-link>
        <div class="footer-spacing"></div>
        <router-link :to="{name: 'service3'}"><p>Accounting & Bookkeeping</p></router-link>
        <div class="footer-spacing"></div>
        <router-link :to="{name: 'service4'}"><p>Trademark & IP Services</p></router-link>
      </div>

      <div class="footer-section">
        <router-link :to="{name: 'contact'}"><h4>Contact</h4></router-link>
        <p>Phone: +85598481115</p>
        <p>Email: boryuk@gmail.com</p>
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
.footer-spacing{
  padding: 4px 0;
}
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
  border-radius: 20px;
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
  text-decoration: none;
}


.footer-section a:hover {
  color: #ffb703;
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