<template>
  <div class="registration">
    <h2>Регистрация</h2>
    <div class="registration__content">
      <div
          class="registration__control"
          v-for="control in controls"
          :key="control.id"
      >
        <gm-input
            :options="control.options"
            :label="control.label"
            :name="control.name"
            :error-message="control.errorMessage"
            :type="control.type"
            v-model="control.value"
        />
      </div>
    </div>
    <div class="registration__buttons">
      <gm-button
          :options="logInBtnOption"
          @click="$emit('flip')"
      />
      <gm-button
          :options="registrationBtnOption"
          @click="registration"
      />
    </div>

  </div>
</template>

<script>
import GmButton from "../GmButton";
import GmInput from "../GmInput";
import {mapActions} from "vuex";
export default {
  name: "GmRegistrationForm",
  components: {GmInput, GmButton},
  data() {
    return {
      registrationBtnOption: {
        width: '240px',
        height: '50px',
        text: 'Зарегистрироваться'
      },
      logInBtnOption: {
        width: '240px',
        height: '50px',
        text: 'ко входу'
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
          }
        },
        name: {
          id: 2,
          label: 'Введите ваше имя',
          type: 'text',
          value: '',
          errorMessage: 'Поле не должно быть пустым',
          options: {
            width: '100%',
            height: '50px',
          }
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
        confirmPassword: {
          id: 4,
          label: 'Повторите пароль',
          type: 'password',
          value: '',
          errorMessage: 'Пароли не совпадают',
          options: {
            width: '100%',
            height: '50px',
          }
        }
      },
    }
  },
  methods: {
    ...mapActions({
      register: "Auth/register",
    }),
    async registration() {
      const formData = {
        email: this.controls.email.value,
        name: this.controls.name.value,
        password: this.controls.password.value
      }
      await this.register(formData)
    }
  }
}
</script>

<style lang="scss" scoped>
.registration {
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
