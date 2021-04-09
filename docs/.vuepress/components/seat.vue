<template>
  <b-container class="container-fluid">
    <b-row class="align-items-center">
      <b-col cols="4" class="text-center" v-for="key in Object.keys(seat)" :key="key">
        <b-row class="text-center">
          <b-col cols="12" class="border border-secondary pickedTableHead">
            <span v-html="key" :style="{ 'font-family': 'Noto Sans TC', 'font-weight': '400' }" />
          </b-col>
          <b-col cols="6" class="border border-secondary content" v-for="(person, index) in seat[key]" :key="index" >
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
      seat: {
        '1.主桌<br/>&nbsp;': ['盧泓民', '鄭佳恩', '盧新發', '鄭信一', '盧麗女', '蕭淑珠', 'A7', 'A8', 'A9', 'A10'],
        '2.男方親戚<br/>&nbsp;': ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10'],
        '3.男方朋友<br/>淡水教會': ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10'],
        '4.世界之光1<br/>&nbsp;': ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'],
        '5.世界之光2<br/>&nbsp;': ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10'],
        '6.女方同事1<br/>&nbsp;': ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10'],
        '7.女方同事2<br/>&nbsp;': ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10'],
        '8.女方同事3<br/>&nbsp;': ['I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I10'],
        '9.女方朋友1<br/>&nbsp;': ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'],
        '10.女方親戚1<br/>&nbsp;': ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'],
        '11.女方親戚2<br/>&nbsp;': ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'],
        '12.女方親戚3<br/>&nbsp;': ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'],
        '13.女方親戚4<br/>&nbsp;': ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'],
        '14.女方媽媽同事1<br/>&nbsp;': ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'],
        '15.女方媽媽同事2<br/>&nbsp;': ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'],
        '16.女方媽媽教會<br/>&nbsp;': ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'],
      },
    };
  },
};
</script>

<style scoped>
@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';

.pickedTableHead {
  color: #ecd7d0;
  background-color: #890025;
}

.content {
  font-family: 'Noto Sans TC';
  font-weight: '400';
  color: 'black'
}
</style>
