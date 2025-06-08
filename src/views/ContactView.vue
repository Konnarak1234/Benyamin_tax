<template>
  <div class="contact-container">
    <div class="contact-content">
        <button :class="{ctnActive: toggleCtn === 1}" @click="handleCtn(1)"> Contact us</button>
        <button :class="{ctnActive: toggleCtn === 2}" @click="handleCtn(2)">Context</button>
            
            <hr>
        <div class="contact-field" v-if="toggleCtn === 2">
            <p><span>Contact:</span> +85598481115</p>
            <div class="contact-spacing"></div>
            <p><span>Email:</span> boryuk@gmail.com</p>
            <div class="contact-spacing"></div>
            <p><span>Adress:</span> No. 1588 St. Lum, Sangkat Krang Thnung, Khan Sen Sok, Phnom Penh, Cambodia.</p>
        </div>
        <div class="contact-field" v-if="toggleCtn === 1">
            <form v-on:submit.prevent="sendEmail">
                <div class="cnt-input">
                    <label>Name<span>*</span></label>
                    <input type="text" v-model="form.name" placeholder="Your Name" required>
                </div>
                <div class="cnt-input">
                    <label>Email<span>*</span></label>
                    <input type="email" v-model="form.email" placeholder="Your Email" required>
                </div>
                <div class="cnt-input">
                    <label>Subject<span>*</span></label>
                    <input type="text" v-model="form.subject" placeholder="Your Purpose" required>
                </div>
                <div class="cnt-input">
                    <label>Message<span>*</span></label>
                    <textarea v-model="form.message" placeholder="Your Message" required></textarea>
                </div>
                <div class="submit">
                    <button>Submit</button>
                </div>
                
            </form>
        </div>
    </div>
  </div>
  <div class="ctn-spacing"></div>
</template>

<script>
import emailjs from 'emailjs-com'
export default {
data(){
    return {
        form: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        toggleCtn: 1,
    }
},
methods: {
    handleCtn(option){
        this.toggleCtn = option
    },
    sendEmail(){
        emailjs.send(
            'service_atrdgmw',
            'template_cubjg76',
            this.form,
            'pCuoakKHNYLIqBMsB'
        ).then( // asycronize method
            (result)=> {
                alert('Email send!')
                console.log(result.text)
            },
            (error) => {
                alert('fail to send email!')
                console.log(error.text)
            }
        )

        this.form.name =''
        this.form.email = ''
        this.form.subject = ''
        this.form.message = ''
    }
}
}
</script>

<style>
.contact-spacing{
    padding: 10px 0;
}
.contact-container{
    max-width: 1200px;
    margin: 20px auto;
}
.contact-content hr{
    background: #7F9DB1;
}
.contact-content{
border-radius: 8px;
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
    padding: 20px 36px;
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

.contact-field label{
display: inline-block;
color: #ccc;
text-transform: capitalize;
letter-spacing: 1px;
font-size: 0.6em;
margin: 25px 0 15px;
}

.cnt-input{
    display: block;
    margin-bottom: 10px;
}

.cnt-input span{
    color: crimson;
}

.contact-field input, textarea{
border: none;
border-bottom: 1px solid #ddd;
width: 100%;
padding: 10px 5px;
}

.submit{
    text-align: center;
}
.submit button{
    padding: 10px 36px;
    border-radius: 3px;
    color: #111c26;
    background:#ffb703;
    border: none;
}
.submit button:hover{
    color:#ffb703 ;
    background: #111c26;
    cursor: pointer;
}

@media(max-width: 768px){
.contact-container{
    padding: 20px 20px;
}
}
</style>