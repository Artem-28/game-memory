<template>
  <div class="login">
    <h2>Авторизация</h2>
    <div class="login__content">
      <div
          class="login__control"
          v-for="control in controls"
          :key="control.id"
      >
        <gm-input
            :options="control.options"
            :label="control.label"
            :error-message="control.errorMessage"
            :type="control.type"
             v-model="control.value"
        />
      </div>
    </div>
    <div class="login__buttons">
      <gm-button
          :options="registrationBtnOption"
          @click="$emit('flip')"
      />
      <gm-button
          :options="logInBtnOption"
          @click="authorization"
      />
    </div>

  </div>
</template>

<script>
import GmButton from "../GmButton";
import GmInput from "../GmInput";
import {mapActions} from "vuex";
export default {
  name: "GmLoginForm",
  components: {GmInput, GmButton},
  data() {
    return {
      registrationBtnOption: {
        width: '240px',
        height: '50px',
        text: 'к регистрации',
        disabled: false
      },
      logInBtnOption: {
        width: '240px',
        height: '50px',
        text: 'войти',
        disabled: false
      },
      controls: {
        email: {
          id: 1,
          label: 'Введите ваш email',
          type: 'text',
          value: '',
          errorMessage: 'Не корректный email',
          options: {
            width: '100%',
            height: '50px',
          },
        },
        password: {
          id: 3,
          label: 'Введите пароль',
          value: '',
          type: 'password',
          errorMessage: 'Поле не должно быть пустым',
          options: {
            width: '100%',
            height: '50px',
          }
        },
      },
    }
  },
  methods: {
    ...mapActions({
      login: "Auth/login",
    }),
    async authorization() {
      const formData = {
        email: this.controls.email.value,
        password: this.controls.password.value
      }
      await this.login(formData);
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  h2 {
    margin-top: 0;
    text-align: center;
  }
  width: 100%;
  max-width: 550px;
  padding: 50px 30px;
  box-sizing: border-box;
  border-radius: 10px;
  background:  rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  &__content {
    padding: 20px 0;
  }
  &__control {
    margin-bottom: 20px;
  }
  &__buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}

</style>
