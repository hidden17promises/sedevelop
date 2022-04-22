<template>
    <div class="badge_display">
        <h2 class="badge_header">Таны түвшин</h2>
        <div v-for="(b, index) in badge_level" :key="index" :style="b.color" class="badge_types">
            <span>{{b.level_name}}</span>
        </div>
    <b-button class="badge_types_button" @click="back_button()"
        pill variant="danger">БУЦАХ</b-button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      badge_level: [
        { level_name: 'Анхан', color: 'background: #F85FB2;' },
        { level_name: 'Дунд', color: 'background: #42FBC3;' },
        { level_name: 'Ахисан', color: 'background: #42F855;' },
      ],
    };
  },
  methods: {
    back_button() {
      this.$emit('backToMain', 'main_badge');
    },
  },
};
</script>

<style lang="scss" src="./BadgeTypes.scss" scoped>

</style>
