<template>
    <div class="list">
        <div class="top">
            <p><b>Clientes</b></p>
        </div>

        <div class="content">
            <table class="table table-striped my_table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <th scope="row"><p class="users">{{ user.id }}</p></th>
                        <td><p class="users">{{ user.name }}</p></td>
                        <td><p class="users">{{ user.email }}</p></td>
                    </tr>
                </tbody>
            </table>
        </div>        
    </div>
</template>

<script>
    export default {
        name:'ListComponent',
        props: {
            users: Array,
        }
    }
</script>

<style lang="scss" scoped>
    .list {
        width: 100%;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 3px;
        background-color: #fff;

        .users {
            font-size: 12px;
        }
    }
</style>