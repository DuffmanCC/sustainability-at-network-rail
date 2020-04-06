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
      { // 100%
        translateX: 0,
        translateY: -windowHeight,
        rotate: 0,
        scale: 1,
        opacity: 1,
        duration: 500
      }
    ]"
    :triggerAt="sixthStepTriggerAtPoint + 2900"
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
        { // 100%
          translateX: -5500,
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
        alt="animated train coming from the rigth"
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
      :triggerAt="firstStepTriggerAtPoint + 600"
      :deltaYcounter="deltaYcounter"
    >
      <div
        class="bg-grey"
        :style="{ width: (windowWidth + 400) + 'px', height: windowHeight + 'px', transform: 'skewX(-10deg)'}"
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
      :triggerAt="secondStepTriggerAtPoint + 600"
      :deltaYcounter="deltaYcounter"
    >
      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .3,
            translateY: windowHeight * .15,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .3,
            translateY: windowHeight * .15,
            rotate: 1,
            scale: 1.5,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="secondStepTriggerAtPoint"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="secondStep[0]"
          alt="green logo 1"
          :style="{width: windowHeight * .15 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .45,
            translateY: windowHeight * .09,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .45,
            translateY: windowHeight * .09,
            rotate: 1,
            scale: .75,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="secondStepTriggerAtPoint"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="secondStep[0]"
          alt="green logo 2"
          :style="{width: windowHeight * .15 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .6,
            translateY: windowHeight * .2,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .6,
            translateY: windowHeight * .2,
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
          :src="secondStep[0]"
          alt="green logo 3"
          :style="{width: windowHeight * .15 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .7,
            translateY: windowHeight * .05,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .7,
            translateY: windowHeight * .05,
            rotate: 1,
            scale: .25,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="secondStepTriggerAtPoint"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="secondStep[0]"
          alt="green logo 4"
          :style="{width: windowHeight * .15 + 'px'}"
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
        <div class="w-screen">
          <img
            :src="secondStep[1]"
            alt="white shapes appearing from opacity 0 to 1"
            :style="{height: windowHeight * .45 + 'px', margin: '0 auto'}"
          >
        </div>
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .2,
            translateY: windowHeight * .5,
            rotate: 0,
            scale: scaleFactorTxt,
            opacity: 0,
            duration: 0
          },
          {
            translateX: windowWidth * .2,
            translateY: windowHeight * .5,
            rotate: 0,
            scale: scaleFactorTxt,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="secondStepTriggerAtPoint + 200"
        :deltaYcounter="deltaYcounter"
      >
        <div class="w-screen absolute">
          <h2 style="color: #ec6608; font-weight: 600; font-size: 45px">Repairing</h2>

          <p style="font-size: 24px; margin-bottom: 1rem">
            Imagine a hammer hitting the head of a nail. <br>
            Now imagine that impact thousands of times a day.
          </p>

          <p style="font-size: 24px; margin-bottom: 1rem">
            That's what railway tracks have to endure - and over<br>
            time, they can get damaged, and cause delays.
          </p>
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
          translateX: -windowWidth,
          translateY: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 500
        }
      ]"
      :triggerAt="thirdStepTriggerAtPoint + 2400"
      :deltaYcounter="deltaYcounter"
    >
      <animate-x
        class="absolute"
        style="transform-origin: top left;"
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
        :triggerAt="thirdStepTriggerAtPoint + 400"
        :deltaYcounter="deltaYcounter"
      >
        <div
          class="w-screen h-screen bg-center bg-cover"
          :style="{'background-image': `url(${thirdStep[4]}`}"
        >
          <div class="sr-only">
            40 to 100 wagons loaded with a varity of materials arrive each week. The materials are graded and sorted into what can be reused on the network and what can be sold. In 2016/17:
          </div>
        </div>
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
        :triggerAt="thirdStepTriggerAtPoint + 800"
        :deltaYcounter="deltaYcounter"
      >
        <div
          class="w-screen h-screen bg-center bg-contain"
          :style="{'background-image': `url(${thirdStep[3]}`}"
        >
          <div class="sr-only">
            1.26 millions
          </div>
        </div>
<!--         <p style="font-size: 330px; letter-spacing: -20px; line-height: 350px; color: #86bd45; font-weight: bold">1.26m</p>
 -->
    </animate-x>

      <animate-x
        class="absolute z-10"
        style="transform-origin: top left"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .3,
            translateY: windowHeight * .75,
            rotate: 0,
            scale: scaleFactorTxt,
            opacity: 0,
            duration: 0
          },
          {
            translateX: windowWidth * .3,
            translateY: windowHeight * .75,
            rotate: 0,
            scale: scaleFactorTxt,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="thirdStepTriggerAtPoint + 1000"
        :deltaYcounter="deltaYcounter"
      >
        <div class="w-screen font-bold">
          <p style="font-size: 30px; color: #00983b">
            tonnes of ballast (or 15 Washington<br>
            Monuments' worth) were recycled.<br>
            A saving of £6m!
          </p>
        </div>
<!--         <div
          class="w-screen bg-center bg-contain bg-no-repeat border"
          :style="{'background-image': `url(${thirdStep[5]}`, height: windowHeight * .2 + 'px'}"
        >
          <div class="sr-only">
            tonnes of ballast (or 15 Washington Monuments' worth) were recycled. A saving of £6m!
          </div>
        </div> -->
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .64,
            translateY: windowHeight * .64,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .64,
            translateY: windowHeight * .64,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="thirdStepTriggerAtPoint + 1200"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="thirdStep[1]"
          alt="ballast 1"
          :style="{width: windowHeight * .18 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .73,
            translateY: windowHeight * .64,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .73,
            translateY: windowHeight * .64,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="thirdStepTriggerAtPoint + 1200"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="thirdStep[1]"
          alt="ballast 2"
          :style="{width: windowHeight * .18 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .82,
            translateY: windowHeight * .64,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .82,
            translateY: windowHeight * .64,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="thirdStepTriggerAtPoint + 1200"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="thirdStep[1]"
          alt="ballast 3"
          :style="{width: windowHeight * .18 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .64,
            translateY: windowHeight * .8,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .64,
            translateY: windowHeight * .8,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="thirdStepTriggerAtPoint + 1200"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="thirdStep[1]"
          alt="ballast 4"
          :style="{width: windowHeight * .18 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .73,
            translateY: windowHeight * .8,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .73,
            translateY: windowHeight * .8,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="thirdStepTriggerAtPoint + 1200"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="thirdStep[1]"
          alt="ballast 5"
          :style="{width: windowHeight * .18 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .82,
            translateY: windowHeight * .8,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .82,
            translateY: windowHeight * .8,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="thirdStepTriggerAtPoint + 1200"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="thirdStep[1]"
          alt="ballast 6"
          :style="{width: windowHeight * .18 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute w-screen"
        style="z-index: -1"
        :keyframes="[
          { // 0%
            translateX: 0,
            translateY: 0,
            rotate: 0,
            scale: 0,
            opacity: 1,
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
        :triggerAt="thirdStepTriggerAtPoint + 1400"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="thirdStep[2]"
          alt="recycling logos"
          :style="{width: windowWidth + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * 0.03,
            translateY: windowHeight * .3,
            rotate: 0,
            scale: 0,
            opacity: 0,
            duration: 0
          },
          {
            translateX: windowWidth * 0.03,
            translateY: windowHeight * .3,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="thirdStepTriggerAtPoint + 1600"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="thirdStep[0]"
          alt="obelisc"
          :style="{width: windowHeight * .4 + 'px'}"
        >
      </animate-x>
    </animate-x>
    <!-- step 3 end -->
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
      :triggerAt="fourthStepTriggerAtPoint + 1400"
      :deltaYcounter="deltaYcounter"
      style="width: 100%"
    >
      <animate-x
        class="absolute z-10"
        style="transform-origin: top left"
        :keyframes="[
          { // 0%
            translateX: windowWidth,
            translateY: 0,
            rotate: 0,
            scale: scaleFactorTxt,
            opacity: 0,
            duration: 0
          },
          {
            translateX: windowWidth * .05,
            translateY: 0,
            rotate: 0,
            scale: scaleFactorTxt,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="fourthStepTriggerAtPoint"
        :deltaYcounter="deltaYcounter"
      >
        <p style="letter-spacing: -20px; font-size: 330px; line-height: 450px; color: #0098bd; font-weight: bold;">93,000</p>
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: 0,
            translateY: 0,
            rotate: 0,
            scale: 0,
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
        :triggerAt="fourthStepTriggerAtPoint + 200"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="fourthStep[0]"
          alt="background pattern"
          :style="{ width: windowWidth + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        style="transform-origin: top left"
        :keyframes="[
          { // 0%
            translateX: windowWidth * 0.05,
            translateY: windowHeight * .6,
            rotate: 0,
            scale: scaleFactorTxt,
            opacity: 0,
            duration: 0
          },
          {
            translateX: windowWidth * 0.05,
            translateY: windowHeight * .6,
            rotate: 0,
            scale: scaleFactorTxt,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="fourthStepTriggerAtPoint + 400"
        :deltaYcounter="deltaYcounter"
      >
        <p
          class="w-screen font-bold"
          style="font-size: 30px; color: #0098bd;"
        >
          Enough scrap metal to build 13<br>
          Eiffel Towers was recycled<br>
          nationally! A saving of just over<br>
          £20m!
        </p>
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .4,
            translateY: windowHeight * .55,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .4,
            translateY: windowHeight * .55,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="fourthStepTriggerAtPoint + 600"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="fourthStep[1]"
          alt="bit of rail 1"
          :style="{width: windowWidth * .12 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .5,
            translateY: windowHeight * .55,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .5,
            translateY: windowHeight * .55,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="fourthStepTriggerAtPoint + 600"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="fourthStep[1]"
          alt="bit of rail 2"
          :style="{width: windowWidth * .12 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .6,
            translateY: windowHeight * .55,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .6,
            translateY: windowHeight * .55,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="fourthStepTriggerAtPoint + 600"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="fourthStep[1]"
          alt="bit of rail 3"
          :style="{width: windowWidth * .12 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .4,
            translateY: windowHeight * .68,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .4,
            translateY: windowHeight * .68,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="fourthStepTriggerAtPoint + 600"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="fourthStep[1]"
          alt="bit of rail 4"
          :style="{width: windowWidth * .12 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .5,
            translateY: windowHeight * .68,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .5,
            translateY: windowHeight * .68,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="fourthStepTriggerAtPoint + 600"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="fourthStep[1]"
          alt="bit of rail 5"
          :style="{width: windowWidth * .12 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .6,
            translateY: windowHeight * .68,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .6,
            translateY: windowHeight * .68,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="fourthStepTriggerAtPoint + 600"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="fourthStep[1]"
          alt="bit of rail 6"
          :style="{width: windowWidth * .12 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute z-10"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .72,
            translateY: windowHeight * .3,
            rotate: 0,
            scale: 0,
            opacity: 1,
            duration: 0
          },
          {
            translateX: windowWidth * .72,
            translateY: windowHeight * .3,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="fourthStepTriggerAtPoint + 800"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="fourthStep[2]"
          alt="Eiffel Tower"
          :style="{height: windowHeight * .6 + 'px'}"
        >
      </animate-x>
    </animate-x>
    <!-- step 4 -->

    <!-- step 5 -->
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
      :triggerAt="fifthStepTriggerAtPoint + 1100"
      :deltaYcounter="deltaYcounter"
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
            translateY: windowHeight * .15,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="fifthStepTriggerAtPoint"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="fifthStep[0]"
          alt="character"
          :style="{height: windowHeight * .6 + 'px'}"
        >
      </animate-x>

      <animate-x
        class="absolute z-20"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .04,
            translateY: windowHeight * .1,
            rotate: 0,
            scale: 1,
            opacity: 0,
            duration: 0
          },
          {
            translateX: windowWidth * .04,
            translateY: windowHeight * .1,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="fifthStepTriggerAtPoint + 500"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="fifthStep[1]"
          alt="speech bubble"
          :style="{height: windowHeight * .3 + 'px'}"
        >

        <p class="sr-only">
          Recycling is so important to us, not only as a company but as a country too.
        </p>
      </animate-x>

      <animate-x
        class="absolute z-20"
        :keyframes="[
          { // 0%
            translateX: windowWidth * .5,
            translateY: windowHeight * .25,
            rotate: 0,
            scale: 1,
            opacity: 0,
            duration: 0
          },
          {
            translateX: windowWidth * .5,
            translateY: windowHeight * .25,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="fifthStepTriggerAtPoint + 500"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="fifthStep[2]"
          alt="speech bubble"
          :style="{height: windowHeight * .3 + 'px'}"
        >

        <p class="sr-only">
          To be able to reuse the materials that we recieve here, in the ways that we do, makes me feel incredibly proud to be part of the precess.
        </p>
      </animate-x>

      <animate-x
        class="position z-10"
        :keyframes="[
          { // 0%
            translateX: 0,
            translateY: 0,
            rotate: 0,
            scale: 0,
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
        :triggerAt="fifthStepTriggerAtPoint + 400"
        :deltaYcounter="deltaYcounter"
      >
        <img
          :src="fifthStep[3]"
          alt="background shapes"
          :style="{width: windowWidth + 'px'}"
        >
      </animate-x>
    </animate-x>
    <!-- step 5 end -->

    <!-- step 6 -->
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
      :triggerAt="sixthStepTriggerAtPoint + 2400"
      :deltaYcounter="deltaYcounter"
    >
      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: 0,
            translateY: windowHeight,
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
            duration: 500
          }
        ]"
        :triggerAt="sixthStepTriggerAtPoint"
        :deltaYcounter="deltaYcounter"
      >
        <div
          class="w-screen h-screen bg-center bg-cover"
          :style="{'background-image': `url(${sixthStep[0]}`}"
        ></div>
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
            translateX: 0,
            translateY: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="sixthStepTriggerAtPoint + 500"
        :deltaYcounter="deltaYcounter"
      >
        <div
          class="w-screen h-screen bg-center bg-cover"
          :style="{'background-image': `url(${sixthStep[2]}`}"
        ></div>
      </animate-x>

      <animate-x
        class="absolute"
        :keyframes="[
          { // 0%
            translateX: -windowWidth,
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
            duration: 500
          }
        ]"
        :triggerAt="sixthStepTriggerAtPoint + 900"
        :deltaYcounter="deltaYcounter"
      >
        <div
          class="w-screen h-screen bg-center bg-cover"
          :style="{'background-image': `url(${sixthStep[1]}`}"
        ></div>
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
            translateX: 0,
            translateY: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 500
          }
        ]"
        :triggerAt="sixthStepTriggerAtPoint + 1300"
        :deltaYcounter="deltaYcounter"
      >
        <div
          class="w-screen h-screen bg-center bg-cover"
          :style="{'background-image': `url(${sixthStep[3]}`}"
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
            duration: 500
          }
        ]"
        :triggerAt="sixthStepTriggerAtPoint + 1600"
        :deltaYcounter="deltaYcounter"
      >
        <div
          class="w-screen h-screen bg-center bg-cover"
          :style="{'background-image': `url(${sixthStep[4]}`}"
        >
          <p class="sr-only">Not all components are what we call 'life-expired.' We can take them apart to recover parts and materials with life left in them. They are processed, checked, and go straight back into the railway!</p>
        </div>
      </animate-x>
    </animate-x>
    <!-- step 6 end -->
  </animate-x>
</template>

<script>
  import AnimateX from './animate-x.vue'

  // first step
  import * as train from '../images/Parallax_third_casestudy/step1/train.png'

  // second step
  import * as greenLogo from '../images/Parallax_third_casestudy/step2/green_logo.png'
  import * as whiteShapes from '../images/Parallax_third_casestudy/step2/white_shapes.png'

  // third step
  import * as obelisc from '../images/Parallax_third_casestudy/step3/obelisc.png'
  import * as ballast from '../images/Parallax_third_casestudy/step3/ballast_bag.png'
  import * as bgShapes1 from '../images/Parallax_third_casestudy/step3/background_shapes.png'
  import * as bigText from '../images/Parallax_third_casestudy/step3/big_text.png'
  import * as smallText from '../images/Parallax_third_casestudy/step3/small_text.png'
  import * as smallTextGreen from '../images/Parallax_third_casestudy/step3/small_text_green_cut.png'

  // fourth step
  import * as bgShapes2 from '../images/Parallax_third_casestudy/step4/bg_shapes.png'
  import * as bitOfTrack from '../images/Parallax_third_casestudy/step4/track.png'
  import * as eiffelTower from '../images/Parallax_third_casestudy/step4/eiffel_tower.png'

  // fifth step
  import * as character from '../images/Parallax_third_casestudy/step5/character.png'
  import * as bubble1 from '../images/Parallax_third_casestudy/step5/speech_bubble1.png'
  import * as bubble2 from '../images/Parallax_third_casestudy/step5/speech_bubble2.png'
  import * as bgShapes3 from '../images/Parallax_third_casestudy/step5/bg_shapes.png'

  // sixth step
  import * as background from '../images/Parallax_third_casestudy/step6/CS_3_Section_5_background-01.png'
  import * as digger from '../images/Parallax_third_casestudy/step6/CS_3_Section_5_digger-01.png'
  import * as train2 from '../images/Parallax_third_casestudy/step6/CS_3_Section_5_train-01.png'
  import * as drillMan from '../images/Parallax_third_casestudy/step6/CS_3_Section_5_character-01.png'
  import * as bubble3 from '../images/Parallax_third_casestudy/step6/bubble.png'

  export default {
    components: { AnimateX },

    props: ['deltaYcounter', 'windowHeight', 'windowWidth'],

    data() {
      let startingPoint = 15300

      return {
        firstStep: [],
        secondStep: [],
        thirdStep: [],
        fourthStep: [],
        fifthStep: [],
        sixthStep: [],
        firstStepTriggerAtPoint: startingPoint,
        secondStepTriggerAtPoint: startingPoint + 1000,
        thirdStepTriggerAtPoint: startingPoint + 1500,
        fourthStepTriggerAtPoint: startingPoint + 4000,
        fifthStepTriggerAtPoint: startingPoint + 5800,
        sixthStepTriggerAtPoint: startingPoint + 7400
      }
    },

    computed: {
      scaleFactorTxt() {
        return this.windowHeight / 836 //900 ?
      }
    },

    mounted() {
      this.firstStep.push(train)
      this.secondStep.push(greenLogo, whiteShapes)
      this.thirdStep.push(obelisc, ballast, bgShapes1, bigText, smallText, smallTextGreen)
      this.fourthStep.push(bgShapes2, bitOfTrack, eiffelTower)
      this.fifthStep.push(character, bubble1, bubble2, bgShapes3)
      this.sixthStep.push(background, digger, train2, drillMan, bubble3)
    }
  }
</script>
