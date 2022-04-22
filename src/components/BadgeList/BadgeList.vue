<template>
    <div class="badge_display">
        <h2 class="badge_header">Таны түвшин</h2>
        <div class="badge_level">
            <span>Анхан</span>
        </div>
        <div style="display:flex; justify-content:space-around; width:80%;">
            <b-button style="width:40%; font-size:14pt;" variant="success" pill
                @click="list_button()">
                Цолны жагсаалт</b-button>
            <b-button style="width:40%;font-size:14pt;" variant="danger" pill
                @click="back_button()">
                Буцах</b-button>
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
      this.$emit('backToMain', 'maindisplay');
    },
    list_button() {
      this.$emit('backToMain', 'badge_type');
    },
  },
};
</script>

<style lang="scss" src="./BadgeList.scss" scoped>

</style>
