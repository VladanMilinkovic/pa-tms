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
                padding-bottom: 50px;
                border-bottom: 2px solid #eeeeee;
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

@media screen and (max-width: 600px) {
  
    .post {
        padding: 0;
        margin: 0 15px;
    }
}

@media screen and (max-width: 480px) {
      .post {
            padding: 50px;
            margin-bottom: 50px;

            p {
                font-size: 18px;

            }

            .post-title {

                h2 {
                    font-size: 32px;
                }
            }

            .post-body {
                font-size: 18px;
            }

            a {
               font-size: 24px;
            }
        }
}

@media screen and (max-width: 320px) {
     .post {
        padding: 25px;
        margin-bottom: 20px;

        p {
            font-size: 15px;

        }

        .post-title {

            h2 {
                font-size: 24px;
            }
        }

        .post-body {
            font-size: 16px;
        }

        a {
        font-size: 20px;
        }
    }

}
</style>
