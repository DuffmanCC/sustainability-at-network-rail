<template>
  <div
    id="app"
    class="h-screen bg-green"
    v-touch:start="startHandler"
    v-touch:end="endHandler"
  >
<!--     <header class="bg-white flex justify-center items-center z-50 h-20 relative">
      <div>header (new repo)</div>
    </header> -->

<!--     <div class="fixed z-50 bg-black text-white py-3 px-4" style="font-size: 10px">
      {{ deltaYcounter }} | {{ percentage }}%
    </div> -->

    <div
      v-if="isVertical"
      class="text-white text-6xl flex text-center justify-center items-center h-screen px-12"
    >
      Rotate your phone
    </div>

    <first-scene
      v-if="!isVertical"
      :deltaYcounter="deltaYcounter"
      :windowHeight="windowHeight"
      :windowWidth="windowWidth"
    ></first-scene>

    <first-case-study
      v-if="!isVertical"
      :deltaYcounter="deltaYcounter"
      :windowHeight="windowHeight"
      :windowWidth="windowWidth"
    ></first-case-study>

    <second-case-study
      v-if="!isVertical"
      :deltaYcounter="deltaYcounter"
      :windowHeight="windowHeight"
      :windowWidth="windowWidth"
    ></second-case-study>

    <third-case-study
      v-if="!isVertical"
      :deltaYcounter="deltaYcounter"
      :windowHeight="windowHeight"
      :windowWidth="windowWidth"
    ></third-case-study>

    <ending
      v-if="!isVertical"
      :deltaYcounter="deltaYcounter"
      :windowHeight="windowHeight"
      :windowWidth="windowWidth"
    ></ending>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FirstScene from './components/first-scene.vue'
import FirstCaseStudy from './components/first-case-study.vue'
import SecondCaseStudy from './components/second-case-study.vue'
import ThirdCaseStudy from './components/third-case-study.vue'
import Ending from './components/ending.vue'
import _ from 'lodash'

export default {
  name: 'App',

  components: { FirstScene, FirstCaseStudy, SecondCaseStudy, ThirdCaseStudy, Ending },

  computed: {
    ...mapState(['deltaYcounter']),

    windowWidth() {
      return window.innerWidth
    },

    windowHeight() {
      return window.innerHeight
    },

    percentage() {
      let percentage = ((100 * this.deltaYcounter) / 26500).toFixed(1)

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
    reloadPage() {
      location.reload()
    },

    setCounterToZero() {
      this.$store.state.deltaYcounter = 0
    },

    scrollCounter(e) {
      this.$store.state.deltaYcounter += parseInt(e.deltaY)

      if (this.$store.state.deltaYcounter < 0) {
        this.$store.state.deltaYcounter = 0
      }
    },

    startHandler(e) {
      if (this.isTouchDevice) {
        this.$store.state.startY = parseInt(e.changedTouches[0].clientY)
      }
    },

    movingHandler(e) {
      if (this.isTouchDevice) {
        this.$store.state.partialY = parseInt(e.changedTouches[0].clientY) - this.$store.state.startY

        this.$store.state.deltaYcounter = this.$store.state.accumulatedY + this.$store.state.partialY
      }
    },

    endHandler() {
      if (this.isTouchDevice) {
        this.$store.state.accumulatedY += this.$store.state.partialY

        this.$store.state.deltaYcounter = this.$store.state.accumulatedY
      }
    },

    swipeHandler(direction) {
      this.swipeDirection = direction
    },

    isTouchDevice() {
      return 'ontouchstart' in window
    }
  },

  mounted() {
    window.addEventListener(
      'wheel',
      _.throttle(this.scrollCounter, 5),
      {passive: true}
    )

    window.addEventListener(
      'touchmove',
      _.throttle(this.movingHandler, 5),
      {passive: true}
    );

    window.addEventListener(
      'resize',
      _.throttle(this.reloadPage, 5),
      {passive: true}
    );
  },

  beforeDestroy() {
    window.removeEventListener('wheel');
    window.removeEventListener('touchmove');
  }
}
</script>

<style>
html, body {
  height: 100%;
  overflow: hidden;
}

body {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}
</style>
