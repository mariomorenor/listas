<script setup lang="ts"></script>

<template>
  <v-app>
    <v-navigation-drawer permanent>
      <v-list-item
        elevation="3"
        class="pa-7"
        prepend-avatar="/src/assets/app.png"
        title="Mi Lista 🗒️"
        subtitle="Planificación Efectiva"
      />
      <v-list-item
        class="pa-5"
        prepend-avatar="/src/assets/clients.png"
        to="/clientes"
        title="Clientes"
      />
      <v-list-item
        class="pa-5"
        prepend-avatar="/src/assets/lists.png"
        :to="{ name: 'Lists' }"
        link
        title="Listas"
      />
    </v-navigation-drawer>
    <v-main>
      <v-window>
        <router-view></router-view>
      </v-window>
    </v-main>
  </v-app>
</template>

<style></style>
