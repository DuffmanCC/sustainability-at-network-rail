<template>
  <div id="app" class="h-screen bg-green">
    <header class="bg-white flex justify-center items-center z-50 h-20 relative">
      <div>header (new repo)</div>
    </header>

    <div class="fixed z-50 bg-black text-white py-3 px-4" style="font-size: 10px">
      {{ deltaYcounter }} | {{ percentage }}%
    </div>

    <div v-if="isVertical" class="text-white text-6xl flex justify-center items-center h-screen">
      vertical version
    </div>

    <first-case-study
      v-if="!isVertical"
      :deltaYcounter="deltaYcounter"
      :windowHeight="windowHeight"
      :windowWidth="windowWidth"
    ></first-case-study>
  </div>
</template>

<script>
import FirstCaseStudy from './components/first-case-study.vue'
import _ from 'lodash'

export default {
  name: 'App',

  components: {
    FirstCaseStudy
  },

  data() {
    return {
      deltaY: 0,
      deltaYcounter: 0,
      y: 0
    }
  },

  computed: {
    windowWidth() {
      return window.innerWidth
    },

    windowHeight() {
      return window.innerHeight - 80
    },

    percentage() {
      let percentage = ((100 * this.deltaYcounter) / 25700).toFixed(1)

      if (percentage < 0) {
        return 0
      }

      if (percentage > 100) {
        return 100
      }

      return percentage
    },

    isVertical() {
      return (window.innerHeight > window.innerWidth)
    }
  },

  methods: {
    setCounterToCero() {
      this.deltaYcounter = 0
    },

    scrollCounter(e) {
      this.deltaY = e.deltaY

      this.deltaYcounter += Math.floor(this.deltaY)
    },

    touchStart(e) {
      this.y = Math.floor(e.touches[0].pageY)
    },

    touchCounter(e) {
      this.deltaYcounter += Math.floor(-1 * .05 * (this.y - e.touches[0].pageY))
    }
  },

  mounted() {
    document.body.style.overflow = "hidden";
    document.body.style.html = "hidden";

    window.addEventListener(
      'wheel',
      _.throttle(this.scrollCounter, 10),
      {passive: true}
    )

    window.addEventListener(
      'touchstart',
      this.touchStart,
      {passive: true}
    );

    window.addEventListener(
      'touchmove',
      _.throttle(this.touchCounter, 10),
      {passive: true}
    );
  }
}
</script>
