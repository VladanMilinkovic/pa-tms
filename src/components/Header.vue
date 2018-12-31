<template>
    <div id="nav">
        <div class="header-title">
            <h2>Palo Alto</h2>
        </div>
        <div class="header-navigation">
            <ul>
                <li>
                    <router-link to="/" exact>Home</router-link>
                </li>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
                <li>
                    <router-link to="/archive">Archive</router-link>
                </li>
                <li>
                    <router-link to="/contact">Contact</router-link>
                </li>
                <li>
                    <a href="#">
                        <img src="@/assets/img/search_black.png" alt="Search">
                    </a>
                </li>
            </ul>
        </div>    
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
}
</script>

<style lang="scss" scoped>
#nav {
    display: flex; 
    justify-content: space-between;
    padding: 75px 0;
    
    .header-title {

        h2 {
            font-family: 'Lato';
            font-weight: bold;
            font-style: italic;
            font-size: 42px;
            color: #333333;
            margin: 0;
        }
    }

    .header-navigation {

        
        ul {
            list-style-type: none;

            li {
                display: inline;

                a {
                    font-size: 16px;
                    text-transform: uppercase;
                    padding: 0 10px;
                    text-decoration: none;
                    font-weight: bold;
                    font-family: 'Lato';
                    color: #333333;

                    img {
                        height: 25px;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
}
</style>

