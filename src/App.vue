<template>
    <Header />
    <div class="sections">
      <section id="home" class="section">
        <div class="row w-100 h-100 ">
          <div class="col-12 col-md-6 pt-5 pt-md-0 container-home">
            <TypeItComponent />
          </div>
          <div class="col-12 col-md-6 container-home">
            <div class="row">
              <div class="col-6">
                <span class="fs-5" data-aos="fade-in" data-aos-duration="3000">Esse sou eu :)</span>
                <img src="arrow.gif" class="h-50 w-50" data-aos="fade-in" data-aos-duration="2000">
              </div>
              <div class="col-6">
                <img src="zap.jpeg" alt="imagem de perfil" class="rounded-mask" data-aos="fade-left" data-aos-duration="2000">
              </div>
            </div>
            <div class="row" data-aos="fade-up" data-aos-duration="2000">
              <span class="fs-4"> Sou desenvolvedor Full-Stack, curioso e comunicativo </span>
            </div>
          </div>
        </div>
      </section>
      <section id="techs" class="section">
        <CardGrid />
      </section>
      <section id="contato" class="section">
        <embed src="cv.pdf" type="application/pdf" width="100%" height="75%">
      </section>
    </div>
    <ScrollComponent />
</template>

<script>
import Header from './components/HeaderPadrao.vue';
import ScrollComponent from './components/ScrollComponent.vue';
import TypeItComponent from './components/TypeItComponent.vue';
import CardGrid from './components/CardGrid.vue';

export default {
  name: 'App',
  components: {
    Header,
    ScrollComponent,
    TypeItComponent,
    CardGrid
  }
}
</script>
