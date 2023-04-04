<template>
<div class="project _row">
  <div :class="{ 'rev': revert }"><slot name="img" /></div>
  <div :class="{ 'info': true, '_column': true, 'align': revert }">
    <slot name="title" />
    <div class="links _row">
      <a class="_btn" target="_blank" :href="sourceLink" :title="$i18n('global.moreTitle')">
        <GitHubIcon />
        <small>{{ $i18n('global.moreLink') }}</small>
      </a>
      <a class="_btn" target="_blank" :href="appLink" :title="$i18n('global.appTitle')">
        <small>{{ $i18n('global.appLink') }}</small>
        <ArrowLink />
      </a>
    </div>
    <small>{{ $i18n('portfolio.stackTitle') }}</small>
    <div class="_stack media" :style="{ 'justify-content': revert ? 'flex-end' : 'flex-start' }">
      <slot name="techs" />
    </div>
    <small>{{ $i18n('portfolio.descTitle') }}</small>
    <slot name="desc" />
  </div>
</div>
</template>

<script setup lang="ts">
defineProps<{
  sourceLink: string,
  appLink: string
  revert?: boolean
}>()
</script>

<style scoped lang="scss">
.project {
  @media (max-width: 1100px) {
    flex-direction: column;
  }
}

.rev {
  order: 2;
  @media (max-width: 1100px) { order: 1; }
}

.info {
  @media (max-width: 1100px) {
    align-items: center;
    text-align: center;
  }
}

.align {
  text-align: right;
  align-items: flex-end;

  @media (max-width: 1100px) {
    order: 1 !important;
    align-items: center;
    text-align: center;
  }
}

.links {
  & > ._btn {
    padding: 14px;
  }
}

.media {
  @media (max-width: 1100px) {
    justify-content: center !important;
  }
}
</style>
