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
      <p>We provide a dedicated team of accounting professionals & software to suit your business needs.</p>
      <div class="home-wedo-nav">
        <label @click="handleWedo(1)">Business Registration</label>
        <label @click="handleWedo(2)">Tax Services</label>
        <label @click="handleWedo(3)">Accounting Services</label>
        <label @click="handleWedo(4)">Accounting Software</label>
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
       weDo: [
        {
          title: 'Business Registration',
          body: 'We can help you with the whole company registration process from scratch. We guarantee to provide services with the highest level of professionalism at reasonable prices, by finding the maximum efficiency and effective ways in solving our clients problems.',
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
          title: 'Tax Services',
          body: 'The only remaining tax regime in Cambodia is the Real Regime. Tax System Accounting is a must as accounting for business transactions is never the same anymore especially for registered companies and businesses. We can assist you to manage your income tax compliance obligations and to inform you of any tax updates that may affect your company or business.',
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
          title: 'Accounting Services',
          body: 'We offer professional bookkeeping services in Phnom Penh, Cambodia, Our accountants can prepare your accounts on a monthly, quarterly or yearly basis of Tax Submission.',
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
          title: 'Accounting Software',
          body: 'Are you looking for accounting software in Cambodia? The financial health of a business can be controlled & managed by using accounting software.',
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
