<template>
  <div>
    <b-carousel
      :interval="4000"
      img-width="1024"
      img-height="480"
      style="text-shadow: 0.1px 0.1px 0.1px #333"
      background="rgba(255,255,255, 0.3)"
    >
      <template v-for="record in records">
        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide img-blank>
          <div class="content">
            <h2 style="text-align: left">{{ record.想對我們說的話 }}</h2>
            <h3 style="text-align: right">{{ record.姓名 }}({{ record.與新人關係 }})</h3>
          </div>
        </b-carousel-slide>
      </template>
    </b-carousel>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    records: [],
  }),
  methods: {
    loadData() {
      axios
        .get(`https://api.airtable.com/v0/${process.env.VUE_APP_ID}/WeddingForm`, {
          headers: {
            Authorization: "Bearer " + process.env.VUE_APP_KEY,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          let data = response.data.records;
          this.records = data
            .map((record) => record.fields)
            .filter((record) => !!record.想對我們說的話);
          console.log(JSON.stringify(this.records));
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
.carousel {
  padding-top: 20%;
}

.content {
  color: #c69c56;
}
</style>
