// import { defineComponent } from 'vue';
// import { useQuasar } from 'quasar';
// import { ref } from 'vue';

// export default defineComponent({
//   props: {},

//   setup() {
//     const $q = useQuasar();

//     const tab = ref('login');

//     const name = ref(null);

//     const email = ref('');
//     const password = ref('');
//     const isPwd = ref(true);

//     const bar = ref();

//     // we manually trigger it (this is not needed if we
//     // don't skip Ajax calls hijacking)
//     function trigger() {
//       const barRef = bar.value;
//       console.log(bar.value);
//       barRef.start();

//       setTimeout(() => {
//         const barRef = bar.value;
//         if (barRef) {
//           barRef.stop();
//         }
//       }, Math.random() * 3000 + 1000);
//     }

//     const dialogOpen = ref(true);

//     return {
//       name,
//       dialogOpen,
//       trigger,
//       email,
//       password,
//       isPwd,
//       tab,
//       bar,

//       onSubmit() {
//         $q.notify({
//           color: 'green-4',
//           textColor: 'white',
//           icon: 'cloud_done',
//           message: 'Submitted',
//         });
//       },

//       onReset() {
//         name.value = null;
//         email.value = '';
//         password.value = '';
//       },
//     };
//   },
// });
