<template>
  <div>
    <transition-group appear mode="in-out" name="question" tag="ul"
      ><li v-for="question in filteredItems" v-bind:key="question.id">
        <h1>Q{{ question.id }}.</h1>
        <div>
          <p v-html="question.text"></p>
        </div>
      </li>
    </transition-group>
    <div>
      <button v-on:click="addPoint(5)">あてはまる</button>
      <button v-on:click="addPoint(3)">どちらともいえない</button>
      <button v-on:click="addPoint(1)">あてはまらない</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      currentQuestion: 1,
      score: [
        { type: "visual", val: 0 },
        { type: "auditory", val: 0 },
        { type: "tactile", val: 0 },
      ],
      questions: [
        {
          id: 1,
          text: "アニメよりも映画の方が好きだ",
        },
        {
          id: 2,
          text: "邦画よりも洋画の方が好きだ",
        },
        { id: 3, text: "日本のドラマより海外のドラマが好きだ" },
        {
          id: 4,
          text: "ドキュメンタリーに興味がある",
        },
        {
          id: 5,
          text: "皆が見ているものは<br>自分も見てみたいと思う",
        },
        { id: 6, text: "派手な演出は好きだ" },
        {
          id: 7,
          text: "映画は1人で<br>見ることが多い",
        },
        { id: 8, text: "最近ワクワクが足りないと感じる" },
        {
          id: 9,
          text: "何事にもスリルがあった方が<br>気持ちが盛り上がる方だ",
        },
        {
          id: 10,
          text: "自分がしたいことがすぐに分かる方だ",
        },
        {
          id: 11,
          text: "正直、難しい話は苦手だ",
        },
        {
          id: 12,
          text: "新しいものを体験するのが好きだ",
        },
        {
          id: 13,
          text: "新しいものを体験するのが好きだ",
        },
        {
          id: 14,
          text: "値段より質を重視する方だ",
        },
        { id: 15, text: "怖い映画を見ると寝られなくなることがある" },
        {
          id: 16,
          text: "長時間同じものを視聴することができない",
        },
        { id: 17, text: "恋愛物の作品にはあまり興味がわかない" },
        {
          id: 18,
          text: "ドキュメンタリーを見てみたいと思う",
        },
        { id: 19, text: "実際に体験して学ぶことが好きだ" },
      ],
    }
  },
  computed: {
    //フィルタした質問を表示
    filteredItems() {
      return this.searchItem(this.questions, this.currentQuestion)
    },
  },
  methods: {
    //現在の質問のみを取り出す
    searchItem(list, key) {
      return list.filter(function (question) {
        return question.id === key
      })
    },
    //点数加算
    //1問目でリトライ時の値をリセット
    //24問目で結果画面へ遷移
    addPoint(point) {
      if (this.currentQuestion === 1) {
        this.score[0].val = 0
        this.score[1].val = 0
        this.score[2].val = 0
        this.score[0].val += point
        this.currentQuestion++
      } else if (this.currentQuestion <= 8) {
        this.score[0].val += point
        this.currentQuestion++
      } else if (this.currentQuestion <= 16) {
        this.score[1].val += point
        this.currentQuestion++
      } else if (this.currentQuestion <= 23) {
        this.score[2].val += point
        this.currentQuestion++
      } else if (this.currentQuestion === 24) {
        this.score[2].val += point
        //親にscoreを渡す
        this.$emit("finish-check", this.score)
        this.$router.push({ name: "Result" })
      }
    },
  },
}
</script>

<style></style>
