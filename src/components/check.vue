<template>
  <div>
    <div class="p-start">
      <h1>subscription<br />checker</h1>
      <p>あなたに合うサブスクはどれ？</p>
      <button v-on:click="clickStart">診断をはじめる</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    //スタートを押したら質問画面へ移動
    clickStart() {
      this.$router.push({ name: "Question" })
    },
  },
}
</script>

<style></style>
