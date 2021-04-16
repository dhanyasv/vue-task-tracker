<template>
    <div class="task" :class="{'reminder' : task.reminder}" @dblclick="toggleMe">
        <h3 class="taskHead">{{task.name}} <button type="button" @click="deleteMe"> Delete </button></h3>
        <p class="taskPara">{{task.date}}</p>
                <p>{{testTite}}</p>
    </div>
</template>

<script>
export default {
    name:'Tasks',
    props : ['task', 'testTite'],
    emits : ['deleteTask', 'toggleTask'],
    methods:{
        deleteMe (id) {
            this.$emit('deleteTask', id)
        },
        toggleMe (id) {
            this.$emit('toggleTask', id)
        }
    }
}
</script>

<style>
.taskHead {
}
.taskPara {
}
.reminder {
    border-left:6px solid green;
}
</style>