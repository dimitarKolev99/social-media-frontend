<template>
  <q-layout view="hhh lpR fFf">
    <q-header class="bg-primary text-white fixed" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
        <q-tabs>
          <q-route-tab to="/feed" label="Feed" />
          <q-route-tab to="/page2" label="Page Two" />
          <q-route-tab to="/page3" label="Page Three" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container class="full-height bg-web-wash">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts"></script>
<style lang="sass" scoped>
.fixed
  position: fixed !important

.bg-web-wash
  background: $web-wash
</style>
