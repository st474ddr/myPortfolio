<template>
  <div class="_wrapper">
    <div class="resume">
      <h1>{{ $i18n('about.title') }}</h1>
      <AboutInfo />
      <EducationInfo />
      <!-- <WorkInfo /> -->
      <TechsSection />
    </div>
  </div>
</template>

<style scoped lang="scss">
.resume {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--space) * 4);
  align-items: flex-start;

  @media (max-width: 920px) {
    flex-direction: column;
  }
}
</style>
