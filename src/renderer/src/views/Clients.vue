<script lang="ts" setup>
import { ref } from 'vue';
import { Client } from '../types';
import EditClient from "../components/Clients/EditClient.vue"
import CreateClient from "../components/Clients/CreateClient.vue"


const clients = ref<Client[]>([]);

const headers = [
    { title: "#", key: "index" },
    { title: "Código", key: "code" },
    { title: "Nombres", key: "name" },
    { title: "Apellidos", key: "last_name" },
    { title: "orden", key: "controls-order" },
    { title: "acciones", key: "controls" },
];

const search = ref("");
const dialogRemove = ref(false)
const dialogEdit = ref(false);
const dialogCreate = ref(false);
var selectedClient: Client;

function showDialog(client: Client, dialog: string) {
    selectedClient = client
    if (dialog == "remove") {
        dialogRemove.value = true;
    }

    if (dialog == "edit") {
        dialogEdit.value = true
    }

}

function removeClient() {
    // TODO 
    // Remove from Database here
    // **********************
    clients.value = clients.value.filter(c => c.id != selectedClient.id);
    dialogRemove.value = false
}

function updateClient(client: Client) {
    // TODO 
    // UPDATE IN DATABASE
    // *************** 

    clients.value = clients.value.map(c => {
        if (c.id == client.id) {
            return client
        }
        return c
    })
    dialogEdit.value = false;

}

function storeClient(client: Client) {
    // TODO
    // ADD TO DATABASE
    // *************************************
    clients.value.push(client);
    dialogCreate.value = false
}

function reorder(client: Client, type: string) {

    const index = clients.value.findIndex(c => c.id == client.id)
    let next = 0;
    if (type == "down") {
        next = index + 1;
        clients.value[next].order = client.order;
        client.order++;
    }

    if (type == "up") {
        next = index - 1
        clients.value[next].order = client.order;
        client.order--;
    }
    updateClient(client);
    updateClient(clients.value[next]);

    clients.value.sort((a, b) => {
        if (a.order > b.order) {
            return 1
        }
        return -1
    });
}



</script>

<template>
    <v-app class="ma-5">
        <v-card class="pa-5" elevation="5">
            <template v-slot:title>
                <h1 class="mb-2">Listado de Clientes</h1>
            </template>
            <div class="px-4">
                <v-text-field v-model="search" label="Buscar..." single-line variant="outlined"></v-text-field>
                <v-btn variant="elevated" color="success" class="mb-2" @click="dialogCreate = true">
                    Nuevo
                </v-btn>
                <v-data-table :sort-by="[{ key: 'order', order: 'asc' }]" hover :headers="headers" height="60vh"
                    :clients-per-page="- 1" fixed-header :search="search" :items="clients">
                    <template v-slot:item.index="{ index }">
                        {{ index + 1 }}
                    </template>
                    <template v-slot:item.controls-order="props">
                        <v-btn @click="reorder(props.item, 'down')" icon="mdi-arrow-down-bold" class="mr-2"
                            v-if="props.index < clients.length - 1" size="small" variant="elevated" color="info" />
                        <v-btn @click="reorder(props.item, 'up')" v-if="props.index > 0" size="small" class=""
                            icon="mdi-arrow-up-bold" variant="elevated" color="info" />
                    </template>
                    <template v-slot:item.controls="props">
                        <v-btn class="" fab dark small color="primary" @click="showDialog(props.item, 'edit')">
                            Editar
                        </v-btn>
                        <v-btn class="ml-2" fab color="red" @click="showDialog(props.item, 'remove')">
                            Eliminar
                        </v-btn>
                    </template>
                </v-data-table>
            </div>
        </v-card>
        <v-dialog persistent v-model="dialogRemove" width="auto">
            <v-card>
                <template v-slot:text>
                    ¿Está seguro de eliminar el registro?
                </template>
                <template v-slot:actions>
                    <v-spacer></v-spacer>
                    <v-btn variant="elevated" color="primary" @click="removeClient()">
                        Confirmar
                    </v-btn>
                    <v-btn variant="elevated" color="red" @click="dialogRemove = false">
                        Cancelar
                    </v-btn>
                </template>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogEdit" persistent width="auto">
            <EditClient @cancelEdit="dialogEdit = false" :client="selectedClient" @updateClient="updateClient" />
        </v-dialog>
        <v-dialog v-model="dialogCreate" persistent width="auto">
            <CreateClient @cancelEdit="dialogCreate = false" :total="clients.length" @storeClient="storeClient" />
        </v-dialog>
    </v-app>
</template>


<style lang="scss">
html {
    overflow-y: hidden
}
</style>
