<template>
    <div class="my-card">
        <div class="top content">
            <h3>{{ type }}</h3>
            <p class="percentage"><i class="fa fa-arrow-up"></i>{{ percentage }}</p>
        </div>

        <div class="footer content">
            <i :class="['fa ico', icon]"></i>
            <p class="qtd">{{ qtd }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'CardsComponent',
        props: {
            type: String,
            percentage: String,
            icon: String,
            qtd: Number,
        }
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';
    .my-card {
        display: row;
        flex-direction: column;        
        width: 100%;
        background-color: $purple;
        padding: 15px;
        border-radius: 7px;
        color: #fff;

        .top {
            .percentage {
                color: $green;
            }
        }
        
        .footer {
            .ico {
                font-size: 40px;
            }

            .qtd {
                font-size: 30px;
                margin: 0;
            }
        }

        .content {
            display: flex;
            justify-content: space-between;
        }
    }
</style>