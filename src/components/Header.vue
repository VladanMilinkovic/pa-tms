<template>
    <div id="nav">
        <div class="header-title">
            <h2>Palo Alto</h2>
        </div>
        <div class="header-navigation">
            <ul  v-bind:class="{'toggle-on': isActive}">
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
                <li>
                    <a href="#" class="icon" @click="collapseMenu">
                        <img src="@/assets/img/burger.png" alt="burger">
                    </a>
                </li>
            </ul>
        </div>    
    </div>
</template>

<script lang="ts">

export default {
    data() {
        return {
            isActive: false,
        };
    },

    methods: {

        collapseMenu() {
            this.isActive = !this.isActive;
        },
    },
};
</script>

<style lang="scss" scoped>

#nav {
    display: flex; 
    justify-content: space-between;
    padding: 75px 0;
    
    .header-title {

        h2 {
            font-family: $font-stack;
            font-weight: bold;
            font-style: italic;
            font-size: 42px;
            color: $header-title-logo;
            margin: 0;
        }
    }

    .header-navigation {

        ul {
            list-style-type: none;

            .router-link-active {
                border-bottom: 2px solid $navigation-border-active;
            }

            li {
                display: inline;

                .icon {
                    display: none;
                }

                a {
                    font-size: 16px;
                    text-transform: uppercase;
                    padding: 0 10px;
                    text-decoration: none;
                    font-weight: bold;
                    font-family: $font-stack;
                    color: $navigation-text;

                    img {
                        height: 25px;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 600px) {
  #nav {
    display: block;
    margin: 0 15px;

      .header-navigation {

          
          ul {

                li:not(:last-child) {
                  display: none;
                }
                li {

                    .icon {
                        display: inline-block;

                        img {
                            height: 25px;
                            vertical-align: middle;
                            right: 15px;
                            top: 80px;
                            position: absolute;
                        }
                    }
                }
            }

            .toggle-on {
                padding: 0;
                margin: 0 15px;

                li {
                    display: block !important;
                    text-align: center;
                    padding: 5px 0;
                }
            }
      }
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}
@media screen and (max-width: 480px) {
    #nav {
        padding: 64px 0 50px 0;
    }
}
</style>

