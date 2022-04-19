<template>
    <b-row class="login_column1">
        <div class="middle_logo">
          <img style="position: relative;"
          src="../../public/Logo.png" alt='middle_logo' height="150px"/>
        </div>

        <b-col></b-col>
        <b-col class="login_column2">
          <b-form @submit.prevent="sendUserData()"
            class="login_main_form" v-if="pressed == 'login'">

            <img
              style="margin-bottom:10%"
              src="../../public/last.png" width="350vh;" height="150px" alt="logo"/>
            <b-input
              class="login_form"
              placeholder="Утасны дугаар"
              required
              v-model="user"
              @input="number_validation"
              @keypress="onlyNumber"
              :maxlength="8"
              type="text">
            </b-input>

            <b-input
              class="login_form"
              placeholder="Нууц үг"
              required
              v-model="password" type="password">
            </b-input>

            <b-button pill class="login_button" type="submit" variant='warning'>
              Нэвтрэх
            </b-button>

            <div class="second_button_group">
              <b-button style="margin-right:4%;" class="login_button2" variant='outline-light'>
                Нууц үг сэргээх
              </b-button>
              <b-button class="login_button2" variant='outline-light'
                @click="register_display('register')">
                Бүртгүүлэх
              </b-button>
            </div>
          </b-form>
          <b-form class="login_main_form" v-else-if="pressed == 'register'">
            <RegisterDisplay @register="register_display"/>
          </b-form>
        </b-col>
    </b-row>
</template>

<script>
// import axios from 'axios';
// import router from 'vue-router';
import RegisterDisplay from './Register/Register_display.vue';

export default {
  components: {
    RegisterDisplay,
  },
  data() {
    return {
      user: '',
      password: '',
      login: false,
      pressed: 'login',
    };
  },
  methods: {
    sendUserData() {
      // const user = {
      //   user: this.user,
      //   password: this.password,
      // };
      if (this.user.toString() === '94143553' && this.password === 'password') {
        this.$router.push({ name: 'MainDisplay' });
        this.$notify({
          title: 'Loged In',
          text: 'User Connected',
          type: 'success',
        });
      } else if (this.user.toString() === '94143553' && this.password !== 'password') {
        this.$notify({
          title: 'Error',
          text: 'Нууц үг буруу байна',
          type: 'error',
        });
      } else {
        this.$notify({
          title: 'Error',
          text: 'User Not Found',
          type: 'error',
        });
      }
    },

    register_display(name) {
      this.pressed = name;
    },

    onlyNumber($event) {
      const keyCode = ($event.keyCode ? $event.keyCode : $event.which);
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        $event.preventDefault();
      }
    },

    number_validation() {
      if (this.user.length === 0) {
        this.password = '';
      }
    },
  },
  computed: {

  },
  created() {

  },
  mounted() {

  },

};
</script>

<style lang="scss" src="./Login_display.scss" scoped>

</style>
