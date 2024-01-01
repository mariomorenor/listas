<script lang="ts" setup>
import Daily from '../components/Lists/Daily.vue'
import Grouped from '../components/Lists/Grouped.vue'
import { ref } from 'vue'

const tab = ref(null)
</script>
<template>
  <v-app class="ma-5">
    <v-card class="pa-5" elevation="5">
      <template #title>
        <h1 class="py-1">Mis Listas 😄</h1>
      </template>
      <v-tabs v-model="tab" class="px-4">
        <v-tab value="Diario">Individual</v-tab>
        <v-tab value="Semanal">Grupal</v-tab>
      </v-tabs>
      <div class="pa-5">
        <v-window v-model="tab">
          <v-window-item value="Diario">
            <Daily class="ma-1" />
          </v-window-item>
          <v-window-item value="Semanal">
            <Grouped />
          </v-window-item>
        </v-window>
      </div>
    </v-card>
  </v-app>
</template>
