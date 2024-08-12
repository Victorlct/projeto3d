<template>
  <div class="container">
    <div v-if="!isExpanded" class="button-container">
      <button @click="expand">Clique Aqui</button>
    </div>
    <div v-else class="grid-container" ref="gridContainer">
      <div v-for="i in 8" :key="i" class="card">Card {{ i }}</div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'AnimatedButton',
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    expand() {
      this.isExpanded = true;
      
      // Animação para o botão
      gsap.to('.button-container', {
        scale: 0,
        duration: 0.5,
        ease: 'power1.inOut',
        onComplete: () => {
          // Esconder o botão e iniciar a animação do grid
          gsap.set('.button-container', { display: 'none' });
          gsap.fromTo('.grid-container', {
            opacity: 0,
            scale: 0
          }, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'power1.inOut'
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent; /* Fundo branco */
}

.button-container {
  position: absolute;
  text-align: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 colunas de largura igual */
  grid-template-rows: repeat(2, 1fr);    /* 2 linhas de altura igual */
  gap: 10px;
  width: 80vw;
  height: 80vh;
  position: relative;
  opacity: 0; /* Começa invisível */
  scale: 0;   /* Começa em escala 0 */
}

.card {
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
