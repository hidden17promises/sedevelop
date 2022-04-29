<template>
    <div class="play_display">
        <h2 class="play_header">Тоглоомын түвшин</h2>
        <b-button v-for="(b, index) in button" :key="index" variant="light"
            :style="b.color"
            @click="chosen_level(b.level)" class="play_button">
            {{b.label}}
        </b-button>
        <b-button variant="success" @click="confirmed_play()" class="play_confirm">Тоглох</b-button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      level: '',
      color: '',
      button: [
        { level: 'easy', label: 'Амархан', color: '' },
        { level: 'normal', label: 'Дундаж', color: '' },
        { level: 'hard', label: 'Хэцүү', color: '' },
      ],
    };
  },
  methods: {
    chosen_level(args) {
      this.level = args;
      this.button.forEach((button) => {
        if (button.level === args) {
          button.color = 'background-color:yellow;';
        } else {
          button.color = '';
        }
      });
    },

    confirmed_play() {
      if (this.level) {
        this.$router.push({ path: `/game/${this.level}` });
      }
    },
  },
};
</script>

<style lang="scss" src="./Difficulties_play.scss" scoped>

</style>
