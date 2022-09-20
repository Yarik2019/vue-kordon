<template>
<div class="bg-menu fixed-top">
        <nav class="navbar navbar-expand-lg  d-flex flex-lg-column navbar-menu">
            <div>
                <router-link class="d-lg-flex justify-content-lg-center" to="/"><div class="logo pl-lg-5"></div></router-link>   
                <button @click="ClcikMenu()" class="nav__toggel  d-lg-none" :class="menu ? 'active' : ''">
                    <span class="nav__toggel__item"></span>
                </button>
                <div class="menu_list" :class="menu ? 'active' : ''">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                        <li class="nav-item">
                            <router-link class="nav-link"  to="/lessons-schedule">Розклад занять</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link"  to="/videos">Відео</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link"  to="/gallerys">Галерея</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link"  to="/coaching-staff">Тренерський склад</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link"  to="/kyokushinkai">Кіокушинкай</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link"  to="/contacts">Контакти</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'NavbarVue',
    data() {
        return {
            menu: false
        }
    },
    methods: {
        ClcikMenu() {
            this.menu = !this.menu
        }
    }
}
</script>
<style lang="scss">
// .bg-menu {
//     background: white;
// }

.logo {
    background-image: url('../assets/img/logo_black.svg');
    background-repeat: no-repeat;
    width: 100px;
    height: 116px;
}

/*.nav__toggel */
.nav__toggel {
    width: 30px;
    padding: 10px 0;
    position: absolute;
    top: 24px;
    right: 24px;
    z-index: 1;

    background: none;
    border: 0;
    font-size: 0;
    color: transparent;
    cursor: pointer;

    &:focus {
        outline: 0;
    }

    &__item {
        display: block;
        width: 100%;
        height: 3px;

        background-color: #fff;

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        transition: transform .2s linear;
    }
}

.nav__toggel.active .nav__toggel__item {
    background: none;
}


.nav__toggel__item:before,
.nav__toggel__item:after {
    content: "";
    width: 100%;
    height: 3px;
    background-color: #fff;
    position: absolute;
    left: 0;
    z-index: 1;
    transition: transform .2s linear;
}

.nav__toggel__item:before {
    top: -8px;
}

.nav__toggel__item:after {
    bottom: -8px;
}

/*active*/
.nav__toggel.active .nav__toggel__item:before {
    transform-origin: left top;
    transform: rotate(45deg) translate3d(0px, -2px, 0);
}

.nav__toggel.active .nav__toggel__item:after {
    transform-origin: left bottom;
    transform: rotate(-45deg) translate3d(0px, 3px, 0);
}


.menu_list {
    &>ul {
        &>li {
            &>a {
                color: black!important;
                &::after {
                    content: "";
                    width: 0;
                    height: 1px;
                    display: block;
                    background-color: #C32424 !important;
                    transition: width .8s;
                }

                &:hover::after {
                    width: 100%;
                }
                &:hover{
                    color: black;
                }

                &.router-link-exact-active::after {
                    width: 100%;
                }
            }
        }
    }
}

// @media (max-width: 992px) 
@media (max-width: 992px) {
    .bg-menu {
        background: #000000 !important;
    }
    .navbar-menu{
        position: relative;
        z-index: 1000;
    }

    .logo {
        background-image: url('../assets/img/logo_white.svg');
        background-repeat: no-repeat;
        background-size: 80%;
        width: 50px;
        height: 55px;
        margin-left: 15px;
    }

    .menu_list {
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        z-index: 10;
        opacity: 0;
        transform: translateY(-200%);
        border-bottom-left-radius: 10%;
        border-bottom-right-radius: 10%;
        background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 157%);
        transition: 0.4s linear;
        &>ul {
            width: 100%;

            &>li {
                &>a {
                    color: white!important;
                    &.active{
                        color: rgb(84, 80, 80)!important;  
                    }
                    &:hover {
                        color: rgb(84, 80, 80) !important;
                    }
                }
            }
        }
    }

    .menu_list.active {
        display: flex;
        opacity: 1;
        transform: translateY(0%);
    }
}
</style>