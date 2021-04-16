<template>
<div class="newTaskForm" v-if="showForm" >
    <AddTask @addNewTask="addNew"/>
</div>
<div class="allTasks" >
    <Task v-for = "task in tasks"
            :testTite="'dhanya'"
            :task="task" 
            :key="task.key" 
            @deleteTask="deleteTsk(task.key)"
            @toggleTask="toggleTsk(task.key)"/>
    <span v-show="tasks.length === 0">No tasks added</span>
</div>
</template>

<script>
import Task from './Task'
import AddTask from './AddTask'
export default {
    name : 'Tasks',
    props : ['showForm'],
    components : {
         Task,
         AddTask
     },
    data () {
        return {
            tasks : []
        }
    },
    created () {
        this.tasks = [{
            key : 1,
            name : 'dhanya',
            date : '12 october',
            reminder : true
        }, {
            key : 2,
            name : 'adwin',
            date : '11 october',
            reminder : true
        }, {
            key : 3,
            name : 'akhil',
            date : '14 october',
            reminder : false
        }]
    }, 
    methods : {
         onClick () {
             console.log('dhanya')
         },
         deleteTsk (id) {
             this.tasks = this.tasks.filter((task) => task.key !== id)
         },
         toggleTsk (id) {
             this.tasks = this.tasks.map((task) => {
                 return (task.key === id ? { ...task, reminder:!task.reminder } : task)
             })
         },
         addNew (newTask) {
             this.tasks.push(newTask)
         },
         addForm (showAddForm) {
             console.log(showAddForm)
         }

     }
}
</script>

<style>
.addTaskButton {
    background: linear-gradient(45deg, green, transparent);
    width: 74px;
    height: 50px;
    border: none;
    border-radius: 11px;
    color: #333;
    font-size: 15px;
}
.allTasks {
    margin: auto;
    width: 50%;
    border: 3px solid green;
    padding: 10px;
    margin-top: 10px;
}
.task {
    background: antiquewhite;
    padding: 10px;
    margin: 10px;
}
.newTaskForm {
    margin: 10px 10px;
    padding: 10px;
    font-weight: bold;
    color: darkcyan;
}
</style>