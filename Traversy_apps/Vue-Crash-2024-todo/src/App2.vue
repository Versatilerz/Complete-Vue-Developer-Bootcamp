<script setup>
import { ref } from "vue";

const name = ref("Composition API");
const status = ref("active");
const tasks = ref(["Task one", "Task two", "Task three"]);
const newTask = ref("");

const changeStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />

    <button type="submit">Submit</button>
  </form>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks">{{ task }}</li>
  </ul>

  <!-- <a v-bind:href="link">Click for Google</a> -->
  <!-- <a :href="link">Click for Google</a> -->
  <br />
  <!-- <button v-on:click="changeStatus">Change Status</button> -->
  <button @click="changeStatus">Change Status</button>
</template>
