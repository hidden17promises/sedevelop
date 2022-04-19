<template>
    <div class="main_display">
        <div class="main_logo">
            <img src="../../../public/fast.png" width="400vh" height="100vh" alt="logo_fast" />
            <img src="../../../public/game.png" width="400vh" height="100vh" alt="logo_fast" />
        </div>
        <div class="main_section">
            <div class="main_section_menu">
                <!-- НҮҮР ХУУДАС -->
                <b-button class="main_section_menu_button"
                        @click="main_display()"
                        style="
                    background:linear-gradient(180deg,#F7FB29 8.65%,rgba(125, 255, 64, 0.37) 100%);
                        border: 1px solid #FC2CCE;">Нүүр хуудас</b-button>

                <!-- ТОГЛОХ -->
                <b-button class="main_section_menu_button"
                        @click="play_button()"
                        style="
                    background:linear-gradient(180deg,#8EFC5B 6.56%,rgba(28, 252, 252, 0.47) 100%);
                        border: 1px solid #FC2CCE;">Тоглох</b-button>

                <!-- ХУВИЙН МЭДЭЭЛЭЛ -->
                <b-button class="main_section_menu_button"
                        @click="personal_info()"
                        style="
                    background:linear-gradient(180deg,#5CFAE7 6.56%, rgba(28, 50, 252, 0.31) 100%);
                    border: 1px solid #FF00D6;">Хувийн мэдээлэл</b-button>

                <!-- ТОГЛООМНЫ ЗААВАР -->
                <b-button class="main_section_menu_button"
                        v-b-modal.modal-1
                        @click="game_tutorial()"
                        style="
                    background:linear-gradient(180deg,#5E78FF 6.56%, rgba(247, 28, 252, 0.34) 100%);
                        border: 1px solid #FF00D6;">Тоглоомны заавар</b-button>

                <!-- САНАЛ ХҮСЭЛТ -->
                <b-button class="main_section_menu_button"
                        style="
                    background:linear-gradient(180deg,#E85EFF 6.56%, rgba(252, 28, 28, 0.27) 100%);
                        border: 1px solid #FF00D6;">Саналт хүсэлт</b-button>

                <!-- ОНООНЫ ЖАГСААЛТ -->
                <b-button class="main_section_menu_button"
                        style="
                    background:linear-gradient(180deg,#FF5E8E 6.56%, rgba(252, 162, 28, 0.45) 100%);
                        border: 1px solid #FF00D6;">Онооны жагсаалт</b-button>

                <!-- ЦОЛ -->
                <b-button class="main_section_menu_button"
                        style="
                    background:linear-gradient(180deg,#3497F2 6.56%, rgba(113, 252, 28, 0.45) 100%);
                        border: 1px solid #FF00D6;">Цол</b-button>

                <!-- ГАРАХ -->
                <b-button class="main_section_menu_button"
                        style="
                    background:linear-gradient(180deg,#25F8DE 6.56%, rgba(252, 98, 181, 0.81) 100%);
                        border: 1px solid #FF00D6;" @click="log_out()">Гарах</b-button>
            </div>
            <div class="main_section_welcome">
                <div v-if="clicked == 'maindisplay'" class="main_section_welcome_template">
                    <span class="main_section_welcome_text">Тоглоомд тавтай морил</span>
                </div>
                <div v-if="clicked == 'personal'" style="width:80%;height:90%;" >
                    <PersonalInfo />
                </div>
            </div>
            <div class="main_section_score">
                <div class="main_section_score_title">Тэргүүлэгчид</div>
                <div>
                    <div class="main_section_score_info" v-for="i in 10" :key="i">
                        <div style="width:20%;">
                            <div class="numbering">{{i}}</div>
                        </div>
                        <div style="width:60%;text-align:center;">Gabriel</div>
                        <div class="scoring">500</div>
                    </div>
                </div>
            </div>
        </div>
        <b-modal id="modal-1" title="BootstrapVue">
          <GameTutorial />
        </b-modal>
    </div>
</template>

<script>
import PersonalInfo from '../PersonalInfo/PersonalInfo.vue';
import GameTutorial from '../GameTutorial/GameTutorial.vue';

export default {
  components: {
    PersonalInfo, GameTutorial,
  },
  data() {
    return {
      clicked: 'maindisplay',
    };
  },
  methods: {
    main_display() {
      this.clicked = 'maindisplay';
    },
    log_out() {
      this.$router.push({ name: 'login' });
    },
    personal_info() {
      this.clicked = 'personal';
    },
    play_button() {
      this.$router.push({ name: 'PlayDisplay' });
    },
    game_tutorial() {
      // this.$router.push({ name: 'GameTutorial' });
    },
  },
};
</script>

<style lang="scss" src="./MainDisplay.scss" scoped>

</style>
