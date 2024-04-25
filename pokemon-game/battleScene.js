const questionScreen = document.querySelector('#questionScreen')
const qBtn = document.querySelector('#getQuestionBtn')
const aBtn = document.querySelector('#qa')
const bBtn = document.querySelector('#qb')
const cBtn = document.querySelector('#qc')
const dBtn = document.querySelector('#qd')
const sBtn = document.querySelector('#submitBtn')
const cont = document.querySelector('#continue')
const pic = document.querySelector('#momo')
const insertQ = document.querySelector('#insertQuestion')
const vectorPs = document.querySelector('#vectorPs')
const scalarPs = document.querySelector('#scalarPs')
const planes = document.querySelector('#planes')

let questions = ["./qs/s1q1.png","./qs/s1q2.png","./qs/s1q3.png","./qs/s1q4.png","./qs/s1q7.png","./qs/s1q9.png","./qs/s2q1.png","./qs/s2q2.png","./qs/s2q3.png","./qs/s2q4.png","./qs/s3q1.png","./qs/s3q2.png","./qs/s3q3.png","./qs/s3q4.png","./qs/s3q5.png","./qs/s3q7.png","./qs/s4q2.png","./qs/s4q4.png","./qs/s4q5.png","./qs/s5q1.png","./qs/s5q2.png","./qs/s5q3.png","./qs/s5q4.png","./qs/s5q5.png","./qs/s1q5.png","./qs/s1q6.png","./qs/s1q8.png","./qs/s2q5.png","./qs/s3q6.png","./qs/s4q1.png","./qs/s4q3.png","./qs/s4q6.png"]
let answers = ["b", "i, j, k", "(0, 0, 0)", "a1, b3, c2", "12.41", "13.04", "a", "b", "-49", "133.57", "b", "inner product, outer product", "b", "b", "80.29", "j", "b", "45.25", "b", "80.29", "162" ,"c", "17.3", "3.9", [".92", "-.23", "-.31"], ["7", "6", "-6"], ["-5", "8", "-9"], ["2.76", "-1.72", "1.03"], ["51", "38", "-49"], ["11", "2", "13", "134"], ["7", "-3", "8"], ["4", "-9", "8"]]

// utility Functions
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const battleBackgroundImage = new Image()
battleBackgroundImage.src = './img/battleBackground.png'
const battleBackground = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  image: battleBackgroundImage
})

let draggle
let emby
let renderedSprites
let battleAnimationId
let queue
let canAttack = false;
let n

function initBattle() {
  document.querySelector('#userInterface').style.display = 'block'
  document.querySelector('#dialogueBox').style.display = 'none'
  document.querySelector('#enemyHealthBar').style.width = '100%'
  document.querySelector('#playerHealthBar').style.width = '100%'
  document.querySelector('#attacksBox').replaceChildren()

  draggle = new Monster(monsters.Draggle)
  emby = new Monster(monsters.Emby)
  renderedSprites = [draggle, emby]
  queue = []

  emby.attacks.forEach((attack) => {
    const button = document.createElement('button')
    button.innerHTML = attack.name
    document.querySelector('#attacksBox').append(button)
  })



  // our event listeners for our buttons (attack)
  document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (e) => {
        const selectedAttack = attacks[e.currentTarget.innerHTML]
        
        console.log(index)
        insertQ.src = questions[index]
        questionScreen.style.display = 'block'
        
        if (index == 29)
        {
            planes.style.display = 'flex'
        }
        else if(index > 24)
        {
            vectorPs.style.display = 'flex'
        }
        else
        {
            scalarPs.style.display = 'flex'
        }

        sBtn.addEventListener('click', () => {
            console.log(document.getElementById('scalar').value)
            console.log(answers[index])
            console.log(index)
            if((document.getElementById('i').value == answers[index][0] && document.getElementById('j').value == answers[index][1] && document.getElementById('k').value == answers[index][2]) || document.getElementById('scalar').value == answers[index] || (document.getElementById('x').value == answers[index][0] && document.getElementById('y').value == answers[index][1] && document.getElementById('z').value == answers[index][2]&& document.getElementById('d').value == answers[index][3]))
            {
                // n = randomInt(0,2)
                // if(n != 2)
                // {
                //     setTimeout(function(){
                //         scalarPs.style.display = 'none'
                //         vectorPs.style.display = 'none'
                //         questionScreen.style.display = 'none'
                //         emby.attack({
                //             attack: selectedAttack,
                //             recipient: draggle,
                //             renderedSprites
                //         })
                //     }, 1000)
                // }
                
                    document.getElementById('i').innerHTML = ""
                    var audio = document.getElementById('audio')
                    audio.play()
                    document.getElementById('lebron').style.display = 'block'
                    
                    setTimeout(function(){
                        console.log("hooray")
                        audio.pause()
                        audio.currentTime = 0
                        document.getElementById('lebron').style.display = 'none'
                        console.log("right")
                        scalarPs.style.display = 'none'
                        vectorPs.style.display = 'none'
                        questionScreen.style.display = 'none'
                        planes.style.display = 'none'
                        cnt = 0
                        emby.attack({
                            attack: selectedAttack,
                            recipient: draggle,
                            renderedSprites
                        })
                        
                    }, 8000)
                
            }
            else
            {
                cnt = 0
                console.log("wrong")
                num = randomInt(0,10)
                if(num == 0)
                {
                    document.getElementById('mccarthy').style.display = 'block'
                }
                else
                {
                    document.getElementById('momo').style.display = 'block'
                }
                var audio = document.getElementById('audio2')
                audio.play()

                document.getElementById('cAnswer').innerHTML = answers[index]
                document.getElementById('cAnswer').style.display = 'block'

                setTimeout(function(){
                    console.log("hooray")
                    audio.pause()
                    audio.currentTime = 0
                    document.getElementById('mccarthy').style.display = 'none'
                    document.getElementById('momo').style.display = 'none'
                    console.log("right")
                    scalarPs.style.display = 'none'
                    vectorPs.style.display = 'none'
                    questionScreen.style.display = 'none'
                    document.getElementById('cAnswer').style.display = 'none'
                    
                }, 3000)
                
            }

            // vectorPs.style.display = 'none'
            // questionScreen.style.display = 'none'

        })
        
        

        if (draggle.health <= 0) {
            queue.push(() => {
                draggle.faint()
            })
            queue.push(() => {
                // fade back to black
                gsap.to('#overlappingDiv', {
                opacity: 1,
                onComplete: () => {
                    cancelAnimationFrame(battleAnimationId)
                    animate()
                    document.querySelector('#userInterface').style.display = 'none'

                    gsap.to('#overlappingDiv', {
                    opacity: 0
                    })

                    battle.initiated = false
                    audio.Map.play()
                }
                })
            })
        }
    
    

      // draggle or enemy attacks right here
      const randomAttack =
        draggle.attacks[Math.floor(Math.random() * draggle.attacks.length)]

      queue.push(() => {
        draggle.attack({
          attack: randomAttack,
          recipient: emby,
          renderedSprites
        })

        if (emby.health <= 0) {
          queue.push(() => {
            emby.faint()
          })

          queue.push(() => {
            // fade back to black
            gsap.to('#overlappingDiv', {
              opacity: 1,
              onComplete: () => {
                cancelAnimationFrame(battleAnimationId)
                animate()
                document.querySelector('#userInterface').style.display = 'none'

                gsap.to('#overlappingDiv', {
                  opacity: 0
                })

                battle.initiated = false
                audio.Map.play()
              }
            })
          })
        }
      })
    })

    button.addEventListener('mouseenter', (e) => {
      const selectedAttack = attacks[e.currentTarget.innerHTML]
      document.querySelector('#attackType').innerHTML = selectedAttack.type
      document.querySelector('#attackType').style.color = selectedAttack.color
      index = randomInt(0, questions.length-1)
    })
  })
}

function animateBattle() {
  battleAnimationId = window.requestAnimationFrame(animateBattle)
  battleBackground.draw()

  //console.log(battleAnimationId)

  renderedSprites.forEach((sprite) => {
    sprite.draw()
  })
}

animate()
// initBattle()
// animateBattle()

document.querySelector('#dialogueBox').addEventListener('click', (e) => {
  if (queue.length > 0) {
    queue[0]()
    queue.shift()
  } else e.currentTarget.style.display = 'none'
})
