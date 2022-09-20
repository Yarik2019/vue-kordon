<template>
  <div>
    <NavbarVue/>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script>
  import NavbarVue from './components/Navbar.vue';
export default {
  name:'app',
  components:{
    NavbarVue
  }

}
</script>

<style lang="scss">
@import url('./assets/scss/_custom.css');
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
