<template>
    <div>
        <ul v-if="posts && posts.length">
            <li v-for="post of posts" :key="post.id">
                <p><strong>{{post.title}}</strong></p>
                <p>{{post.body}}</p>
                <router-link :to="'/archive/' + post.id">/user/foo</router-link>
            </li>
        </ul>

        <ul v-if="errors && errors.length">
            <li v-for="error of errors" :key="error.id">
            {{error.message}}
            </li>
        </ul>

        <div v-if="showPagination">
             <ul>
                <li v-for="(total, index) of totalPosts" :key="index" :class="{ highlight:index === selected }">
                    <a href="#" @click="selectPage" >{{total}}</a>
                </li>
             </ul>
             <ul>
                <li>
                    <a href="#" @click="nextOrPrev">Prev</a>    
                </li> 
                <li>
                    <a href="#" @click="nextOrPrev">Next</a>
                </li>
             </ul>   
        </div>

    </div>
   
</template>



<script>
import axios from 'axios'

export default {
    data() {
        return {
            posts: [],
            errors: [],
            totalPosts: [],
            selected: 0,
            showPagination: false,
            pageValue: 1
        }
    },

    created () {
        axios.get(`http://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                for(let i=1; i*10 <= response.data.length; i++) {
                    this.totalPosts.push(i);
                }
                axios.get(`http://jsonplaceholder.typicode.com/posts?_page=1`)
                    .then(response => {
                        this.posts = response.data;
                        this.showPagination = true;
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            })
            .catch(e => {
            this.errors.push(e)
        })
    },

    methods: {

        selectPage($event) {
            this.pageValue = $event.srcElement.innerText;
            this.selected = this.pageValue - 1;
            axios.get(`http://jsonplaceholder.typicode.com/posts?_page=` + this.pageValue)
                .then(response => {
                    this.posts = response.data;
                })
                .catch(e => {
                    this.errors.push(e)
            })
        },

        nextOrPrev($event) {
            const element = $event.srcElement.innerText;
            let post;
            if(element === 'Prev') {
                post = this.pageValue - 1;
                this.selected = post - 1;
            }

            if( element === 'Next') {
                post = this.pageValue + 1;
                this.selected = this.pageValue;
            }
            this.pageValue = post;
            axios.get(`http://jsonplaceholder.typicode.com/posts?_page=` + post)
                .then(response => {
                    this.posts = response.data;
                })
                .catch(e => {
                    this.errors.push(e)
            })
        },
    }
}
</script>

<style scoped lang="scss">
ul {
    
    li {
        display: inline;
        padding: 0 5px;

    }
    .highlight {
        background: #42b983;
        border-radius: 50%;

        a {
            text-decoration: none;
            color: #fff;

        }
    }
}
</style>