<template>
    <div class="main_display">
        <div class="main_section">
            <h3 class="title_header">Тоглоомын түвшин</h3>
            <div class="text_section">
    <p class="tutorial_text">
        1. Өгөгдсөн  хайх зүйлийг цаг дуусахаас өмнө mouse буюу хулганаараа олж дарах хэрэгтэй.
    </p>
    <p class="tutorial_text">
        2. Заасан хугацаанд олж чадаагүй бол ялагдана.
    </p>
    <p class="tutorial_text">
        3. Хэр хурдан хугацааны дотор олохоос хамаарч оноо өгөгдөнө.
    </p>
            </div>
            <b-button class="tutorial_confirm" variant="success" @click="back_button()">
                Гарах
            </b-button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    back_button() {
      this.$router.push({ name: 'MainDisplay' });
    },
  },
};
</script>

<style lang="scss" src="./GameTutorial.scss" scoped>

</style>
