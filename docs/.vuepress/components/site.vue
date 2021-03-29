<template>
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-4 text-center" v-for="key in Object.keys(seat)" :key="key">
        <div class="row col-12 text-center">
          <div class="col-12 border border-secondary pickedTableHead">
            <span v-html="key" :style="{ 'font-family': 'Noto Sans TC', 'font-weight': '400' }" />
          </div>
          <div class="col-6 border border-secondary" v-for="(person, index) in seat[key]" :key="index" :style="{ color: '#D0665A' }">
            {{ person }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seat: {
        '1.主桌': ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10'],
        '2.男方親戚': ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10'],
        '3.男方朋友<br/>淡水教會': ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10'],
        '4.世界之光1': ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'],
        '5.世界之光2': ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10'],
        '6.女方同事1': ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10'],
        '7.女方同事2': ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10'],
        '8.女方同事3': ['I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I10'],
        '9.女方朋友1': ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'],
        '10.女方親戚1': ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'],
        '11.女方親戚2': ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'],
        '12.女方親戚3': ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'],
        '13.女方媽媽同事1': ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'],
        '14.女方媽媽同事2': ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'],
        '15.女方媽媽教會': ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'],
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
</style>
