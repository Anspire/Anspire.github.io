console.clear();

var swiper = new Swiper('.slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  }
});

document.addEventListener("DOMContentLoaded",function() {

  const nav = document.getElementById('cd-vertical-nav');
  const terminalWindow = document.getElementById('terminal-window');
  const terminal = document.getElementById('terminal');

  const line = document.getElementById('line');
  const rightHandle = document.getElementById('rightHandle');
  const leftHandle = document.getElementById('leftHandle');

  const home = document.getElementById('home');
  const about = document.getElementById('about');
  const skills = document.getElementById('skills');
  const portfolio = document.getElementById('portfolio');
  const certification = document.getElementById('certification');
  const education = document.getElementById('education');
  //const references = document.getElementById('references');

  const lihome = document.getElementById('li1');
  const liabout = document.getElementById('li2');
  const liskills = document.getElementById('li3');
  const liportfolio = document.getElementById('li4');
  const licertification = document.getElementById('li5');
  const lieducation = document.getElementById('li6');
  //const lireferences = document.getElementById('li6');

  const elements = [{obj : home}, {obj : about}, {obj : skills}, {obj : portfolio}, {obj : certification}, {obj : education}/*, {obj : references}*/];
  const functions = [{fun : a}, {fun : b}, {fun : c}, {fun : d}, {fun : e}, {fun : f}/*, {fun : g}*/];
  const liitems = [{obj : lihome}, {obj : liabout}, {obj : liskills}, {obj : liportfolio}, {obj : licertification}, {obj : lieducation}/*, {obj : lireferences}*/];

  var lis = document.getElementById("menu-list").getElementsByTagName('li');
  var section = 0;

  setActive(elements[0].obj, liitems[0].obj);
  for (var i=1; i<lis.length; i++) {
    setInActive(elements[i].obj, liitems[i].obj);
  }
  for (var i=0; i<lis.length; i++) {
    lis[i].addEventListener('click', functions[i].fun, false);
  }

  function a() {
    section = 0;
    for (var i = 0; i < elements.length; i++) {
      if(i == 0) {
        setActive(elements[i].obj, liitems[i].obj);
      } else {
        setInActive(elements[i].obj, liitems[i].obj);
      }
    }
  }

  function b() {
    section = 1;
    for (var i = 0; i < elements.length; i++) {
      if(i == 1) {
        setActive(elements[i].obj, liitems[i].obj);
      } else {
        setInActive(elements[i].obj, liitems[i].obj);
      }
    }
  }
  function c() {
    section = 2;
    for (var i = 0; i < elements.length; i++) {
      if(i == 2) {
        setActive(elements[i].obj, liitems[i].obj);
      } else {
        setInActive(elements[i].obj, liitems[i].obj);
      }
    }
  }
  function d() {
    section = 3;
    for (var i = 0; i < elements.length; i++) {
      if(i == 3) {
        setActive(elements[i].obj, liitems[i].obj);
      } else {
        setInActive(elements[i].obj, liitems[i].obj);
      }
    }
  }
  function e() {
    section = 4;
    for (var i = 0; i < elements.length; i++) {
      if(i == 4) {
        setActive(elements[i].obj, liitems[i].obj);
      } else {
        setInActive(elements[i].obj, liitems[i].obj);
      }
    }
  }
  function f() {
    section = 5;
    for (var i = 0; i < elements.length; i++) {
      if(i == 5) {
        setActive(elements[i].obj, liitems[i].obj);
      } else {
        setInActive(elements[i].obj, liitems[i].obj);
      }
    }
  }
  function setActive(el, li) {
    el.style.display = 'block';
    if (!li.classList.contains("is-selected")) {
      li.classList.add("is-selected");
    }
  }
  function setInActive(el, li) {
    el.style.display = 'none';
    if (li.classList.contains("is-selected")) {
      li.classList.remove("is-selected");
    }
  }

  rightHandle.addEventListener('click', (e) => {
	  line.classList.remove('left');
	  line.classList.add('right');
		if(!e.target.classList.contains('active')){
			leftHandle.classList.remove('active','show');
			setTimeout( () =>{
				e.target.classList.add('active');
			},300);
			setTimeout( () =>{
				e.target.classList.add('show');
        terminalMode();
			},600);
		}
  });

  leftHandle.addEventListener('click', (e) => {
	  line.classList.remove('right');
	  line.classList.add('left');
		if(!e.target.classList.contains('active')){
			rightHandle.classList.remove('active','show');
			setTimeout( () =>{
				e.target.classList.add('active');
			},300);
			setTimeout( () =>{
				e.target.classList.add('show');
        normalMode();
			},600);
		}
  });
  function terminalMode() {
    nav.style.display = 'none';
    terminalWindow.style.display = 'block';
    setInActive(elements[section].obj, liitems[section].obj);
  }

  function normalMode() {
    nav.style.display = 'block';
    terminalWindow.style.display = 'none';
    setActive(elements[section].obj, liitems[section].obj);
  }
});
