<template>
    <div class="service-container">
        <div class="service3-content">
              <h2>ENDING YOUR FRUSTRATION & COMPLEXITY IN BOOKKEEPING</h2>
        <br>
        <p>Companies and businesses registered in Cambodia need to maintain proper accounts to comply with various requirements and legislation in Cambodia such as Income Tax, VAT Return, and Withholding Tax.

        It is important to maintain updated financial records of all business transactions. Financial records are useful for day to day business references and are important for the entire accounting process. As such, bookkeeping is necessary for any business. Bookkeeping services involve the process of taking in, grouping relevant financial documents, referencing and recording all financial transactions of a business or company through proper accounting methods.

        We offer professional bookkeeping services in Phnom Penh, Cambodia. We assign dedicated staff to our clients for their bookkeeping requirements. Bookkeeping job scope includes maintaining full set accounts, accounts receivables, accounts payable, bank reconciliations and etc.</p>
        <br>
        <h2>Why Outsource Bookkeeping?</h2>
        <br>
        <ul>
          <li>Reduce mistakes and oversights commonly made by those lacking relevant expertise.</li>
          <li>When you are a startup or a small business and you hate accounting.</li>
          <li>Outsource bookkeeping saves money, sure, it costs money to hire someone else to do the job, but it makes money by allowing you to increase production.</li>
          <li>Outsourced bookkeeping reduces stress and helps prevent burnout.</li>
          <li>When you are not responsible for all of the administrative work, you have more time to focus on the work that you do best, and in this case, time equals money.</li>
        </ul>
      </div>
        <ServiceSidebar :service="3" @serviceClick="handleService"/>
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
.service3-content {
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