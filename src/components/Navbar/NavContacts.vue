<template>
<a :href="githubLink" target="_blank" :title="$i18n('nav.git')" class="_i">
  <GitHubIcon/>
</a>
<a :href="`mailto:${emailLink}`" target="_blank" :title="$i18n('nav.mail')" class="_i">
  <EmailIcon />
</a>
</template>

<script lang="ts" setup>
const githubLink = import.meta.env.VITE_GLOB_GITHUB_LINK
const emailLink = import.meta.env.VITE_GLOB_EMAIL_LINK
</script>