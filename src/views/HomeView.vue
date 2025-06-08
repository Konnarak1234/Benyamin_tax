<template>
  <div class="home-content">
    <div class="home-overview">
      <HomeOverview/>
    </div>
    <div class="home-content-service">
      <h2 class="home-servie-title">
        OUR <span>SERVICE</span>
      </h2>
      <div class="home-service-content">
        <div v-for="service in services" :key="service.title" class="home-service-sizebox">
          <ServiceBox v-bind:service="service"/>
        </div>
      </div>
    </div>
    <HomeContactBox id="more"/>
    <div class="home-content-wedo">
      <h2>WHAT <span>WE DO</span></h2>
      <p>At BBC, we provide a full spectrum of professional services designed to support your business at every stage—from launch to growth and beyond. Our core offerings include:</p>
      <div class="home-wedo-nav">
        <label @click="handleWedo(1)">Business Registration & Compliance</label>
        <label @click="handleWedo(2)">Taxation Service</label>
        <label @click="handleWedo(3)">Accounting & Bookkeeping</label>
        <label @click="handleWedo(4)">Trademark & IP Services</label>
      </div>
    </div>
  </div>
  <HomeWedo v-if="toggleWedo === 1" :weDo="weDo[0]"/>
  <HomeWedo v-if="toggleWedo === 2" :weDo="weDo[1]"/>
  <HomeWedo v-if="toggleWedo === 3" :weDo="weDo[2]"/>
  <HomeWedo v-if="toggleWedo === 4" :weDo="weDo[3]"/>
  
  <div class="home-spacing"></div>
  <HomeClient/>
</template>

<script>
import ServiceBox from '../components/ServiceBox.vue'
import HomeContactBox from '../components/HomePage/HomeContactBox.vue'
import HomeWedo from '../components/HomePage/HomeWeDo.vue'
import HomeClient from '../components/HomePage/HomeClient.vue'
import HomeOverview from '../components/HomePage/HomeOverview.vue'
export default {
  components: { ServiceBox, HomeContactBox, HomeWedo, HomeClient, HomeOverview},
  name: 'HomeView',
  data(){
    return {
      toggleWedo: 1,
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
       weDo: [
        {
          title: 'Business Registration & Compliance',
          body: 'Starting a business? We simplify the process of business formation and ensure all legal and regulatory requirements are met. We assist with entity selection, registration, licensing, and ongoing compliance.',
          overview: [
            'Get Quick Approval & Fast Service',
            'Work with our certified tax agent',
            'Reasonable price',
          ],
          process: [
            'Consulting & Prepare Documents',
            'Ministry of Commerce REGISTRATION',
            'PATENT AND VAT REGISTRATION',

          ],
        },
        {
          title: 'Taxation Services',
          body: 'Our tax experts provide strategic planning and reliable filing services to minimize liabilities and ensure compliance with all regulatory requirements. We handle individual, corporate, and indirect taxes with precision and clarity.',
          overview: [
            'Help You on Tax Declaration',
            'Minimize Risk on Tax Challenges',
            'Solve your tax issues',
          ],
          process: [
            'Tax Advisory and Consulting',
            'Tax Declaration & Documentation',
            'Monthly & Yearly Tax Return',

          ],
        },
        {
          title: 'Accounting & Bookkeeping',
          body: 'We deliver accurate, timely, and compliant financial records to help you make informed decisions. From day-to-day bookkeeping to financial reporting, we ensure your business stays on track.',
          overview: [
            'Improve Accuracy & Transparency',
            'Helps You Know Financial Situation',
            'Lowering the cost of operations',
          ],
          process: [
            'Work at Our Office, Use Our Software',
            'Client has less transactions',
            'Monthly, Quarterly, Annually (Regular)',

          ],
        },
        {
          title: 'Trademark & IP Services',
          body: "Protect your brand with confidence. We help you register trademarks and manage intellectual property rights to safeguard your business identity in a competitive market.Whether you're an entrepreneur just starting out or an established business looking to streamline operations, BBC offers the expertise and support to help you succeed.",
          overview: [
            'Xero Accounting',
            'QNE Accounting (Support Khmer Language)',
            'QuickBooks Accounting',
          ],
          process: [
            'Project Management',
            'Implementation',
            'Training & Support',
          ],
        },
       ],
    }
  },
  methods: {
    handleWedo($option){
      this.toggleWedo = $option;
    }
  } 
}
</script>

<style>
.home-overview{
  padding: 40px 0;
  background: #111c26;
}
.home-content-service{
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;

}

.home-content-service h2{
  letter-spacing: 1px;
  margin: 40px 0 40px 0;
  color: #111c26;
}

.home-content-service h2 span{
  letter-spacing: 1px;
  margin: 0;
  color: #ffb703;
}

.home-service-content{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  padding: 0 0 40px 0;
}

.home-service-sizebox:hover{
transform: scale(1.02); /* Grows 2% */
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
opacity: 0.8;
}


.home-content-wedo h2, p{
  margin: 0;
}

.home-content-wedo h2{
  margin: 40px 0 20px 0;
}

.home-content-wedo h2 span{
  color: #ffb703;
}

.home-content-wedo label{
  color: #111c26;
  margin: 10px 4px 10px 0;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 20px 40px;
  background: #ffb703;
  display: inline-block;
  border: 1px solid #fff;

}



.home-content-wedo label:hover{
cursor: pointer;
background: #111c26;
color: #ffb703;

}

.home-spacing{
  padding: 30px 0;
}

@media(max-width:1194px){
.home-service-content{
padding: 0 36px;
}
}

/* Make container stack vertically on smaller screens */
@media (max-width: 768px) {
.home-service-content{
  flex-direction: column;
  padding: 50px 20px;
}
.home-content-service h2{
  margin: 10px 0 10px 0;
}

.home-content-wedo p{
  padding: 0 36px;
}
}
</style>
