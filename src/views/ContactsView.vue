<template>
    <div class="contanct-block bg-white">
        <div class="container">
            <h3 class="text-center pb-lg-5 pb-4 font-size-36 font-weight-700 color-black line-height-49">Контакти</h3>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-sm-start ">
                <div class="col">
                    <div class="mb-4 mb-lg-0">
                        <h4 class="mb-3 font-weight-700 font-size-24 color-black line-height-33">Мандрикін Богдан
                            Сергійович</h4>
                        <h5 class="mb-1 font-weight-400 color-black line-height-33">+38050 510 12 53</h5>
                        <h5 class="color-black font-weight-400 line-height-33">+38068 815 00 04</h5>
                    </div>
                </div>
                <div class="col">
                    <div class="mb-4 mb-lg-0">
                        <h4 class="mb-3 font-weight-700 font-size-24 color-black line-height-33">Гірський Ігор
                            Ростиславович</h4>
                        <h5 class="mb-1 font-weight-400 color-black line-height-33">+38050 510 12 53</h5>
                        <h5 class="color-black font-weight-400 line-height-33">+38068 815 00 04</h5>
                    </div>
                </div>
                <div class="col">
                    <div class="mb-4 mb-lg-0">
                        <h4 class="mb-3 font-weight-700 font-size-24 color-black line-height-33">Глущук Тарас
                            Олексійович</h4>
                        <h5 class="mb-1 font-weight-400 color-black line-height-33">+38050 510 12 53</h5>
                        <h5 class="color-black font-weight-400 line-height-33">+38068 815 00 04</h5>
                    </div>
                </div>
            </div>
            <form action="" class="form pb-5">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-3 mt-lg-5">
                    <div class="col">
                        <div class="mb-4 mb-lg-3">
                            <input type="text" class="w-100 form__input" id="exampleFormControlInput1"
                                placeholder="Ім’я">
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-4 mb-lg-3">
                            <input type="text" class="w-100 form__input" id="exampleFormControlInput1"
                                placeholder="Прізвище">
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <input type="text" class="w-100 form__input" placeholder="Пошта">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mb-4 mb-lg-3">
                            <textarea class="w-100 form__input" rows="1" placeholder="Повідомлення..."></textarea>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-4">
                    <button class="btns bg-red color-white font-size-18 line-height-25 font-weight-400">Відправити</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: "ContactsView"
}
</script>
<style lang="scss">
.contanct-block {
    padding-top: 12rem;
    height: 100vh;
}

.form {
    height: 100%
}

.form__input {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.6rem;
    color: #000000;

    background: transparent;
    border: 0;
    padding-left: 0.6rem;
    border-bottom: 1px solid #000000;
    outline: none;
}

.btns {
    padding: 0.5rem 2.5rem;
    border-radius: 0.3rem;
}

@media (max-width: 992px) {
    .contanct-block {
        padding-top: 6rem;
    }
}

@media (max-width: 767px) {
    .contanct-block {
        height: 100%;
    }
}
</style>