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
              img: 'company-registration.jpg',
              url: 'service1',
              title: 'Business Registration & Compliance',
              body: 'We simplify the process of business formation and ensure all legal and regulatory requirements are met.',
            },
            {
              img: 'trademark.jpg',
              url: 'service2',
              title: 'Taxation Service',
              body: " We handle individual, corporate, and indirect taxes with precision and clarity.",
            },
            {
              img: 'tax.jpg',
              url: 'service3',
              title: 'Accounting & Bookkeeping ',
              body: 'We deliver accurate, timely, and compliant financial records to help you make informed decisions.',
            },
            {
              img: 'account.jpg',
              url: 'service4',
              title: 'Trademark & IP Services ',
              body: 'We help you register trademarks and manage intellectual property rights to safeguard your business identity in a competitive market.',
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