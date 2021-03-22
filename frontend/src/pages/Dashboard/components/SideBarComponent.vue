<template>
    <div class="sidebar">
        <div class="top">
            <div class="avatar">
                <span><i class="fa fa-user"></i></span>
            </div>

            <div class="info">
                <p>Euler Amorim</p>
                <span>online</span>
            </div>
        </div>

        <div class="menu">

        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBarComponent',
}
</script>

<style lang="scss">
.sidebar {
    
    .top {
        width: 100%;
        display: flex;
        justify-content: center;

        .avatar {
            
            span {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: #ccc;
                display: flex;
                justify-content: center;
                align-items: center;

                i {
                    font-size: 12px;
                }
            }
        }
    }
}
</style>