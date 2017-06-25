import eggGreenImage from '../assets/images/egg_green.gif'
import eggPinkImage from '../assets/images/egg_pink.gif'
import eggPurpleImage from '../assets/images/egg_purple.gif'

import RockmanAnimation from '../assets/images/tunagotchi/rockman.gif'
import StichAnimation from '../assets/images/tunagotchi/stich.gif'
import NinjaAnimation from '../assets/images/tunagotchi/ninja.gif'
import OldmanAnimation from '../assets/images/tunagotchi/oldman.gif'
import YoungmanAnimation from '../assets/images/tunagotchi/youngman.gif'
import MarioAnimation from '../assets/images/tunagotchi/mario.gif'
import PigachuAnimation from '../assets/images/tunagotchi/pigachu.gif'

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
        },
        {
          name: "glasses",
          desc: "แว่นตา",
          require: 2
        },
        {
          name: "mobile phone",
          desc: "โทรศัพท์",
          require: 4
        }
      ]
    },
    mature: {
      src: RockmanAnimation,
      name: "ภูผา ตามล่าชุดเกราะ",
      history: "เกราะกรูอยู่ไหน!!!! ตามหาชุดเกราะ หมาและถัง E กับข้าก่อน แล้วข้าจะช่วยท่าน",
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
          name: "social group",
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
      history: "`Lorem ipsum dolor sit amet` คือคติที่พวกเรายึดถือตลอดมา เราจะช่วยนายขับไล่ Veda ที่ชั่วร้ายเอง!",
      ability: {

      }
    }
  },
  Stich: {
    egg: {
      src: eggPurpleImage,
      name: "ไข่ม้วงงงงงม่วง",
      food: [
        {
          name: "lingerie",
          desc: "ชุดชั้นใน",
          require: 1
        },
        {
          name: "sky",
          desc: "ท้องฟ้า",
          require: 2
        },
        {
          name: "dog",
          desc: "หมา",
          require: 4
        },
      ]
    },
    mature: {
      src: StichAnimation,
      name: "อโลฮ่า บราเซีย",
      history: "",
      ability: {

      }
    }
  },
  Oldman: {
    egg: {
      src: eggPinkImage,
      name: "ไข่ชมพู",
      food: [
        {
          name: "lingerie",
          desc: "ชุดชั้นใน",
          require: 2
        },
        {
          name: "senior citizen",
          desc: "คนแก่มีอายุ",
          require: 1
        },
        {
          name: "white",
          desc: "สีขาว",
          require:  2
        },
      ]
    },
    mature: {
      src: OldmanAnimation,
      name: "ลุงตู่ พบธอร์",
      history: "จะวอนขอให้ตายยังไงใจเธอก็คงไม่เปลี่ยน เธออยากไป ชิคกีด้าววววว ~* งั้นเราจะทำตามสัญญา ...",
      ability: {

      }
    }
  },
  Youngman: {
    egg: {
      src: eggPinkImage,
      name: "ไข่อักเสบ",
      food: [
        {
          name: "flower",
          desc: "ดอกไม้",
          require: 2
        },
        {
          name: "child",
          desc: "เด็กๆ",
          require: 3
        },
        {
          name: "weapon",
          desc: "สีขาว",
          require:  2
        },
      ]
    },
    mature: {
      src: YoungmanAnimation,
      name: "จิมมี่ ครับผม!",
      history: "ใน Sriracha Metropolis ไม่มีใครไม่รู้จักผม เจ้า Veda ระวังไว้!",
      ability: {

      }
    }
  },
  Mario: {
    egg: {
      src: eggGreenImage,
      name: "ไข่ขึ้นรา",
      food: [
        {
          name: "mushroom",
          desc: "เห็ดสด",
          require: 10
        },
        {
          name: "kangaroo",
          desc: "จิงโจ้",
          require: 2
        }
      ]
    },
    mature: {
      src: MarioAnimation,
      name: "เมาลีโอ วิ่งตามหญิง",
      history: "เห็ดในสิ่งที่เชื่อ เชื่อในสิ่งที่เห็ด",
      ability: {

      }
    }
  },
  Pigachu: {
    egg: {
      src: eggPinkImage,
      name: "ไข่เทพ",
      food: [
        {
          name: "lightning",
          desc: "สายฟ้า, ฟ้าผ่า",
          require: 5
        },
        {
          name: "banknote",
          desc: "แบงค์พัน",
          require: 4
        }
      ]
    },
    mature: {
      src: PigachuAnimation,
      name: "เทพเจ้าสิ้นเดือน ช็อตจิๆ",
      history: "ปิๆๆๆๆๆๆๆๆก้าาาาาาา จิ้วๆๆๆๆๆๆๆๆ",
      ability: {

      }
    }
  }
}
