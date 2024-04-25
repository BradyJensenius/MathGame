const monsters = {
  Emby: {
    position: {
      x: 200,
      y: 200
    },
    image: {
      src: './img/colin.png'
    },
    frames: {
      max: 1,
      hold: 30
    },
    animate: true,
    name: 'Emby',
    attacks: [attacks.Tackle, attacks.Fireball]
  },
  Draggle: {
    position: {
      x: 775,
      y: 20
    },
    image: {
      src: './img/mccarthy2.png'
    },
    frames: {
      max: 1,
      hold: 30
    },
    animate: true,
    isEnemy: true,
    name: 'Draggle',
    attacks: [attacks.Tackle, attacks.Fireball]
  }
}
