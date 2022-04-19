<template>
    <div class="register_form">
        <img
              style="margin-bottom:10%"
              src="../../../public/last.png" width="350vh;" height="150px" alt="logo"/>
        <form>
            <!-- Phone Number -->
            <span class="register_label">Утасны дугаар</span>
            <b-input class="register_input"
                v-model="phone_number" placeholder="Утасны дугаар оруулна уу">
            </b-input>

            <!-- Last Name -->
            <span class="register_label">Овог</span>
            <b-input class="register_input"
                v-model="last_name" placeholder="Овог оруулна уу"></b-input>

            <!-- First Name -->
            <span class="register_label">Нэр</span>
            <b-input class="register_input"
                v-model="first_name" placeholder="Нэр оруулна уу"></b-input>

            <!-- Birth Date -->
            <span class="register_label">Төрсөн огноо</span>
            <b-input class="register_input" type``="date"
                v-model="birth_date" placeholder="Төрсөн өдөр">
            </b-input>

            <!-- Gender -->
            <span class="register_label">Хүйс</span>
            <b-form-group>
                <b-form-radio style="color:white;"
                    v-model="gender" value="male">Эрэгтэй</b-form-radio>
                <b-form-radio style="color:white;"
                    v-model="gender" value="female">Эмэгтэй</b-form-radio>
            </b-form-group>

            <!-- Password -->
            <span class="register_label">Нэвтэрч орох нууц үг</span>
            <b-input class="register_input"
                v-model="password" type="password" placeholder="Нэвтрэх нууц үг"></b-input>

            <!-- Password Repeat -->
            <span class="register_label">Нууц үг давтах</span>
            <b-input class="register_input"
                v-model="rep_password" type="password" placeholder="Нууц үг давтах"></b-input>
        </form>
        <div class="register_button">
            <b-button size='sm' style="width:150px" pill variant="primary">Бүртгүүлэх</b-button>
            <b-button size='sm' style="width:150px" pill variant="warning"
                @click="back_to_login('login')">
                    Буцах
            </b-button>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      phone_number: '',
      last_name: '',
      first_name: '',
      birth_date: '',
      gender: '',
      password: '',
      rep_password: '',
    };
  },
  methods: {
    back_to_login(name) {
      this.$emit('register', name);
    },

    // send_new_user() {
    //   const new_user = {
    //     phone_number: this.phone_number,
    //     last_name: this.last_name,
    //     first_name: this.first_name,
    //     birth_date: this.birth_date,
    //     gender: this.gender,
    //     password: this.password,
    //     rep_password: this.rep_password,
    //   };

    //   axios.post({ new_user })
    //     .then((res) => {
    //       // eslint-disable-next-linec
    //       console.log(res);
    //     })
    //     .catch((error) => {
    //       // eslint-disable-next-linec
    //       console.log(error);
    //     });
    // },
  },
};
</script>

<style lang="scss" src='./Register_display.scss' scoped>

</style>
