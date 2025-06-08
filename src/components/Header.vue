<template>

<div class="header-bar">
  <!-- Normal for large screen and mobile screen-->
  <div class="container mobile-container">
    <div class="logo mobile-logo">
      <router-link to='/' @click="handlePageName('Home page')">
        <img src="../assets/logo.png" alt="">
      </router-link>
      
      <router-link to='/' @click="handlePageName('Home page')">
        <h3>BENYAMIN</h3>
      </router-link>
      
    </div>
    <!-- Normal for large screen -->
    <div class="contact-info desktop-only">
      <div class="phone">
        <div class="phone-content">
          <span class="material-symbols-outlined">phone_iphone</span>
          <div class="phone-info">
            <span>Call Us Today</span><br><strong>+85598481115</strong>
          </div>
        </div>       
      </div>
      <div class="email">
        <div class="email-content">
          <span class="material-symbols-outlined">mail</span>
          <div class="mail-info">
            <span>Email Us Now</span><br><strong>boryuk@gmail.com</strong>
          </div>
        </div>
      </div>
    </div>

    <!-- Menu icon visible on mobile -->
    <div class="menu-icon" @click="toggleSidebar">
      <span class="material-symbols-outlined">menu</span>
    </div> 

  </div>
</div>

<!--desktop only view-->
<header class="navbar desktop-only">
  <div class="container">
    <!-- Normal nav for large screen -->
    <nav class="nav-links">
      <router-link to='/' class="home-nav-button" @click="handlePageName('Home page')">HOME</router-link>
      <router-link to='/about' @click="handlePageName('About Page')">ABOUT</router-link>
      <!-- Services Dropdown -->
      <div class="dropdown">
        <div class="dropdown-toggle">
          <router-link to="/service" @click="handlePageName('Service Page')">SERVICE</router-link> 
        </div>
        <div class="dropdown-menu">
          <router-link :to='{name: "service1"}' @click="handlePageName('Sevices - Business Registration & Compilance')">BUSINESS REGISTRATION & COMPILANCE</router-link>
          <hr>
          <router-link :to='{name: "service2"}' @click="handlePageName('Sevices - TAX Services')">TAX SERVICE</router-link>
          <hr>
          <router-link :to='{name: "service3"}' @click="handlePageName('Sevices - Accounting & Bookkeeping Services')">ACCOUNTING & BOOKKEPPING SERVICE</router-link>
          <hr>  
          <router-link :to='{name: "service4"}' @click="handlePageName('Sevices - Trademark & IP service')">TRADEMARK & IP SERVICES</router-link>
        </div>
      </div>
      <!-- Software Dropdown -->
      <!-- <div class="dropdown">
        <div class="dropdown-toggle">Software</div>
        <div class="dropdown-menu">
          <router-link to='/software/erp' @click="handlePageName('Software - ERP Solutions')">ERP Solutions</router-link>
          <router-link to='/software/crm' @click="handlePageName('Software - CRM Systems')">CRM Systems</router-link>
        </div>
      </div> -->
      <router-link :to="{name:'blog'}"  @click="handlePageName('Blog Page')">BLOG</router-link>
      <router-link :to="{name:'contact'}" @click="handlePageName('Contact Page')">CONTACT</router-link>
    </nav>
    <router-link :to="{name: 'contact'}"><button class="cta-button desktop-nav">Inquiry Today</button></router-link>
  </div>
  <h1 class="navbar-page-title">{{ pagename }}</h1>
</header>


  <!-- Sidebar on small screens -->
  <transition name="slide">
    <div class="mobile-sidebar" v-if="showSidebar">
      <nav class="mobile-nav-links">
        <!-- side bar close icon-->
        <div class="mobile-sidebar-close-icon">
          <span class="material-symbols-outlined" @click="toggleSidebar">keyboard_arrow_right</span>
          </div>
        <router-link to='/' @click="toggleSidebar">HOME</router-link>
        <router-link to='/about' @click="toggleSidebar">ABOUT</router-link>
        <!-- Services Dropdown -->
        <div class="mobile-dropdown-item">
          <div class="mobile-dropdown-toggle" @click="toggleServicesDropdown">
            <div class="mobile-dropdown-toggle-content" >
              <router-link to="/service" @click="toggleSidebar">SERVICE</router-link>
              <span class="material-symbols-outlined" v-if="!showServicesDropdown">keyboard_arrow_down</span>
              <span class="material-symbols-outlined" v-else>keyboard_arrow_up</span>
            </div>      
          </div>
          <div v-show="showServicesDropdown" class="mobile-dropdown-menu">
            <hr>
            <router-link :to="{name: 'service1'}" @click="toggleSidebar">BUSINESS REGISTRATION & COMPILANCE</router-link>
            <hr>
            <router-link :to="{name: 'service2'}" @click="toggleSidebar">TAX SERVICE</router-link>
            <hr>
            <router-link :to="{name: 'service3'}" @click="toggleSidebar">ACCOUNTING & BOOKKEPPING SERVICE</router-link>
            <hr>
            <router-link :to="{name: 'service4'}" @click="toggleSidebar">TRADEMARK & IP SERVICES</router-link>
          </div>
        </div>
        <!-- Software Dropdown -->
         <!-- <div class="mobile-dropdown-item">
          <div class="mobile-dropdown-toggle" @click="toggleSoftwareDropdown">
            <div class="mobile-dropdown-toggle-content">
              Software
              <span class="material-symbols-outlined" v-if="!showSoftwareDropdown">keyboard_arrow_down</span>
              <span class="material-symbols-outlined" v-else>keyboard_arrow_up</span>
            </div>      
          </div>
          <div v-show="showSoftwareDropdown" class="mobile-dropdown-menu">
            <hr>
            <router-link to="/" @click="toggleSidebar">Web Development</router-link>
            <hr>
            <router-link to="/mobile" @click="toggleSidebar">Mobile Apps</router-link>
            <hr>
          </div>
        </div> -->
        <router-link :to="{name:'blog'}" @click="toggleSidebar">BLOG</router-link>
        <router-link :to="{name:'contact'}" @click="toggleSidebar">CONTACT</router-link>
      </nav>
    </div>
  </transition>
  <div class="home-start-line"></div>
</template>

<script>
export default {
props: [ 'pagename' ],
data() {
    return {
      showSidebar: false,
      showServicesDropdown: false,
      showSoftwareDropdown: false
    }
  },
  methods: {
    handlePageName($page){
      this.$emit('clickPage', $page)
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
      this.showServicesDropdown = false;
      this.showSoftwareDropdown = false;
    },
    toggleServicesDropdown() {
    this.showServicesDropdown = !this.showServicesDropdown;
    },
    toggleSoftwareDropdown() {
      this.showSoftwareDropdown = !this.showSoftwareDropdown;
    }
  },
  mounted(){
  },

}
</script>

<style>
.home-start-line{
  padding: 10px 0;
  background: #111c26;
}
/* Outer background bar */
.header-bar {
  background: #0D3B66;
  padding: 10px 0;
}

/* Central container with side spacing */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px; /*Left and right space */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo styling */
.logo{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 80px;
  display: block;
  border-radius: 20px;
  border: 1px solid #111c26;
  margin: 0 10px;
  cursor: pointer;
}


.logo h3{
color: #ffb703;
letter-spacing: 1px;
cursor: pointer;
}

.logo h3:hover{
color: #faa307;
}

/* Contact info styling */

.phone-content{
display: flex;
justify-content: space-between;
align-items: center;
}

.phone-content span,strong{
  cursor: pointer;
}


.phone-content span:hover, strong:hover{
  color: #faa307;
}

.email-content{
display: flex;
justify-content: space-between;
align-items: center;
}

.email-content span{
  cursor: pointer;
}

.email-content span:hover{
  color: #faa307;
}

.contact-info {
  display: flex;
  gap: 40px;
  font-size: 14px;
  color: #eee;
}


.contact-info div {
  text-align: left;
}

.material-symbols-outlined{ /* phone icon */
  color: #B4D6E3;
  font-size: 40px;
}

.phone-info{
  margin: 0 0 0 2px;
}


.mail-info{
  margin: 0 0 0 2px;
}
/* Navbar */

.navbar{
  background: url('../assets/angkorwat.jpg') no-repeat center -400px;
  background-size: cover; /* Or use `contain` to show full image */
  background-repeat: no-repeat;
  height: 30vh; /* Adjust height as needed */
  color: #ddd;
  text-align: center;
}

.navbar-page-title{
  margin-top: 70px;
  color:#ffb703;
}

.navbar .container {
  max-width: 1200px;
  margin: 0 auto;
  background: #111c26;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* drop down nav-bar part*/
.dropdown {
  position: relative;
}


.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: #111c26;
  padding: 10px;
  display: none;
  flex-direction: column;
  min-width: 180px;
  z-index: 10;
  border-radius: 8px;
}

.dropdown-menu a {
  color: #ddd;
  padding: 5px 10px;
  text-decoration: none;
  white-space: nowrap;
}

.dropdown:hover .dropdown-menu {
  display: flex;
}

.dropdown-menu a:hover {
  background: #0D3B66;
  border-radius: 4px;
}

/* General improvements for nav and button */
.nav-links {
  display: flex;
  gap: 0;
  flex-wrap: wrap;
  justify-content: center;

}


.cta-button {
  background: #ffb703;
  color: #111c26;
  border: none;
  margin-right: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.cta-button:hover {
  background: #faa307;
}


/*menu icon for mobile*/
.mobile-sidebar-close-icon{
  text-align: left;
}
.menu-icon {
  display: none;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
}

.mobile-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 220px;
  height: 100vh;
  background: #111c26;
  padding: 20px;
  z-index: 1000;
  box-shadow: -2px 0 10px rgba(0,0,0,0.5);
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mobile-nav-links a {
  border-radius:2px;
  color: #ddd;
  text-decoration: none;
}


/*mobile drop down style*/

.mobile-dropdown-item{
  border-radius:2px;
  color: #ddd;
}

.mobile-dropdown-toggle-content{
  padding-left:20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-dropdown-menu a{
  padding: 6px;
}


.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%); /*move it 100% to the left*/
}

@media(max-width: 1194px){
  .navbar{
    background: url('../assets/angkorwat.jpg') no-repeat center;
    background-size: cover;
  }
}
/* Make container stack vertically on smaller screens */
@media (max-width: 768px) {
  .mobile-logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  }

  .mobile-container{
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  .header-bar .container {
    align-items: center;
    text-align: center;
  }

  .contact-info {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .phone-content, .email-content {
    flex-direction: row;
    justify-content: center;
  }

  .navbar.container {
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }

  .nav-links {
    flex-direction: column;
    gap: 10px;
  }

  .cta-button {
    margin-top: 10px;
    width: 100%;
  }

  .logo img {
    height: 60px;
  }

  .material-symbols-outlined {
    font-size: 30px;
  }

  .menu-icon {
    display: block;
  }

  .desktop-only{ /*when it come to mobile it will display none*/
    display: none;
  }
  

}
</style>