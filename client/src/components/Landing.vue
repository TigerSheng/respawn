<template>
    <div class="row">
        <div class="col-md-12 container">
            <div class="greeting">
                <span class="title"><u class="respawn">Respawn</u> the moment.</span>
                <br>
                <span class="subtitle">Digitally preserve and immortalize the memorable</span>
            </div>
            <hr class="line">
            <div class="buttons">
                <div class="about">
                    <button class="primary-button">What is Respawn</button>
                    <br>
                    <br>
                    <span class="learn-more">Learn more about what we do, and how NFTs work!</span>
                </div>
                <div class="account">
                    <button class="secondary-button">Early-bird Account</button>
                    <br>
                    <br>
                    <span class="worm">Get the worm on release updates, and have your account ready when the marketplace opens!</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Landing',
}
</script>

<style scoped>
    .row {
        background: url('../assets/landing-art.png');
        height: 100vw;
    }
    .container {
        justify-content: center;
        width: 80vw;
        text-align: right;
        min-width: 800px;
    }
    .greeting {
        margin-top: 200px;
    }
    .respawn {
        color: #E05C2B;
    }
    .title {
        font-family: Bona Nova;
        font-weight: 700;
        font-size: 70px;
    }
    .subtitle {
        font-family: Bona Nova;
        font-weight: 400;
        font-size: 23px;
        margin-top: 125px;
    }
    .line {
        width: 80vw;
        margin-top: 50px;
        min-width: 800px;
    }
    .buttons {
        margin-top: 0px;
        display: flex;
        float: right;
    }
    .about {
        width: 350px;
        text-align: left;
        padding: 25px;
        margin-right: 25px;
    }
    .account {
        width: 350px;
        text-align: left;
        padding: 25px;
    }
    .wallpaper {
        position: ;
    }
</style>