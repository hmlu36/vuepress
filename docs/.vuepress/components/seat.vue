<template>
  <b-container class="container-fluid">
    <b-row>
      <b-col cols="6">
        <b-form-input v-model="searchName" @keyup.enter="search" placeholder="搜尋桌位" />
        <b-button @click="search">搜尋</b-button>
      </b-col>
      <b-col cols="6" class="content">
        <span v-html="searchResult" />
      </b-col>
    </b-row>
    <br />
    <b-row class="align-items-center">
      <b-col cols="4" class="text-center" v-for="key in Object.keys(seats)" :key="key">
        <b-row class="text-center">
          <b-col cols="12" class="border border-secondary pickedTableHead">
            <span v-html="key" />
          </b-col>
          <b-col
            cols="6"
            class="border border-secondary content"
            v-for="(person, index) in seats[key]"
            :key="index"
          >
            {{ person }}
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      searchName: "",
      searchResult: "",
      seats: {
        ".主桌<br/>&nbsp;": [
          "盧泓民",
          "鄭佳恩",
          "盧新發",
          "鄭信一",
          "盧麗女",
          "蕭淑珠",
          "盧黃素姻",
          "盧正壽",
          "蕭家勝",
          "蕭家欽",
          "蕭家輝",
          "六叔公"
        ],
        "1.復興國小1<br/>&nbsp;": [
          "杜雨霖",
          "陳玟君",
          "陳春利",
          "余宗勳",
          "廖彬村",
          "邱麗珠",
          "周萌姿",
          "李瑞香",
          "曾振升",
          "柯奉成",
        ],
        "2.男方親戚<br/>&nbsp;": [
          "盧昶羽",
          "盧正壽妻",
          "盧文玲",
          "張文彥",
          "親家母",
          "盧文萱",
          "蔡佳晃",
          "蔡鈞宇(嬰兒)",
          "親家母(素食)",
        ],
        "3.女方三舅家<br/>&nbsp;": [
          "順聰1",
          "順聰2",
          "順聰3",
          "順聰4",
          "順聰5(嬰兒)",
          "順榮1",
          "順榮2",
          "順榮3",
          "三舅媽",
          "全恩",
        ],
        "5.復興國小2<br/>&nbsp;": [
          "郭柏陞1",
          "郭柏陞2",
          "張喜凰1",
          "張喜凰2",
          "沈素玲",
          "黃君怡1",
          "黃君怡2",
          "林俐妡",
          "林佳誼(素食)",
          "林清安",
        ],
        "6.男方朋友<br/>淡水教會": [
          "謝俊彥",
          "鍾傑安",
          "李昱勳",
          "許碩容",
          "張文宣",
          "林宏昇",
          "洪明智",
          "黃瓊玉",
          "呂宛蓉",
          "陳冠蓁",
          "楊景翔",
        ],
        "11.中師團契與<br/>女方教會&nbsp;": [
          "丁奕瑄",
          "謝芳瑾",
          "何俞萱1",
          "何俞萱2",
          "陳境峰1",
          "陳境峰2",
          "張哲維1",
          "張哲維2",
          "郭進福1",
          "郭進福2",
          "郭進福3(嬰兒)",
          "郭進福4(嬰兒)",
        ],
        "14.女方教會<br/>與朋友<br/>&nbsp;": [
          "駱建文1",
          "駱建文2",
          "曾煒婷",
          "林志豪",
          "黃美芳1",
          "黃美芳2",
          "王淳韻1",
          "王淳韻2",
          "王淳韻3",
          "王淳韻4",
          "王淳韻5(嬰兒)",
        ],
        "8.女方朋友<br/>&nbsp;": [
          "王建勛1",
          "王建勛2",
          "王建勛3",
          "王建勛4(嬰兒)",
          "洪美連1",
          "洪美連2",
          "洪美連3",
          "林佳蓁1",
          "林佳蓁2",
          "林佳蓁3",
        ],
        "15.女方教會<br/>&nbsp;": [
          "孫千蕙1",
          "孫千蕙2",
          "宋昀臻",
          "黃盈慈",
          "雍雅嵐1",
          "雍雅嵐2",
          "雍雅嵐3",
          "雍雅嵐4(嬰兒)",
          "陳恩佩",
          "許君芳1",
          "許君芳2",
        ],
        "9.泰瑞公司<br/>&nbsp;": [
          "許正登",
          "魏經理",
          "麗月1",
          "麗月2",
          "秀美1",
          "秀美2",
          "淑芬1",
          "淑芬2",
          "小慧1",
          "小慧2",
        ],
        "12.女方家人<br/>&nbsp;": [
          "鄭仰恩1",
          "鄭仰恩2",
          "鄭仰恩3",
          "鄭仰恩4",
          "親家1",
          "親家2",
          "麗馨",
          "寶貴",
          "秀惠",
          "溪松",
        ],

        "7.女方大舅家<br/>&nbsp;": [
          "雅文1",
          "雅文2",
          "雅文3",
          "雅文4",
          "雅文5(嬰兒)",
          "雅心",
          "翔文1",
          "翔文2",
          "大舅媽",
          "瑛泓",
        ],
        "10.蕭家長輩<br/>&nbsp;": [
          "三姑婆1",
          "三姑婆2",
          "五叔公1",
          "五叔公2",
          "五姑婆1",
          "五姑婆2",
          "六嬸婆",
          "二舅媽1",
          "二舅媽2",
          "葉舫",
        ],
        "13.女方娜玲家<br/>&nbsp;": [
          "娜玲1",
          "娜玲2",
          "信溢1",
          "信溢2",
          "信溢3",
          "信溢4",
          "信溢5",
          "信偉",
          "娜莉",
          "淑貞1",
          "淑貞2",
        ],
        "16.女方大姊家<br/>&nbsp;": [
          "碧霞",
          "碧香1",
          "碧香2",
          "碧音1",
          "碧音2",
          "瑞仁1",
          "瑞仁2",
          "瑞和",
          "淑娥1",
          "淑娥2",
        ],
      },
    };
  },
  methods: {
    search() {
      console.log(this.searchName);
      Object.keys(this.seats).forEach((key) => {
        let isExist = this.seats[key].some((entry) => {
          return entry == this.searchName;
        });
        if (isExist) {
          this.searchResult = key;
        }
      });
    },
  },
};
</script>

<style scoped>
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";

.pickedTableHead {
  font-family: "Noto Sans TC";
  font-weight: "400";
  color: #ecd7d0;
  background-color: #890025;
}

.content {
  font-family: "Noto Sans TC";
  color: "black";
}
</style>
