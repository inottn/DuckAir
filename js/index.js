const cloudbgWrapper = document.querySelector('.cloudbg-wrapper')
const bookNowBtn = document.querySelector('.book-now-btn')
const returnBtn = document.querySelector('.return-btn')
const radios = document.querySelectorAll('.radio-group input')
const radioIcons = document.querySelectorAll('.radio-group .radio-icon')
const radioLabels = document.querySelectorAll('.radio-group label')

bookNowBtn.addEventListener('click', function(e) {
  cloudbgWrapper.classList.add('active')
})

returnBtn.addEventListener('click', function(e) {
  cloudbgWrapper.classList.remove('active')
})

Array.from(radioIcons).forEach(function(icon, index, icons) {
  icon.addEventListener('click', function(e) {
    this.classList.add('active')
    radios[index].click()
    icons.forEach((icon) => {
      if (icon === this) return
      icon.classList.remove('active')
    })
  })
})

radioLabels.forEach(function(label, index, labels) {
  label.addEventListener('click', function(e) {
    radioIcons[index].click()
    radios[index].click()
  })
})