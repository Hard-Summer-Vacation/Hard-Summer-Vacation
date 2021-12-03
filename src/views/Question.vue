<template>
  <div class="Question">
    <checkQuestion />
  </div>
</template>

<script>
import checkQuestion from "../components/checkQuestion.vue"

export default {
  name: "Question",
  components: {
    checkQuestion,
  },
}
</script>
