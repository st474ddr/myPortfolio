<template>
<div class="block _row">
  <div class="title"><small><slot name="title" /></small></div>
  <div class="desc"><slot name="desc" /></div>
</div>
</template>

<style scoped lang="scss">
.block { align-items: flex-start; }

.title {
  width: 20%;
}

.desc {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
