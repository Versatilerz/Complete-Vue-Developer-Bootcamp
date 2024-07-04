<template>
  <AppForm>    
    <div><p>This is some help text</p></div>
    <div>
      <input class="help" placeholder="email"></input>
      <input class="fields" placeholder="username"></input>
      <input class="buttons" placeholder="password"></input>
    </div>
    <div class="buttons">
      <button type="submit">Submit</button>
    </div>
    </AppForm>
    <AppForm></AppForm>
</template>

<script>
import AppForm from "./components/Form.vue";

export default {
  name: "App",
  components: {
    AppForm,
  },
};
</script>
