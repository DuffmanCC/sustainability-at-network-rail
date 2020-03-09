<template>
  <div :style="style">
    <slot></slot>
  </div>
</template>

<script>
  // import inViewport from 'in-viewport'

  export default {
    props: ['keyframes', 'triggerAt', 'deltaYcounter'],

    computed: {
      style() {
        return {
          'opacity': this.opacity,
          'transform': `translate3d(${this.translateX}px, ${this.translateY}px, 0px) rotate(${this.rotate}turn) scale(${this.scale})`
        }
      },

      counter() {
        return this.deltaYcounter - this.triggerAt
      },

      totalDuration() {
        let num = 0

        this.keyframes.forEach((item) => {
          num += item.duration
        })

        return num
      },

      translateX() {
        return this.keyframeNumber(this.counter, 'translateX')
      },

      translateY() {
        return this.keyframeNumber(this.counter, 'translateY')
      },

      scale() {
        return this.keyframeNumber(this.counter, 'scale')
      },

      rotate() {
        return this.keyframeNumber(this.counter, 'rotate')
      },

      opacity() {
        return this.keyframeNumber(this.counter, 'opacity')
      }
    },

    methods: {
      factor(i, property) {
        let frames = this.keyframes
        let diff = frames[i][property] - frames[i - 1][property]

        // return (diff / frames[i].duration).toFixed(3)
        return (diff / frames[i].duration)
      },

      partialCounter(keyframeNumber) {
        let prevDuration = 0

        for (let i = 0; i < keyframeNumber; i++) {
          prevDuration += this.keyframes[i].duration
        }

        return this.counter - prevDuration
      },

      /**
       * WIP
       */
      removeUnitsName(keyframes) {
        let frames = []

        keyframes.forEach(frame => {
          Object.keys(frame).forEach(item => {
            frame[item] = parseInt(frame[item]);
          })

          frames.push(frame)
        })

        return frames
      },

      keyframeNumber(counter, property) {
        let frames = this.keyframes
        let totalDuration = this.totalDuration
        let prevDuration = 0

        for (let i = 0; i < frames.length; i++) {
          if (counter <= 0) {
            return frames[0][property]
          }

          if (counter > prevDuration && counter <= prevDuration + frames[i].duration) {
            return frames[i - 1][property] + this.partialCounter(i) * this.factor(i, property)
          }

          if (counter > totalDuration) {
            return frames[frames.length - 1][property]
          }

          prevDuration += frames[i].duration
        }
      }
    }
  }
</script>
