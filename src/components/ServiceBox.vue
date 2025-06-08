<template>
  <div class="service-box">
    <router-link :to="{name: this.service.url}">
      <div class="service-box-image">
          <img :src="require(`@/assets/${service.img}`)" alt="">
      </div>

      <h3>{{ service.title }}</h3>
      <p>{{ service.body }}</p>
        <label>Read more</label>

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
min-height: 400px;
box-shadow: 0 4px 6px #fff;
background: #111c26;

}
.service-box a{
  text-decoration: none;
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

.service-box h3{
  padding:5px;
  color: #ffb703;
  margin: 0;
  letter-spacing: 1px;
}

.service-box p{
  padding: 10px 0;
  margin: 0;
  color: #ddd;
  font-size: 14px;
}

.service-box label{
  displaY: block;
  color: #ffb703;
  text-decoration: none;
}

.service-box label:hover{
  cursor: pointer;
}


</style>