<template>
    <div class="user-admin">
        <b-form>
            <input type="hidden" id="id" v-model="user.id" />
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Nome:" label-for="name">
                        <b-form-input id="name" type="text" v-model="user.name"
                            placeholder="Informe o nome do usuário" required />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="E-mail:" label-for="email">
                        <b-form-input id="email" type="text" v-model="user.name"
                            placeholder="Informe o e-mail do usuário" required />
                    </b-form-group>
                </b-col>
            </b-row>
        </b-form>
        <b-table hover striped :items="users" :fields="fields"></b-table>
    </div>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'

export default {
    name: 'UserAdmin',
    data() {
        return {
            mode: 'save',
            user: {},
            users: [],
            fields: [
                { key: 'id', label: 'Código', sortable: true },
                { key: 'name', label: 'Nome', sortable: true },
                { key: 'email', label: 'E-mail', sortable: true },
                { key: 'admin', label: 'Administrador', sortable: true,
                    formatter: value => value ? 'Sim' : 'Não' },
                { key: 'actions', label: 'Ações' }
            ]
        }
    },
    methods: {
        loadUsers() {
            const url = `${baseApiUrl}/users`
            axios.get(url).then(res => {
                this.users = res.data
            })
        }
    },
    mounted() {
        this.loadUsers();
    }
}
</script>

<style>

</style>
