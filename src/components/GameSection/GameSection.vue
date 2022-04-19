<template>
    <div>
        {{game_diff}}
    </div>
</template>

<script>
export default {
  data() {
    return {
      game_diff: {},
    };
  },
  methods: {

  },
  created() {
    this.game_diff = this.$route.params;
  },
};
</script>

<style lang="scss" scoped>

</style>
