<template>
  <div class="container">
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="searchText"/>&nbsp;<button
          @click="search()">Search
      </button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'SearchComponent',
  components: {},
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    search() {
      this.$bus.$emit("sendPersonsData", {
        persons: [],
        isFirst: false,
        isLoading: true,
        errorMsg: ''
      })

      axios.get(`https://api.github.com/search/users?q=${this.searchText}`)
          .then(success => {
            this.$bus.$emit("sendPersonsData", {
              persons: success.data.items,
              isFirst: false,
              isLoading: false,
              errorMsg: ''
            })
          }).catch(error => {
        this.$bus.$emit("sendPersonsData", {
          persons: [],
          isFirst: false,
          isLoading: false,
          errorMsg: error
        })
      })
    }
  }
}
</script>

<style scoped>

</style>