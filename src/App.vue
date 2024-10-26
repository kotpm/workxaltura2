<template>
  <div class="calculator">
    <h2>Простий калькулятор</h2>
    <input type="number" v-model="num1" placeholder="Перше число" />
    <input type="number" v-model="num2" placeholder="Друге число" />

    <div class="buttons">
      <button @click="calculate('+')">+</button>
      <button @click="calculate('-')">-</button>
      <button @click="calculate('*')">×</button>
      <button @click="calculate('/')">÷</button>
    </div>

    <h3>Результат: {{ result }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: 0,
      num2: 0,
      result: 0,
    };
  },
  methods: {
    calculate(operation) {
      const number1 = parseFloat(this.num1);
      const number2 = parseFloat(this.num2);

      switch (operation) {
        case '+':
          this.result = number1 + number2;
          break;
        case '-':
          this.result = number1 - number2;
          break;
        case '*':
          this.result = number1 * number2;
          break;
        case '/':
          this.result = number2 !== 0 ? number1 / number2 : 'Помилка: ділення на нуль';
          break;
        default:
          this.result = 'Невідома операція';
      }
    },
  },
};
</script>

<style scoped>
.calculator {
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

input {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  font-size: 16px;
}

.buttons button {
  padding: 10px 15px;
  margin: 5px;
  font-size: 18px;
  cursor: pointer;
}

h3 {
  margin-top: 20px;
}
</style>