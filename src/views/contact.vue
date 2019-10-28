<template>
  <div class="centerContact">
    <div class="mainContact">
      <Menu />
      <div class="cricleTop">
        <figure>
          <img src="../img/contact/middlecircle.png" alt="">
        </figure>
      </div>
      <div class="cornerUp">
        <h4 class="horizontalRightC">+57-318 813 4406</h4>
        <h4 class="verticalRightc">+57-318 813 4406</h4>
      </div>
      <div class="iconRRSS">
        <div class="rrss">
            <div class="instagram">
              <a target="_blank" href="https://www.instagram.com/circuandantediseno/?hl=es-la" >
              <img src="../img/contact/instagram.png" alt="" width="100px"></a>
              </div>
            <div id="github"><a target="_blank" href="https://github.com/circuandante" class="github">
              <img src="../img/contact/github.png" alt="" width="100px"></a>
              </div>
            <div><a target="_blank" href="https://dribbble.com/anriaco" class="behance">
              <img src="../img/contact/behance.png" alt="" width="100px"></a>
              </div>
            <div id="twitter"><a target="_blank" href="https://twitter.com/circuandante" class="twitter">
              <img src="../img/contact/twitter.png" alt="" width="100px"></a>
            </div>
              <!-- ent space -->
              <div class="endSpace">
                <div>
                  <a target="_blank" href="https://www.linkedin.com/in/anriaco/" class="linkedin">
                  <img src="../img/contact/linkedin.png" alt="" width="100px"></a>
                </div>
                <div>
                  <a target="_blank" href="https://www.facebook.com/Circuandante" class="facebook">
                  <img src="../img/contact/facebook.png" alt="" width="100px">
                  </a>
                </div>
              </div>
        </div>
      </div>
      <!-- <div class="chatbot">
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <input type="text" name="" id="">
      </div> -->
      <div class="cornerNickLeft">
          <h4 class="horizontalLeft">circuandante</h4>
          <h4 class="verticalLeft">@circuandantediseno</h4>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('changeColor');
  },
};
</script>

<style scoped>
/* @import '../css/main.css'; */
@import '../css/contact.css';
</style>
