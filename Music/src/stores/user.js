import { defineStore } from 'pinia';
import { auth, usersCollection } from '@/includes/firebase';

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),
  actions: {
    async register(values) {
      await auth.createUserWithEmailAndPassword(values.Email, values.Password);

      await usersCollection.add({
        name: values.Name,
        email: values.Email,
        age: values.Age,
        country: values.Country
      });

      this.userLoggedIn = true;
    }
  }
});
