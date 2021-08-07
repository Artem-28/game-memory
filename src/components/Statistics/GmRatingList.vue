<template>
  <div class="rating-table">
    <div class="table-header">
      <div class="table-header__item">Место в рейтинге</div>
      <div class="table-header__item">Имя игрока</div>
      <div class="table-header__item">Email игрока</div>
      <div class="table-header__item">Набрано очков</div>
    </div>
    <div class="table-content">
      <gm-rating-list-row v-for="(user, index) in users" :index="index + 1" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script>
import GmRatingListRow from "./GmRatingListRow";
import {mapActions} from "vuex";
export default {
  name: "GmRatingList",
  components: {GmRatingListRow},
  computed: {
    users() {
      return this.$store.state.Users.users
    }
  },
  methods: {
    ...mapActions({
      getUsers: "Users/getUsers",
    })
  },
  async mounted() {
    await this.getUsers()
  }
}
</script>

<style lang="scss" scoped>
.rating-table {
  width: 100%;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
}
.table-header {
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  background: rgba(255, 255, 255, 0.1);
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  &__item {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__item:not(:last-child) {
    border-right: 2px solid rgba(255, 255, 255, 0.5);
  }
}
.table-content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}


</style>
