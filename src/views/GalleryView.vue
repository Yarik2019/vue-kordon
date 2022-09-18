<template>
    <div class="photos-section">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 pb-3 pb-lg-5">
                <div class="col col-md-6 col-lg-4 mb-4">
                    <div class="photos-block">
                        <img class="photo" src="../assets/img/image1.jpg" alt="">
                        <div class="info-block text-center d-flex align-items-center">
                            <h5 class="info">30-та зимова школа з кіокушинкай карате під керівництвом шихана Гончаренка
                                Олександра, м. Вінниця – 2020</h5>
                        </div>
                    </div>
                </div>
                <div class="col col-md-6 col-lg-4 mb-4">
                    <div class="photos-block">
                        <img class="photo" src="../assets/img/image1.jpg" alt="">
                        <div class="info-block text-center d-flex align-items-center">
                            <h5 class="info">30-та зимова школа з кіокушинкай карате під керівництвом шихана Гончаренка
                                Олександра, м. Вінниця – 2020</h5>
                        </div>
                    </div>
                </div>
                <div class="col col-md-6 col-lg-4 mb-4">
                    <div class="photos-block">
                        <img class="photo" src="../assets/img/image1.jpg" alt="">
                        <div class="info-block text-center d-flex align-items-center">
                            <h5 class="info">30-та зимова школа з кіокушинкай карате під керівництвом шихана Гончаренка
                                Олександра, м. Вінниця – 2020</h5>
                        </div>
                    </div>
                </div>
                <div class="col col-md-6 col-lg-4 mb-4">
                    <div class="photos-block">
                        <img class="photo" src="../assets/img/image1.jpg" alt="">
                        <div class="info-block text-center d-flex align-items-center">
                            <h5 class="info">30-та зимова школа з кіокушинкай карате під керівництвом шихана Гончаренка
                                Олександра, м. Вінниця – 2020</h5>
                        </div>
                    </div>
                </div>
                <div class="col col-md-6 col-lg-4 mb-4">
                    <div class="photos-block">
                        <img class="photo" src="../assets/img/image1.jpg" alt="">
                        <div class="info-block text-center d-flex align-items-center">
                            <h5 class="info">30-та зимова школа з кіокушинкай карате під керівництвом шихана Гончаренка
                                Олександра, м. Вінниця – 2020</h5>
                        </div>
                    </div>
                </div>
                <div class="col col-md-6 col-lg-4 mb-4">
                    <div class="photos-block">
                        <img class="photo" src="../assets/img/image1.jpg" alt="">
                        <div class="info-block text-center d-flex align-items-center">
                            <h5 class="info">30-та зимова школа з кіокушинкай карате під керівництвом шихана Гончаренка
                                Олександра, м. Вінниця – 2020</h5>
                        </div>
                    </div>
                </div>
                <div class="col col-md-6 col-lg-4 mb-4">
                    <div class="photos-block">
                        <img class="photo" src="../assets/img/image1.jpg" alt="">
                        <div class="info-block text-center d-flex align-items-center">
                            <h5 class="info">30-та зимова школа з кіокушинкай карате під керівництвом шихана Гончаренка
                                Олександра, м. Вінниця – 2020</h5>
                        </div>
                    </div>
                </div>
                <div class="col col-md-6 col-lg-4 mb-4">
                    <div class="photos-block">
                        <img class="photo" src="../assets/img/image1.jpg" alt="">
                        <div class="info-block text-center d-flex align-items-center">
                            <h5 class="info">30-та зимова школа з кіокушинкай карате під керівництвом шихана Гончаренка
                                Олександра, м. Вінниця – 2020</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "GalleryView"
}
</script>
<style lang="scss">
.photos-section {
    padding-top: 12.5rem;
    background: #E5E5E5 !important;

    .photos-block {
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 10px 10px rgba(92, 92, 92, 0.25);
        position: relative;
        overflow: hidden;

        .photo {
            width: 100%;
            height: 100%;
            position: relative;

        }

        .info-block {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
            transform: translateY(100%);
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
            transition: .4s linear;

            .info {
                color: #FFFFFF;
                font-family: 'Open Sans';
                font-weight: 300;
                font-size: 1.1rem;
                line-height: 1.6rem;
            }
        }

        &:hover>.info-block {
            opacity: 1;
            transform: translateY(0);
        }
    }
}

@media (max-width: 992px) {
    .photos-section {
        padding-top: 7.5rem;
    }
}
</style>