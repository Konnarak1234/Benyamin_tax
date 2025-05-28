<template>
  <div class="blog-detail-container">
    <div class="blog-detail-content">
      <h1>{{ blogBody[0].main_title}}</h1>
      <div v-for="blog in blogBody" :key="blog">
        <h3>{{ blog.title}}</h3>
        <h2>{{ blog.subtitle }}</h2>
        <p>{{ blog.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
props: [ 'id' ],
data(){
  return {
    blogDetail: [
        {
        blog_id: 1,
        main_title: 'Business Registration in Cambodia: A Comprehensive Guide',
        title: 'Introduction',
        subtitle: 'Overview of Business Registration in Cambodia',
        body: 'Cambodia, with its rapidly growing economy and strategic location in Southeast Asia, offers numerous opportunities for entrepreneurs. The process of business registration in Cambodia has been streamlined over the years to attract both local and foreign investors. Understanding the registration process, legal requirements, and various business structures is crucial for anyone looking to establish a business in this vibrant market.'
      },
       {
        blog_id: 1,
        main_title: 'Business Registration in Cambodia: A Comprehensive Guide',
        title: 'Legal Framework',
        subtitle: 'Overview of Cambodian Business Law',
        body: 'Cambodian business law is governed by a combination of legislative acts, regulations, and guidelines. The primary legal documents include the Law on Commercial Enterprises, the Law on Investment, and the Civil Code. These laws outline the requirements for business operations, investor protections, and the roles of regulatory authorities.'
      },
      {
        blog_id: 2,
        main_title: 'Business Registration in Cambodia: A Comprehensive Guide',
        title: 'Introduction',
        subtitle: 'Overview of Business Registration in Cambodia',
        body: 'Cambodia, with its rapidly growing economy and strategic location in Southeast Asia, offers numerous opportunities for entrepreneurs. The process of business registration in Cambodia has been streamlined over the years to attract both local and foreign investors. Understanding the registration process, legal requirements, and various business structures is crucial for anyone looking to establish a business in this vibrant market.'
      },
       {
        blog_id: 1,
        main_title: 'Business Registration in Cambodia: A Comprehensive Guide',
        title: 'Legal Framework',
        subtitle: 'Overview of Cambodian Business Law',
        body: 'Cambodian business law is governed by a combination of legislative acts, regulations, and guidelines. The primary legal documents include the Law on Commercial Enterprises, the Law on Investment, and the Civil Code. These laws outline the requirements for business operations, investor protections, and the roles of regulatory authorities.'
      },
       {
        blog_id: 2,
        main_title: 'Business Registration in Cambodia: A Comprehensive Guide',
        title: 'Legal Framework',
        subtitle: 'Overview of Cambodian Business Law',
        body: 'Cambodian business law is governed by a combination of legislative acts, regulations, and guidelines. The primary legal documents include the Law on Commercial Enterprises, the Law on Investment, and the Civil Code. These laws outline the requirements for business operations, investor protections, and the roles of regulatory authorities.'
      },
    ]
  }
},
computed:{
  blogBody(){
    return this.blogDetail.filter(content=> content.blog_id === Number(this.id))
  }
}
}
</script>

<style>
.blog-detail-container{
max-width: 1200px;
margin: 20px auto;
}

.blog-detail-content{
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 20px;
  background: white;
  text-align: left;
}
</style>