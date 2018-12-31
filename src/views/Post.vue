<template>
    <div class="post">
        <p>Sep 11</p>
        <div class="post-title">
            <h2>{{ post.title }}</h2>
        </div>
        <div class="post-body">
            {{ post.body }}
        </div>
        <div class="comments">
            <h4>Comments</h4>
            <textarea name="" id="" cols="30" rows="5"></textarea>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
    data() {
        return {
            post: [],
            errors: [],
        };
    },

    created() {
        axios.get(`http://jsonplaceholder.typicode.com/posts/` + this.$route.params.id)
            .then((response) => {
            this.post = response.data;
            })
            .catch((e) => {
                this.errors = e;
            });
        },
    });
</script>

<style lang="scss" scoped>
    .post {
        background: #fff;
        padding: 25px 99px;

        p {
            font-size: 14px;
            font-family: 'Lato';
            font-weight: bold;
            color: #bdbdbd;
        }

        .post-title {

            h2 {
                font-family: 'Lato';
                font-weight: bold;
                font-size: 40px;
            }
        }

        .post-body {
            font-family: 'Lato';
            font-weight: 400;
            font-size: 17px;
            text-align: left;
            color: #333;
        }

        .comments {

            h4 {
                font-family: 'Lato';
                font-size: 16px;
                font-weight: bold;
                color: #333;
                margin-bottom: 5px;
                margin-top: 40px;
            }
            textarea {
                width: 100%;
            }
        }
    }
</style>
