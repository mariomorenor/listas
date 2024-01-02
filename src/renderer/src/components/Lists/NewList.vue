<template>
  <div>
    <v-table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in records" :key="record.id">
          <td>{{ record.client.code }}</td>
          <td>{{ record.quantity }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Record, Client } from '../../../../types'
import { onMounted } from 'vue'

const records = ref<Record[]>()
const clients = ref<Client[]>()

function getClients() {
  // TODO GET CLIENTS
  clients.value = []
}

onMounted(() => {
  getClients()
})
</script>
