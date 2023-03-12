<template>
  <q-card class="q-mb-sm card-width">
    <q-card-section>
      <div
        style="
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: start;
        "
      >
        <img
          :src="imageSrc"
          v-if="imageLoaded"
          style="
            border-radius: 50%;
            margin-right: 1rem;
            width: 40px;
            height: 40px;
          "
        />

        <div>{{ post.user.username }}</div>
      </div>
    </q-card-section>
    <q-card-section>
      <div>{{ post.description }}</div>
    </q-card-section>
    <q-card-section class="text-center">
      <q-img
        width="50%"
        src="https://cdn.quasar.dev/logo-v2/svg/logo.svg"
      ></q-img>
    </q-card-section>
    <q-card-section>
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        "
      >
        <div
          style="
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
          "
        >
          <q-icon name="thumb_up" />
          <div>12</div>
        </div>
        <div>12 Comments</div>
      </div>
    </q-card-section>
    <q-card-actions>
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: stretch;
          width: 100%;
        "
      >
        <q-btn
          label="Like"
          style="width: 100%"
          class="like-btn no-shadow segoe-600"
        />
        <q-btn
          label="comment"
          style="width: 100%"
          class="comment-btn no-shadow segoe-600"
        />
      </div>
    </q-card-actions>
    <q-card-section>
      <div class="container">
        <div
          style="
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: start;

            padding-bottom: 1rem;
          "
        >
          <img style="border-radius: 50%; margin-right: 1rem" width="32" />
          <div>
            <div>Dimitar Kolev</div>
            <div>Comment</div>
          </div>
        </div>
        <div style="display: flex; flex-direction: row; align-items: center">
          <img style="border-radius: 50%" width="32" />
          <q-input
            v-model="text"
            filled
            autogrow
            style="margin-left: 1rem; width: 100%"
            bg-color="web-wash"
            label="Write a comment"
          >
            <template v-slot:append>
              <q-icon name="send" class="cursor-pointer" />
            </template>
          </q-input>
          <!-- <input type="text" style="margin-left: 1rem" /> -->
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useApiStore } from 'src/stores/ApiStore';
import { PostControllerApi } from 'src/api';
import { lastValueFrom } from 'rxjs';
import { BASE_PATH } from 'src/api';

export default defineComponent({
  name: 'Post',
  props: {
    post: Object,
  },

  data() {
    return {
      text: '',
      imageSrc: null,
      imageLoaded: false,
    };
  },

  methods: {
    getProfilePicUrl(post) {
      if (post.user.fileInfo && post.user.fileInfo.uri) {
        const arg = post.user.fileInfo.uri.substring(
          'file:///C:/Users/mitko/Documents/dev/demo/uploads/-'.length - 1
        );
        this.loadXMLDoc(arg);
      } else {
        this.imageLoaded = true;
        this.imageSrc =
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
      }
    },

    loadXMLDoc(uri) {
      var xmlhttp = new XMLHttpRequest();

      xmlhttp.open('GET', BASE_PATH + '/uploads/' + uri);
      xmlhttp.responseType = 'arraybuffer';
      xmlhttp.setRequestHeader(
        'Authorization',
        window.localStorage.getItem('jwt')
      );
      xmlhttp.onload = () => {
        if (xmlhttp.status === 200) {
          var blob = new Blob([xmlhttp.response], { type: 'image/jpeg' }); // Create blob object
          this.imageSrc = URL.createObjectURL(blob); // Create object URL
          this.imageLoaded = true;
        } else {
          this.imageLoaded = true;
          this.imageSrc =
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
        }
      };

      xmlhttp.send();
    },
  },

  computed: {},

  async mounted() {
    const apiStore = useApiStore();
    const postControllerApi: PostControllerApi = apiStore.getPostControllerApi;
    this.getProfilePicUrl(this.post);
    // let response;

    // try {
    //   response = await lastValueFrom(postControllerApi.getProfilePicture());
    // } catch (e) {
    //   console.log(e);
    //   console.log('getProfilePicture: ', response);
    // }
  },
});
</script>
