<template>
  <div class="home-overview-content">
    <div class="home-content-box">
      <div class="home-overview-text">
        <h1>Welcome, BENYAMIN Business CO., LTD.</h1>
        <p>
          We are a licensed tax and trademark agent company. We offer professional services of business and trademark registration, taxation and book keeping. We have qualified staff with high professional ethics and expertise who would provide you good consultancy and bring growth to your businesses with least cost and time.
        </p>
        <a href="#more">MORE →</a>
      </div>
      <div class="home-overview-img"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.home-overview-content {
  max-width: 1200px;
  margin: 0 auto;
}

.home-content-box {
  display: flex; /* ← important */
  align-items: center;
  background: white;
  gap: 20px; /* Optional spacing between image and text */
  padding: 20px;
}

.home-overview-img {
  width: 400px;
  height: 30vh;
  background: url('../../assets/angkorwat.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0; /* Prevent image from shrinking */
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
}

.home-overview-text {
padding: 0 20px;
  text-align: left;
  color: #111c26;
  flex: 1; /* Take remaining space */
}

.home-overview-text p{
letter-spacing: 1px;

}

.home-overview-text h1{
    color: #111c26;
    margin-top: 0;
}

.home-overview-text a{
    padding: 10px 40px;
    background: #111c26;
    color: #eee;
    text-decoration: none;
    border-top-right-radius: 10px;
    border: 1px solid white;
    font-weight: bold;
    letter-spacing: 0.5px;
    display: inline-block;
    margin: 10px 0 10px 0;
}

.home-overview-text a:hover{
color:#111c26;
background: #eee;
}
@media(max-width:768px){
  .home-content-box{
    background: #7F9DB1;
  }
.home-overview-img{
  display: none;
}

.home-content-box{
  flex-direction: column;
}

.home-overview-text a{
    padding: 10px 20px;
}
.home-overview-text h1{
  color: #ffb703;
}
}
</style>