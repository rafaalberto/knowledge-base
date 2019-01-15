<template>
    <div class="dashboard">
        <div class="dashboard-icon">
            <i :class="icon" :style="style" ></i>
        </div>
        <div class="dashboard-info">
            <span class="dashboard-title">{{ title }}</span>
            <span class="dashboard-value">{{ value }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    props: ['title', 'value', 'icon', 'color'],
    computed: {
        style() {
            return 'color: ' + (this.color || '#000')
        }
    }
}
</script>

<style>
    .dashboard {
        flex: 1;
        display: flex;
        border-radius: 8px;
        margin-right: 20px;
        margin-bottom: 20px;
        background-color: #FFF;
        padding: 20px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    }
    .dashboard-icon {
        display: flex;
        align-items: center;
    }
    .dashboard-icon i {
        font-size: 5rem;
    }
    .dashboard-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .dashboard-title {
        font-size: 1.2rem;
    }
    .dashboard-value {
        font-size: 3rem;
    }
</style>
