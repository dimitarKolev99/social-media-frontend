<template>
  <div class="column justify-center items-center">
    <q-input
      type="text"
      @click="inputFocused"
      bg-color="white"
      label="Make a post"
      filled
      autogrow
      class="list-width q-py-lg"
      v-model="newPostInput"
    >
      <template v-slot:append>
        <q-icon name="send" class="cursor-pointer" />
      </template>
    </q-input>

    <q-dialog v-model="newPostModalOpened">
      <q-card class="modal-dialog" style="overflow: hidden">
        <q-card-section>
          <q-input type="textarea" v-model="newPostInput" class="resize-none" />
        </q-card-section>
        <q-card-section>
          <div style="height: 200px; position: relative" v-if="addPhotoViewer">
            <div class="full-width" style="overflow-y: auto; max-height: 100%">
              <img ref="previewImgRef" class="full-width" />
            </div>
          </div>
          <div class="photo-viewer">
            <q-icon
              v-if="addPhotoViewer"
              name="file_upload"
              size="2rem"
              class="upload-icon"
              @click="iconClickHandler"
            />
          </div>
          <input
            type="file"
            hidden
            @change="previewFile()"
            ref="fileInputRef"
          />
        </q-card-section>
        <q-card-actions>
          <q-btn
            icon="image"
            @click="clickBtnHandler"
            color="green-4"
            style="width: 1rem"
          />
        </q-card-actions>
        <q-card-actions>
          <q-btn
            color="primary"
            label="Post"
            @click="createPost"
            style="width: 100%"
          />
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
import { lastValueFrom, retry } from 'rxjs';
import { useApiStore } from 'src/stores/ApiStore';

const { logout } = useAuthStore();

export default defineComponent({
  name: 'Feed',
  components: { Post },
  data() {
    return {
      posts: [],
      newPostInput: '',
      newPostModalOpened: false,
      addPhotoViewer: false,
      fileInputRef: null,
      isImageUploaded: false,
      previewImgRef: null,
    };
  },

  computed: {
    isImgSrcEmpty() {
      if (this.previewImgRef.value !== null) {
        console.log('HERE');

        return true;
      }

      return false;
    },

    isFileInputNotEmpty() {
      if (this.fileInputRef.value.files.length > 0) {
        console.log('NOT EMPTY');

        return true;
      }

      return false;
    },
  },

  async mounted() {
    const apiStore = useApiStore();

    const postControllerApi: PostControllerApi = apiStore.getPostControllerApi;

    const allPostRequest: GetAllPostsRequest = {
      page: undefined,
      size: undefined,
    };

    const response = await lastValueFrom(
      postControllerApi.getAllPosts(allPostRequest)
    );

    this.posts = response.posts;
  },

  methods: {
    logoutHandler(): void {
      const router = useRouter();
      logout();
      router.push('/');
    },

    inputChangeHandler(e): void {
      console.log(e);
    },

    inputFocused(e): void {
      this.newPostModalOpened = true;
    },

    iconClickHandler(): void {
      this.fileInputRef.click();
    },

    previewFile(): void {
      const file: Element | null = this.fileInputRef.files[0];
      const reader: FileReader = new FileReader();
      reader.addEventListener(
        'load',
        function (): void {
          this.previewImgRef.src = reader.result; // show image in <img> tag
        },
        false
      );
      if (file) {
        reader.readAsDataURL(file);
      }
    },

    clickBtnHandler() {
      console.log(this.fileInputRef.files.length);
      this.addPhotoViewer = !this.addPhotoViewer;
    },
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
  width: 50%

.resize-none .q-field__native
  resize: none

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
  .list-width
    width: 40%
  .modal-dialog
    width: 60%
@media only screen and (min-width: 1025px) and (max-width: 1200px)
  .card-width
    width: 100%
  .list-width
    width: 30%
  .modal-dialog
    width: 50%


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
