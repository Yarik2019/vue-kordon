<template>
    <div class="bg-white main-section">
        <div class="container pt-5">
            <div>
                <div class="row row-cols-1 row-cols-lg-2 pb-3">
                    <div class="col">
                        <div class="card mb-4 p-3 shadow w-100">
                            <img src="../assets/img/img_head.png" class="card-img-top rounded-3" alt="...">
                            <div class="mt-3">
                                <h5 class=" color-black font-weight-700 font-size-18 line-height-25 font-family-open-sans ">Відкритий кубок м.Львова з кіокушинкай карате 11.10.2020 року
                                </h5>
                                <div class="color-black font-weight-400 font-size-14 line-height-25 font-family-open-sans mt-3">Вітаємо призерів Відкритого кубку м. Львова з кіокушинкай
                                    карате:</div>
                                <div class="color-black font-weight-400 font-size-14 line-height-25 font-family-open-sans mb-0">2 місце – Порадюк Олександра;</div>
                                <div class="color-black font-weight-400 font-size-14 line-height-25 font-family-open-sans mb-0">2 місце – Сойко Владислав;</div>
                                <div class="color-black font-weight-400 font-size-14 line-height-25 font-family-open-sans mb-0">3 місце – Скопюк Назарій;</div>
                                <div class="color-black font-weight-400 font-size-14 line-height-25 font-family-open-sans mb-4">3 місце – Ткачук Антон.</div>
                                <div class="d-flex justify-content-between align-items-end">
                                    <a class="btns-home-mian bg-red color-white font-size-14 line-height-25 font-weight-400">Більше</a>
                                    <span class="date">12.10.2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-4 p-3 shadow w-100">
                            <img src="../assets/img/img_head.png" class="card-img-top rounded-3" alt="...">
                            <div class="mt-3">
                                <h5 class=" color-black font-weight-700 font-size-18 line-height-25 font-family-open-sans ">Відкритий кубок м.Львова з кіокушинкай карате 11.10.2020 року
                                </h5>
                                <div class="color-black font-weight-400 font-size-14 line-height-25 font-family-open-sans mt-3">Вітаємо призерів Відкритого кубку м. Львова з кіокушинкай
                                    карате:</div>
                                <div class="color-black font-weight-400 font-size-14 line-height-25 font-family-open-sans mb-0">2 місце – Порадюк Олександра;</div>
                                <div class="color-black font-weight-400 font-size-14 line-height-25 font-family-open-sans mb-0">2 місце – Сойко Владислав;</div>
                                <div class="color-black font-weight-400 font-size-14 line-height-25 font-family-open-sans mb-0">3 місце – Скопюк Назарій;</div>
                                <div class="color-black font-weight-400 font-size-14 line-height-25 font-family-open-sans mb-4">3 місце – Ткачук Антон.</div>
                                <div class="d-flex justify-content-between align-items-end">
                                    <a class="btns-home-mian bg-red color-white font-size-14 line-height-25 font-weight-400">Більше</a>
                                    <span class="date">12.10.2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-4 p-3 shadow w-100">
                            <img src="../assets/img/img_head.png" class="card-img-top rounded-3" alt="...">
                            <div class="mt-3">
                                <h5 class=" color-black font-weight-700 font-size-18 line-height-25 font-family-open-sans ">Відкритий кубок м.Львова з кіокушинкай карате 11.10.2020 року
                                </h5>
                                <div class="color-black font-weight-400 font-size-14 line-height-25 font-family-open-sans mt-3">Вітаємо призерів Відкритого кубку м. Львова з кіокушинкай
                                    карате:</div>
                                <div class="color-black font-weight-400 font-size-14 line-height-25 font-family-open-sans mb-0">2 місце – Порадюк Олександра;</div>
                                <div class="color-black font-weight-400 font-size-14 line-height-25 font-family-open-sans mb-0">2 місце – Сойко Владислав;</div>
                                <div class="color-black font-weight-400 font-size-14 line-height-25 font-family-open-sans mb-0">3 місце – Скопюк Назарій;</div>
                                <div class="color-black font-weight-400 font-size-14 line-height-25 font-family-open-sans mb-4">3 місце – Ткачук Антон.</div>
                                <div class="d-flex justify-content-between align-items-end">
                                    <a class="btns-home-mian bg-red color-white font-size-14 line-height-25 font-weight-400">Більше</a>
                                    <span class="date">12.10.2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'MainSection',
    data() {
        return {
            number: 1
        }
    },
    components: {
    },
    methods: {

    }
}
</script>
<style>
.btns-home-mian{
    padding: .3rem  4.1rem;
    border-radius: .31rem;
    cursor: pointer;
}
.date {
    font-size: .6rem;
    font-weight: 300;
    line-height: .8rem;
    color: #000000;
}

@media (max-width: 992px) {
    .main-section {
        padding-top: 3.5rem;
    }
}
</style>