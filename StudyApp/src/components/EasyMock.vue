<template>
  <div class="hello">
    <!-- <h2 @click="listSort">排序</h2>
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item.name}}-{{item.value}}</li>
    </ul>-->
    <h2 @click="getLocalMock">本地mock数据</h2>
    <div>{{mockData1}}</div>

    <h2 @click="getDataTestGet">本地服务mock数据get请求</h2>
    <div>{{mockData2}}</div>

    <h2 @click="getDataTestPost">本地服务mock数据post请求</h2>
    <div>{{mockData3}}</div>

    <h2 @click="getTestEasyMockGet">easyMock数据get请求</h2>
    <div>{{mockData4}}</div>

    <h2 @click="getTestEasyMockPost">easyMock数据post请求</h2>
    <div>{{mockData5}}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      list: [
        { name: "sdf", value: "424" },
        { name: "jr", value: "23" },
        { name: "2w3", value: "14" },
        { name: "aa", value: "675" },
        { name: "th", value: "354" },
        { name: "nn", value: "647" },
        { name: "vc", value: "67" },
        { name: "tt", value: "676" },
      ],
      mockData1: "",
      mockData2: "",
      mockData3: "",
      mockData4: "",
      mockData5: "",
    };
  },
  methods: {
    listSort() {
      this.sortFunc(this.list, "value");
    },

    //本地mock数据，无接口
    getLocalMock() {
      let data = this.$mock(this.$mkData.testLocal1);
      this.mockData1 = JSON.stringify(data);
    },

    //启动本地服务mock数据，get请求
    getDataTestGet() {
      this.$httpGet(this.$inface.test2).then((res) => {
        if (res.status == 200) {
          this.mockData2 = JSON.stringify(res);
        }
      });
    },
    //启动本地服务mock数据，post请求
    getDataTestPost() {
      const params = {
        mpiId: "123456",
        bussType: "HOL",
        userType: "1",
      };
      this.$httpPost(this.$inface.test6, params).then((res) => {
        if (res.status == 200) {
          this.mockData3 = JSON.stringify(res);
        }
      });
    },

    //easyMock get请求
    getTestEasyMockGet() {
      this.$httpGet(this.$inface.test4).then((res) => {
        if (res.status == 200) {
          this.mockData4 = JSON.stringify(res.data.list);
        }
      });
    },

    //easyMock post请求
    getTestEasyMockPost() {
      const params = {
        mpiId: "123456",
        bussType: "HOL",
        userType: "1",
      };
      this.$httpPost(this.$inface.test5, params).then((res) => {
        if (res.status == 200) {
          this.mockData5 = JSON.stringify(res.data.list);
        }
      });
    },

    sortFunc(array, key) {
      return array.sort(function (a, b) {
        return Number(a[key]) < Number(b[key])
          ? -1
          : Number(a[key]) > Number(b[key])
          ? 1
          : 0;
      });
    },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
