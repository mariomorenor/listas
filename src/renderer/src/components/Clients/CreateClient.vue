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
            <v-text-field label="Código" v-model="client!.code" />
            <v-text-field label="Nombre" v-model="client!.name" />
            <v-text-field label="Apellido" v-model="client!.last_name" />
        </v-form>
    </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Client } from '../../types';
const emits = defineEmits(["storeClient", "cancelEdit"])
const props = defineProps(["total"])


const client = ref<Client>({
    code: "",
    id: Math.random().toString(),
    last_name: "",
    name: "",
    order: props.total + 1
});


function update() {

    emits("storeClient", client.value)
}


</script>