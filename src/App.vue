<template>
  <router-view />
</template>

<script lang="ts">
import { onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  name: 'App',

  setup(props) {
    const route = useRoute();
    const router = useRouter();

    const path = computed(() => route.path);

    const disallowBackWhenLogged = onMounted(() => {
      window.onpopstate = (event) => {
        if (
          window.localStorage.getItem('userInfo') !== null &&
          path.value == '/login'
        ) {
          router.push('/app');
        }
      };
    });

    return {
      disallowBackWhenLogged,
    };
  },
};
</script>
