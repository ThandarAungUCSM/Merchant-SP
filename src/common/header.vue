<template>
    <b-row class="header-css">
        <b-col>
            <b-img src="/static/images/fanhui.png" class="header-img" />
        </b-col>
        <b-col><span class="title-txt">消息</span></b-col>
        <b-col></b-col>
    </b-row>
</template>
<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>


<style scoped>
    .header-css {
        background-image: linear-gradient(to right, #4EBDFF, #6093FF);
        display: flex;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .header-img {
        width: 0.5625rem;
        height: 1.03125rem;
    }
    .title-txt {
        color: #FFF;
        font-size: 1.03125rem;
    }
</style>