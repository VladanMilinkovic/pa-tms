<template>
    <div>
        <ul v-if="posts && posts.length">
            <li v-for="post of posts" :key="post.id">
                <div class="post">
                    <p>Sep 11</p>
                    <div class="post-title">
                        <h2>{{ post.title }}</h2>
                    </div>
                    <div class="post-body">
                        {{ post.body }}
                    </div>
                    <router-link :to="'/archive/' + post.id">Read More...</router-link>
                </div>
            </li>
        </ul>

        <ul v-if="errors && errors.length">
            <li v-for="error of errors" :key="error.id">
            {{error.message}}
            </li>
        </ul>

        <div class="pagination" v-if="showPagination">
             <ul>
                <li v-for="(total, index) of totalPosts" :key="index" :class="{ highlight:index === selected }">
                    <a href="#" @click="selectPage" >{{total}}</a>
                </li>
             </ul>
        </div>

    </div>
   
</template>



<script>
import axios from 'axios';

export default {
    data() {
        return {
            posts: [],
            errors: [],
            totalPosts: [],
            selected: 0,
            showPagination: false,
            pageValue: 1,
        };
    },

    created() {
        axios.get(`http://jsonplaceholder.typicode.com/posts`)
            .then((response) => {
                for (let i = 1; i * 10 <= response.data.length; i++) {
                    this.totalPosts.push(i);
                }
                axios.get(`http://jsonplaceholder.typicode.com/posts?_page=1`)
                    .then((res) => {
                        this.posts = res.data;
                        this.showPagination = true;
                    })
                    .catch((e) => {
                        this.errors.push(e);
                    });
            })
            .catch((e) => {
            this.errors.push(e);
        });
    },

    methods: {

        selectPage($event) {
            this.pageValue = parseInt($event.srcElement.innerText, 10);
            this.selected = this.pageValue - 1;
            axios.get(`http://jsonplaceholder.typicode.com/posts?_page=` + this.pageValue)
                .then((response) => {
                    this.posts = response.data;
                })
                .catch((e) => {
                    this.errors.push(e);
            });
        },

        nextOrPrev($event) {
            const element = $event.srcElement.innerText;
            let post;
            if (element === 'Prev') {
                post = this.pageValue - 1;
                this.selected = post - 1;
            }

            if ( element === 'Next') {
                post = this.pageValue + 1;
                this.selected = this.pageValue;
            }
            this.pageValue = post;
            axios.get(`http://jsonplaceholder.typicode.com/posts?_page=` + post)
                .then((response) => {
                    this.posts = response.data;
                })
                .catch((e) => {
                    this.errors.push(e);
            });
        },
    },
};
</script>

<style scoped lang="scss">
ul {
    
    li {
        display: inline;
        padding: 0;

         .post {
            background: #fff;
            padding: 25px 99px;
            margin-bottom: 20px;

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

            a {
                font-family: 'Lato';
                font-size: 21px;
                font-weight: bold;
                color: #5c6bc0;
                margin: 55px 0 50px 0;
                display: inline-block;
            }
        }

    }
    .highlight {
        background: #5c6bc0 !important;

        a {
            color: #fff !important;

        }
    }
}

.pagination {
    
    ul {
        display: flex;
        justify-content: center;

        li {
            padding: 12px 15px;
            background: #fff;
            margin: 0 15px;
            a {
                font-size: 18px;
                font-weight: bold;
                color: #333;
                text-decoration: none;
                
            }
        }
    }
}

@media screen and (max-width: 1024px) {
  
  ul {
      padding: 0;
      margin: 0 15px;
  }

  .pagination {
      width: 100%;

      ul {

          li {
              margin: 0 5px;
              padding: 5px;
          }
      }
  }
}

@media screen and (max-width: 480px) {
    ul {
    
        li {
        

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
    }
}
@media screen and (max-width: 320px) {
    ul {
    
        li {
        

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
    }

    .pagination {
      width: 100%;

      ul {

          li {
              margin: 0 2px;
              padding: 4px;
          }
      }
  }
}
</style>