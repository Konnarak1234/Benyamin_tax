<template>
    <div class="sidebar">
      <div class="box">
        <div class="highlight-bar"><span>Accounting Services</span></div>
        <ul>
          <li :class="{activeService: this.blog === 1}">
            <router-link :to="{name: 'service1'}">
              <span class="material-symbols-outlined">article</span>
            </router-link>
            Business Registration
          </li>
          <li :class="{activeService: this.blog === 2}">
            <router-link :to="{name: 'service2'}">
              <span class="material-symbols-outlined">paid</span>
            </router-link>
            Trademark Registration
          </li>
          <li :class="{activeService: this.blog === 3}">
            <router-link :to="{name: 'service3'}">
              <span class="material-symbols-outlined">calculate</span>
            </router-link >
            TAX Services
          </li>
          <li :class="{activeService: this.blog === 4}">
            <router-link :to="{name: 'service4'}">
              <span class="material-symbols-outlined">book_2</span>
            </router-link>
            Bookkeeping Services
          </li>
        </ul>
      </div>

      <div class="box get-in-touch">
        <div class="highlight-bar"><span>Get In Touch</span></div>
        <img src="../../assets/angkorwat.jpg" alt="Get in Touch">
        <router-link to="/">Get in Touch</router-link>
      </div>
    </div>
</template>

<script>
export default {
data(){
    return {
        blog: 1,
    }
}
}
</script>

<style>
.blog-container {
      display: flex;
      justify-content: center;
      padding: 40px 20px;
      gap: 40px;
}
@media(max-width: 768px){
.blog-container{
  flex-direction: column;
}    
}
</style>