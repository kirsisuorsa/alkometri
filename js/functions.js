'use strict'

document.querySelector('button').addEventListener('click', () => {
    const weight = document.querySelector('input[type=number]').value
    const time = document.querySelector('select[name="time"]').value
    const bottles = document.querySelector('select[name="bottles"]').value
    const radioButtonGroup = document.getElementsByName('gender')
    const checkedRadio = Array.from(radioButtonGroup).find((radio) => radio.checked)
    const gender = checkedRadio.value
    const liters = bottles * 0.33
    const grams = liters * 8 * 4.5
    const speed = weight / 10
    const gramsLeft = grams -(speed * time)
    let promilles = 0

    if (gender === 'male') {
        promilles = gramsLeft / (weight * 0.7)
    } else {
        promilles = gramsLeft / (weight * 0.6)
    }

    const result = document.querySelector('output')
    result.innerHTML = promilles.toFixed(2)
})