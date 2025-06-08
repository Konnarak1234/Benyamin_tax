<template>
    <div class="sidebar">
      <div class="box">
        <div class="highlight-bar"><span>Accounting Services</span></div>
        <ul>
          <li :class="{activeService: this.service === 1}">
            <router-link :to="{name: 'service1'}">
              <span class="material-symbols-outlined"  @click="toggleService('Service - Business Registration & Compilance')">article</span>
            </router-link>
            Business Registration & Compliance
          </li>
          <li :class="{activeService: this.service === 2}">
            <router-link :to="{name: 'service2'}">
              <span class="material-symbols-outlined"  @click="toggleService('Service - TAX Services')">paid</span>
            </router-link>
            Taxation Service 
          </li>
          <li :class="{activeService: this.service === 3}">
            <router-link :to="{name: 'service3'}">
              <span class="material-symbols-outlined"  @click="toggleService('Service - Accounting & Bookkeeping Services')">calculate</span>
            </router-link >
            Accounting & Bookkeeping 
          </li>
          <li :class="{activeService: this.service === 4}">
            <router-link :to="{name: 'service4'}">
              <span class="material-symbols-outlined"  @click="toggleService('Service - Trademark & IP service')">book_2</span>
            </router-link>
            Trademark & IP Services
          </li>
        </ul>
      </div>

      <div class="box get-in-touch">
        <div class="highlight-bar"><span>Get In Touch</span></div>
        <img src="../assets/angkorwat.jpg" alt="Get in Touch">
        <router-link to="/">Get in Touch</router-link>
      </div>
    </div>
</template>

<script>
export default {
props: [ 'service' ],
methods: {
  toggleService($pagename){
    this.$emit("serviceClick", $pagename)
  }
},
}
</script>

<style>
.service-container {
      display: flex;
      justify-content: center;
      padding: 40px 20px;
      gap: 40px;
}

.sidebar {
    width: 250px;
}
.box {
    background: white;
    padding: 20px;
    margin-bottom: 20px;
}
.box ul{
   list-style: none;
   text-align: left;
}

.box li{
display: flex;
align-items: center;
gap: 8px;
padding: 10px 0;
}

.box .activeService span{
color: #ffb703;
}

.box li span{
color: #111c26;
}

.box li span:hover{
color: #ffb703;
cursor: pointer;
}
.highlight-bar {
    background: #ddd;
    margin-top: 15px;
    position: relative;
    height: 30px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-weight: bold;
    font-size: 12px;
    color: white;
}
.highlight-bar::before {
    content: '';
    background: #ffb703;
    width: 80%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
    z-index: 1;
}
.highlight-bar span {
    z-index: 2;
    position: relative;
}
ul, ol {
    padding-left: 20px;
}
h2 {
    font-size: 16px;
    margin-top: 30px;
}
em {
    font-weight: bold;
}
.get-in-touch img {
    width: 100%;
    margin-bottom: 5px;
}
.get-in-touch a {
    background: #111c26;
    color: #ddd;
    padding: 5px 10px;
    margin-top: 5px;
    cursor: pointer;
    text-decoration: none;
}
.get-in-touch a:hover {
opacity: 0.8;
}

@media (max-width: 768px){
  .service-container{
    flex-direction: column;
    align-items: center;;
  }

  .sidebar{
    width: 390px;
    display: flex;
  }
}
</style>