const cloudbgWrapper = document.querySelector('.cloudbg-wrapper')
const bookNowBtn = document.querySelector('.book-now-btn')

bookNowBtn.addEventListener('click', function(e) {
  cloudbgWrapper.classList.add('active')
})