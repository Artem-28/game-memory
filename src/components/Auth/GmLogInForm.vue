<template>
  <div class="login">
    <h2>Авторизация</h2>
    <div class="login__content">
      <div
          class="login__control"
          v-for="(control, key) in controls"
          :key="control.id"
      >
        <gm-input
            :options="control.options"
            :label="control.label"
            :error-message="validate[key] ? validate[key].message : ''"
            :type="control.type"
             v-model="control.value"
            :id="control.name"
            :invalid="validate[key] ? !validate[key].isValid : false"
            @blur="touch(key)"
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
          :disabled="$v.$invalid"
      />
    </div>

  </div>
</template>

<script>
import GmButton from "../GmButton";
import GmInput from "../GmInput";
import {mapActions} from "vuex";
import {email, required} from 'vuelidate/lib/validators'
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
          name: 'email',
          label: 'Введите ваш email',
          type: 'text',
          value: '',
          options: {
            width: '100%',
            height: '50px',
          },
          touch: false
        },
        password: {
          id: 3,
          label: 'Введите пароль',
          name: 'password',
          value: '',
          type: 'password',
          options: {
            width: '100%',
            height: '50px',
          },
          touch: false
        },
      },
    }
  },
  validations: {
    controls: {
      email: {
        value: {required, email}
      },
      password: {
        value: {required}
      }
    }
  },
  computed: {
    validate() {
      const controls = {
        email: {
          isValid: true,
          message: ''
        },
        password: {
          isValid: true,
          message: ''
        }
      }
      Object.keys(controls).map(key => {
        if(this.$v.controls[key].value.required !== undefined &&!this.$v.controls[key].value.required && this.controls[key].touch) {
          controls[key].isValid = false
          controls[key].message = 'Поле обязательно для заполнения'
          return controls
        }
      })

      if(!this.$v.controls.email.value.email && this.controls.email.touch) {
        controls.email.isValid = false
        controls.email.message = 'Некорректный email'
        return controls
      }
      return controls
    },
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
    },
    touch(key){
      this.controls[key].touch = true
    }
  },
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
