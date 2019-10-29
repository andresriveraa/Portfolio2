<template>
  <div class="contentProject">
    <div class="textItem">
      <div class="imgProjects">
        <div class="mainImg">
          <figure>
            <img :src="require(`@/img/${itemPort.imgMain}`)" class="imgGridProjectMain">
          </figure>
        </div>
        <div class="smallIMg">
          <div class="imageprohject" v-for="imgItem in itemPort.images" :key="imgItem.id">
            <img :src="require(`@/img/${imgItem}`)" class="imgGridProject">
          </div>
        </div>
      </div>
      <div class="contentTextProject">
        <div class="textProjectLeft">
          <h1 class="nameProject">{{itemPort.name}}</h1>
          <p class="descriptionProject">{{itemPort.description}}</p>
          <p v-show="itemPort.url"><small>
            <a :href="itemPort.url" target="_blank" class="LinkPro">Ir al sitio</a>
          </small></p>
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
