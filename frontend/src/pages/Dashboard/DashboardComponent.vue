<template>
    <div class="main">
        <div class="sidebar">
            <SidebarComponent />
        </div>

        <div class="content-right">
            <div class="navabar">
                <NabBarComponent />
            </div>
 
            <div class="pages">
                <slot name="slot-pages"></slot>
            </div>
        </div>
    </div>
</template>
<script>
import SidebarComponent from './components/SideBarComponent'
import NabBarComponent from './components/NabBarComponent'

export default {
    name: 'DashBoardComponet',
    components: {
        SidebarComponent,
        NabBarComponent
    }
}
</script>

<style lang="scss" src="./style.scss" scoped />
