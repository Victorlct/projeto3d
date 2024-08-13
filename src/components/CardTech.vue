<template>
  <div class="card" :style="{ backgroundColor: backgroundColor }">
    <div v-for="(item, index) in cardItems" :key="index" class="card-item tech-container h-100">
      <img :src="item.img" class="card-image" />
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardTech',
  props: {
    cardItems: {
      type: Array,
      required: true
    },
    backgroundColor: {
      type: String,
      default: 'transparent' // Default to transparent if not specified
    }
  }
};
</script>

<style scoped>
.card {
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 12px;
  position: relative;
  gap: 4px;
}

.card-item {
  display: flex;
  align-items: center;
}

.card-image {
  width: 60px;
  max-height: 80px;
}

.tech-container{
    width: 100%;
    color: #ffffff;
    border-radius: 8px;
    padding: 8px;
    gap: 12px;
}
</style>
