const hourCounterEl = document.getElementById('hours')
const minuteCounterEl = document.getElementById('minutes')
const secondCounterEl = document.getElementById('seconds')

const getMilliseconds = (hours, minutes, seconds) => (hours * 60 * 60) + (minutes * 60) + seconds

document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault()
})

document.getElementById('btnSubmit').addEventListener('click', () => {
  const hours = +document.getElementById('inputHours').value
  const minutes = +document.getElementById('inputMinutes').value
  const seconds = +document.getElementById('inputSeconds').value

  const time = Math.ceil(+new Date() / 1000) + getMilliseconds(hours, minutes, seconds) + 1

  const counter = setInterval(() => {
    const currentTime = Math.ceil(+new Date() / 1000)
    const diff = time - currentTime
    const h = Math.floor(diff / 60 / 60) % 24
    const m = Math.floor(diff / 60) % 60
    const s = diff % 60

    hourCounterEl.innerHTML = h < 10 ? `0${h}` : h
    minuteCounterEl.innerHTML = m < 10 ? `0${m}` : m
    secondCounterEl.innerHTML = s < 10 ? `0${s}` : s

    if (diff <= 0) {
      clearInterval(counter)
      alert("Selesai")
    }

  }, 1000)
})









