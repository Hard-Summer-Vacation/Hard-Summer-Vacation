<template>
  <div>
    <h1>好きなジャンルは何ですか？</h1>
    <button v-on:click="choice1">アニメ</button>
    <p>   {{message}}</p>
    <button v-on:click="choice2">洋画</button>
    <p>{{message2}}</p>
  </div>
</template>

<script>
export default {
  data:function(){
    return{
      message:"",
      message2:"",
    }
  },
  methods:{
    choice1:function(){
      this.message="Huluがいいよ"
    },
    choice2:function(){
      this.message2="Netflixでしょ"
    },
  }
}
</script>

<style>

</style>