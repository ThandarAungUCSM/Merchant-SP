<template>
  <b-container class="my-new">
    <commonHeader></commonHeader>
    <b-row class="row1">
        <b-col cols="12" class="col12">
            <p class="text1">
                火神山医院建设背后厂长带伤上工地，<br>
                亲人感染肺炎离世
            </p>
        </b-col>
        <b-col cols="12">
            <p class="datecss">19 /03 /18</p>
        </b-col>
    </b-row> 
    <b-row class="row2">
        <b-col cols="12">
            <p class="text2">
                这是一个让所有中国人始料未及的春节，武汉人感受尤为深刻。他们身处寂静之中，深陷舆论的风口浪尖，在缄默中等待风波的平息，在归家的途中徘徊辗转。武汉并不孤独，因为有无数中国人，为这座城市摇旗呐喊、挺身而出，和武汉人一起在抗毒一线并肩。我们记录下了这座城市当下正在发生的故事。
                今天的主角，是火神山医院建设工地的一位厂长，每天拖着骨折的手臂、指挥着网红搅拌车，被千万网友“云监工”，也见证着这家救命的医院从无到有。
            </p>
        </b-col>   
        <b-col cols="12" class="img-fullwidth">
            <b-img src="/static/images/图层 2.png" class="content-img" alt=""></b-img>
        </b-col> 
        <b-col cols="12">
            <p class="text2">
                袁天雄54岁了，在中建商品混凝土有限公司一家工厂任厂长，春节快到了，工地还有很多事要等他收尾，手术太耽搁时间。
            </p>
        </b-col>
    </b-row>
    <div>
        <commonFooter :bgcolor='myNew'> </commonFooter>
    </div>
    
  </b-container>
</template>

<script>
import commonHeader from '@/common/header'
import commonFooter from '@/common/footer'
export default {
  name: 'Message-Inner',
  data () {
    return {
      myNew: 'myNew'
    }
  },
  components: {
      commonHeader,
      commonFooter
  },
  methods: {
      
  }
}
</script>

<style scoped>

    @media screen and (max-width: 767px) {
        .col12 {
            padding-left: 10px;
            padding-right: 10px;
        }
        .text1 {
            color: #000000;
            font-size: 1.25rem;
            text-align: left;
        }
        .text2 {
            text-align: left;
            font-size: 0.9375rem;
            color: #666666;
            line-height: 2;
        }
        .datecss {
            color: #888888;
            font-size: 0.75rem;
            text-align: left;
        }
        .row1 {
            padding-top: 10px;
            border-bottom: 1px solid #F1F1F1;
        }
       
        .content-img {
            /* width: 23.4375rem; */
            width: 100%;
            height: 17.59375rem;
        }
        .img-fullwidth {
            padding-left: 0px;
            padding-right: 0px;
        }
        .row2 {
            padding-top: 10px;
            margin-bottom: 2.5rem;
        }
        
    }

    @media screen and (max-width: 1366px) and (min-width: 768px) {
        .container {
            width: 100%;
            max-width: 100%;
        }
        .col12 {
            padding-left: 10px;
            padding-right: 10px;
        }
        .text1 {
            color: #000000;
            font-size: 1.25rem;
            text-align: left;
        }
        .text2 {
            text-align: left;
            font-size: 0.9375rem;
            color: #666666;
            line-height: 2;
        }
        .datecss {
            color: #888888;
            font-size: 0.75rem;
            text-align: left;
        }
        .row1 {
            padding-top: 10px;
            border-bottom: 1px solid #F1F1F1;
        }
       
        .content-img {
            /* width: 23.4375rem; */
            width: 100%;
            height: 17.59375rem;
        }
        .img-fullwidth {
            padding-left: 0px;
            padding-right: 0px;
        }
        .row2 {
            padding-top: 10px;
            margin-bottom: 2.5rem;
        }
        
    }
  
</style>
