<template>
  <div>
    <transition-group appear mode="in-out" name="question" tag="ul"
      ><li v-for="question in filteredItems" v-bind:key="question.id">
        <h1>Q{{ question.id }}</h1>
        <div>
          <p v-html="question.text"></p>
        </div>
      </li>
    </transition-group>
    <div>
      <button v-on:click="addPoint()">はい</button>
      <button v-on:click="nonPoint()">いいえ</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      currentQuestion: 1,
      score: 0,
      questions: [
        {
          id: 1,
          text: "アニメよりも映画の方が好きだ",
        },
        {
          id: 2,
          text: "邦画より洋画の方がすきだ",
        },
        { id: 3, text: "日本のドラマより海外ドラマが好きだ" },
        {
          id: 4,
          text: "アーティストのLIVE・ドキュメンタリーが観たい",
        },
        {
          id: 5,
          text: " アクション映画作品が好き",
        },
        { id: 6, text: "有名な作品が見たい" },
        {
          id: 7,
          text: "皆が見ているものは自分も見てみたいと良く思う方だ",
        },
        { id: 8, text: "派手な演出は好きだ　" },
        {
          id: 9,
          text: "映画は1人で見ることが多い",
        },
        {
          id: 10,
          text: "最近ワクワクが足りないと感じる",
        },
        {
          id: 11,
          text: "何事にもスリルがあった方が気持ちが盛り上がる方だ",
        },
        {
          id: 12,
          text: "自分がしたいことがすぐにわかる方だ",
        },
        {
          id: 13,
          text: "正直、難しい話は苦手だ",
        },
        {
          id: 14,
          text: "新しい物を体験するのが好きだ",
        },
        { id: 15, text: "値段より質を重視する方だ" },
        {
          id: 16,
          text: "怖い映画を見ると寝られなくなることがある",
        },
        { id: 17, text: "長時間視聴することができない" },
        {
          id: 18,
          text: "恋愛物の作品にはあまり興味がわかない",
        },
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
    addPoint() {
      this.score += 1
      if (this.currentQuestion === 1) {
        this.currentQuestion++
      } else if (this.currentQuestion <= 17) {
        this.currentQuestion++
        // } else if (this.currentQuestion <= 11) {
        //   this.score[0].val += point;
        //   this.currentQuestion++
        // } else if (this.currentQuestion <= 15) {
        //   this.score[0].val += point;
        //   this.currentQuestion++
        // } else if (this.currentQuestion <= 17) {
        //   this.score[0].val += point;
        //   this.currentQuestion++
      } else if (this.currentQuestion === 18) {
        //親にscoreを渡す
        this.$emit("finish-check", this.score)
        this.$router.push({ name: "Result" })
        console.log(this.score)
      }
    },
    nonPoint() {
      this.score += 0
      if (this.currentQuestion === 1) {
        this.currentQuestion++
      } else if (this.currentQuestion <= 5) {
        this.currentQuestion++
      } else if (this.currentQuestion <= 11) {
        this.currentQuestion++
      } else if (this.currentQuestion <= 15) {
        this.currentQuestion++
      } else if (this.currentQuestion <= 17) {
        this.currentQuestion++
      } else if (this.currentQuestion === 18) {
        //親にscoreを渡す
        this.$emit("finish-check", this.score)
        this.$router.push({ name: "Result" })
      }
    },
  },
}
</script>

<style></style>
