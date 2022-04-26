<template>
  <div id="app">
    <nav class="bg-black">
      <router-link to="/">Home<i class="fa-brands fa-youtube"></i></router-link>
      |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    <div class="todos hover:bg-green-500" v-for="todo of todos" :key="todo.id">
      <p>{{ todo.name }}</p>
    </div>
    <form class="bg-red-500 p-4" action="">
      <input class="textSet" type="text" placeholder="Что знает Аружан?" />
      <button @click="checkInputs()" class="buttonSet" type="button">Отправить</button>
    </form>
    <p @click="setCounter()">{{ getCounter }}</p>
    <p v-if="setShower == true">show/hide</p>
    <button @click="getShower()">show</button>
    <div>
      <p>theme</p>
      <button @click="setLocalStorage()"><i class="fas fa-moon"></i></button>
      <p>{{ currentTheme }}</p>
    </div>
    <div><p @click="addNumber(index)" v-for="(element, index) of first" :key="element">{{ element }}</p></div>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default {
  created() {
    for (let i = 0; i < 1000; i++) {
      if (i % 3 === 0) {
        this.numbers.push(i);
      }
    }
    console.log(this.numbers);
    let bool = false;
    if (bool === true) {
      console.log("hello world");
    }

  },
  data() {
    return {
      todos: [],
      numbers: [],
      currentTheme: localStorage.getItem('theme'),
      first: [1, 2, 3, 4, 5, 6],
      second: []
    };
  },
  computed: mapGetters(["getCounter", "setShower", "getTheme"]),

  methods: {
    ...mapActions(["setCounter", "getShower", "setTheme"]),
    async getTodos() {
      const res = await axios.get("http://localhost:3001/todos");
      this.todos = res.data;
    },
    setLocalStorage() {
      this.setTheme();
    localStorage.setItem('theme', this.getTheme);
    localStorage.getItem('theme');
    if (this.currentTheme === 'night') {
      this.currentTheme = 'light'
    } else {
      this.currentTheme = 'night'
    }
    },
    addNumber(index){
      this.second.push(this.first[index])
    },
    checkInputs() {
      if ($(".textSet").val() === "" || $(".textSet").val() === null) {
        console.log("Поле пустое");
      } else if ($(".textSet").val().length < 5) {
        console.log("Количество символов миньше 5");
      } else {
        console.log("Все в порядке")
      }
    }
  },
  async mounted() {
    this.getTodos();
  },
};
</script>
