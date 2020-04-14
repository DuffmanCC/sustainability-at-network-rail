<template>
  <animate-x
    class="absolute"
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
        translateY: -windowHeight -300,
        rotate: 0,
        scale: 1,
        opacity: 1,
        duration: 500
      }
    ]"
    :triggerAt="fifthStepTriggerAtPoint + 1900"
    :deltaYcounter="deltaYcounter"
  >
    <!-- step 1 -->
    <animate-x
      class="absolute"
      :keyframes="[
        { // 0%
          translateX: windowWidth,
          translateY: windowHeight * 0.5 - (windowHeight * 0.4 / 2),
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0
        },
        {
          translateX: - (21 * windowHeight * 0.4),
          translateY: windowHeight * 0.5 - (windowHeight * 0.4 / 2),
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 500
        }
      ]"
      :triggerAt="firstStepTriggerAtPoint"
      :deltaYcounter="deltaYcounter"
    >
      <img
        :src="firstStep[0]"
        alt="train"
        :style="{'height': windowHeight * 0.3 + 'px'}"
      >
    </animate-x>

    <animate-x
      class="absolute"
      :keyframes="[
        { // 0%
          translateX: windowWidth + 200,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0
        },
        {
          translateX: -200,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 200
        }
      ]"
      :triggerAt="firstStepTriggerAtPoint + 300"
      :deltaYcounter="deltaYcounter"
    >
      <div
        class="bg-grey h-screen"
        :style="{ width: (windowWidth + 400) + 'px', transform: 'skewX(-10deg)'}"
      ></div>
    </animate-x>
    <!-- step 1 end -->

    <!-- step 2 -->
    <animate-x
      class="absolute"
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
          translateX: -windowWidth,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 500
        }
      ]"
      :triggerAt="secondStepTriggerAtPoint + 1000"
      :deltaYcounter="deltaYcounter"
      style="width: 100%"
    >
      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .15,
            translateY: -windowHeight,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .15,
            translateY: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="secondStepTriggerAtPoint"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="secondStep[0]"
          alt="white drops"
          :style="{'height': windowHeight * .3 + 'px'}">
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .15,
            translateY: windowHeight * .3,
            rotate: 0,
            scale: 1 * scaleFactorTxt,
            opacity: 0,
            duration: 0
          },
          {
            translateX: windowWidth * .15,
            translateY: windowHeight * .3,
            rotate: 0,
            scale: 1 * scaleFactorTxt,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="secondStepTriggerAtPoint + 300"
        :deltaYcounter="deltaYcounter"
        style="transform-origin: top left;"
      >
        <div style="max-width: 320px">
          <h2 class="text-orange mb-2" style="font-size: 60px;">Monitoring</h2>

          <p style="font-size: 24px" class="mb-5">We use plain line pattern technology (PLPR) to inspect track for faults.</p>

          <p style="font-size: 24px">The New Measurement Train (or Flying Banana as it's affectionately known) takes thousands of pictures of the track as it travels.</p>
        </div>
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .45,
            translateY: windowHeight * 0.1,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .45,
            translateY: windowHeight * 0.1,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="secondStepTriggerAtPoint + 500"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="secondStep[1]"
          alt="camera attached to belly of the train"
          :style="{'height': windowHeight * .7 + 'px'}">
      </animate-x>
    </animate-x>
    <!-- step 2 end -->

    <!-- step 3 -->
    <animate-x
      class="absolute w-screen"
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
          translateX: -windowWidth -100,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 500
        }
      ]"
      :triggerAt="thirdStepTriggerAtPoint + 1200"
      :deltaYcounter="deltaYcounter"
    >
      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth,
            translateY: 0,
            rotate: 0,
            scale: 1,
            opacity: 0,
            duration: 0
          },
          {
            translateX: windowWidth * .1,
            translateY: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="thirdStepTriggerAtPoint"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="thirdStep[0]" alt="green dots"
          :style="{'height': windowHeight * 0.3 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth,
            translateY: windowHeight - (windowHeight * 0.3),
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 0
          },
          {
            translateX: 0,
            translateY: windowHeight - (windowHeight * 0.3),
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="thirdStepTriggerAtPoint + 100"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="thirdStep[1]" alt="zig zag"
          :style="{'height': windowHeight * 0.3 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .15,
            translateY: windowHeight * .4,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .15,
            translateY: windowHeight * .4,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="thirdStepTriggerAtPoint + 200"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="thirdStep[2]" alt="birds"
          :style="{'height': windowHeight * 0.12 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth,
            translateY: windowHeight * .7,
            rotate: 0,
            scale: 1,
            opacity: 0,
            duration: 0
          },
          {
            translateX: windowWidth * .20,
            translateY: windowHeight * .7,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="thirdStepTriggerAtPoint + 300"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="thirdStep[3]" alt="black arrows"
          :style="{'height': windowHeight * 0.3 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute z-10"
        :keyframes="[
          { // 0%
            translateX: windowWidth,
            translateY: windowHeight * .1,
            rotate: 0,
            scale: 1,
            opacity: 0,
            duration: 0
          },
          {
            translateX: windowWidth * .35,
            translateY: windowHeight * .1,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="thirdStepTriggerAtPoint + 400"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="thirdStep[4]" alt="woman pointing at a clipboad"
          :style="{'height': windowHeight * 0.85 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth,
            translateY: windowHeight * .1,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .6,
            translateY: windowHeight * .1,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="thirdStepTriggerAtPoint + 500"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="thirdStep[5]"
          alt="clipboard"
          :style="{'height': windowHeight * 0.8 + 'px'}"
        >

        <div class="sr-only">
          <h2>FACTS</h2>

          <p>Track workers on foot can check 210 miles of track for faults in a week.</p>

          <p>The train covers 2,000 miles in the same time!</p>

          <p>Safer - no workers trackside</p>

          <p>Will save £23m up to 2024.</p>
        </div>
      </animate-x>
    </animate-x>
    <!-- step 3 end -->

    <!-- step 4 -->
    <animate-x
      class="absolute w-screen h-screen"
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
      :triggerAt="fourthStepTriggerAtPoint + 700"
      :deltaYcounter="deltaYcounter"
    >
      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth,
            translateY: 0,
            rotate: 0,
            scale: 1,
            opacity: 0,
            duration: 0
          },
          {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="fourthStepTriggerAtPoint"
        :deltaYcounter="deltaYcounter"
      >
        <div
          class="w-screen h-screen bg-center bg-cover"
          :style="{'background-image': `url(${fourthStep[0]}`}"
        ></div>
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: 0,
            translateY: windowHeight * .4,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: 0,
            translateY: windowHeight * .4,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="fourthStepTriggerAtPoint + 100"
        :deltaYcounter="deltaYcounter"
      >
        <div
          class="w-screen bg-contain bg-center bg-no-repeat"
          :style="{'background-image': `url(${fourthStep[2]}`, 'height': windowHeight * .35 + 'px'}"
        ></div>

        <div class="sr-only">2000 miles of track in one week</div>
      </animate-x>

      <animate-x
        class="absolute z-10"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .09,
            translateY: windowHeight * .1,
            rotate: 0,
            scale: scaleFactorTxt,
            opacity: 0,
            duration: 0
          },
          {
            translateX: windowWidth * .09,
            translateY: windowHeight * .1,
            rotate: 0,
            scale: scaleFactorTxt,
            opacity: 1,
            duration: 400
          }
        ]"
        :triggerAt="fourthStepTriggerAtPoint + 100"
        :deltaYcounter="deltaYcounter"
        style="transform-origin: top left;"
      >
        <p style="max-width: 600px; font-size: 30px">The inspection team are instead on the train, reviewing crystal clear images that advanced systems generate and scan.</p>
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .62,
            translateY: 0,
            rotate: 0,
            scale: 1,
            opacity: 0,
            duration: 0
          },
          {
            translateX: windowWidth * .62,
            translateY: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="fourthStepTriggerAtPoint + 100"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="fourthStep[1]" alt="purple dots"
          :style="{'height': windowHeight * .2 + 'px'}"
        >
      </animate-x>
    </animate-x>
    <!-- step 4 end-->

    <!-- step 5 -->
    <animate-x
      class="absolute"
      :keyframes="[
        { // 0%
          translateX: -3000,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 0,
          duration: 0
        },
        {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 1200
        }
      ]"
      :triggerAt="fifthStepTriggerAtPoint + 100"
      :deltaYcounter="deltaYcounter"
    >
      <div
        class="h-screen bg-center bg-cover"
        :style="{'background-image': `url(${fifthStep[0]}`, width: '6000px'}"
      ></div>
    </animate-x>

    <animate-x
      class="absolute"
      :keyframes="[
        { // 0%
          translateX: 0,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 0,
          duration: 0
        },
        {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 300
        }
      ]"
      :triggerAt="fifthStepTriggerAtPoint"
      :deltaYcounter="deltaYcounter"
    >
      <div
        class="w-screen h-screen bg-center bg-cover"
        :style="{'background-image': `url(${fifthStep[1]}`}"
      ></div>
    </animate-x>

    <animate-x
      class="absolute"
      :keyframes="[
        { // 0%
          translateX: windowWidth * .1,
          translateY: windowHeight * .4,
          rotate: 0,
          scale: 1,
          opacity: 0,
          duration: 0
        },
        {
          translateX: windowWidth * .1,
          translateY: windowHeight * .4,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 500
        }
      ]"
      :triggerAt="fifthStepTriggerAtPoint + 1300"
      :deltaYcounter="deltaYcounter"
    >
      <img
        :src="fifthStep[2]"
        alt="speech bubble"
        :style="{height: windowHeight * .5 + 'px'}"
      >

      <div class="sr-only">
        <p>The train travels at 125mph, photographing every 20mm.</p>

        <p>Seven super high-tech cameras can identify faults, such as dips, faulty joints, loose or high stone...</p>

        <p>Thermal imaging scans for loose connections in electrics that could be overheating.</p>
      </div>
    </animate-x>
    <!-- step 5 end -->
  </animate-x>
</template>

<script>
  import AnimateX from './animate-x.vue'

  // first step
  import * as train from '../images/Parallax_first_casestudy/step1/CS_1_Inspection_train_whole.png'

  // second stepcd
  import * as whiteDrops from '../images/Parallax_first_casestudy/step2/white_drops.png'
  import * as camera from '../images/Parallax_first_casestudy/step2/camera.png'

  // third step
  import * as greenDots from '../images/Parallax_first_casestudy/step3/green_dots.png'
  import * as zigzag from '../images/Parallax_first_casestudy/step3/white_zigzag.png'
  import * as birds from '../images/Parallax_first_casestudy/step3/birds.png'
  import * as blackArrows from '../images/Parallax_first_casestudy/step3/black_arrows.png'
  import * as woman from '../images/Parallax_first_casestudy/step3/woman.png'
  import * as clipboard from '../images/Parallax_first_casestudy/step3/clipboard2.png'

  // fourth step
  import * as waveStripes from '../images/Parallax_first_casestudy/step4/waves.png'
  import * as purpleDots from '../images/Parallax_first_casestudy/step4/purple_dots.png'
  import * as text2000 from '../images/Parallax_first_casestudy/step4/text2000.png'

  // fifth step
  import * as windowView from '../images/Parallax_first_casestudy/step5/window_view.png'
  import * as insideCarriage from '../images/Parallax_first_casestudy/step5/inside_carriage.png'
  import * as speechBubble from '../images/Parallax_first_casestudy/step5/speech_bubble.png'

  export default {
    components: { AnimateX },

    props: ['deltaYcounter', 'windowHeight', 'windowWidth'],

    data() {
      let startingPoint = 1600

      return {
        firstStep: [],
        secondStep: [],
        thirdStep: [],
        fourthStep: [],
        fifthStep: [],
        firstStepTriggerAtPoint: startingPoint,
        secondStepTriggerAtPoint: startingPoint + 500,
        thirdStepTriggerAtPoint: startingPoint + 2000,
        fourthStepTriggerAtPoint: startingPoint + 3500,
        fifthStepTriggerAtPoint: startingPoint + 4600
      }
    },

    computed: {
      /**
       * 836 is the number of px for a 1 scale factor
       */
      scaleFactorTxt() {
        return this.windowHeight / 836
      }
    },

    mounted() {
      // first step
      this.firstStep.push(train)

      //second step
      this.secondStep.push(whiteDrops, camera)

      //third step
      this.thirdStep.push(greenDots, zigzag, birds, blackArrows, woman, clipboard)

      //fourth step
      this.fourthStep.push(waveStripes, purpleDots, text2000)

      //fifth step
      this.fifthStep.push(windowView, insideCarriage, speechBubble)
    }
  }
</script>
