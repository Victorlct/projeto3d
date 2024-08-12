<template>
  <div ref="typeItContainer" class="typeit-container px-5 px-md-3 text-start"></div>
</template>

<script>
import '../assets/typeit.css';
import TypeIt from 'typeit';

export default {
  name: 'TypeItComponent',
  mounted() {
    this.initTypeIt();
  },
  methods: {
    initTypeIt() {
      new TypeIt(this.$refs.typeItContainer, {
        startDelay: 900,
        speed: 50,
        loop: false
      })
        .type('<span class="typeit--title">Ola</span>, seja bemvin', { delay: 100 })
        .move(-13, { delay: 50 })
        .delete(1)
        .type('<span class="typeit--title">á</span>', { delay: 400 })
        .move(10, { delay: 50 })
        .type('-', { delay: 400 })
        .move(3, { delay: 50 })
        .type('do', { delay: 200 })
        .delete(1)
        .type('a?', { delay: 200 })
        .delete(2)
        .type('o(a) à', { delay: 400 })
        .move(null, { to: "END" })
        .break({ delay: 100 })
        .type('<strong>melhor</strong>', { delay: 400 })
        .delete(6)
        .type('minha landing-page.', {speed: 100,})
        .break({ delay: 100 })
        .break({ delay: 100 })
        .type('<em class="typeit--alias">- Victor La Corte</em>')
      .go();
    }
  }
}
</script>
