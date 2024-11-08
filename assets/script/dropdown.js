
  //***Dropdown Menu
  const dropMenuBtn = document.getElementsByClassName('menu-wis')[0]
  const listMenu = document.getElementsByClassName('city-list')[0]
  //Fungsi untuk membuka menu
  function openMenu() {
      listMenu.style.display = 'block'
      dropMenuBtn.style.background = '#c11217'
  }

  //Fungsi untuk menutup menu
  function closeMenu() {
      listMenu.style.display = 'none'
      dropMenuBtn.style.background = 'unset'
  }

  // Event untuk perangka mouse
  dropMenuBtn.addEventListener('mouseover', openMenu)
  dropMenuBtn.addEventListener('mouseout', closeMenu)
  dropMenuBtn.addEventListener('click', openMenu)
   // EventUntuk perangkat layar sentuh
  dropMenuBtn.addEventListener('touchstart', openMenu)

  //Event dan fungsi untuk menutup menu saat melakukan scroll
  window.addEventListener('scroll', function() {
    
      if(document.documentElement.scrollTop > 400){
        closeMenu()
      }
  });

  //Event dan fungsi untuk menutup menu saat sentuhan diluar tombol menu
  window.addEventListener('touchmove', function() {
      closeMenu()
  });
