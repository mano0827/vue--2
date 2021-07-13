<template>
  <div class="page2">
    <div class="body">
      <div class="title">
        <div class="step">STEP2</div>
        <h3>以下にお答えください</h3>
      </div>
      <div class="main">
        <div v-show="show >= 1" class="content">
          <p>現在、生命保険に加入されていますか?</p>
          <label
            ><input
              type="radio"
              v-model="radio"
              value="はい"
              @click="next()"
               @change="q1"
            />はい</label
          >
          <label
            ><input
              type="radio"
              v-model="radio"
              value="いいえ"
              @click="next()"
               @change="q1"
            />いいえ</label
          >
        </div>
        <br />
        <div v-show="show >= 2" class="content">
          <p>
            現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院、手術を進められたことはありますか？
          </p>
          <label
            ><input
              type="radio"
              v-model="radio2"
              value="はい"
              @click="next()"
               @change="q2"
            />はい</label
          >
          <label
            ><input
              type="radio"
              v-model="radio2"
              value="いいえ"
              @click="next()"
               @change="q2"
            />いいえ</label
          >
        </div>

        <br />
        <div v-show="show >= 3" class="content">
          <p>
            過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？
          </p>
          <label
            ><input
              type="radio"
              v-model="radio3"
              value="はい"
              @click="next()" 
              @change="q3"
            />はい</label
          >
          <label
            ><input
              type="radio"
              v-model="radio3"
              value="いいえ"
              @click="next()"
              @change="q3"
            />いいえ</label
          >
        </div>
      </div>
      <router-link class="btn1" to="/">前へ戻る ➤</router-link>
      <router-link class="btn2" to="/page3">次へ進む ➤</router-link>
    </div>
  </div>
</template>

<script>
export default {
  neme: "routing",
  data() {
    return {
      radio: "",
      radio2: "",
      radio3: "",
      show: 1,
      nextButton: "",
      backButton: "",
    };
  },
  methods: {
    next: function () {
      this.show++;
      if (this.show > 3) {
        this.show = 3;
      }
    },
    q1(e){
      this.$store.commit('q1',e.target.value)
    },
    q2(e){
      this.$store.commit('q2',e.target.value)
    },
    q3(e){
      this.$store.commit('q3',e.target.value)
    },
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
  left: 34%;
  border-radius: 5px;
}
.btn2 {
  background-color: rgb(76, 194, 154);
  border: none;
  color: aliceblue;
  padding: 10px;
  position: absolute;
  top: 110%;
  left: 53%;
  border-radius: 5px;
}

.btn1:hover {
  background-color: rgb(68, 175, 139);
}
.btn2:hover {
  background-color: rgb(68, 175, 139);
}
</style>