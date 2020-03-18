import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {    
    'en': {        
        welcomeMsg: 'English Language',
        shop: 'Shop',
        test: 'English Good Luck'  
    },
    'cn': {
        welcomeMsg: 'Chinese Language',
        shop: '店铺',
        test: 'chinese Thanks You' 
    }
};

const i18n = new VueI18n({
  locale: 'ja',
  fallbackLocale: 'en',
  messages
})

export default i18n
