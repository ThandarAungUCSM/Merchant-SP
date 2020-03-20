<template>
    <b-row v-bind:class="[tempProp == 'myNew' ? 'footerCssChange' : 'footerCss']">
      <b-col>
        <b-img src="/static/images/home.png" class="footerImg" alt="Transparent image"></b-img>       
        <p class="row3-p">首页 </p>
      </b-col> 
      <b-col>
        <b-img src="/static/images/shape.png" class="footerImg" alt="Transparent image"></b-img>
        <p class="row3-p">消息 </p>
      </b-col>
      <b-col>
        <b-img src="/static/images/people.png" class="footerImg" alt="Transparent image"></b-img>
        <p class="row3-p">我的 </p>
      </b-col> 
    </b-row>
</template>
<script>
export default {
    data() {
        return {
            tempProp: ''
        }
    },
    props: {
        bgcolor: ""
    },
    created() {
        this.tempProp = this.bgcolor
    },
}
</script>


<style scoped>
    .footerCss {
      background: #FFF;
      margin-left: 0px;
      margin-right: 0px;
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
    }
    .footerCssChange {
      background: #F9F9F9;
      margin-left: 0px;
      margin-right: 0px;
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
    }
    .footerImg {
      width: 1.5rem; /* 48, 43.99 */
      height: 1.312rem; /* 46, 44 */
      margin-top: 0.5rem;
    }
    .row3-p {
      margin-bottom: 0px;
      /* font-size: 1.5rem; */
      color: #929292;
    }
</style>