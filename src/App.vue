<template>
  <Header @clickPage="handlePageName" :pagename="pagename"/>
  <router-view @serviceClick="handleServiceClick"/>
  <Footer @clickPage="handlePageName"/>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Header, Footer},
  data(){
    return {
      pagename: 'Home page',
    }
  },
  methods: {
    handlePageName($page){
      this.pagename = $page;
      localStorage.setItem('pagename', $page); // save it to local storage, prevent reload page
    },
    handleServiceClick($page){
      this.pagename = $page;
    }
  },
   mounted(){
   const saved = localStorage.getItem('pagename');
    if (saved) {
      this.pagename = saved;
    }
  },
}
</script>

<style>
body{
  margin: 0;
  background: #eee;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a { /*styling the <a> or nav button*/
  font-weight: bold;
  padding: 16px 20px;
  color: #ddd;
  text-decoration: none;
}

.dropdown-toggle {
  font-weight: bold;
  color: #ddd;
  cursor: pointer;
  padding: 16px 0;

}

.mobile-dropdown-toggle{
  font-weight: bold;
  padding: 16px 20px;
  color: #ddd;
  text-decoration: none;


}

nav a:hover{ /*styling the <a> or nav button*/
  background-color: #0D3B66;
}

nav a:hover.home-nav-button{ /*styling the <a> or nav button*/
  background-color: #0D3B66;
  border-bottom-left-radius: 20px;
}

nav a.router-link-exact-active {
  background-color: #ffb703;
  color: #ddd;
}

nav a.router-link-exact-active:hover{
  background-color: #faa307;
  color: #ddd;
}

nav a.router-link-exact-active.home-nav-button{ /*only for home nav-button*/
    border-bottom-left-radius: 20px;
}
</style>
