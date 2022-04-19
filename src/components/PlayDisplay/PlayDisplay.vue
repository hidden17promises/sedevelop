<template>
    <div class="main_display">
        <div class="main_section">
            <h3 class="title_header">Тоглоомын түвшин</h3>
            <b-button
                class="game_level"
                @click="game_difficulties('easy')"
                variant="light">
                    Амархан
            </b-button>
            <b-button
                class="game_level"
                @click="game_difficulties('normal')"
                variant="light">
                    Дундаж
            </b-button>
            <b-button
                class="game_level"
                @click="game_difficulties('hard')"
                variant="light">
                    Хэцүү
            </b-button>
            <b-button class="game_confirm" @click="game_confirm()" variant="success">
              Тоглох
            </b-button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      diff: '',
    };
  },
  methods: {
    game_difficulties(name) {
      this.diff = name;
    },
    game_confirm() {
      this.$router.push({ name: 'GameSection', params: { diff: this.diff } });
    },
  },
};
</script>

<style lang="scss" src="./PlayDisplay.scss" scoped>

</style>
