<template>
  <gm-flip-card :flip="isRegistration" :absolute="isRegistration">
    <template v-slot:front>
      <gm-login-form @flip="isRegistration = true"/>
    </template>
    <template v-slot:back>
      <gm-registration-form @flip="isRegistration = false"/>
    </template>
  </gm-flip-card>
</template>

<script>
import GmRegistrationForm from "../components/Auth/GmRegistrationForm";
import GmLoginForm from "../components/Auth/GmLogInForm";
import GmFlipCard from "../components/GmFlipCard";
export default {
  name: "AuthPage",
  components: {GmFlipCard, GmLoginForm, GmRegistrationForm},
  data() {
    return {
      isRegistration: false
    }
  },
}
</script>

<style scoped>

</style>
