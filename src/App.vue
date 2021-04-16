<template>
    <Header />
    <button class="addTaskButton" :class="{'closeBtn' : showAddForm}" type="button" @click="addTaskForm">{{showAddForm ? 'CLOSE' : 'ADD'}}</button>
    <Tasks :showForm="showAddForm"/>
</template>
<script>
import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
export default {
  name: 'App',
  components: {
    Header,
    Tasks
  },
  data () {
    return {
      showAddForm : false
    }
  },
  methods : {
    addTaskForm () {
      this.showAddForm = !this.showAddForm
    }
  }
}
</script>

<style>
* {
  margin:0;
  padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.closeBtn {
  background :red
}
</style>
