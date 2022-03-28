const inputHoursEl = document.getElementById('inputHours')
const inputMinutesEl = document.getElementById('inputMinutes')
const inputSecondsEl = document.getElementById('inputSeconds')
const btnResetEl = document.getElementById('btnReset')

let counter = null

const getMilliseconds = (hours, minutes, seconds) => (hours * 60 * 60) + (minutes * 60) + seconds

const startCounter = (time) => {
  counter = setInterval(() => {
    const currentTime = Math.ceil(+new Date() / 1000)
    const diff = time - currentTime

    const h = Math.floor(diff / 60 / 60) % 24
    const m = Math.floor(diff / 60) % 60
    const s = diff % 60

    console.log(diff)

    inputHoursEl.setAttribute('disabled', '')
    inputMinutesEl.setAttribute('disabled', '')
    inputSecondsEl.setAttribute('disabled', '')

    inputHoursEl.value = h < 10 ? `0${h}` : h
    inputMinutesEl.value = m < 10 ? `0${m}` : m
    inputSecondsEl.value = s < 10 ? `0${s}` : s

    if (diff <= 0) {
      resetCounter()
      alert("Selesai, waktu habis!")
    }

  }, 1000)
}

const resetCounter = () => {
  clearInterval(counter)

  inputHoursEl.removeAttribute('disabled')
  inputMinutesEl.removeAttribute('disabled')
  inputSecondsEl.removeAttribute('disabled')
}


const addTimer = () => {
  const hours = +inputHoursEl.value
  const minutes = +inputMinutesEl.value
  const seconds = +inputSecondsEl.value

  if (hours <= 0 && minutes <= 0 && seconds <= 0) return

  const time = Math.ceil(+new Date() / 1000) + getMilliseconds(hours, minutes, seconds)

  startCounter(time)
}

document.addEventListener('DOMContentLoaded', () => {
  const submitFormTimer = document.getElementById('formTimer')
  submitFormTimer.addEventListener('submit', (e) => {
    e.preventDefault()
    addTimer()
    submitFormTimer.reset()
  })
})

btnResetEl.addEventListener('click', () => {
  resetCounter()
})










