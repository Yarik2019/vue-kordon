<template>
    <div class="kyokushinkai-navbar">
        <div class="container">
            <div class="kyokushinkai d-flex justify-content-center flex-wrap">
                <router-link to="/kyokushinkai" class="nav-link kyokushinkai__link">Філософія</router-link>
                <router-link to="/mas-oyama" class="nav-link kyokushinkai__link">Мас Ояма</router-link>
                <router-link to="/kumite-kata" class="nav-link kyokushinkai__link">Куміте / Ката</router-link>
                <router-link to="/the-training-process-0f-masutatsu-oyama" class="nav-link kyokushinkai__link">
                    Тренувальний процес Масутацу
                    Оями</router-link>
                    
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'KyokushinkaiNavbar'
}
</script>
<style lang="scss">
.kyokushinkai-navbar {
    padding-top: 12.5rem;
}

.kyokushinkai {
    &__link {
        color: black !important;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 24px;
        line-height: 33px;
        transition: .4s linear;

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

        &:hover {
            font-weight: 700;
            font-size: 1.5rem;
            line-height: 3rem;
        }

        &.router-link-exact-active {
            font-weight: 700;
            font-size: 1.5rem;
            line-height: 3rem;
        }

        &.router-link-exact-active::after {
            width: 100%;
        }
    }
}

@media (max-width: 992px) {
    .kyokushinkai-navbar {
        padding-top: 6rem;
    }
}
</style>