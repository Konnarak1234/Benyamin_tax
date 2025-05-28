<template>
  <div class="service-container">
    <div class="service2-content">
        <h2>WANT TO KNOW HOW TO REGISTER A TRADEMARK FOR YOUR BUSINESS OR PERSONAL IN CAMBODIA?</h2>
        <p>What is the Trademark in Cambodia?</p>
        <p>A trademark is a distinctive sign which identifies certain goods or services as those produced or provided by a specific person or enterprise in Cambodia..</p>
        <p>The exclusive right to a mark, as conferred by this Law, shall be acquired by registration in accordance with the provisions thereof.</p>
      <div class="service-space-divider"></div>
        <p>Benefit of Registered Trademark in Cambodia</p>
        <p>If you don't register your trade mark, then someone else can. This immediately puts your business and any product or service development you are undertaking at risk. Securing a registered trademark protects your brand, and provides you with the tools to prevent someone using similar signs and riding off the back of your business in Cambodia. If you do not protect your trademark by registering it, then you may find you are legally prevented from expanding your business. With your brand registered, you are within your rights to take actions against parties who have attempted to register conflicting trademarks, or are operating with conflicting brands and damaging your business in Cambodia.</p>
        
        <h2>1. Avoiding Unwelcome Change</h2>
        <p>
          Changing the name of a company can be a difficult and costly task. Having successfully created a good reputation for your business, it can take significant marketing pounds to rebuild a renamed brand. When a logo, symbol or name is unregistered there is always the risk that another business may register it and cause significant difficulties, perhaps by attempting to prevent your business from operating or expanding under its current identity.
        </p>

        <h2>2. Building value</h2>
        <p>
          Because of the above, potential investors will always be interested in whether a business has trademarked its name, key products or services. Trademark registration not only increases security, but also aids clarity in any merger or franchising of the business, positively impacting its perceived value.
        </p>

        <h2>3. Protection</h2>
        <p>
          It is important to ensure that your business is appropriately protected against competition. Unauthorised parties who use your trademark without authorisation can damage your brand, your reputation and your business, but they are often in a legally weak position and can be prevented from causing damage relatively easily. By registering your trademark you are effectively building a barrier to entry around your brand, making it harder for other businesses to imitate you.
        </p>

        <p>REQUISITE INFORMATION & DOCUMENTS</p>
          <ul>
          <li>Full name, address and nationality of the applicant.</li>
          <li>Preparation of Memorandum and Articles of Association (M&A)</li>
          <li>Get approval for Company Certificate from Ministry of Commerce (MoC)</li>
          <li>Get Official Stamp for Your Company</li>
          <li>Register Patent Tax for your company</li>
          <li>Register VAT Tax for your company</li>
          <li>Free Registration Consultations</li>
        </ul>
      </div>
      <ServiceSidebar :service="2" @serviceClick="handleService"/>
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
.service-space-divider{
    padding: 20px 0;
}
.service2-content {
    max-width: 800px;
    background: white;
    padding: 30px;
    line-height: 1.6;
    text-align: left;
}

.service2-content  h2{
    font-weight: bold;
}
</style>