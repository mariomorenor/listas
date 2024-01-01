<template>
    <v-card class="pa-5">
        <template v-slot:title>
            <h2 class="mb-5">Editando Cliente</h2>
        </template>
        <template v-slot:actions>
            <v-spacer></v-spacer>
            <v-btn variant="elevated" color="success" @click="update()">Confirmar</v-btn>
            <v-btn variant="elevated" color="red" @click="emits('cancelEdit')">Cancelar</v-btn>
        </template>
        <v-form>
            <v-text-field label="Código" v-model="client.code" readonly />
            <v-text-field label="Nombre" v-model="client.name" />
            <v-text-field label="Apellido" v-model="client.last_name" />
        </v-form>
    </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Client } from '../../types';
const emits = defineEmits(["updateClient","cancelEdit"])

const props = defineProps(["client"]);

const client = ref<Client>(Object.assign({}, props.client));


function update() {
    emits("updateClient", client.value)
}


</script>