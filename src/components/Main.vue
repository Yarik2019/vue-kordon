<template>
    <div class="main d-lg-block d-none">
        <div class="main__block d-flex flex-column align-items-center">
            <h5 class="main__block__text">
                <div class="line-top"></div>Дитячий Спортивний Клуб КОРДОН <div class="block-line d-flex justify-content-end">
                    <div class="block-line__bottom">
                    </div>
                </div>
            </h5>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MainVue'

}
</script>
<style lang="scss">
.main {
    background-image: url('../assets/img/header_img.png');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    position: relative;

    &::before,
    &::after {
        content: '';
        display: block;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 3;
    }

    &::before {
        background-image: url('../assets/img/bg-img_one.svg');
        background-position-x: right;
        background-size: 20%;

    }

    &::after {
        background-image: url('../assets/img/bg_img_two.svg');
        background-position-x: left;
        background-position-y: bottom;
        background-size: 7%;
    }

    &__block {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 3;
        padding-top: 14rem;

        &__text {
            font-size: 2.6rem;
            color: #FFFFFF;
            font-weight: 700;
            line-height: 4rem;

            .line-top {
                width: 35%;
                background: #C42424;
                height: 2px;
                margin-left: 2rem;
                position: relative;

                &::before {
                    content: '';
                    margin-top: -0.6rem;
                    margin-left: 1rem;
                    width: 65%;
                    height: 2px;
                    background: #C42424;
                    position: absolute;

                }
            }

            .block-line {
                width: 96%;
                &__bottom {
                    width: 35%;
                    background: #C42424;
                    height: 2px;
                    position: relative;
                    right: 0;

                    &::before {
                        content: '';
                        margin-top: 0.6rem;
                        width: 65%;
                        height: 2px;
                        background: #C42424;
                        position: absolute;
                        right: 1rem;

                    }
                }
            }
        }
    }
}
</style>