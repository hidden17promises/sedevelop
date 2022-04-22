<template>
    <div>
        <img
              style="margin-bottom:10%"
              src="../../../public/last.png" width="350vh;" height="150px" alt="logo"/>
        <b-form class="form_group">
            <h1>Нууц үг сэргээх</h1>
            <span class="form_text">Утасны дугаар</span>
            <b-input type="number"></b-input>
            <span class="form_text">Баталгаажуулах код</span>
            <b-input type="number"></b-input>
            <div class="button_group">
              <b-button @click="backToLogin()" variant="danger">Буцах</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    backToLogin() {
      this.$emit('forget', 'login');
    },
  },
};
</script>

<style lang="scss" src="./ForgetPassword.scss" scoped>

</style>
