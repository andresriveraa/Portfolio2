<template>
  <div class="textItem">
    <h1>{{itemPort.name}}</h1>
    <h1>{{itemPort.description}}</h1>
    <div class="imageprohjects" v-for="imgItem in itemPort.images" :key="imgItem.id">
      <img :src="require(`@/img/${imgItem}`)" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemPort: {
      type: Object,
      required: true,
    },
  },
};
</script>
