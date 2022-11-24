/*SLIDER*/
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
});

/*WORK-TABS*/
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.work__btn').forEach(function (e) {
    e.addEventListener('click',function (e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll('.tab-content').forEach(function (e) {
        e.classList.remove('tab-content--active')
        document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');
      })
    })
    e.addEventListener('click',function (e) {
      const tabDefault = e.currentTarget.dataset.default;
      document.querySelectorAll('.work__btn').forEach(function (e) {
        e.classList.remove('work__btn--default')
        document.querySelector(`[data-path='${tabDefault}']`).classList.add('work__btn--default');
      })
    })
  })
})

/*ACCORDION*/
$( function() {
  $( "#accordion" ).accordion({
    collapsible: true
});
} );



