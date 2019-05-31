<template>
    <section class="firstscreen container">
        <h1 class="hero">
            <span class="hero__title">Hero Title</span>
            <span class="hero__subtitle">Hero subtitle</span>
        </h1>
    </section>
</template>

<script>
    import PostsService from "@/services/PostsService";

    export default {
        name: 'home',
        data () {
            return {
                posts: []
            }
        },
        methods: {
            async getPosts()
            {
               const response = await PostsService.fetchPosts();
               this.posts = response.data;
            }
        },
        mounted()
        {
            this.getPosts();
        }
    }
</script>

<style lang="scss">
    @import "styles/index";
</style>