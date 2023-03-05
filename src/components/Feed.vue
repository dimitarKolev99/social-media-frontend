<template>
  <div class="column justify-center items-center">
    <q-list separator class="column justify-center items-center list-width">
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
              width="32"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              style="border-radius: 50%; margin-right: 1rem"
            />

            <div>Dimitar Kolev</div>
          </div>
        </q-card-section>
        <q-card-section>
          <div>Description</div>
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
              @click="logoutHandler"
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
              <img
                style="border-radius: 50%; margin-right: 1rem"
                width="32"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              />
              <div>
                <div>Dimitar Kolev</div>
                <div>Comment</div>
              </div>
            </div>
            <div
              style="display: flex; flex-direction: row; align-items: center"
            >
              <img
                style="border-radius: 50%"
                width="32"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              />
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
      <q-card class="q-mb-sm">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
        <q-card-actions>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-actions>
      </q-card>
      <q-card class="q-mb-sm">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
        <q-card-actions>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-actions>
      </q-card>
      <q-card class="q-mb-sm">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
        <q-card-actions>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-actions>
      </q-card>
      <q-card class="q-mb-sm">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
        <q-card-actions>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-actions>
      </q-card>
      <q-card class="q-mb-sm">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
        <q-card-actions>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-actions>

        <q-page-scroller position="top" :scroll-offset="150" :offset="[0, 0]">
          <div
            class="col cursor-pointer q-pa-sm bg-accent text-white text-center"
          >
            Scroll back up...
          </div>
        </q-page-scroller>
      </q-card>
    </q-list>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from 'src/stores/auth';
import { useRouter } from 'vue-router';

const { logout } = useAuthStore();

export default {
  name: 'Feed',

  setup(props) {
    const text = ref('');

    const router = useRouter();

    function logoutHandler() {
      logout();
      router.push('/');
    }

    return {
      text,
      logout,
      logoutHandler,
    };
  },
};
</script>

<style lang="sass" scoped>

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
  width: 50%

@media only screen and (max-width: 600px)
  .card-width
    width: 90%
  .list-width
    width: 100%

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
</style>
