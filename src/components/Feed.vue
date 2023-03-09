<template>
  <div class="column justify-center items-center">
    <input @click="inputFocused" v-model="newPostInput" />

    <q-dialog v-model="newPostModalOpened">
      <q-card class="modal-dialog">
        <q-card-section>
          <q-input type="textarea" v-model="newPostInput" />
        </q-card-section>
        <q-card-section v-if="addPhotoViewer">
          <q-img v-if="addPhotoViewer && isImageUploaded" width="100%" />
          <div class="photo-viewer">
            <q-icon
              v-if="addPhotoViewer"
              name="file_upload"
              size="2rem"
              class="upload-icon"
              @click="iconClickHandler"
            />
          </div>
          <input type="file" hidden ref="fileInputRef" />
        </q-card-section>
        <q-card-actions>
          <q-btn
            label="pic"
            @click="addPhotoViewer = !addPhotoViewer"
            color="green-4"
            style="border-radius: 15%"
          />
        </q-card-actions>
        <q-card-actions>
          <q-btn color="primary" label="Post" style="width: 100%" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-list separator class="column justify-center items-center list-width">
      <Post v-for="post in posts" :key="post.id" :post="post" />
      <q-page-scroller position="top" :scroll-offset="150" :offset="[0, 0]">
        <div
          class="col cursor-pointer q-pa-sm bg-accent text-white text-center"
        >
          Scroll back up...
        </div>
      </q-page-scroller>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import { useAuthStore } from 'src/stores/auth';
import { useRouter } from 'vue-router';
import Post from './Post.vue';
import { GetAllPostsRequest, PostControllerApi } from 'src/api';
import { lastValueFrom } from 'rxjs';
import { useApiStore } from 'src/stores/ApiStore';

const { logout } = useAuthStore();

export default defineComponent({
  name: 'Feed',
  components: { Post },

  setup(props) {
    const router = useRouter();

    const allPostRequest: GetAllPostsRequest = {
      page: undefined,
      size: undefined,
    };

    let response;

    let posts = ref([]);

    const newPostInput = ref('');

    const newPostModalOpened = ref(false);

    const addPhotoViewer = ref(false);

    const fileInputRef = ref(null);

    const isImageUploaded = ref(false);

    onMounted(async () => {
      const apiStore = useApiStore();
      const postControllerApi: PostControllerApi =
        apiStore.getPostControllerApi;

      response = await lastValueFrom(
        postControllerApi.getAllPosts(allPostRequest)
      );

      posts.value = response.posts;
    });

    function logoutHandler() {
      logout();
      router.push('/');
    }

    function inputChangeHandler(e) {
      console.log(e);
    }

    function inputFocused(e) {
      newPostModalOpened.value = true;
    }

    function iconClickHandler() {
      fileInputRef.value.click();
    }

    return {
      logout,
      logoutHandler,
      posts,
      inputChangeHandler,
      newPostInput,
      inputFocused,
      newPostModalOpened,
      addPhotoViewer,
      iconClickHandler,
      fileInputRef,
      isImageUploaded,
    };
  },
});
</script>

<style lang="sass">

.segoe-600
  font-family: Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif
  color: #65676B
  font-size: 15px
  font-weight: 600
  line-height: 19.995px

.segoe-400-black
  font-family: Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif
  color: rgb(5, 5, 5)
  font-size: 15px
  font-weight: 400
  line-height: 19.995px

.card-width
  width: 100%

.list-width
  width: 30%

.photo-viewer
  width: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

.modal-dialog
  width: 30%

@media only screen and (max-width: 480px)
  .card-width
    width: 90%
  .list-width,
  .modal-dialog
    width: 100%



@media only screen and (min-width: 481px) and (max-width: 768px)
  .card-width
    width: 80%
  .list-width,
  .modal-dialog
    width: 90%

@media only screen and (min-width: 769px) and (max-width: 1024px)
  .card-width
    width: 100%
  .list-width,
  .modal-dialog
    width: 40%

@media only screen and (min-width: 1025px) and (max-width: 1200px)
  .card-width
    width: 100%
  .list-width,
  .modal-dialog
    width: 30%



.like-btn
  background: $white

.like-btn:hover
  background: $hover-overlay
.like-btn:before
  box-shadow: none


.comment-btn
  background: $white
.comment-btn:hover
  background: $hover-overlay
.comment-btn:before
  box-shadow: none


.upload-icon
  padding: 5px
  &:hover
    border-radius: 50%
    cursor: pointer
    background: $web-wash
</style>
