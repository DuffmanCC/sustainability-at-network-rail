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
        translateY: -windowHeight -200,
        rotate: 0,
        scale: 1,
        opacity: 1,
        duration: 500
      }
    ]"
    :triggerAt="fifthStepTriggerAtPoint + 1100"
    :deltaYcounter="deltaYcounter"
  >
    <!-- step 1 -->
    <animate-x
      class="absolute"
      :keyframes="[
        { // 0%
          translateX: -4000,
          translateY: windowHeight * 0.5 - (windowHeight * 0.4 / 2),
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0
        },
        { // 100%
          translateX: windowWidth,
          translateY: windowHeight * 0.5 - (windowHeight * 0.4 / 2),
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 1000
        }
      ]"
      :triggerAt="firstStepTriggerAtPoint"
      :deltaYcounter="deltaYcounter"
    >
      <img
        :src="firstStep[0]"
        alt="animated train coming from the left"
        :style="{'height': windowHeight * 0.3 + 'px'}"
      >
    </animate-x>

    <animate-x
      class="absolute"
      :keyframes="[
        {
          translateX: -windowWidth -300,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0
        },
        {
          translateX: -100,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 250
        }
      ]"
      :triggerAt="firstStepTriggerAtPoint + 800"
      :deltaYcounter="deltaYcounter"
    >
      <div :style="{background: '#eee', width: (windowWidth + 200) + 'px', height: windowHeight + 'px', transform: 'skewX(-10deg)'}"></div>
    </animate-x>
    <!-- step 1 end -->

    <!-- step 2 -->
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
          translateX: windowWidth,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 500
        }
      ]"
      :triggerAt="secondStepTriggerAtPoint + 1500"
      :deltaYcounter="deltaYcounter"
    >
      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .7,
            translateY: windowHeight * .4,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .7,
            translateY: windowHeight * .4,
            rotate: 1,
            scale: 1,
            opacity: 1,
            duration: 500
          },
        ]"
        :triggerAt="secondStepTriggerAtPoint"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="secondStep[0]"
          alt="rotating circle 1"
          :style="{height: windowHeight * .15 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .55,
            translateY: windowHeight * .05,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .55,
            translateY: windowHeight * .05,
            rotate: 1,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="secondStepTriggerAtPoint"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="secondStep[1]"
          alt="rotating circle 2"
          :style="{height: windowHeight * .10 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .52,
            translateY: windowHeight * .25,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .52,
            translateY: windowHeight * .25,
            rotate: 1,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="secondStepTriggerAtPoint"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="secondStep[1]"
          alt="rotating circle 3"
          :style="{height: windowHeight * .15 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .26,
            translateY: windowHeight * .1,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .26,
            translateY: windowHeight * .1,
            rotate: 1,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="secondStepTriggerAtPoint"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="secondStep[2]"
          alt="rotating circle 4"
          :style="{height: windowHeight * .17 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .08,
            translateY: windowHeight * .08,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .08,
            translateY: windowHeight * .08,
            rotate: 1,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="secondStepTriggerAtPoint"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="secondStep[3]"
          alt="rotating circle 5"
          :style="{height: windowHeight * .08 + 'px'}"
        >
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
            duration: 500
          }
        ]"
        :triggerAt="secondStepTriggerAtPoint"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="secondStep[4]"
          alt="statics circles"
          :style="{height: `${windowHeight}px`, width: 'auto'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * 0.5,
            translateY: windowHeight * 0.45,
            rotate: 0,
            scale: this.scaleFactorTxt,
            opacity: 0,
            duration: 0
          },
          {
            translateX: windowWidth * 0.5,
            translateY: windowHeight * 0.45,
            rotate: 0,
            scale: this.scaleFactorTxt,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="secondStepTriggerAtPoint + 200"
        :deltaYcounter="deltaYcounter"
      >
        <div class="w-screen">
          <h2 style="color: #ec6608; font-weight: 600; font-size: 45px">Repairing</h2>

          <p style="font-size: 24px; margin-bottom: 1rem; font-weight: 300;">
            Imagine a hammer hitting<br>
            the head of a nail. Now<br>
            imagine that impact<br>
            thousands of times a day.
          </p>

          <p style="font-size: 24px; margin-bottom: 1rem; font-weight: 300;">
            That's what railway tracks<br>
            have to endure - and over<br>
            time, they can get damaged,<br>
            and cause delays.
          </p>
        </div>
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: -windowWidth,
            translateY: windowHeight * .35,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .04,
            translateY: windowHeight * .35,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="secondStepTriggerAtPoint + 200"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="secondStep[5]"
          alt="Big circle coming from the left"
          :style="{'height': windowHeight * .6 + 'px'}"
        >

        <div class="sr-only">
          <p>The rail milling train has large wheels with hundreds of cutting tips on them that grind away these defects.</p>

          <p>They shave small imperfections off the rail head, before a polishing wheel leaves a smooth finish.</p>

          <p>There's even a spare set of 'teeth' on the train to swap out and keep the milling train working.</p>
        </div>
      </animate-x>
    </animate-x>
    <!-- step 2 end -->

    <!-- step 3 -->
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
          translateX: windowWidth,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 500
        }
      ]"
      :triggerAt="thirdStepTriggerAtPoint + 1000"
      :deltaYcounter="deltaYcounter"
    >
      <animate-x
        class="absolute z-10"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .65,
            translateY: windowHeight * .1,
            rotate: 0,
            scale: 1,
            opacity: 0,
            duration: 0
          },
          {
            translateX: windowWidth * .65,
            translateY: windowHeight * .1,
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
          :src="thirdStep[0]"
          alt="worker fade in"
          :style="{'height': windowHeight * .8 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .05,
            translateY: 0,
            rotate: 0,
            scale: 1,
            opacity: 0,
            duration: 0
          },
          {
            translateX: windowWidth * .05,
            translateY: 0,
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
          :src="thirdStep[1]"
          alt="arrow patter fade in"
          :style="{'height': windowHeight + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .1,
            translateY: -windowHeight,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .1,
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
          :src="thirdStep[2]"
          alt="screen coming from the top"
          :style="{'height': windowHeight * .8 + 'px'}"
        >
      </animate-x>
    </animate-x>
    <!-- step 3 end -->

    <!-- step 3 -->
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
          translateY: -windowHeight,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 500
        }
      ]"
      :triggerAt="fourthStepTriggerAtPoint + 1000"
      :deltaYcounter="deltaYcounter"
    >
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
        :triggerAt="fourthStepTriggerAtPoint"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="fourthStep[0]"
          alt="zig zag pattern fade in"
          :style="{'height': windowHeight * .3 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .1,
            translateY: windowHeight * .1,
            rotate: 0,
            scale: this.scaleFactorTxt,
            opacity: 0,
            duration: 0
          },
          {
            translateX: windowWidth * .1,
            translateY: windowHeight * .1,
            rotate: 0,
            scale: this.scaleFactorTxt,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="fourthStepTriggerAtPoint + 100"
        :deltaYcounter="deltaYcounter"
      >
        <p class="w-screen" style="font-size: 30px;">
          This specialist technique and equipment<br>
          repairs the rails in a fraction of the time it<br>
          would take to replace them, a saving of
        </p>
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: 0,
            translateY: windowHeight * .35,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: 0,
            translateY: windowHeight * .35,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="fourthStepTriggerAtPoint + 300"
        :deltaYcounter="deltaYcounter"
      >
        <div
          class="w-screen bg-center bg-auto-100 bg-no-repeat"
          :style="{'background-image': `url(${fourthStep[1]}`, 'height': windowHeight * .5 + 'px' }"
        >
          <div class="sr-only">20% OF THE COST OF NEW TRACK</div>
        </div>


      </animate-x>
    </animate-x>
    <!-- step 3 end -->

    <!-- step 4 -->
    <animate-x
      class="absolute z-10"
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
          duration: 500
        }
      ]"
      :triggerAt="fifthStepTriggerAtPoint"
      :deltaYcounter="deltaYcounter"
    >
      <div
        class="w-screen h-screen bg-center bg-cover"
        :style="{'background-image': `url(${fifthStep[0]}`}"
      ></div>
    </animate-x>

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
          duration: 500
        }
      ]"
      :triggerAt="fifthStepTriggerAtPoint + 300"
      :deltaYcounter="deltaYcounter"
    >
      <div
        class="h-screen bg-center bg-cover"
        :style="{'background-image': `url(${fifthStep[1]}`, width: '6000px'}"
      ></div>
    </animate-x>

    <animate-x
      class="absolute"
      :keyframes="[
        { // 0%
          translateX: windowWidth * .4,
          translateY: windowHeight * .15,
          rotate: 0,
          scale: 1,
          opacity: 0,
          duration: 0
        },
        {
          translateX: windowWidth * .4,
          translateY: windowHeight * .15,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 500
        }
      ]"
      :triggerAt="fifthStepTriggerAtPoint + 500"
      :deltaYcounter="deltaYcounter"
      style="z-index: 10"
    >
      <img
        :src="fifthStep[2]"
        alt="speech bubble"
        :style="{'height': windowHeight * .3 + 'px'}"
      >

      <p class="sr-only">It means: less cost, less time to repair, less disruption for passengers!</p>
    </animate-x>
    <!-- step 4 end -->
  </animate-x>
</template>

<script>
  import AnimateX from './animate-x.vue'

  // first step
  import * as train from '../images/Parallax_second_casestudy/step1/train.png'

  // second step
  import * as spinCircle1 from '../images/Parallax_second_casestudy/step2/CS2_section_1_spin_circle_1.png'
  import * as spinCircle2 from '../images/Parallax_second_casestudy/step2/CS2_section_1_spin_circle_2.png'
  import * as spinCircle4 from '../images/Parallax_second_casestudy/step2/CS2_section_1_spin_circle_4.png'
  import * as spinCircle5 from '../images/Parallax_second_casestudy/step2/CS2_section_1_spin_circle_5.png'
  import * as staticCircles from '../images/Parallax_second_casestudy/step2/CS2_section_1_static_circles-01.png'
  import * as bigCircle from '../images/Parallax_second_casestudy/step2/big_circle.png'

  // third step
  import * as worker from '../images/Parallax_second_casestudy/step3/worker.png'
  import * as arrows from '../images/Parallax_second_casestudy/step3/pattern.png'
  import * as screen from '../images/Parallax_second_casestudy/step3/screen.png'

  // fourth step
  import * as zigzag from '../images/Parallax_second_casestudy/step4/zigzag.png'
  import * as percentage from '../images/Parallax_second_casestudy/step4/20_percent.png'

  // fifth step
  import * as carriage from '../images/Parallax_second_casestudy/step5/CS2_section_4_inside_carriage-01.png'
  import * as windowView from '../images/Parallax_second_casestudy/step5/CS2_section_4_window_view.png'
  import * as speech from '../images/Parallax_second_casestudy/step5/CS2_section_4_speech_bubble-01.png'

  export default {
    components: { AnimateX },

    props: ['deltaYcounter', 'windowHeight', 'windowWidth'],

    data() {
      let startingPoint = 8300

      return {
        firstStep: [],
        secondStep: [],
        thirdStep: [],
        fourthStep: [],
        fifthStep: [],
        firstStepTriggerAtPoint: startingPoint,
        secondStepTriggerAtPoint: startingPoint + 1000,
        thirdStepTriggerAtPoint: startingPoint + 2900,
        fourthStepTriggerAtPoint: startingPoint + 4100,
        fifthStepTriggerAtPoint: startingPoint + 5600
      }
    },

    computed: {
      scaleFactorTxt() {
        return this.windowHeight / 836
      }
    },

    mounted() {
      this.firstStep.push(train)

      this.secondStep.push(spinCircle1, spinCircle2, spinCircle4, spinCircle5, staticCircles, bigCircle)

      this.thirdStep.push(worker, arrows, screen)

      this.fourthStep.push(zigzag, percentage)

      this.fifthStep.push(carriage, windowView, speech)
    }
  }
</script>
