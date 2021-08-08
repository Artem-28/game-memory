<template>
  <div class="registration">
    <h2>Регистрация</h2>
    <div class="registration__content">
      <div
          class="registration__control"
          v-for="(control, key) in controls"
          :key="control.id"
      >
        <gm-input
            :options="control.options"
            :label="control.label"
            :name="control.name"
            :error-message="validate[key] ? validate[key].message : ''"
            :invalid="validate[key] ? !validate[key].isValid : true"
            :type="control.type"
            v-model="control.value"
            @blur="touch(key)"
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
          :disabled="$v.$invalid"
      />
    </div>

  </div>
</template>

<script>
import GmButton from "../GmButton";
import GmInput from "../GmInput";
import {mapActions} from "vuex";
import {email, required, minLength, sameAs} from "vuelidate/lib/validators";

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
          options: {
            width: '100%',
            height: '50px',
          },
          touch: false
        },
        name: {
          id: 2,
          label: 'Введите ваше имя',
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
          value: '',
          type: 'password',
          options: {
            width: '100%',
            height: '50px',
          },
          touch: false
        },
        confirmPassword: {
          id: 4,
          label: 'Повторите пароль',
          type: 'password',
          value: '',
          options: {
            width: '100%',
            height: '50px',
          },
          touch: false
        }
      },
    }
  },
  validations: {
    controls: {
      email: {
        value: {required, email}
      },
      name: {
        value: {required}
      },
      password: {
        value: {required, minLength: minLength(6)}
      },
      confirmPassword: {
        value: {sameAs: sameAs(function () {return this.controls.password.value})}
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
        name: {
          isValid: true,
          message: ''
        },
        password: {
          isValid: true,
          message: ''
        },
        confirmPassword: {
          isValid: true,
          message: ''
        },
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
      if(!this.$v.controls.confirmPassword.value.sameAs && this.controls.confirmPassword.touch) {
        controls.confirmPassword.isValid = false
        controls.confirmPassword.message = 'Пароли не совпадают'
        return controls
      }
      return controls
    },
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
    },
    touch(key){
      this.controls[key].touch = true
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
