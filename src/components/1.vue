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
  name: '1',
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
      padding-top: 20px;
      padding-bottom: 30px;
      background-image: linear-gradient(to right, #4EBDFF, #6093FF);
  }
  .zerocss {
    font-size: 2.375rem;
    color: #FFF;
  }
}

  
  
</style>
