<template>
  <div id="app">
    <h1>Calculadora</h1>
    <CalculatorApp />
  </div>
</template>

<script>
import CalculatorApp from './main/Calculator.vue'
export default {
  components: {
    CalculatorApp
  }
}
</script>

<style>
* {
  font-family: 'Arial', sans-serif;
}
body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #fff;
  background: linear-gradient(90deg, #2E3192, #1BFFFF);
}

</style>