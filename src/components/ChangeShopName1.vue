<template>
  <b-container  class="shop-change">
    <commonHeader :changeshop='changeshopname'></commonHeader>
    <b-row class="shop-name">
        <b-col>
          <input class="text" type="text" v-model="shopName" placeholder="小天鹅官方旗舰店">
        </b-col>
        <b-col class="ch-image">
            <b-img src="/static/images/exit.png" class="change-img" />
        </b-col>
    </b-row>
    <b-row class="click-button">
      <button class="click-me">确定</button>
    </b-row>
  </b-container>
</template>

<script>
import commonHeader from "@/common/header"
export default {
  name: 'ChangePhNo',
  data () {
    return {
      shopName: '',
      changeshopname: 'changeshopname'
    }
  },
  components: {
      commonHeader
  },
  created() {
      
  },
  methods: {
  }
        
}
</script>

<style scoped>
    @media screen and (max-width: 767px) {
        .shop-change{

        }
      .change-shop{
        display: flex;
        background:#46CEFE;
        padding-top: 17px;
        padding-bottom: 17px;
        align-items: center;
        color: #F1F1F1;
        font-size: 15.8px;
      }

      }
      .shop-name{
        border-top: 1rem solid #f1f1f1;
        background: #FFF;
        font-size: 17px;
        display: flex;
        text-align:left;
        padding-top: 15px;
        padding-bottom: 15px;
      }
      .ch-image{
        text-align: right;
      }
      .change-img{
        height: 20px;
        background:#ffffff;
      }
      .click-button{
        background:#f1f1f1;
        padding-top: 35px;
      }
      .click-me{
        font-size: 20px;
        color: #707070;
        border: none;
        border-radius: 3px;
        background: #23B8FF;
        width: 100%;
        outline: none;
        padding-top: 15px;
        padding-bottom: 15px;
        margin-left: 15px;
        margin-right: 15px;
      }
      
        .text {
        border: none;
        outline: none;
        background: #FFF;

      }

</style>
