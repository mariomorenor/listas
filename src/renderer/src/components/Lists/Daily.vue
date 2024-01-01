<template>
    <div>
        <v-container>
            <v-row>
                <v-col :cols="lists && lists?.length > 0 ? 3 : 1">
                    <div v-if="selectedList">
                        <h2>Fecha: <span class="">{{ selectedList.date }}</span></h2>
                        <v-table>
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="record in selectedList.records">
                                    <td>{{ record.client.code }}</td>
                                    <td>{{ record.quantity }}</td>
                                </tr>
                            </tbody>
                        </v-table>
                    </div>
                    <div v-else-if="lists?.length">
                        <h2>Seleccione una lista 🙃...</h2>
                    </div>
                </v-col>
                <v-col cols="9">
                    <div v-if="lists && lists?.length > 0" class="container-cards">
                        <div class="d-flex flex-wrap">
                            <v-card link v-for="list in lists" :color="list.id == selectedList?.id ? 'green' : ''"
                                :ripple="false" class="ma-2" @click="selectList(list)">
                                <template v-slot:title>
                                    <h3>{{ list.date }}</h3>
                                </template>
                                <template v-slot:subtitle>
                                    <h3>Total: <span v-text="list.total"></span></h3>
                                </template>
                            </v-card>
                        </div>
                    </div>
                    <div v-else>
                        <v-card>
                            <template v-slot:text>
                                Aun no hay listas registradas
                            </template>
                        </v-card>
                    </div>
                </v-col>

            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts" setup>

import { ref } from "vue";
import { Record, List } from "../../types"
import moment from "moment";

const lists = ref<List[] | null>([])

function getLists() {
    // TODO
    // GET LISTS FROM DATABASE
    lists.value.push(
        {
            date: moment().format("Y-MM-DD"),
            id: Math.random() * 100,
            records: [
                {
                    client: { code: "09", id: 1, last_name: "ss", name: "adds", order: 9 },
                    date: "asda",
                    id: 4,
                    quantity: 6
                }
            ],
            total: Math.floor(Math.random() * 100),
        },
        {
            date: moment().format("Y-MM-DD"),
            id: Math.random() * 100,
            records: [],
            total: Math.floor(Math.random() * 100),
        },
        {
            date: moment().format("Y-MM-DD"),
            id: Math.random() * 100,
            records: [],
            total: Math.floor(Math.random() * 100),
        },
        {
            date: moment().format("Y-MM-DD"),
            id: Math.random() * 100,
            records: [],
            total: Math.floor(Math.random() * 100),
        },
        {
            date: moment().format("Y-MM-DD"),
            id: Math.random() * 100,
            records: [],
            total: Math.floor(Math.random() * 100),
        },
        {
            date: moment().format("Y-MM-DD"),
            id: Math.random() * 100,
            records: [],
            total: Math.floor(Math.random() * 100),
        },
        {
            date: moment().format("Y-MM-DD"),
            id: Math.random() * 100,
            records: [],
            total: Math.floor(Math.random() * 100),
        },
    )
}

getLists()

let selectedList = ref<List | null>();

function selectList(list: List) {
    if (selectedList.value == list) {
        selectedList.value = null
        return
    }
    selectedList.value = list;

}

</script>

<style scoped>
.container-cards {
    overflow-y: auto;
    height: 70vh;
}
</style>