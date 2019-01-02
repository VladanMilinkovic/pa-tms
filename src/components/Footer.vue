<template>
    <div>
        <footer>
            <div class="footer-body">
                <h2>Polo Alto</h2>
                <div class="footer-navigation">
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
        background-color: $footer-background;
        text-align: center;
        margin-top: 115px;
        font-family: $font-stack;


        .footer-body {
            width: 758px;
            margin: 0 auto;
        
            h2 {
                color: $footer-title;
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

                    .router-link-active {
                        border-bottom: 2px solid  $white;
                    }

                    li {
                        display: inline;

                        a {
                            font-size: 16px;
                            text-transform: uppercase;
                            padding: 0 10px;
                            text-decoration: none;
                            font-weight: bold;
                            font-family: $font-stack;
                            color: $footer-nav;

                            img {
                                height: 25px;
                                vertical-align: middle;
                            }
                        }
                    }
                }
            }

            .footer-content {
                color: $footer-text;
                font-size: 13px;
                text-align: center;
                padding: 40px 0;
                border-top: 1px solid $footer-border;
                border-bottom: 1px solid $footer-border;
            }

            .social {
                
                p {
                    font-size: 14px;
                    color: $footer-text;
                    text-align: center;
                    margin: 0;
                    padding: 38px 0;
                }
            }
        }
    }

@media screen and (max-width: 600px) {
  
    .footer-body {
        width: auto !important;

        .footer-navigation {

            ul { 
                padding: 0;
            }
        }
    }
}

@media screen and (max-width: 480px) {
    footer {
        margin-top: 70px;

        .footer-body {
            width: 350px !important;

            .footer-navigation {

                ul {

                    li {

                        a {
                            padding: 0 5px;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 320px) {
    footer {
        margin-top: 70px;

        .footer-body {
            width: 260px !important;

            h2 {
                padding: 55px 0;
            }

            .footer-content {
                padding: 30px 0;
            }

            .footer-navigation {

                ul {

                    li {
                        display: block;
                        padding: 10px 0;

                    }
                }
            }
        }
    }
}

</style>
