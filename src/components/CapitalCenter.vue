<template>
  <b-container>
    <commonHeader :capitalCenter="capitalCen"></commonHeader>
    <b-row class="modifyrow">
        <b-col cols="12">
            <p class="zerocss">0.00</p>
        </b-col>
    </b-row>
    
  </b-container>
</template>

<script>
import commonHeader from '@/common/header'
export default {
  name: 'CapitalCenter',
  data () {
    return {
      capitalCen: 'capitalCen'
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
  .modifyrow {
      margin-top: -1px;
      padding-top: 21px;
      padding-bottom: 30px;
      background-image: linear-gradient(to right, #4EBDFF, #6093FF);
  }
  .zerocss {
      font-size: 2.375rem;
      color: #FFF;
  }
}

@media screen and (max-width: 1366px) and (min-width: 768px) {
  .container {
      width: 100%;
      max-width: 100%;
  }
  .modifyrow {
      margin-top: -2px;
      padding-top: 21px;
      padding-bottom: 30px;
      background-image: linear-gradient(to right, #4EBDFF, #6093FF);
  }
  .zerocss {
    font-size: 2.375rem;
    color: #FFF;
  }
}

  
  
</style>
