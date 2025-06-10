<template>
  <div class="how-it-works-wrapper">
    <div class="how-it-works-container">
      <!-- Left image with clip-path -->
      <div class="how-it-works-image"><img :src="require(`@/assets/${weDo.img}`)" alt="We Do" /></div>

      <!-- Middle content -->
      <div class="how-it-works-content">
        <h3>{{ weDo.title }}</h3>
        <p>{{ weDo.body }}</p>

        <div class="highlight-bar">
          <span>{{ weDo.overview[0] }}</span>
        </div>
        <div class="highlight-bar">
          <span>{{ weDo.overview[1] }}</span>
        </div>
        <div class="highlight-bar">
          <span>{{ weDo.overview[2] }}</span>
        </div>
        <div class="highlight-bar">
          <span>{{ weDo.overview[3] }}</span>
        </div>
      </div>

      <!-- Right side panel -->
      <div class="how-it-works-steps">
        <h3>HOW IT WORKS</h3>
        <div class="step">
          <div class="circle">1</div>
          <p>{{ weDo.process[0] }}</p>
        </div>
        <hr />
        <div class="step">
          <div class="circle">2</div>
          <p>{{ weDo.process[1] }}</p>
        </div>
        <hr />
        <div class="step">
          <div class="circle">3</div>
          <p>{{ weDo.process[2] }}</p>
        </div>
        <hr />
        <div class="step">
          <div class="circle">4</div>
          <p>{{ weDo.process[3] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
props: [ 'weDo' ]
}
</script>

<style>
.how-it-works-wrapper {
  background: #111c26;
  padding: 40px 0;
  display: flex;
  justify-content: center;
}

.how-it-works-container {
  display: flex;
  background: #fff;
  width: 90%;
  max-width: 1200px;
  background: #7F9DB1;
}

/* Left image */
.how-it-works-image {
  flex: 1;
  min-height: 300px;
  position: relative;
  overflow: hidden;
}

.how-it-works-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
}

/* Middle content */
.how-it-works-content {
  flex: 2;
  padding: 30px;
  font-size: 14px;
  color: #111c26;
}

.how-it-works-content h3{
  color:#111c26;
  text-transform: capitalize;
}

.how-it-works-content p{
text-align: left;
letter-spacing: 1px;
}


.highlight-bar {
  background: #ddd;
  margin-top: 15px;
  position: relative;
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-weight: bold;
  font-size: 12px;
  color: white;
}

.highlight-bar span {
  z-index: 2;
  position: relative;
}

.highlight-bar::before {
  content: '';
  background: #ffb703;
  width: 65%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
  z-index: 1;
}

/* Right panel */
.how-it-works-steps {
  flex: 1;
  background: #ffb703;
  padding: 30px 20px;
  color: white;
}

.how-it-works-steps h3 {
  color:#111c26;
  margin-bottom: 20px;
  font-size: 16px;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 15px 0;
  text-align: left;
}

.step:hover {
  cursor: pointer;
  color:#111c26;
}

.step .circle {
  width: 28px;
  height: 28px;
  background: #111c26;
  color: #ddd;
  font-weight: bold;
  border-radius: 50%;
  text-align: center;
  line-height: 28px;
  font-size: 14px;
}

hr {
  border: 0;
  height: 1px;
  background: #111c26;
}

@media(max-width: 768px){
.how-it-works-image{
  display: none;
}

.how-it-works-container{
  flex-direction: column;
}

.highlight-bar::before {
  width: 85%;
}
}

</style>