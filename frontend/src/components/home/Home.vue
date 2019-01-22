<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="DashBoard" sub="Base de Conhecimento" />
        <div class="dash">
            <Dashboard title="Categorias" :value="statistic.categories" icon="fa fa-folder" color="#d54d50" />
            <Dashboard title="Artigos" :value="statistic.articles" icon="fa fa-file" color="#3bc480" />
            <Dashboard title="Usuários" :value="statistic.users" icon="fa fa-user" color="#3282cd" />
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/template/PageTitle'
import Dashboard from '@/components/home/Dashboard'
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: 'Home',
    components: { PageTitle, Dashboard },
    data() {
        return {
            statistic: {}
        }
    },
    methods: {
        getDashboardInfo() {
            axios.get(`${baseApiUrl}/statistics`)
                .then(res => this.statistic = res.data)
        }
    },
    mounted() {
        this.getDashboardInfo();
    }
}
</script>

<style>
    .dash {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
