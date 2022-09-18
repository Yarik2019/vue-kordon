<template>
    <div class="notFound bg-white d-flex justify-content-center align-items-center">
        <div class="notFound__block position-absolute ">
            <div class="line_block_top d-flex justify-content-end">
                <div class="line_top bg-red"></div>
            </div>
            <div class="block_text color-black d-flex flex-column justify-content-center text-center">
                <h1 class="notFound_404">404</h1>
                <h6 class="pageNotFound">Сторінку не знайдено</h6>
            </div>
            <div class="line_bottom bg-red mt-5"></div>
            <div class="d-flex flex-column text-center mt-5">
                <b-link to="/" class="color-red nav-link">Повернутися на головну</b-link>
                <b-link class="color-red nav-link">Назад</b-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NotFoundVue'
}
</script>
<style lang="scss">
.notFound {
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: 1;

    &::before {
        position: absolute;
        z-index: 2;
        content: '';
        display: block;
        background-image: url('../assets/img/bg_img_six.svg');
        background-repeat: no-repeat;
        background-size: 33%;
        height: 100%;
        width: 100%;
    }

    &::after {
        position: absolute;
        z-index: 2;
        content: '';
        display: block;
        background-image: url('../assets/img/bg_img_seven.svg');
        background-repeat: no-repeat;
        background-position-x: right;
        background-position-y: bottom;
        background-size: 30%;
        height: 100%;
        width: 100%;
    }

    &__block {
        width: 100%;
        z-index: 3;

        .line_top {
            width: 65%;
            height: 2px;

            &::after {
                content: '';
                display: block;
                background: #C42424;
                width: 30%;
                height: 1px;
                margin-top: 6px;
                margin-left: 40px;
            }
        }

        .block_text {
            .notFound_404 {
                font-weight: 800;
                font-size: 20rem;
            }

            .pageNotFound {
                font-weight: 800;
                font-size: 2rem;
            }
        }

        .line_bottom {
            position: relative;
            z-index: 3;
            width: 65%;
            height: 2px;

            &::before {
                content: '';
                display: block;
                background: #C42424;
                width: 30%;
                height: 1px;
                margin-top: -5px;
                position: absolute;
                right: 80px;
            }
        }
    }
}

// media 700

@media (max-width: 700px) {

    .notFound {
        &__block {
            .block_text {
                .notFound_404 {
                    font-weight: 800;
                    font-size: 12rem;
                }

                .pageNotFound {
                    font-weight: 800;
                    font-size: 1.8rem;
                }
            }
        }
    }
}
</style>