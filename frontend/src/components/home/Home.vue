<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="DashBoard" sub="Base de Conhecimento" />
        <div class="dash">
            <Dashboard title="Usuários" :value="dashboard.count" icon="fa fa-folder"
                color="#3282cd" />
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
            dashboard: {}
        }
    },
    methods: {
        getDashboardInfo() {
            axios.get(`${baseApiUrl}/users-count`)
                .then(res => this.dashboard = res.data[0])
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
