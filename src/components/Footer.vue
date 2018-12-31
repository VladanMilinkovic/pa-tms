<template>
    <div>
        <footer>
            <div class="footer-body">
                <h2>Polo Alto</h2>
                <div class="footer-navigation">
                    <ul>
                        <li>
                            <router-link to="/">Home</router-link>
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
                                <img src="@/assets/img/search_white.png" alt="Search">
                            </a>
                        </li>
                    </ul>
                </div> 
                <div class="footer-content">
                    Nunc placerat dolor at lectus hendrerit dignissim. Ut tortor sem,
                    consectetur nec hendrerit ut, ullamcorper ac odio. Donec viverra
                    ligula at quam tincidunt imerdiet. Nulla mattis tincdunt auctor.
                </div>
                <div class="social">
                    <p>
                        © 2015 - Palo Alto. All Rights Reserved. Designed & Developed by VladanMilinkovic
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
}
</script>

<style lang="scss" scoped>
    footer {
        background-color: #5c6bc0;
        text-align: center;
        margin-top: 115px;
        font-family: 'Lato';


        .footer-body {
            width: 758px;
            margin: 0 auto;
        
            h2 {
                color: #4a569a;
                font-size: 36px;
                font-weight: bold;
                font-style: italic;
                padding: 65px 0;
                margin: 0;
            }

            .footer-navigation {
                ul {
                    list-style-type: none;
                    margin: 0 0 40px 0;

                    li {
                        display: inline;

                        a {
                            font-size: 16px;
                            text-transform: uppercase;
                            padding: 0 10px;
                            text-decoration: none;
                            font-weight: bold;
                            font-family: 'Lato';
                            color: #ffffff;

                            img {
                                height: 25px;
                                vertical-align: middle;
                            }
                        }
                    }
                }
            }

            .footer-content {
                color: #9da6d9;
                font-size: 13px;
                text-align: center;
                padding: 40px 0;
                border-top: 1px solid #5765b5;
                border-bottom: 1px solid #5765b5;
            }

            .social {
                
                p {
                    font-size: 14px;
                    color:#9da6d9;
                    text-align: center;
                    margin: 0;
                    padding: 38px 0;
                }
            }
        }
    }

</style>
