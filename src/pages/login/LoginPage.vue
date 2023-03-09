<template>
  <div>
    <q-dialog v-model="dialogOpen" persistent>
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Login" />
          <q-tab name="signup" label="Signup" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel
            name="login"
            style="
              min-height: 376px;
              display: flex;
              justify-content: center;
              align-items: center;
            "
          >
            <q-card-section class="row items-center" style="width: 100%">
              <q-form
                @submit="onSubmitLogin"
                @reset="onReset"
                class="q-gutter-md"
                style="width: 100%"
              >
                <q-input
                  filled
                  v-model="username"
                  label="Username *"
                  hint="Username"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Please fill in your username',
                  ]"
                />

                <q-input
                  v-model="password"
                  filled
                  :type="isPwd ? 'password' : 'text'"
                  label="Password *"
                  hint="Password"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) ||
                      'Please fill in your password (no rules)',
                  ]"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>

                <div>
                  <q-btn label="Submit" type="submit" color="primary" />
                  <q-btn
                    label="Reset"
                    type="reset"
                    color="primary"
                    flat
                    class="q-ml-sm"
                  />
                </div>
              </q-form>
            </q-card-section>
          </q-tab-panel>

          <q-tab-panel name="signup">
            <q-card-section class="row items-center">
              <q-form
                @submit="onSubmitSignup"
                @reset="onReset"
                class="q-gutter-md"
                style="width: 100%"
              >
                <q-input
                  filled
                  v-model="username"
                  label="Username *"
                  hint="Username"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Please fill in your username',
                  ]"
                />

                <q-input
                  v-model="email"
                  filled
                  type="email"
                  label="Email *"
                  hint="Email"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Please fill in your email',
                  ]"
                />

                <q-input
                  v-model="password"
                  filled
                  :type="isPwd ? 'password' : 'text'"
                  label="Password *"
                  hint="Password"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) ||
                      'Please select a password (no rules)',
                  ]"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>

                <div>
                  <q-btn label="Submit" type="submit" color="primary" />
                  <q-btn
                    label="Reset"
                    type="reset"
                    color="primary"
                    flat
                    class="q-ml-sm"
                  />
                </div>
              </q-form>
            </q-card-section>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </q-dialog>

    <q-ajax-bar ref="bar" position="top" color="accent" size="10px" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  AuthControllerApi,
  SignupRequest,
  RegisterUserRequest,
  LoginRequest,
  AuthenticateUserRequest,
} from 'src/api';
import { lastValueFrom } from 'rxjs';
import { useAuthStore } from 'src/stores/auth';
import { useApiStore } from 'src/stores/ApiStore';

const authApi: AuthControllerApi = new AuthControllerApi();

const authStore = useAuthStore();

const apiStore = useApiStore();

export default defineComponent({
  props: {},

  setup() {
    const $q = useQuasar();

    const router = useRouter();

    const tab = ref('login');

    const username = ref('');

    const email = ref('');
    const password = ref('');
    const isPwd = ref(true);

    const bar = ref(null);

    // we manually trigger it (this is not needed if we
    // don't skip Ajax calls hijacking)
    function trigger() {
      const barRef = bar.value;
      barRef.start();

      setTimeout(() => {
        const barRef = bar.value;
        if (barRef) {
          barRef.stop();
        }
      }, Math.random() * 3000 + 1000);
    }

    const dialogOpen = ref(true);

    return {
      username,
      dialogOpen,
      trigger,
      email,
      password,
      isPwd,
      tab,
      bar,

      onSubmitSignup() {
        const userRequest: SignupRequest = {
          username: username.value,
          email: email.value,
          password: password.value,
          role: ['USER'],
        };

        const req: RegisterUserRequest = {
          signupRequest: userRequest,
        };

        // authApi
        //   .registerUser(req)
        //   .toPromise()
        //   .then((response) => {
        //     console.log('Response with Promise: ', response);
        //   });

        let response: object;

        async function performRegister() {
          response = await lastValueFrom(authApi.registerUser(req));

          $q.notify({
            color: response.message !== void 0 ? 'green-4' : 'red-4',
            textColor: 'white',
            icon: 'cloud_done',
            message:
              response.message !== void 0
                ? response.message
                : 'Registering user failed',
          });

          response.message !== void 0 ? redirect() : 'Registering user failed';
        }

        performRegister();
      },

      onSubmitLogin() {
        const reqBody: LoginRequest = {
          username: username.value,
          password: password.value,
        };

        const req: AuthenticateUserRequest = {
          loginRequest: reqBody,
        };

        async function performLogin() {
          const response = await lastValueFrom(authApi.authenticateUser(req));

          $q.notify({
            color: response.username !== void 0 ? 'green-4' : 'red-4',
            textColor: 'white',
            icon: 'cloud_done',
            message:
              response.username !== void 0
                ? 'Login successful'
                : 'Login failed',
          });

          if (response.username !== void 0) {
            authStore.setUser(response.username);
            apiStore.setJwt(response.jwt);
            router.push('/app');
          }
        }

        performLogin();
      },

      onReset() {
        username.value = '';
        email.value = '';
        password.value = '';
      },
    };
  },
});
</script>
<style src="./LoginPage.sass"></style>
