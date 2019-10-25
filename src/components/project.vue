<template>
  <div class="contentProject">
    <div class="textItem">
      <div class="imgProjects">
        <div class="mainImg">
          <figure>
            <img :src="require(`@/img/${itemPort.imgMain}`)" alt="">
          </figure>
        </div>
        <div class="imageprohject" v-for="imgItem in itemPort.images" :key="imgItem.id">
          <img :src="require(`@/img/${imgItem}`)" alt="">
        </div>
      </div>
      <div class="contentTextProject">
        <div class="textProject">
          <h1 class="nameProject">{{itemPort.name}}</h1>
          <p class="descriptionProject">{{itemPort.description}}</p>
        </div>
      </div>
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

<style>
@import '../css/project.css';
</style>
