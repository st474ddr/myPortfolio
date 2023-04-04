import zhTW from './lang/zhTW'
import en from './lang/en'
import type { App } from 'vue'


export default {
  install: (app: App) => {
    const { language } = useNavigatorLanguage()
    const langHandler: string = !!language.value?.match('zhTW') ? 'zhTW' : 'en'

    const curLang = useStorage<string>('lang', langHandler)
    const changeLang = () => curLang.value = curLang.value === 'en' ? 'zhTW' : 'en'
    const useLang = () => curLang.value === 'en' ? en : zhTW
    // 
    app.config.globalProperties.$i18n = (key: any, messages: any) => {
      const lang = useLang()
      const translation = key.split('.').reduce((o: any, i: any) => {
        return o[i]
      }, lang)
      if (messages) {
        return translation.replace(/{(\w+)}/g, (match: any, key: any) => {
          return messages[key]
        })
      }
      return translation
    }

    app.provide('func', app.config.globalProperties.$i18n)
    app.provide('i18n', changeLang)
    app.provide('curLang', curLang.value)
  }
}
