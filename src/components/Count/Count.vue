<template>
  <div class="Count">
    <h1>当前的Sum为:{{ sum }}</h1>
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
      this.sum += this.value;
    },
    decrease() {
      this.sum -= this.value;
    },
    increaseOdd() {
      if (this.sum % 2 === 1) {
        this.sum += this.value;
      }
    },
    delayIncrease() {
      setTimeout(()=>{
        this.sum+=this.value;
      },500)
    },
  }
};
</script>
