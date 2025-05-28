<template>
<div class="service-container">
    <div class="service-content">
        <div v-for="service in services" :key="service.title" class="service-sizebox">
            <ServiceBox v-bind:service="service"/>
        </div>
    </div>
</div>
<HomeContactBox/>
</template>

<script>
import ServiceBox from '../../components/ServiceBox.vue'
import HomeContactBox from '../../components/HomePage/HomeContactBox.vue'
export default {
components: { ServiceBox, HomeContactBox},
data(){
    return {
        services: [
            {
              img: 'angkorwat.jpg',
              url: 'service1',
              title: 'Business Registration',
              body: 'We can help you with the whole company registration process from scratch.',
            },
            {
              img: 'service.webp',
              url: 'service2',
              title: 'Trademark Registration',
              body: 'Saving your value time & minimize risk in tax compliance for your long term business.',
            },
            {
              img: 'logo.png',
              url: 'service3',
              title: 'Tax Services & Advisory',
              body: 'Saving your value time & minimize risk in tax compliance for your long term business.',
            },
            {
              img: 'service.webp',
              url: 'service4',
              title: 'Accounting Services',
              body: 'We offer comprehensive bookkeeping services, Save your time to focus on core business activities.',
            },

       ],
    }
}
}
</script>

<style>

.service-container{
max-width: 1200px;
margin: 0 auto;
padding: 20px 0;
}

.service-content{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  padding: 0 0 40px 0;
}

.service-sizebox:hover{
transform: scale(1.02); /* Grows 2% */
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
opacity: 0.8;
}

@media (max-width: 768px){
.service-content{
padding: 50px 20px;
flex-direction: column;
}
}
</style>