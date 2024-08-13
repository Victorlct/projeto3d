<template>
    <div class="container d-flex flex-column py-5">
      <span class="text-center mt-5">
        Minha stack :)
      </span>
      <div class="grid-container p-3">
        <CardTech
          v-for="(card, index) in limitedCards"
          :key="index"
          :card-items="card"
          :background-color="getBackgroundColor(index)"
          @mouseenter="animateHoverStart"
          @mouseleave="animateHoverEnd"
        />
      </div>
    </div>
  </template>
  
  <script>
  import CardTech from './CardTech.vue';
  import { gsap } from 'gsap';
  import cards from '@/assets/cards.json';
  
  export default {
    name: 'CardGrid',
    components: {
      CardTech
    },
    data() {
      return {
        cards: cards
      };
    },
    computed: {
      limitedCards() {
        const pairs = [];
        for (let i = 0; i < 16; i += 2) {
          if (i + 1 < this.cards.length) {
            pairs.push([this.cards[i], this.cards[i + 1]]);
          }
        }
        return pairs;
      }
    },
    methods: {
      getBackgroundColor(index) {
        const cardIndex = index + 1;
        const highlightedIndices = [1, 3, 6, 8];
        return highlightedIndices.includes(cardIndex) ? 'var(--tertiaryColor)' : '#20a39e';
      },
      animateHoverStart(event) {
        gsap.to(event.currentTarget, {
          scale: 1.4,
          duration: 0.1,
          ease: 'power1.out',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          zIndex: 10
        });
      },
      animateHoverEnd(event) {
        gsap.to(event.currentTarget, {
          scale: 1,
          duration: 0.2,
          ease: 'power1.out',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: 1
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    width: 80vw;
    max-height: 80vh;
  }

    @media screen and (max-width: 768px) {
        .grid-container {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(4, 1fr);
            overflow: auto;
        }
    }

    @media screen and (max-width: 480px) {
        .grid-container {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(8, 1fr);
            overflow: auto;
        }
    }
  </style>
  