<template>
  <div id="app">
    <div class="body">

      <div class="title">
        <div class="step">STEP1</div>
        <h3>お客様の情報を入力してください</h3>
      </div>
      <div class="main">

        <div class="content">-性別-</div>
        <div class="radio">
          <input v-model="radio" type="radio" value="男性">男性
          <input v-model="radio" type="radio" value="女性">女性
        </div>
        <br>
        <div class="content">-生年月日-</div>
        <select>
          <option v-for="(n,key) in 101" :key="key" :value="n+1920">{{ n + 1920 | nengo }}</option>
        </select> 年
        <select>
          <option v-for="(n,key) in 12" :key="key" value="n">{{ n }}</option>
        </select> 月
        <select>
          <option v-for="(n,key) in 31" :key="key" :value="n">{{ n }}</option>
        </select> 日
      </div>
    </div>

    <div id="nav">
      <router-link class="btn" to="/page2">次へ進む   ➤</router-link> 
    </div>
    <router-view/>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
    radio: '',
    nextButton: '',
  };
  },
  filters: {
    nengo(y) {
      let result;
      if (y > 2018) {
        result = `${y} (令和${y - 2018}年)`;
      } else if (y > 1988) {
        result = `${y} (平成${y - 1988}年)`;
      } else if (y > 1925) {
        result = `${y} (昭和${y - 1925}年)`;
      } else if (y > 1911) {
        result = `${y} (大正${y - 1911}年)`;
      }
      return result;
    },
  },
  
};
</script>

<style>
.body{
  position: relative;
  left: 29%;
  top:50px;
  border: solid 1px #4ec4d3;
  width:700px;

}

h3{
  font-weight: normal;
  text-align: center;
  margin-top:auto ;
  
}

.title{
  width: 700px;
  height: 4em;
  background-color: rgb(213, 252, 252);
}

.step{
  background-color: rgb(111, 194, 241);
  width: 10%;
  text-align: center;
  border-radius: 5px;
}

.content{
  color: rgb(0, 119, 255);
  padding: 20px 10px 15px 25px;
}

.main{
  margin-left: 30px;
  margin-bottom: 25px;
}

.btn{
  background-color: rgb(76, 194, 154);
  border: none;
  color: aliceblue;
  padding: 10px;
  position: absolute;
  top: 40%;
  left: 47%;
  border-radius: 5px;
}

button:hover{
  background-color: rgb(68, 175, 139);;
}

</style>
