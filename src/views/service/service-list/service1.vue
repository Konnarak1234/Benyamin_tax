<template>
  <div class="service-container">
    <div class="service1-content">
        <h2>WANT TO KNOW HOW TO REGISTER A COMPANY IN CAMBODIA?</h2>
        <p>Starting a business in Cambodia is a fairly straightforward procedure. To do business legally, you must first register with MoC business registration. You have a properly planned business idea, along with realistically estimated budgets for your startup in Cambodia. You have thought about the practical measures to prevent possible disasters. However, you are taken aback by the seemingly complicated process of company registration in Cambodia.</p>
        <p>In order to set up a business in the Kingdom of Cambodia, you need to register your business either as a <a href="#">sole proprietorship</a>, <a href="#">partnership</a>, <a href="#">private limited company</a>, <a href="#">public limited company</a>, or <a href="#">foreign company</a>.</p>

        <h2>Company Registration Requirements:</h2>

        <p><em>For Sole Proprietorship</em></p>
        <p>Step 1: General Information</p>
        <ol>
          <li>Proposed name</li>
          <li>Business activities</li>
        </ol>
        <p>Step 2: Addresses and Contacts Information</p>
        <p>Step 3: Owner Information</p>

        <p><em>For Private limited company/Public limited company/Foreign company/Branch and Representative office</em></p>
        <p>Step 1: General Information</p>
        <ol>
          <li>Proposed name</li>
          <li>Business activities</li>
          <li>Share Par Value</li>
          <li>Number of Employees</li>
        </ol>
        <p>Step 2: Addresses and Contacts Information</p>
        <p>Step 3: Directors Information</p>
        <p>Step 4: Share & Shareholders Information</p>

        <p><em>For Partnerships (General partnership/Limited partnership)</em></p>
        <p>Step 1: General Information</p>
        <ol>
          <li>Proposed name</li>
          <li>Business activities</li>
          <li>Number of Employees</li>
        </ol>
        <p>Step 2: Addresses and Contacts Information</p>
        <p>Step 3: Partner Information</p>
        <p>Step 4: Manager Information</p>

        <p>With GIANTBROTHER, we can help you with the whole company registration process from scratch. Our company registration package will include the following:</p>
        <ul>
          <li>Researching & Register Your Company Name</li>
          <li>Preparation of Memorandum and Articles of Association (M&A)</li>
          <li>Get approval for Company Certificate from Ministry of Commerce (MoC)</li>
          <li>Get Official Stamp for Your Company</li>
          <li>Register Patent Tax for your company</li>
          <li>Register VAT Tax for your company</li>
          <li>Free Registration Consultations</li>
        </ul>
    </div>
    <ServiceSidebar :service="1" @serviceClick="handleService"/>
  </div>
</template>

<script>
import ServiceSidebar from '../../../components/serviceDetail.vue'
export default {
components: { ServiceSidebar },
methods: {
  handleService($pagename){
    this.$emit('serviceClick', $pagename)
  }
}
}
</script>

<style>
.service1-content {
    max-width: 800px;
    background: white;
    padding: 30px;
    line-height: 1.6;
    text-align: left;
}

.service1-content  h2{
    font-weight: bold;
}
</style>