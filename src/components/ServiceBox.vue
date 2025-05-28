<template>
  <div class="service-box">
    <router-link :to="{name: this.service.url}">
      <div class="service-box-image">
          <img :src="require(`@/assets/${service.img}`)" alt="">
      </div>
      <div class="service-box-context">
          <h3>{{ service.title }}</h3>
          <p>{{ service.body }}</p>
          <router-link to="/">
            <label>Read more</label>
          </router-link>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  

props: [ 'service' ]

}
</script>

<style>

.service-box{
max-width: 500px;
box-shadow: 0 4px 6px #fff;
}

.service-box-image{
  height: 25vh;
  overflow: hidden;
}

.service-box-image img{
  width: 100%;
  height: 100%;
  object-fit: cover;   /* or 'contain' */
  display: block;

}

.service-box-context{
  background: #111c26;
  padding: 0 20px 10px 20px;
}


.service-box-context h3{
  padding: 5px;
  color: #ffb703;
  margin: 0;
  letter-spacing: 1px;
}

.service-box-context p{
  padding: 10px 0;
  margin: 0;
  color: #ddd;
  font-size: 14px;
}

.service-box-context a{
  displaY: block;
  color: #ffb703;
  text-decoration: none;
}

.service-box-context label:hover{
  cursor: pointer;
}


</style>