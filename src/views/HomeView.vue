<template>
<div ref="home" class="_wrapper index">
  <div class="home _row">
    <TheSphere />
    <HomeInfo />
  </div>
</div>
</template>

<style scoped lang="scss">
.home {
  width: 100%;
  justify-content: space-between;

  @media (max-width: 920px) {
    flex-direction: column;
  }
}
</style>
