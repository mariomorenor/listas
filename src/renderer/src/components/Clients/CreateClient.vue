<template>
  <v-card class="pa-5">
    <template #title>
      <h2 class="mb-5">Editando Cliente</h2>
    </template>
    <template #actions>
      <v-spacer></v-spacer>
      <v-btn variant="elevated" color="success" @click="update()">Confirmar</v-btn>
      <v-btn variant="elevated" color="red" @click="emits('cancelEdit')">Cancelar</v-btn>
    </template>
    <v-form>
      <v-text-field v-model="client!.code" label="Código" />
      <v-text-field v-model="client!.name" label="Nombre" />
      <v-text-field v-model="client!.last_name" label="Apellido" />
    </v-form>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Client } from '../../../../types'
const emits = defineEmits(['storeClient', 'cancelEdit'])
const props = defineProps(['total'])

const client = ref<Client>({
  code: '',
  id: Math.random(),
  last_name: '',
  name: '',
  order: props.total + 1
})

function update() {
  emits('storeClient', client.value)
}
</script>
