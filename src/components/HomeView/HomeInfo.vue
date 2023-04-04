<template>
<div class="_column headers">
  <div class="title">
    <h3>{{ $i18n('home.greeting') }}</h3>
    <h2>
      <span :class="{ 'mark': !isDark }">{{ $i18n('home.title') }}</span>
    </h2>
  </div>
  <p>{{ $i18n('home.subtitle') }}</p>
  <div class="actions _row">
    <RouterLink to="/about" class="_btn" :title="$i18n('global.aboutLink')">
      <small>{{ $i18n('global.aboutLink') }}</small>
    </RouterLink>
    <RouterLink to="/portfolio" class="_btn" :title="$i18n('global.portfolioLink')">
      <small>{{ $i18n('global.portfolioLink') }}</small>
    </RouterLink>
  </div>
  <small>{{ $i18n('home.tip') }}</small>
</div>
</template>

<script setup lang="ts">
const isDark = useDark()
</script>

<style scoped lang="scss">
.headers {
  text-align: right;
  align-items: flex-end;
  text-transform: uppercase;

  p {
    font-weight: 700;
  }

  @media (max-width: 920px) {
    order: 2;
    align-items: center;
    text-align: center;
  }
}

.title {
  h3 { font-size: 25px; }
  h1 {
    font-weight: 900;
    font-size: 80px;
    line-height: 0.9;
  }

  @media (max-width: 1300px) {
    h3 { font-size: 23px; }
    h1 { font-size: 50px; }
  }

  @media (max-width: 600px) {
    h3 { font-size: 18px; }
    h1 { font-size: 45px; }
  }
}

.mark {
  color: var(--accent-c);
}

.actions {
  justify-content: flex-end;

  @media (max-width: 920px) {
    justify-content: center;
  }
}
</style>