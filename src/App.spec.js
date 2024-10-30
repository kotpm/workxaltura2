import { shallowMount } from '@vue/test-utils';
import App from './App.vue';

describe('App.vue - Calculator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App); 
  });

  it('додає два числа правильно', async () => {
    await wrapper.setData({ num1: 10, num2: 5 });
    wrapper.vm.calculate('+');
    expect(wrapper.vm.result).toBe(15);
  });

  it('віднімає два числа правильно', async () => {
    await wrapper.setData({ num1: 10, num2: 5 });
    wrapper.vm.calculate('-');
    expect(wrapper.vm.result).toBe(5);
  });

  it('множить два числа правильно', async () => {
    await wrapper.setData({ num1: 10, num2: 5 });
    wrapper.vm.calculate('*');
    expect(wrapper.vm.result).toBe(50);
  });

  it('ділить два числа правильно', async () => {
    await wrapper.setData({ num1: 10, num2: 5 });
    wrapper.vm.calculate('/');
    expect(wrapper.vm.result).toBe(2);
  });

  it('повертає помилку при діленні на нуль', async () => {
    await wrapper.setData({ num1: 10, num2: 0 });
    wrapper.vm.calculate('/');
    expect(wrapper.vm.result).toBe('Помилка: ділення на нуль');
  });
});
