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
          <ElectronItem />
          <ArcoDesignItem />
        </template>
        <template #desc>
          {{ $i18n('portfolio.projects.qr-code') }}
        </template>
      </ProjectItem>
      <ProjectItem source-link="" app-link="">
        <template #img><img src="" alt="#"></template>
        <template #title>
          <h1></h1>
        </template>
        <template #techs>
        </template>
        <template #desc>
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
