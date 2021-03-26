<template>
<DashboardComponent>
    <div slot="slot-pages" class="content-pages">
        <header class="title_pages">
            <p>Inicio</p>
        </header>

        <div>
            <div class="row">
                <div class="col-12 col-md-3">
                    <CardsComponent :type="'Clientes'" :percentage="'7%'" :icon="'fa-users'" :qtd="clients.length" />
                </div>

                <div class="col-12 col-md-3">
                    <CardsComponent :type="'Produtos'" :percentage="'12%'" :icon="'fa-box'" :qtd="products.length" />
                </div>

                <div class="col-12 col-md-3">
                    <CardsComponent :type="'Serviços'" :percentage="'3%'" :icon="'fa-store'" :qtd="products.length" />
                </div>

                <div class="col-12 col-md-3">
                    <CardsComponent :type="'Relatórios'" :percentage="'25%'" :icon="'fa-chart-bar'" :qtd="products.length" />
                </div>
            </div>
        </div>

        <div class="mt-5">
            <div class="row">
                <div class="col-12 col-md-6">
                    <ListComponent :data="clients" description="Clientes" :columns="['Nome', 'E-mail']" />
                </div>

                <div class="col-12 col-md-6">
                    <ListComponent :data="products" description="Produtos" :columns="['Nome', 'Valor']" />
                </div>
            </div>
        </div>
    </div>
</DashboardComponent>
</template>

<script>
import DashboardComponent from '../Dashboard/DashboardComponent';
import CardsComponent from '../../components/CardsComponent';
import ListComponent from '../../components/ListsComponent';

const axios = require('axios');

export default {
    name: 'HomeComponent',
    components: {
        DashboardComponent,
        CardsComponent,
        ListComponent
    },

    data() {
        return {
            clients: [],
            products: []
        }
    },

    mounted() {
        this.getData()
    },

    methods: {
        async getData() {

            try {
                let response = await axios.get('/')

                this.clients = response.data.clients
                this.products = response.data.products
                
            } catch (error) {
                console.error("Aconteceu um erro: " + error.response.status)
            }
        }
    }

}
</script>

<style lang="scss" src="./style.scss" scoped />
