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
                        @click="difficulties_play()"
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
                        @click="game_tutorial()"
                        style="
                    background:linear-gradient(180deg,#5E78FF 6.56%, rgba(247, 28, 252, 0.34) 100%);
                        border: 1px solid #FF00D6;">Тоглоомны заавар</b-button>

                <!-- САНАЛ ХҮСЭЛТ -->
                <b-button class="main_section_menu_button"
                        @click="feed_back()"
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
                        @click="badge_list()"
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
                    <!-- <span class="main_section_welcome_text">Тоглоомд тавтай морил</span> -->
                    <h2 class="header">
                        <span class="word" style="--i:1;">Т</span>
                        <span class="word" style="--i:2;">о</span>
                        <span class="word" style="--i:3;">г</span>
                        <span class="word" style="--i:4;">л</span>
                        <span class="word" style="--i:5;">о</span>
                        <span class="word" style="--i:6; ">о</span>
                        <span class="word" style="--i:7;">м</span>
                        <span class="word" style="--i:8;">д</span>
                    </h2>
                    <h2 class="header">
                        <span class="word" style="--i:1;">т</span>
                        <span class="word" style="--i:2;">a</span>
                        <span class="word" style="--i:3;">в</span>
                        <span class="word" style="--i:4;">т</span>
                        <span class="word" style="--i:5;">а</span>
                        <span class="word" style="--i:6; ">й</span>
                        <span class="word" style="--i:7; margin-left: 1.5vw;">м</span>
                        <span class="word" style="--i:8;">о</span>
                        <span class="word" style="--i:9;">р</span>
                        <span class="word" style="--i:10;">и</span>
                        <span class="word" style="--i:11;">л</span>
                    </h2>
                </div>
                <div v-if="clicked == 'personal'" style="width:100%;height:100%;" >
                    <PersonalInfo />
                </div>
                <div v-else-if="clicked == 'difficulties'" style="width:100%;height:100%;" >
                    <Difficulties />
                </div>
                <div v-else-if="clicked == 'tutorial'" style="width:100%;height:100%;" >
                    <GameTutorial />
                </div>
                <div v-else-if="clicked == 'badgelist'" style="width:100%;height:100%;" >
                    <BadgeList v-if="badge == 'main_badge'" @backToMain="onBackToMain" />
                    <BadgeTypes v-else-if="badge == 'badge_type'" @backToMain="onBadgeTypeToMain" />
                </div>
                <div v-else-if="clicked == 'feedback'" style="width:100%;height:100%;" >
                    <FeedBack />
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
    </div>
</template>

<script>
import PersonalInfo from '../PersonalInfo/PersonalInfo.vue';
import Difficulties from '../Difficulties/Difficulties_play.vue';
import GameTutorial from '../GameTutorial/GameTutorial.vue';
import BadgeList from '../BadgeList/BadgeList.vue';
import BadgeTypes from '../BadgeList/BadgeTypes/BadgeTypes.vue';
import FeedBack from '../FeedBack/FeedBack.vue';

export default {
  components: {
    PersonalInfo,
    Difficulties,
    GameTutorial,
    BadgeList,
    BadgeTypes,
    FeedBack,
  },
  data() {
    return {
      clicked: 'maindisplay',
      badge: 'main_badge',
    };
  },
  methods: {
    main_display() {
      this.clicked = 'maindisplay';
    },
    difficulties_play() {
      this.clicked = 'difficulties';
    },
    log_out() {
      this.$router.push({ name: 'login' });
    },
    personal_info() {
      this.clicked = 'personal';
    },
    game_tutorial() {
      this.clicked = 'tutorial';
    },
    badge_list() {
      this.clicked = 'badgelist';
    },
    onBackToMain(event) {
      if (event === 'badge_type') {
        this.badge = event;
      } else {
        this.clicked = event;
      }
    },
    onBadgeTypeToMain(event) {
      this.badge = event;
    },
    feed_back() {
      this.clicked = 'feedback';
    },
  },
};
</script>

<style lang="scss" src="./MainDisplay.scss" scoped>

</style>
