<template>
  <TheNavbar />
  <AppBackground class="app-background full-fixed" />
  <div class="app-wrapper full-fixed"></div>
  <div ref="view" class="_container">
    <RouterView v-slot="{ Component }">
      <Transition name="main" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const i18n = inject('func') as LangFunc
router.beforeEach((to, _, next) => { document.title = i18n(to.name as string); next() })

const view = ref<HTMLElement | null>(null);
const { direction } = useSwipe(view)

watch(direction, (v) => {
  const curView: string = router.currentRoute.value.fullPath
  switch (curView) {
    case '/': if (v === 'LEFT') router.push('/about'); break
    case '/about':
      if (v === 'LEFT') router.push('/portfolio')
      else if (v === 'RIGHT') router.push('/')
      break;
    case '/portfolio': if (v === 'RIGHT') router.push('/about'); break
  }
})
</script>

<style scoped lang="scss">
.app-wrapper {
  backdrop-filter: blur(40px);
  background-color: var(--tp-c);
  z-index: -1;
}

.app-background { z-index: -2; }

.full-fixed {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
}
</style>
