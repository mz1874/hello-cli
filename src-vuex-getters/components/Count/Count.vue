<template>
  <div class="Count">
    <h1>当前的Sum为:{{ $store.state.sum }}</h1>
    <h1>当前的Sum 放大十倍为:{{ $store.getters.bigSum }}</h1>
    <select v-model.number="value">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increase">增加</button>
    <button @click="decrease">减少</button>
    <button @click="increaseOdd">奇数增加</button>
    <button @click="delayIncrease">等待增加</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data() {
    return {
      sum: 0,
      value: 1,
    }
  },
  methods: {
    increase() {
      this.$store.dispatch("increment", this.value);
    },
    decrease() {
      this.$store.commit("decreaseCount", this.value);
    },
    increaseOdd() {
        this.$store.dispatch("increaseOdd", this.value);
    },
    delayIncrease() {
      this.$store.dispatch("delayIncrease", this.value);
    },
  }
};
</script>
