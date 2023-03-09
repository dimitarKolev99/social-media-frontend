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
          width="32"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          style="border-radius: 50%; margin-right: 1rem"
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
        <div style="display: flex; flex-direction: row; align-items: center">
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
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'Post',
  props: {
    post: Object,
  },

  setup(props) {
    const text = ref('');

    return {
      text,
    };
  },
});
</script>
