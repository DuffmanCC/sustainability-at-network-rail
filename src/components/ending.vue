<template>
  <div>
    <!-- final step -->
    <animate-x
      class="absolute"
      style="transform-origin: top center"
      :keyframes="[
        {
          translateX: 0,
          translateY: windowHeight * .2,
          rotate: 0,
          scale: scaleFactorTxt,
          opacity: 0,
          duration: 0
        },
        {
          translateX: 0,
          translateY: windowHeight * .2,
          rotate: 0,
          scale: scaleFactorTxt,
          opacity: 1,
          duration: 500
        }
      ]"
      :triggerAt="startingPoint"
      :deltaYcounter="deltaYcounter"
    >
      <p
        class="text-center w-screen text-white"
        style="font-size: 24px"
      >
        Find out more about how we are working<br>
        to save money and reduce our impact on<br>
        the environment:<br>

        <a class="font-bold text-white underline" href="https://www.networkrail.co.uk/sustainability">www.networkrail.co.uk/sustainability</a>
      </p>
    </animate-x>

    <animate-x
      class="absolute"
      :keyframes="[
        { // 0%
          translateX: windowWidth,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0
        },
        {
          translateX: -windowWidth,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 500
        }
      ]"
      :triggerAt="startingPoint + 300"
      :deltaYcounter="deltaYcounter"
    >
      <div
        class="w-screen h-screen bg-center bg-contain bg-no-repeat"
        :style="{'background-image': `url(${train}`}"
      ></div>
    </animate-x>

    <animate-x
      class="absolute w-screen"
      style="transform-origin: top center"
      :keyframes="[
        {
          translateX: 0,
          translateY: windowHeight,
          rotate: 0,
          scale: scaleFactorTxt,
          opacity: 1,
          duration: 0
        },
        {
          translateX: 0,
          translateY: windowHeight * 0.5,
          rotate: 0,
          scale: scaleFactorTxt,
          opacity: 1,
          duration: 500
        }
      ]"
      :triggerAt="startingPoint + 800"
      :deltaYcounter="deltaYcounter"
    >
      <button @click="setCounterToCero" class="cursor-pointer flex flex-col items-center mx-auto border-0">
        <img
          :src="greenArrows"
          alt="green arrows"
          style="transform: rotate(180deg); display: block; margin-bottom: 20px"
        >

        <p style="color: white; font-size: 24px">Back to the top</p>
      </button>
    </animate-x>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import AnimateX from './animate-x.vue'
  import * as train from '../images/End_train.png'
  import * as greenArrows from '../images/double_green_down_arrow.png'

  export default {
    components: { AnimateX },

    props: ['deltaYcounter', 'windowHeight', 'windowWidth'],

    data() {
      return {
        train: '',
        greenArrows: '',
        startingPoint: 25700
      }
    },

    computed: {
      scaleFactorTxt() {
        return this.windowHeight / 836 //900 ?
      },
    },

    methods: {
      ...mapMutations(['setCounterToCero'])
    },

    mounted() {
      this.train = train
      this.greenArrows = greenArrows
    }
  }
</script>
