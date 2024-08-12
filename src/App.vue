<template>
    <Header />
    <div class="sections">
      <section id="home" class="section">
        <div class="row w-100">
          <div class="col-6 px-4 d-flex align-items-center">
            <TypeItComponent />
          </div>
          <div class="col-6">
            <ThreeDImage />
          </div>
        </div>

      </section>
      <section id="techs" class="section"><AnimatedButton /></section>
      <section id="contato" class="section">Contato com curriculo</section>
    </div>
    <ScrollComponent />
</template>

<script>
import Header from './components/HeaderPadrao.vue';
import ScrollComponent from './components/ScrollComponent.vue';
import TypeItComponent from './components/TypeItComponent.vue';
import ThreeDImage from './components/ThreeDImage.vue';
import AnimatedButton from './components/AnimatedButton.vue';

export default {
  name: 'App',
  components: {
    Header,
    ScrollComponent,
    TypeItComponent,
    ThreeDImage,
    AnimatedButton
  }
}
</script>
