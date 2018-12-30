<template>
    <div>
        <h1>Post</h1>
        <div>
            {{ $route.params.id}}
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
    data() {
        return {
            post: [],
            errors: [],
        }
    },

    created () {
        axios.get(`http://jsonplaceholder.typicode.com/posts/` + this.$route.params.id)
            .then(response => {
            this.post = response.data;
            })
            .catch(e => {
                this.errors = e;
            })
        }
    })
</script>

