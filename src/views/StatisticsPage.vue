<template>
  <div class="statistics-page">
    <h1>Рейтинг игроков</h1>
    <gm-rating-list />
  </div>

</template>

<script>
import GmRatingList from "../components/Statistics/GmRatingList";
export default {
  name: "StatisticsPage",
  components: {GmRatingList}
}
</script>

<style scoped>
.statistics-page {
  box-sizing: border-box;
  margin: 0 10px;
}

</style>
