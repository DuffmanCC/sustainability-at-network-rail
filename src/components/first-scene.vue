<template>
  <animate-x
    class="absolute w-full"
    :keyframes="[
      { // 0%
        translateX: 0,
        translateY: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        duration: 0
      },
      {
        translateX: 0,
        translateY: -windowHeight,
        rotate: 0,
        scale: 1,
        opacity: 1,
        duration: 500
      }
    ]"
    :triggerAt="1305"
    :deltaYcounter="deltaYcounter"
  >
    <animate-x
      class="absolute"
      :keyframes="[
        {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0
        },
        {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 1000
        }
      ]"
      :triggerAt="0"
      :deltaYcounter="deltaYcounter"
    >
      <img
        :src="sky1"
        alt="skyline city background"
        class="w-full"
      >

      <div
        class="text-center absolute w-full" style="top: 1%;"
        :style="{transform: `scale(${scaleFactorTxt})`}"
      >
        <h1 style="color: #001c26; font-size: 30px; font-weight: 400; margin-bottom: 0px">Sustainability at Network Rail</h1>

        <h2 style="color: #3fb498; font-size: 20px; font-weight: 400;">PART ONE</h2>
      </div>
    </animate-x>

    <animate-x
      class="absolute"
      :keyframes="[
        {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0
        },
        {
          translateX: 0,
          translateY: -75,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 1000
        }
      ]"
      :triggerAt="0"
      :deltaYcounter="deltaYcounter"
    >
      <img
        :src="hills2"
        alt="hills background 1"
        class="w-full"
      >
    </animate-x>

    <animate-x
      class="absolute"
      :keyframes="[
        {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0
        },
        {
          translateX: 0,
          translateY: -50,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 1000
        }
      ]"
      :triggerAt="0"
      :deltaYcounter="deltaYcounter"
    >
      <img
        :src="train3"
        alt="animation train coming from the left"
        class="first-train animation-config relative w-full"
      >
    </animate-x>

    <animate-x
      class="absolute"
      :keyframes="[
        {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0
        },
        {
          translateX: 0,
          translateY: -60,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 1000
        }
      ]"
      :triggerAt="0"
      :deltaYcounter="deltaYcounter"
    >
      <img
        :src="hills4"
        alt="hills background 2"
        class="w-full"
      >
    </animate-x>

    <animate-x
      class="absolute"
      :keyframes="[
        {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0
        },
        {
          translateX: 0,
          translateY: -30,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 1000
        }
      ]"
      :triggerAt="0"
      :deltaYcounter="deltaYcounter"
    >
      <img
        :src="train5"
        alt="animation train coming from the right"
        class="second-train animation-config relative w-full">
    </animate-x>

    <animate-x
      class="absolute"
      :keyframes="[
        {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0
        },
        {
          translateX: 0,
          translateY: -30,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 1000
        }
      ]"
      :triggerAt="0"
      :deltaYcounter="deltaYcounter"
    >
      <img
        :src="viaduct6"
        alt="viaduct"
        class="w-full"
      >
    </animate-x>

    <animate-x
      class="absolute"
      :keyframes="[
        {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0
        },
        {
          translateX: 0,
          translateY: -80,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 1000
        }
      ]"
      :triggerAt="0"
      :deltaYcounter="deltaYcounter"
    >
      <img
        :src="hills7"
        alt="hills background 3"
        class="w-full"
      >
    </animate-x>

    <animate-x
      class="absolute"
      :keyframes="[
        {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0
        },
        {
          translateX: 0,
          translateY: -80,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 1000
        }
      ]"
      :triggerAt="0"
      :deltaYcounter="deltaYcounter"
    >
      <img
        :src="train8"
        alt="animation train coming from the left"
        class="third-train animation-config relative w-full"
      >
    </animate-x>

    <animate-x
      class="absolute"
      :keyframes="[
        {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0
        },
        {
          translateX: 0,
          translateY: -150,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 1000
        }
      ]"
      :triggerAt="0"
      :deltaYcounter="deltaYcounter"
    >
      <img
        :src="hills9"
        alt="hills background 4"
        class="w-full"
      >
    </animate-x>

    <animate-x
      class="absolute"
      :keyframes="[
        {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0
        },
        {
          translateX: 0,
          translateY: -205,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 1000
        }
      ]"
      :triggerAt="0"
      :deltaYcounter="deltaYcounter"
    >
      <img
        :src="horses10"
        alt="horses"
        class="w-full"
      >
    </animate-x>

    <animate-x
      class="absolute"
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
          translateY: windowHeight * .5,
          rotate: 0,
          scale: scaleFactorTxt,
          opacity: 1,
          duration: 200
        }
      ]"
      :triggerAt="900"
      :deltaYcounter="deltaYcounter"
    >
      <div class="text-center w-screen border text-white">
        <p style="font-size: 24px;">
          Part of improving the railway is making<br>
          sure we're efficient.
        </p>

        <p
          style="font-size: 24px;"
          class="mb-5"
        >
          This means getting value out of every<br>
          pound of taxpayer's money, and<br>
          minimising wastage of material - such<br>
          as our tracks.
        </p>

        <img
          :src="greenArrows"
          alt="green arrows"
          class="mx-auto"
        >
      </div>
    </animate-x>
  </animate-x>
</template>

<script>
  import AnimateX from './animate-x.vue'

  // parallax scene
  import * as sky1 from '../images/Parallax_first_scene_V6/1_Sky_and_city-01.png'
  import * as hills2 from '../images/Parallax_first_scene_V6/2_Hills-01.png'
  import * as train3 from '../images/Parallax_first_scene_V6/3_Train-01.png'
  import * as hills4 from '../images/Parallax_first_scene_V6/4_Hills-01.png'
  import * as train5 from '../images/Parallax_first_scene_V6/5_Train-01.png'
  import * as viaduct6 from '../images/Parallax_first_scene_V6/6_Viaduct_Bridge-01.png'
  import * as hills7 from '../images/Parallax_first_scene_V6/7_Hills-01.png'
  import * as train8 from '../images/Parallax_first_scene_V6/8_Train-01.png'
  import * as hills9 from '../images/Parallax_first_scene_V6/9_Hills-01.png'
  import * as horses10 from '../images/Parallax_first_scene_V6/10_Foreground_and_horses-01.png'

  import * as greenArrows from '../images/double_green_down_arrow.png'

  export default {
    components: { AnimateX },

    props: ['deltaYcounter', 'windowHeight', 'windowWidth'],

    data() {
      return {
        train: '',
        sky1: '',
        hills2: '',
        train3: '',
        hills4: '',
        train5: '',
        viaduct6: '',
        hills7: '',
        train8: '',
        hills9: '',
        horses10: '',
        greenArrows: ''
      }
    },

    computed: {
      scaleFactorTxt() {
        return this.windowHeight / 836
      },
    },

    mounted() {
      // parallax
      this.sky1 = sky1
      this.hills2 = hills2
      this.train3 = train3
      this.hills4 = hills4
      this.train5 = train5
      this.viaduct6 = viaduct6
      this.hills7 = hills7
      this.train8 = train8
      this.hills9 = hills9
      this.horses10 = horses10
      this.greenArrows = greenArrows
    }
  }
</script>

<style>
@keyframes trainRightToLeft {
  0% {
    right: -2000px;
  }

  100% {
    right: 2000px;
  }
}

@keyframes trainLeftToRight {
  0% {
    left: -2000px;
  }

  100% {
    left: 2000px;
  }
}
.animation-config {
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-timing-function: linear;
}

.first-train {
  animation-duration: 12s;
  animation-name: trainLeftToRight;
}

.second-train {
  animation-duration: 8s;
  animation-name: trainRightToLeft;
}

.third-train {
  animation-duration: 4s;
  animation-name: trainLeftToRight;
}
</style>
