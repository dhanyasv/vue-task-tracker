<template>
    <form class="addForm" @submit="addTask">
        <div class="formGroup">
            <label  class="formLabel">Task Name</label>
            <input class="inputText" type="text" name="taskName" v-model="form.name" >
        </div>
        <div class="formGroup">
            <label  class="formLabel">Task Date</label>
            <input class="inputText" type="text" name="taskDate" v-model="form.date">
        </div>
        <div class="checkFormgroup">
            <label  class="checkLabel">Task Reminder</label>
            <input class="inputCheck" type="checkbox" name="tskReminder" v-model="form.reminder">
        </div>   
        <div class="formGroup">
            <input class="addTaskButton" type="submit" value="ADD TASK">
        </div>
    </form>
</template>

<script>
export default {
    name: 'AddTask',
    props : ['name'],
    data () {
        return {
            form : {
                name : '',
                date: '',
                reminder :false
            }
        }
    },
    methods : {
        addTask (event) {
            event.preventDefault()
            let valName
            if (this.form.name === '' || this.form.date === '') {
                this.form.name === '' ? valName = 'Task Name' : valName = 'Task Date'
                alert(`please enter ${valName}`)
                return
            }
            const newTask = {
                key : Math.floor((Math.random() * 100) + 1),
                name : this.form.name,
                date : this.form.date,
                reminder : this.form.reminder
            }
            this.$emit('addNewTask', newTask)
            this.form.name = ''
            this.form.date = ''
        }
    }
}
</script>

<style>
.addForm {
    margin: auto;
    width: 50%;
}
.formGroup {
    display: block;
}
.formLabel {
    display: block;
    text-align: left;
    margin-bottom:10px;
}
.inputText {
    width: 100%;
    margin-bottom: 10px;
    height: 30px;
    font-size: 22px;
    padding: 5px 5px;
    letter-spacing: 1px;
    color: blue;
}
.inputCheck {
    height: 25px;
    width: 25px;
}
.checkLabel {
    display: inline;
    margin-right: 30px;
}
.checkFormgroup {
    text-align : left;
}
</style>