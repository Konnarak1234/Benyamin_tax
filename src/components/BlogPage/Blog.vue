<template>
    <div class="blog-box">
      <h2>{{ blog.title }}</h2>
      <p class="blog-author">{{ blog.author }}</p>
      <div class="blog-spacing"></div>
      <p>{{ blog.body }}</p>
      <div class="blog-spacing"></div>
      <router-link :to="{name: 'blogDetail', params: {id: blog.id}}">
        READ MORE
      </router-link>
  </div>


</template>

<script>
export default {
props: [ 'blog' ],

}
</script>

<style>
.blog-box{
    padding: 20px 20px;
    margin-bottom: 16px;
    box-shadow: 1px 3px 6px lightgrey;
    background: white;
}
.blog-spacing{
    padding: 16px 0;
}
.blog-author{
font-size: 12px;
}
.blog-box h2{
margin: 0;
}

.blog-box a{
  text-decoration: none;
  padding: 12px 20px;
  border-top-right-radius: 8px;
  border: 1px solid #111c26;
  color: #111c26;
}

.blog-box a:hover{
  text-decoration: none;
  padding: 12px 20px;
  border: 1px solid #111c26;
  color: #eee;
  background-color: #111c26;
}
</style>