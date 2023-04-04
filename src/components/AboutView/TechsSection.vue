<template>
  <div class="skills-wrapper _column">
    <small>{{ $i18n('about.skillsTitle') }}</small>
    <div class="_stack">
      <HTMLItem />
      <CSSItem />
      <SassItem />
      <TSItem />
      <JSItem />
      <VueItem />
      <PiniaItem />
      <ViteItem />
      <VueRouterItem />
      <GitItem />
      <DockerItem />
      <TailwindItem />
      <Node />
    </div>
    <small>{{ $i18n('about.skillsT2') }}</small>
    <div class="_stack">
      <VuexItem />
      <NuxtItem />
      <FirebaseItem />
      <VueUseItem />
      <WebpackItem />
      <PHPItem />
      <SQLItem />
      <PSItem />
      <WebAssemblyItem />
      <FigmaItem />
      <PWAItem />
      <DartItem />
      <FlutterItem />
    </div>

  </div>
</template>

<script setup lang="ts">
import WebAssemblyItem from '../Techs/WebAssemblyItem.vue';


</script>

<style scoped lang="scss">
.skills-wrapper {
  align-items: flex-start;

  @media (max-width: 920px) {
    width: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
