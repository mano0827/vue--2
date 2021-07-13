<template>
  <div class="user">
    <div class="body">
      <div class="title">
        <div class="step">STEP4</div>
        <h3>以下の内容をご確認ください</h3>
      </div>
      <div class="main">
        <div class="content">-性別-</div>
        <p class="answer">{{ gender }}</p>
        <div class="content">-生年月日-</div>
        <p class="answer">{{ year }}年{{month}}月{{day}}日</p>
        <div class="content">-現在、生命保険に加入されていますか?-</div>
         <p class="answer">{{ a1 }}</p>
        <div class="content">-現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院、手術を進められたことはありますか？-</div>
         <p class="answer">{{ a2 }}</p>
        <div class="content">-過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-</div>
         <p class="answer">{{ a3 }}</p>
        <div class="content">-ご相談内容-</div>
        <p class="answer">{{ answer }}</p>

      </div>
      <router-link class="btn1" to="page3">前へ戻る ➤</router-link>
      <router-link class="btn2" to='' >送信 ➤</router-link>
    </div>
  </div>
</template>

  
  <script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      gender: "gender",
      year:'year',
      month:'month',
      day:'day',
      a1:'a1',
      a2:'a2',
      a3:'a3',
      answer:'answer'
    }),
  },
};
</script>


<style>
.btn1 {
  background-color: rgb(76, 194, 154);
  border: none;
  color: aliceblue;
  padding: 10px;
  position: absolute;
  top: 110%;
  left: 35%;
  border-radius: 5px;
}
.btn2 {
  background-color: rgb(76, 194, 154);
  border: none;
  color: aliceblue;
  padding: 10px;
  position: absolute;
  top: 110%;
  left: 54%;
  border-radius: 5px;
}

.btn1:hover {
  background-color: rgb(68, 175, 139);
}
.btn2:hover {
  background-color: rgb(68, 175, 139);
}

.answer{
  padding-left:45px ;
}

.user{
  padding-bottom: 10%;
  margin-bottom: 10%;
}
</style>







