<template>
  <div class="sphere-wrapper _center">
    <div class="sphere-animation">
      <svg class="sphere" viewBox="0 0 800 600" stroke="rgba(80,80,80,.35)" style="transform: scale(4)">
        <defs>
          <linearGradient id="sphereGradient" x1="5%" x2="5%" y1="0%" y2="15%">
            <stop stop-color="#373734" offset="0%" />
            <stop stop-color="#242423" offset="50%" />
            <stop stop-color="#0D0D0C" offset="100%" />
          </linearGradient>
        </defs>
        <g class="cube" data-order="4">
          <polyline points="378.7 257.3 400.7 244.6 422.8 257.3 422.8 257.3 400.7 270 378.7 257.3" />
          <polygon
            points="378.7 257.3 378.7 282.7 400.7 295.4 422.8 282.7 422.8 257.3 422.8 257.3 400.7 270 378.7 257.3" />
        </g>
        <g class="cube" data-order="3">
          <polyline points="352.7 272.3 374.7 259.6 396.8 272.3 396.8 272.3 374.7 285 352.7 272.3" />
          <polygon
            points="352.7 272.3 352.7 297.7 374.7 310.4 396.8 297.7 396.8 272.3 396.8 272.3 374.7 285 352.7 272.3" />
        </g>
        <g class="cube" data-order="5">
          <polyline points="404.7 272.3 426.7 259.6 448.8 272.3 448.8 272.3 426.7 285 404.7 272.3" />
          <polygon
            points="404.7 272.3 404.7 297.7 426.7 310.4 448.8 297.7 448.8 272.3 448.8 272.3 426.7 285 404.7 272.3" />
        </g>
        <g class="cube" data-order="6">
          <polyline points="430.7 287.3 452.7 274.6 474.8 287.3 474.8 287.3 452.7 300 430.7 287.3" />
          <polygon
            points="430.7 287.3 430.7 312.7 452.7 325.4 474.8 312.7 474.8 287.3 474.8 287.3 452.7 300 430.7 287.3 " />
        </g>
        <g class="cube" data-order="0">
          <polyline points="378.7 287.3 400.7 274.6 422.8 287.3 422.8 287.3 400.7 300 378.7 287.3" />
          <polygon
            points="378.7 287.3 378.7 312.7 400.7 325.4 422.8 312.7 422.8 287.3 422.8 287.3 400.7 300 378.7 287.3" />
        </g>
        <g class="cube" data-order="1">
          <polyline points="326.7 287.3 348.7 274.6 370.8 287.3 370.8 287.3 348.7 300 326.7 287.3" />
          <polygon
            points="326.7 287.3 326.7 312.7 348.7 325.4 370.8 312.7 370.8 287.3 370.8 287.3 348.7 300 326.7 287.3 " />
        </g>
        <g class="cube" data-order="7">
          <polyline points="404.7 302.3 426.7 289.6 448.8 302.3 448.8 302.3 426.7 315 404.7 302.3" />
          <polygon
            points="404.7 302.3 404.7 327.7 426.7 340.4 448.8 327.7 448.8 302.3 448.8 302.3 426.7 315 404.7 302.3" />
        </g>
        <g class="cube" data-order="9">
          <polyline points="352.7 302.3 374.7 289.6 396.8 302.3 396.8 302.3 374.7 315 352.7 302.3" />
          <polygon
            points="352.7 302.3 352.7 327.7 374.7 340.4 396.8 327.7 396.8 302.3 396.8 302.3 374.7 315 352.7 302.3" />
        </g>
        <g class="cube" data-order="8">
          <polyline points="378.7 317.3 400.7 304.6 422.8 317.3 422.8 317.3 400.7 330 378.7 317.3" />
          <polygon
            points="378.7 317.3 378.7 342.7 400.7 355.4 422.8 342.7 422.8 317.3 422.8 317.3 400.7 330 378.7 317.3" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';
const cubes = ref()

const settings = {
  center: {
    bounceHeight: '-4em',
    duration: 3500,
    elasticity: 500,
  },
  outer: {
    bounceHeight: '-2em',
    duration: 500,
    easing: 'easeInOutCirc',
    delay: 250,
  },
};

const bounce = (nodes: any, config: typeof settings) => {
  nodes.forEach((node: any, i: number) => {
    const animeSettings = {
      targets: node,
      duration: config.center.duration,
      elasticity: config.center.elasticity,
    };
    if (!i) {
      anime({ ...animeSettings, translateY: [{ value: config.center.bounceHeight }, { value: 0 }], });
    } else {
      anime({
        ...animeSettings,
        translateY: [{ value: config.outer.bounceHeight }, { value: 0 }],
        delay: i * config.outer.delay,
      });
    }
  });
};

const handler = () => bounce(cubes.value, settings);

onMounted(() => {
  cubes.value = Array.from(document.querySelectorAll('.cube')).sort((a: any, b: any) => a.dataset.order > b.dataset.order ? 1 : -1);
  handler()
  setInterval(handler, 5000);
});
</script>

<style scoped lang="scss">
@import '@/assets/style/variables.scss';

.sphere-wrapper {
  min-width: 460px;

  @media (max-width: 920px) {
    min-width: 50%;
  }

  @media (max-width: 600px) {
    min-width: 90%;
  }
}

.sphere-animation {
  width: 100%;
  height: auto;
}

.sphere path {
  fill: url(#sphereGradient);
  stroke-width: 1px;
  stroke: rgba(80, 80, 80, 0.35);
  backface-visibility: hidden;
}

@media (min-width: 500px) {
  .sphere path {
    stroke-width: 0.4px;
  }
}


.cube {

  & polyline,
  & polygon {
    stroke: var(--color-cube-border);
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }

  & polyline {
    fill: var(--color-cube-top);
  }

  & polygon {
    fill: var(--color-cube-sides);
  }
}
</style>
