<template>
  <div class="_wrapper">
    <div class="portfolio">
      <ProjectItem source-link="" app-link="" :revert="true">
        <template #img><img src="" alt="#"></template>
        <template #title>
          <h1></h1>
        </template>
        <template #techs>
        </template>
        <template #desc>
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
