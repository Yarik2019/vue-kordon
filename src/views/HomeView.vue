<template>
  <div class="home">
    <MainVue/>
    <MainSectionVue/>
  </div>
</template>

<script>
import MainVue from '@/components/Main.vue';
import MainSectionVue from '@/components/MainSection.vue';
export default {
  name: 'HomeView',
  components: {
    MainVue,
    MainSectionVue
  }
}
</script>
