<script>
export default {
  props: ["questions", "questionsAnswered"],
  emits: ["question-answered"],
  methods: {
    selectAnswer(is_correct) {
      this.$emit("question-answered", is_correct);
    },
  },
};
</script>

<template>
  <div class="questions-ctr">
    <div class="progress">
      <div
        class="bar"
        :style="{ width: `${(questionsAnswered / questions.length) * 100}%` }"
      ></div>
      <div class="status">
        {{ questionsAnswered }} out of {{ questions.length }} questions answered
      </div>
    </div>
    <div
      class="single-question"
      v-for="(question, index) in questions"
      :key="question.q"
      v-show="questionsAnswered === index"
    >
      <div class="question">{{ question.q }}</div>
      <div
        class="answers"
        v-for="answer in question.answers"
        :key="answer.text"
        @click.prevent="selectAnswer(answer.is_correct)"
      >
        <div class="answer">
          {{ answer.text }}
        </div>
      </div>
    </div>
  </div>
</template>
