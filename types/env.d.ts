/// <reference types="vite/client" />

export { }

declare module 'vue' {
  export interface ComponentCustomProperties {
    $i18n: any
  }
}

declare module 'animejs/lib/anime.es.js' { }

