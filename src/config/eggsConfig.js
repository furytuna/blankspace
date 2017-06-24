import eggGreenImage from '../assets/images/egg_green.gif'
import eggPinkImage from '../assets/images/egg_pink.gif'
import eggPurpleImage from '../assets/images/egg_purple.gif'

import RockmanAnimation from '../assets/images/tunagotchi/rockman.gif'
import StichAnimation from '../assets/images/tunagotchi/stich.gif'
import NinjaAnimation from '../assets/images/tunagotchi/ninja.gif'

// import OldmanAnimation from '../assets/tunagotchi/oldman.gif'
// import YoungmanAnimation from '../assets/tunagotchi/youngman.gif'
// import MarioAnimation from '../assets/tunagotchi/mario.gif'
// import PigachuAnimation from '../assets/tunagotchi/pigachu.gif'

export default {
  Rockman: {
    egg: {
      src: eggGreenImage,
      name: "ไข่เขียวขี้ม้ากินหญ้าแห้ง",
      food: [
        {
          name: "sky",
          desc: "ท้องฟ้า",
          require: 1
        },
        {
          name: "rock",
          desc: "หิน",
          require: 3
        },
        {
          name: "male",
          desc: "ผู้ชาย",
          require: 1
        }
      ]
    },
    mature: {
      src: RockmanAnimation,
      name: "ภูผา ตามล่าชุดเกราะ",
      ability: {

      }
    }
  },
  Ninja: {
    egg: {
      src: eggPinkImage,
      name: "ไข่แดงอ่อนๆ",
      food: [
        {
          name: "black",
          desc: "ความมืดมิด",
          require: 1
        },
        {
          name: "people",
          desc: "กลุ่มคน",
          require: 2
        },
        {
          name: "male",
          desc: "ผู้ชาย",
          require: 1
        }
      ]
    },
    mature: {
      src: NinjaAnimation,
      name: "นินจา นาจา",
      ability: {

      }
    }
  }
}
