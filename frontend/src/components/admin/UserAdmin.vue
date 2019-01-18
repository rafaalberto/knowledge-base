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
                        <b-form-input id="email" type="text" v-model="user.email"
                            placeholder="Informe o e-mail do usuário" required />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-form-checkbox id="admin" v-model="user.admin" class="mt-3 mb-3">
                Administrador
            </b-form-checkbox>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Senha:" label-for="password">
                        <b-form-input id="password" type="password" v-model="user.password"
                            placeholder="Informe a senha do usuário" required />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Confirmação de senha:" label-for="confirm-password">
                        <b-form-input id="confirm-password" type="password" v-model="user.confirmPassword"
                            placeholder="Confirme a senha do usuário" required />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-button variant="primary" v-if="mode == 'save'" @click="save">Salvar</b-button>
            <b-button variant="danger" v-if="mode == 'remove'" @click="remove">Excluir</b-button>
            <b-button class="ml-2" @click="reset">Cancelar</b-button>
        </b-form>
        <hr>
        <b-table hover striped :items="users" :fields="fields"></b-table>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'
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
        },
        reset() {
            this.mode = 'save'
            this.user = {}
            this.loadUsers()
        },
        save() {
            const method = this.user.id ? 'put' : 'post'
            const id = this.user.id ? `/${this.user.id}` : ''
            axios[method](`${baseApiUrl}/users/${id}`, this.user)
                .then(() => {
                    //this.$toasted.global.default.success()
                    this.reset()
                })
                .catch(showError)
        },
        remove() {
            const id = this.user.id
            axios.delete(`${baseApiUrl}/users/${id}`)
                .then(() => {
                    //this.$toasted.global.default.success()
                    this.reset()
                }).catch(showError)
        }
    },
    mounted() {
        this.loadUsers();
    }
}
</script>

<style>
    .btn {
        width: 100px;
    }
</style>
