<template>
    <div class="badge_display">
        <h2 class="badge_header">Санал хүсэлт</h2>
        <b-form-textarea
            style="width:80%;margin-top:5%;"
            id="textarea"
            v-model="text"
            placeholder="Enter something..."
            rows="12"
            max-rows="14">
        </b-form-textarea>
        <b-button variant="success" class="feedback_button"
            @click="send_feedbackk()"
            >Илгээх</b-button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    };
  },
  methods: {
    send_feedback() {

    },
  },
};
</script>

<style lang="scss" src="./FeedBack.scss" scoped>

</style>
