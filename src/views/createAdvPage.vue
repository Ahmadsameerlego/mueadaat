<template>

    <section>
        <div class="container create-adv">
            <div class="choose">
                <h2 class="choose-title">انشاء اعلان</h2>
                <p class="choose-description">اختر نوع اعلانك من فضلك !</p>
                <ul class="sections-items">
                    <li>
                        <router-link data-bs-toggle="modal" to="#confirmBefore" role="button">
                            <div class="section-icon workers">
                                <img src="../assets/icons/workers.png" />
                            </div>
                            <h3 class="section-title">عمالة</h3>
                        </router-link>
                    </li>
                    <li>
                        <router-link data-bs-toggle="modal" to ="#confirmBefore" role="button">
                            <div class="section-icon">
                                <img src="../assets/icons/equipments.png" />
                            </div>
                            <h3 class="section-title">معدات</h3>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <modalConfirmBefore />
</template>
<script setup>
import modalConfirmBefore from '../components/global/modal/modalConfirmBefore.vue'
</script>
<style scoped>
.create-adv{
    background-color: #EDEDED;
    padding: 60px 0;
}
.choose{
    width: 400px;
    background-color: #fff;
    margin: 0 auto;
    padding: 32px;
    text-align: center;
    box-shadow:  0 0 0 10px #000;
    box-shadow: 1px 1px 5px 2px rgb(0 0 0 / 17%);

}
section{
    padding: 100px;
}
.sections-items{
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
}
.section-icon{
    background-color: #000;
    width: 100px;
    height: 100px;
    line-height: 90px;
    border-radius: 50%;
    text-align: center;
    display: block;
}
.section-icon.workers{
    background-color: #FCAC62;
}
.sections-items .section-title{
    font-size: 18px;
    color: #000;
    text-decoration: none;
}
</style>