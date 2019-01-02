<template>
    <div>
        <div class="loading" v-if="loading"></div>
        <div v-if="showContent">
            <div class="goBack">
                <router-link class="goBack" to="/archive">Go Back</router-link>
            </div>
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
                    <textarea 
                        name="comments" 
                        id="comments" 
                        cols="30" 
                        rows="3" 
                        v-model="textMessage"></textarea>
                    <button @click="createComment">Submit</button>
                    <div>
                        <ul v-if="comments && comments.length">
                            <li v-for="comment of comments" :key="comment">
                                <span>{{ comment }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <ul v-if="errors && errors.length">
            <li v-for="error of errors" :key="error.id">
            {{error.message}}
            </li>
        </ul>
    </div>
   
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
    data() {
        return {
            loading: true,
            showContent: false,
            post: {},
            errors: [],
            textMessage: '',
            comments: [],
        };
    },

    created() {
       this.getPost();
    },

    methods: {
        // Fetch singe post from jsonplaceholder API adding id on request
        getPost() {
            axios.get(`http://jsonplaceholder.typicode.com/posts/` + this.$route.params.id)
                .then((response) => {
                this.post = response.data;
                this.showContent = true;
                this.loading = false;
                })
                .catch((e) => {
                    this.errors = e;
            });
        },
        // on submit update comments array and display new comment
        createComment() {
            if (this.textMessage !== '') {
                // @ts-ignore
                this.comments.push(this.textMessage);
                this.textMessage = '';
            } else {
                alert('Insert text message before submit');
            }
        },
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_loader.scss';

    .goBack {
        
        a {
            text-decoration: none;
            background: #333;
            color: #fff;
            padding: 5px 10px;
            display: inline-block;
            margin: 10px 0;
            font-family: 'Lato';
        }
    }

    .post {
        background: $post-background;
        padding: 25px 99px;

        p {
            font-size: 14px;
            font-family: $font-stack;
            font-weight: bold;
            color: $post-date;
        }

        .post-title {

            h2 {
                font-family: $font-stack;
                font-weight: bold;
                font-size: 40px;
                padding-bottom: 50px;
                border-bottom: 2px solid $post-title-border;
            }
        }

        .post-body {
            font-family: $font-stack;
            font-weight: 400;
            font-size: 17px;
            text-align: left;
            color: $post-body-text;
        }

        .comments {

            h4 {
                font-family: $font-stack;
                font-size: 16px;
                font-weight: bold;
                color: $post-body-text;
                margin-bottom: 5px;
                margin-top: 40px;
            }
            textarea {
                width: 100%;
                width: -moz-available;
                width: -webkit-fill-available;
                width: fill-available;
                padding: 5px 10px; 
                font-family: $font-stack;
            }

            button {
                background: #cecece;
                border: none;
                padding: 5px 15px;
                font-size: 14px;
                font-weight: bold;
                color: #333;
                cursor: pointer;
            }

            ul {
                list-style-type: none;
                padding: 0;
                margin: 30px 0;

                li {
                    background: #f7f9fc;
                    font-family: $font-stack;
                    padding: 10px;
                    text-align: center;
                    margin: 10px 0;
                    white-space: pre;

                    span {
                        font-size: 16px;
                    }
                }
            }
        }
    }

@media screen and (max-width: 1024px) {

    .goBack {
        margin: 0 15px;
    }
  
    .post {
        margin: 0 15px;
    }
}
@media screen and (max-width: 600px) {
  
    .post {
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
