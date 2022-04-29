<template>
    <div class="easy_background">
        <b-row style="height:99vh;">
           <b-col class="fit_button">
            <b-button variant="warning" style="height:100%; width:10%"
                @click="found_button()"
            >
                Бүртгүүлэх
            </b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    found_button() {
      this.$router.push({ name: 'MainDisplay', params: { type: 'gamesection' } });
    },
  },

  mounted() {

  },

  created() {

  },
};
</script>

<style lang="scss" scoped>
.easy_background {
    width: 99%;
    height: 99vh;
    background: url("../../../public/easy1.JPG");
    background-size: 99% 99%;
}

.fit_button {
    margin-top:76px;
    margin-left: 90px;
    height: 6vh;
}
</style>
