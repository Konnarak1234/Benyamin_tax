<template>
    <div class="service-container">
        <div class="service3-content">
            <h2>ARE YOU LOOKING FOR TAX PREPARATION SERVICES?</h2>
            <p>We are able to consult and advise on tax service and submission requirements as well as to review your monthly Tax Submission in Cambodia.</p>
            <p>The only remaining tax regime in Cambodia is the Real Regime. Tax System Accounting is a must as accounting for business transactions is never the same anymore especially for registered companies and businesses. We can assist you to manage your income tax compliance obligations and to inform you of any tax updates that may affect your company or business.</p>
            <br>
            <p><u>VAT Tax Registration</u></p>
            <p>Taxable person who makes taxable supplies and the taxable turnover for accumulative up to 12 months exceeds the threshold of KHR 250 million (approx. USD 62,500) is required to be registered for VAT under mandatory registration.</p>
            <br>
            <p><u>Tax Declaration or Submission</u></p>
            <p>The laws of Cambodia requires all organisations to submit monthly accounting documentation. This includes the submitting of Withholding Tax (WHT), Value Added Tax (VAT) as well as relevant others tax payments. Our experienced team of qualified accountants can manage all of these submissions on your behalf in a well organised and stress free manner.</p>
            <br>
            <p><u>Tax Advisory</u></p>
            <p>Our monthly accounting service in Cambodia takes away all of the stress and hassle. We will need to know who is the primary contact in your office and we will do the rest.</p>
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