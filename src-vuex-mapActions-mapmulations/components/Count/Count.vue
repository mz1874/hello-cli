<template>
  <div class="Count">
    <h1>当前的Sum为:{{ total }}</h1>
    <h1>当前的Sum 放大十倍为:{{ bigSum }}</h1>
    <select v-model.number="value">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increase(value)">增加</button>
    <button @click="decrease(value)">减少</button>
    <button @click="increaseOdd(value)">奇数增加</button>
    <button @click="delayIncrease(value)">等待增加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from "vuex";

export default {
  name: 'Count',
  data() {
    return {
      sum: 0,
      value: 1,
    }
  },
  computed:{
    ...mapState({'total':'sum'}),
    ...mapGetters({'bigSum':"bigSum"})
  },
  methods: {
    // increase() {
    //   this.$store.dispatch("increment", this.value);
    // },
    // decrease() {
    //   this.$store.commit("decreaseCount", this.value);
    // },
    // increaseOdd() {
    //     this.$store.dispatch("increaseOdd", this.value);
    // },
    // delayIncrease() {
    //   this.$store.dispatch("delayIncrease", this.value);
    // },

    ...mapActions({'increase':'increment', 'increaseOdd':'increaseOdd', 'delayIncrease':'delayIncrease'}),
    ...mapMutations({'decrease':'decreaseCount'})
  }
};
</script>
