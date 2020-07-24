function tattooClick(){
  if (document.getElementsByClassName('dark').length > 0){
    document.documentElement.classList.remove('dark')
    sessionStorage.setItem('mode', 'light')
  } else {
    document.documentElement.className += ' dark'
    sessionStorage.setItem('mode', 'dark')
  }
}

document.addEventListener('DOMContentLoaded', function(event) {
  if (sessionStorage.getItem('mode') == 'dark'){
    document.documentElement.className += ' dark'
  }
})
