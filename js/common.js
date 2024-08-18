window.addEventListener('scroll', function() {
    var header = document.querySelector('.header_nav');
    if (window.scrollY > 50) { // Change '100' to the scroll value you want
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
});

// 햄버거 버튼 클릭 시 모바일 메뉴 토글 및 아이콘 변경
document.getElementById('hamburger').addEventListener('click', function() {
  var icon = this.querySelector('i'); // 아이콘 요소 선택
  document.body.classList.toggle('show_mobile_menu'); // 모바일 메뉴 토글

  // 아이콘 변경
  if (document.body.classList.contains('show_mobile_menu')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
  } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
  }
});

// 모바일 크기를 넘길 시 모바일 메뉴 상태 조정
window.addEventListener('resize', function() {
  if (window.innerWidth > 640) { // 화면 크기가 640px을 초과할 경우
      document.body.classList.remove('show_mobile_menu'); // 모바일 메뉴 숨기기
      // document.querySelector('#hamburger i').classList.remove('fa-xmark');
      // document.querySelector('#hamburger i').classList.add('fa-bars');

      // 햄버거 메뉴 아이콘을 fa-bars로 되돌리기
      var icon = document.querySelector('#hamburger i');
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
  }
});

// 모바일 메뉴 드롭다운 토글
document.querySelectorAll('#mobile_menu > ul > li > a').forEach(function(menuItem) {
  menuItem.addEventListener('click', function(event) {
      var parentLi = this.parentElement;

      // Prevent default action of anchor tags
      event.preventDefault();

      // Remove 'active' class from other items
      document.querySelectorAll('#mobile_menu > ul > li').forEach(function(li) {
          if (li !== parentLi) {
              li.classList.remove('active');
          }
      });

      // Toggle 'active' class on the clicked item
      parentLi.classList.toggle('active');
  });
});
