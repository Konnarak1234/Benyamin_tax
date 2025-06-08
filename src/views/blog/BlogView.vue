<template>
<div class="blog-container">
<div class="blog-content">
    <div v-for="blog in blogs" :key="blog.author">
        <Blog :blog="blog"/>
    </div>
</div>
<BlogSidebar/>
</div>
</template>

<script>
import BlogSidebar from '../../components/BlogPage/BlogSidebar.vue'
import Blog from '../../components/BlogPage/Blog.vue'
export default {
components: { BlogSidebar, Blog },
data(){
    return {
        blogs: [
            {
                id: 1,
                title: 'Business Registration in Cambodia: A Comprehensive Guide',
                author: 'By BENYAMIN Business CO., LTD',
                body: 'Introduction Overview of Business Registration in Cambodia Cambodia, with its rapidly growing economy and strategic location in Southeast Asia, offers numerous opportunities for entrepreneurs. The process of business registration in Cambodia has been streamlined over the years to attract both local and foreign investors. Understanding the registration process, legal requirements, and various business structures is',
            },
             {
                id: 2,
                title: 'Business Registration in Cambodia: A Comprehensive Guide',
                author: 'By BENYAMIN Business CO., LTD',
                body: 'Introduction Overview of Business Registration in Cambodia Cambodia, with its rapidly growing economy and strategic location in Southeast Asia, offers numerous opportunities for entrepreneurs. The process of business registration in Cambodia has been streamlined over the years to attract both local and foreign investors. Understanding the registration process, legal requirements, and various business structures is',
            },
        ]
    }
}
}
</script>

<style>
.blog-content {
    max-width: 800px;
    background: transparent;
    line-height: 1.6;
    text-align: left;
}

.blog-content  h2{
    font-weight: bold;
}

.blog-content  p{
    font-size: 12px;
}

</style>