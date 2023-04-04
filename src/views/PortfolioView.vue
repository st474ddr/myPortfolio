
import type SassItemVue from '@/components/Techs/SassItem.vue';

<template>
  <div class="_wrapper">
    <div class="portfolio">
      <ProjectItem source-link="https://github.com/st474ddr/QRcode-Generator" :revert="true">
        <template #img><img src="@/assets/img/qr-code.jpg" alt="#"></template>
        <template #title>
          <h1>QR code generator</h1>
        </template>
        <template #techs>
          <JSItem />
          <VueItem />
          <CSSItem />
          <SassItem />
          <VueRouterItem />
          <ElectronItem />
          <ArcoDesignItem />
        </template>
        <template #desc>
          {{ $i18n('portfolio.projects.qr-code') }}
        </template>
      </ProjectItem>
      <ProjectItem source-link="https://github.com/st474ddr/audio-visiualization" app-link="https://main--lighthearted-lily-6e613b.netlify.app/">
        <template #img><img src="@/assets/img/audio-visualization.jpg" alt="#"></template>
        <template #title>
          <h1>Audio Visualization</h1>
        </template>
        <template #techs>
          <JSItem />
          <VueItem />
          <CSSItem />
          <SassItem />
        </template>
        <template #desc>
          {{ $i18n('portfolio.projects.audio-visualization') }}
        </template>
      </ProjectItem>
    </div>
  </div>
</template>

<style scoped lang="scss">
.portfolio {
  display: flex;
  flex-direction: column;
  gap: calc(var(--space) * 3);

  img {
    height: 450px;
    width: auto;
  }

  @media (max-width: 700px) {
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
