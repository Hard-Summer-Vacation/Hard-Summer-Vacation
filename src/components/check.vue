<template>
  <div>
    <div class="nav__bar">
      <div class="p-start">
        <router-link
          v-on:click.native="startshow"
          to="/"
          class="nav__logo nav__link"
          >SUBSCHECKER</router-link
        >
      </div>
    </div>
    <div class="start" v-if="show">
      <h1>あなたに合うサブスクはどれ？</h1>
      <a v-on:click="clickStart" class="btn form__buttons"> 診断をはじめる </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    }
  },

  methods: {
    startshow() {
      this.show = true
    },

    //スタートを押したら質問画面へ移動
    clickStart() {
      this.show = false
      this.$router.push({ name: "Question" })
    },
  },
}
</script>

<style>
.nav__bar {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: #0abab5;
}

.nav__link {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #eee;
  text-decoration: none;
  font-size: 30px;
}

.nav__link:visited {
  color: #eee;
}

.nav__link:hover {
  font-weight: bold;
  color: #fff;
}

.nav__logo {
  width: 220px;
}
</style>
