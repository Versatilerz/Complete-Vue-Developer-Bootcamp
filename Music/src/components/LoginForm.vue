<script>
export default {
  name: 'Loginform',
  data() {
    return {
      tab: 'login',
      loginSchema: {
        Email: 'required|min:5|max:50|email',
        Password: 'required|min:9|max:100|excluded:password'
      },
      login_in_submission: false,
      login_show_alert: false,
      login_alert_variant: 'bg-blue-500',
      login_alert_message: 'Please wait! We are logging you in.'
    };
  },
  methods: {
    login(values) {
      this.login_in_submission = true;
      this.login_show_alert = true;
      this.login_alert_variant = 'bg-blue-500';
      this.login_alert_message = 'Please wait! We are logging you in.';

      this.login_alert_variant = 'bg-green-500';
      this.login_alert_message = 'Succes! You are now logged in.';

      console.log(values);
    }
  }
};
</script>

<template>
  <!-- Login Form -->
  <div
    class="text-white text-center font-bold p-4 mb-4"
    v-if="login_show_alert"
    :class="login_alert_variant"
  >
    {{ login_alert_message }}
  </div>
  <vee-form :validation-schema="loginSchema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        name="Email"
        type="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="Email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        name="Password"
        type="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      >
      </vee-field>
      <ErrorMessage class="text-red-600" name="Password" />
    </div>
    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
      @disabled="login_in_submission"
    >
      Submit
    </button>
  </vee-form>
</template>
