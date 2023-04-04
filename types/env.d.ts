/// <reference types="vite/client" />

export { }

declare module 'vue' {
  export interface ComponentCustomProperties {
    $i18n: LangFunc
  }
}

declare module 'animejs/lib/anime.es.js' { }

declare global {
  export interface LangFunc { (key: string): string }
}
