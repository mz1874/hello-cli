<template>
  <div>
    <h1>人员列表</h1>
    <h3 class="h3-color">Counter 组件的求和值为 {{sum}}</h3>
    <input type="text" v-model="personName">
    <button @click="addPerson">添加</button>
    <br>
    <ul>
      <li v-for="(item, index) in personList" :key="index">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>

import {nanoid} from "nanoid";
import {mapState} from "vuex";

export default {
  name: 'Person',
  data() {
    return {
      personName: '',
    }
  },
  computed: {
    personList(){
      return this.$store.state.personAbout.persons;
    },
    ...mapState('countAbout', ['sum'])
  },
  methods: {
    addPerson() {
      const tmp = {
        'id': nanoid(),
        'name': this.personName
      }
      this.personName = ''
      this.$store.commit("personAbout/ADD_PERSON", tmp)
    }
  }

};
</script>


<style scoped>
.h3-color {
  color: red;
}
</style>
