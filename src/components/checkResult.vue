<template>
  <div>
    <div>
      <div v-for="result in filteredResults" v-bind:key="result.id">
        <h1>
          あなたは<span>{{ result.diagnosis }}</span
          >タイプです！
        </h1>
        <p class="result_text">{{ result.text }}</p>
      </div>
    </div>
    <div class="btn form__buttons">
      <a v-on:click="clickRetry">最初からやり直す</a>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      selectedType: "d",
      shareResult: "",
      results: [
        {
          id: "a",
          diagnosis: "Amazon Prime",
          text: "価格が安い、他のコンテンツとの抱き合わせであるため安い。\n総合力では一番の高さ。 月額500円。\n映画の世代層や雰囲気が一昔前といった感じ。\n一番安いサービスを求める人におすすめ!",
        },
        {
          id: "b",
          diagnosis: "Unext",
          text: "14万本という圧倒的な見放題コンテンツ、\n毎月1200ポイントがありそれを使用し新作を見れる。\n見たい作品が決まっていない人にはおすすめ！",
        },
        {
          id: "c",
          diagnosis: "Hulu",
          text: "国内人気海外ドラマ、日テレの見逃し系の番組やスポーツやニュースなども見れ、\n国内ドラマ、バラエティが好き、日テレが好きにおすすめ！",
        },
        {
          id: "d",
          diagnosis: "Netflix",
          text: "洋画と海外ドラマに加えて豊富なオリジナル作品が魅力、\n契約数が1億人越え、海外ドラマが好き、\nネトフリのオリジナル作品に興味がある、\nアカデミー賞作品に興味がある人におすすめ！",
        },
      ],
    }
  },
  props: {
    score: Array,
  },
  computed: {
    //当てはまる結果を表示
    filteredResults() {
      return this.searchResult(this.results, this.selectedType)
    },
  },
  methods: {
    //当てはまる結果のみを抽出
    searchResult(list, key) {
      return list.filter(function (result) {
        return result.id === key
      })
    },
    //リトライボタンでスタート画面へ
    clickRetry() {
      this.$router.push({ name: "Question" })
    },
  },
  created() {
    console.log(this.score)
    if (this.score <= 5) {
      this.selectedType = "a"
    } else if (this.score <= 11) {
      this.selectedType = "b"
    } else if (this.score <= 15) {
      this.selectedType = "c"
    } else if (this.score <= 18) {
      this.selectedType = "d"
    }
    //診断名を親に送る
    this.$emit("share-diagnosis", this.shareResult)
  },
}
</script>

<style>
/*.form__buttons {
  display: flex;
  justify-content: flex-end;
}*/
.result_text {
  font-size: 30px;
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
    "Hiragino Sans", Meiryo, sans-serif;
  margin: 40px;
  white-space: pre-wrap;
}

.btn,
a.btn,
button.btn {
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  padding: 1rem 4rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: white;
  border-radius: 0.5rem;
}

.form__buttons {
  color: #fff;
  background-color: #0abab5;
}
.form__buttons {
  color: #fff;
  background: #0abab5;
}
</style>
