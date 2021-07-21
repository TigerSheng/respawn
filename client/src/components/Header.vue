<template>
<div class="row" v-on:scroll="this.handleScroll()" v-if="shouldShow">
    <div class="col-md-12 container">
        <div class="col-md-9 title">
            <span class="title">Respawn</span>
        </div>
        <div class="col-md-3 menu">
            <span class="menu-item"><u>About</u></span>
            <span class="menu-item"><u>Sign Up</u></span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            shouldShow: false
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll (event) {
            if (window.top.scrollY > 170) {
                this.shouldShow = true;
            } else {
                this.shouldShow = false;
            }
        }
    }
}
</script>

<style scoped>
    .container {
        width: 100vw;
        height: 80px;
        background-color: white;
        z-index: 10;
        display: flex;
    }
    .title {
        float: left;
        margin-left: 40px;
        margin-top: 10px;
    }
    .menu {
        float: right;
        margin-top: 25px;
    }
    .title {
        font-family: Bona Nova;
        font-size: 20px;
        font-weight: 700;
    }
    .menu-item {
        font-family: Bona Nova;
        font-size: 16px;
        font-weight: 700;
        margin-right: 75px;
    }
</style>