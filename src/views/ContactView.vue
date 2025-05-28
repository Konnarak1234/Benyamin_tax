<template>
  <div class="contact-container">
    <div class="contact-content">
            <button :class="{ctnActive: toggleCtn === 1}" @click="handleCtn(1)">Context</button>
            <button :class="{ctnActive: toggleCtn === 2}" @click="handleCtn(2)"> Contact us</button>
            <hr>
        <div class="contact-field">
            <p><span>Contact:</span> +85598726999</p>
            <p><span>Email:</span> info@benyamin.com</p>
            <p><span>Adress:</span> No. 1588 St. Lum, Sangkat Krang Thnung, Khan Sen Sok, Phnom Penh, Cambodia.</p>
        </div>
    </div>
  </div>
  <div class="ctn-spacing"></div>
</template>

<script>
export default {
data(){
    return {
        toggleCtn: 1,
    }
},
methods: {
    handleCtn(option){
        this.toggleCtn = option
    }
}
}
</script>

<style>
.contact-container{
    max-width: 1200px;
    margin: 20px auto;
}
.contact-content hr{
    background: #7F9DB1;
}
.contact-content{
max-width: 600px;
padding: 10px 10px;
margin: 0 auto;
background: white;
box-shadow: 1px 2px 6px lightgrey;
}
.contact-content button{
padding: 10px 20px;
color: #111c26;
margin-right:3px;
display: inline-block;
font-weight: bold;
border: none;
background: transparent;
}
.contact-content .ctnActive{
color: #ffb703;
border-bottom:5px solid #ffb703;
}
.contact-field{
    padding: 20px 10px;
    text-align: left;
}
.contact-field p{
    margin-bottom: 10px;
}

.contact-field p span{
   font-weight: bold;
}
.ctn-spacing{
    padding: 40px 0;
}

@media(max-width: 768px){
.contact-container{
    padding: 20px 20px;
}
}
</style>