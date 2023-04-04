<template>
<nav ref="navSize" class="nav-wrapper">
  <div class="_container">
    <div class="nav">
      <nav class="_row">
        <RouterLink class="link _i" to="/" :title="$i18n('global.homeLink')">
          <HomeIcon />
        </RouterLink>
        <RouterLink class="link _i" to="/about" :title="$i18n('global.aboutLink')">
          <PersonIcon />
        </RouterLink>
        <RouterLink class="link _i" to="/portfolio" :title="$i18n('global.portfolioLink')">
          <PortfolioIcon />
        </RouterLink>
      </nav>
      <div v-if="width > 920" class="_row">
        <NavThemeSwitcher />
        <div class="_br"></div>
        <div class="_i" :title="$i18n('nav.lang')"><TranslateIcon @click="changeLang" /></div>
        <div class="_br"></div>
        <NavContacts />
      </div>
      <NavMobMenu v-else>
        <template #theme><NavThemeSwitcher /></template>
        <template #translation><div class="_i"><TranslateIcon @click="changeLang" /></div></template>
        <template #contacts><NavContacts /></template>
      </NavMobMenu>
    </div>
  </div>
</nav>
</template>

<script setup lang="ts">
const changeLang = inject('i18n') as any
const curLang = inject('curLang') as string
const navSize = ref<HTMLInputElement | null>(null)
const width = ref<number>(0)
useResizeObserver(navSize, entries => width.value = entries[0].contentRect.width)
onMounted(() => document.documentElement.lang = curLang)
</script>

<style scoped lang="scss">
.nav-wrapper {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 8;
  background-color: var(--tp-c);
  backdrop-filter: blur(8px);
}

.nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: var(--space);
  padding: var(--space);

  h3 {
    text-transform: uppercase;
  }
}

.link {
  transition: var(--transition);
  padding-bottom: 3px;
  border-bottom: 2px solid transparent;
}

.active { border-bottom: 2px solid var(--txt-c); }
</style>
