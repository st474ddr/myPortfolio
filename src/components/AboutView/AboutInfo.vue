<template>
  <div class="info _column">
    <InfoBlock>
      <template #title>{{ $i18n('about.detailField') }}</template>
      <template #desc>
        <h4>{{ $i18n('about.detail', { age: age }) }}</h4>
      </template>
    </InfoBlock>
    <InfoBlock>
      <template #title>{{ $i18n('about.hobbyField') }}</template>
      <template #desc>
        <h4>{{ $i18n('about.hobby') }}</h4>
      </template>
    </InfoBlock>
    <InfoBlock>
      <template #title>{{ $i18n('about.langauageField') }}</template>
      <template #desc>
        <h4>{{ $i18n('about.langauage.mandarin') }}</h4>
        <h4>{{ $i18n('about.langauage.english') }}</h4>
      </template>
    </InfoBlock>
    <InfoBlock>
      <template #title>{{ $i18n('about.softSkillField') }}</template>
      <template #desc>
        <h4>{{ $i18n('about.softSkill') }}</h4>
      </template>
    </InfoBlock>
    <InfoBlock>
      <template #title>{{ $i18n('about.mottoField') }}</template>
      <template #desc>
        <h4>{{ $i18n('about.motto') }}</h4>
      </template>
    </InfoBlock>
    <InfoBlock>
      <template #title>{{ $i18n('about.educationField') }}</template>
      <template #desc>
        <div style="display: flex;">
          <h4>{{ $i18n('about.education.graduated') }}</h4>
          <h4 style="margin-left:40px;">2022/09 -- now</h4>
        </div>
        <div style="display: flex;">
          <h4>{{ $i18n('about.education.university') }}</h4>
          <h4 style="margin-left:73px;">2015/09 -- 2019/06</h4>
        </div>
      </template>
    </InfoBlock>
  </div>
</template>

<script lang="ts" setup>
const age = computed(() => {
  const today = new Date();
  const birthDate = new Date(1996, 10, 20);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
});

</script>

<style scoped lang="scss">
.info {
  justify-content: flex-start;
  width: 100%;

  @media (max-width: 920px) {
    width: 100%;
  }
}
</style>
