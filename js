function Model() {
  
  let _views = [];
  let _currentView;

  this.setViews = function(views) {
    if(_currentView === undefined) {
      _currentView = views[0];
    }
    _views = views;
    for(let view of views) {
      view.addEvents();
    }
  }
  
  this.changeView = function(viewNum) {
    _currentView.hide();
    _currentView = _views[viewNum];
    _currentView.show();
  }  
} 

function View() {
  
  this.model;
  this.domEl;
  
  this.init = function(model, id) {   
    this.model = model;
    this.domEl = document.querySelector("#" + id);                                   
  }
      
  this.show = function() {
    this.domEl.classList.add('view-show');
    this.domEl.classList.remove('view-hide');
  }
  
  this.hide = function() {
    this.domEl.classList.add('view-hide');
    this.domEl.classList.remove('view-show');
  }
}
 
function ViewCountry(model, id) {   
  this.init(model, id);
    
  this.addEvents = function() {
    let btnADEl= this.domEl.querySelector('#viewCountry-viewEntities');
    let btnPDEl= this.domEl.querySelector('#viewCountry-viewMunicipalities');
    btnADEl.addEventListener('click', _ADClicked.bind(this));
    btnPDEl.addEventListener('click', _PDClicked.bind(this));
  }     
 
    function _ADClicked() {
      this.model.changeView(1);
    }
    
    function _PDClicked() {
      this.model.changeView(2);
    }  
  
  /*this.show = function() {
    ViewCountry.prototype.show.apply(this);
  }*/
}
ViewCountry.prototype = new View();
              
function ViewEntities(model, id) {
  this.init(model, id);    
 
  this.addEvents= function() {
      let btnFBiHEl= this.domEl.querySelector('#viewEntities-viewFBiH');
      let btnRSEl = this.domEl.querySelector('#viewEntities-viewRS');;
      let btnBDEl = this.domEl.querySelector('#viewEntities-viewBD');
      let btnHomeEl = this.domEl.querySelector('#viewEntities-viewCountry')
      btnFBiHEl.addEventListener('click', _FBiHClicked.bind(this));
      btnRSEl.addEventListener('click', _RSClicked.bind(this));
      btnBDEl.addEventListener('click', _BDClicked.bind(this));
      btnHomeEl.addEventListener('click', _homeClicked.bind(this));
  }
  
    function _FBiHClicked() {  
      this.model.changeView(3);
    }  
    function _RSClicked() {
      this.model.changeView(4);
    }
    
    function _BDClicked() {
      this.model.changeView(5);
    }
  
    function _homeClicked() {
      this.model.changeView(0);  
    }
}  
ViewEntities.prototype = new View();

function ViewMunicipalities(model, id) {
  this.init(model, id);
  
  this.addEvents = function() {
    let btnADEl= this.domEl.querySelector('#viewMunicipalities-viewEntities');
    let btnHomeEl= this.domEl.querySelector('#viewMunicipalities-viewCountry');
    btnADEl.addEventListener('click', _entitiesClicked.bind(this));
    btnHomeEl.addEventListener('click', _homeClicked.bind(this));
  }
  
 /* this.show = function() {
    ViewMunicipalities.prototype.show.apply(this);
  }*/
  
    function _entitiesClicked() {
      this.model.changeView(1);
    }
    
    function _homeClicked() {
      this.model.changeView(0);
    }  
}
ViewMunicipalities.prototype = new View();

function ViewFBiH(model, id) {
  this.init(model, id);
  
  this.addEvents=function() {
    let btnC1El = this.domEl.querySelector('#viewFBiH-viewC1');
    let btnC2El = this.domEl.querySelector('#viewFBiH-viewC2');
    let btnC3El = this.domEl.querySelector('#viewFBiH-viewC3');
    let btnC4El = this.domEl.querySelector('#viewFBiH-viewC4');
    let btnC5El = this.domEl.querySelector('#viewFBiH-viewC5');
    let btnC6El = this.domEl.querySelector('#viewFBiH-viewC6');
    let btnC7El = this.domEl.querySelector('#viewFBiH-viewC7');
    let btnC8El = this.domEl.querySelector('#viewFBiH-viewC8');
    let btnC9El = this.domEl.querySelector('#viewFBiH-viewC9');
    let btnC10El = this.domEl.querySelector('#viewFBiH-viewC10');
    let btnRSEl = this.domEl.querySelector('#viewFBiH-viewRS');
    let btnBDEl = this.domEl.querySelector('#viewFBiH-viewBD');
    let btnHomeEl = this.domEl.querySelector('#viewFBiH-viewCountry');   
    btnC1El.addEventListener('click', _C1Clicked.bind(this));
    btnC2El.addEventListener('click', _C2Clicked.bind(this));
    btnC3El.addEventListener('click', _C3Clicked.bind(this));
    btnC4El.addEventListener('click', _C4Clicked.bind(this));
    btnC5El.addEventListener('click', _C5Clicked.bind(this));
    btnC6El.addEventListener('click', _C6Clicked.bind(this));
    btnC7El.addEventListener('click', _C7Clicked.bind(this));
    btnC8El.addEventListener('click', _C8Clicked.bind(this));
    btnC9El.addEventListener('click', _C9Clicked.bind(this));
    btnC10El.addEventListener('click', _C10Clicked.bind(this));
    btnRSEl.addEventListener('click', _RSClicked.bind(this));
    btnBDEl.addEventListener('click', _BDClicked.bind(this));
    btnHomeEl.addEventListener('click', _HomeClicked.bind(this));
  }
  
  function _C1Clicked() {
    this.model.changeView(6);
  }
  
  function _C2Clicked() {
    this.model.changeView(7);
  }
  
  function _C3Clicked() {
    this.model.changeView(8);
  }
  
  function _C4Clicked() {
    this.model.changeView(9);
  }
  
  function _C5Clicked() {
    this.model.changeView(10);
  }
  
  function _C6Clicked() {
    this.model.changeView(11);
  }
  
  function _C7Clicked() {
    this.model.changeView(12);
  }
  
  function _C8Clicked() {
    this.model.changeView(13);
  }
  
  function _C9Clicked() {
    this.model.changeView(14);
  }
  
  function _C10Clicked() {
    this.model.changeView(15);
  }
  
  function _FBiHClicked() {
    this.model.changeView(2);
  }
  
  function _RSClicked() {
    this.model.changeView(4);
  }
  
  function _BDClicked() {
    this.model.changeView(5);
  }
  
  function _HomeClicked() {
    this.model.changeView(0);
  }
}
ViewFBiH.prototype = new View();

function ViewRS(model, id) {
  this.init(model, id);
  
  this.addEvents = function() {
    let btnFBiHEl = this.domEl.querySelector('#viewRS-viewFBiH');
    let btnBDEl = this.domEl.querySelector('#viewRS-viewBD');
    let btnHomeEl = this.domEl.querySelector('#viewRS-viewCountry')
    btnFBiHEl.addEventListener('click', _FBiHClicked.bind(this));
    btnBDEl.addEventListener('click', _BDClicked.bind(this));
    btnHomeEl.addEventListener('click', _HomeClicked.bind(this));
  }
 
  
  function _FBiHClicked() {
    this.model.changeView(3);
  }
  
  function _BDClicked() {
    this.model.changeView(5);
  }
  
  function _HomeClicked() {
    this.model.changeView(0);
  }
}
ViewRS.prototype = new View();  
  
function ViewBD(model, id) {
  this.init(model, id);
   
  this.addEvents = function() {
    let btnFBiHEl = this.domEl.querySelector('#viewBD-viewFBiH');
    let btnRSEl = this.domEl.querySelector('#viewBD-viewRS');
    let btnHomeEl = this.domEl.querySelector('#viewBD-viewCountry');
    btnFBiHEl.addEventListener('click', _FBiHClicked.bind(this));
    btnRSEl.addEventListener('click', _RSClicked.bind(this));
    btnHomeEl.addEventListener('click', _HomeClicked.bind(this)); 
  }
  
  
  function _FBiHClicked() {
    this.model.changeView(3);
  }
  
  function _RSClicked() {
    this.model.changeView(4);
  }
  
  function _HomeClicked() {
    this.model.changeView(0);
  }
}
ViewBD.prototype = new View();   

function ViewC1(model, id) {
  this.init(model, id);
  
  this.addEvents = function() {
    let btnC1El = this.domEl.querySelector('#viewC1-viewCountry');  
    btnC1El.addEventListener('click', _HomeClicked.bind(this));
  } 

  
  function _HomeClicked() {
    this.model.changeView(0);
  }
}
ViewC1.prototype = new View();

function ViewC2(model, id) {
  this.init(model, id);
  
  this.addEvents = function() {
    let btnC2El = this.domEl.querySelector('#viewC2-viewCountry');  
    btnC2El.addEventListener('click', _HomeClicked.bind(this));
  }


  function _HomeClicked() {
    this.model.changeView(0);
  }
}
ViewC2.prototype = new View();

function ViewC3(model, id) {
  this.init(model, id);
  
  this.addEvents = function() {
    let btnC3El = this.domEl.querySelector('#viewC3-viewCountry');  
    btnC3El.addEventListener('click', _HomeClicked.bind(this));
  }
  
  
  function _HomeClicked() {
    this.model.changeView(0);
  }
}
ViewC3.prototype = new View();

function ViewC4(model, id) {
  this.init(model, id);
  
  this.addEvents = function() {
    let btnC4El = this.domEl.querySelector('#viewC4-viewCountry');  
    btnC4El.addEventListener('click', _HomeClicked.bind(this));
  }
  
  function _HomeClicked() {
    this.model.changeView(0);
  }
}
ViewC4.prototype = new View();

function ViewC5(model, id) {
  this.init(model, id);
  
  this.addEvents = function() {
    let btnC5El = this.domEl.querySelector('#viewC5-viewCountry');  
    btnC5El.addEventListener('click', _HomeClicked.bind(this));
  }

  function _HomeClicked() {
    this.model.changeView(0);
  }
}
ViewC5.prototype = new View();

function ViewC6(model, id) {
  this.init(model, id);
  
  this.addEvents = function() {
    let btnC6El = this.domEl.querySelector('#viewC6-viewCountry');  
    btnC6El.addEventListener('click', _HomeClicked.bind(this));
  }
 
  
  function _HomeClicked() {
    this.model.changeView(0);
  }
}
ViewC6.prototype = new View();

function ViewC7(model, id) {
  this.init(model, id);
  
  this.addEvents = function() {
    let btnC7El = this.domEl.querySelector('#viewC7-viewCountry');  
    btnC7El.addEventListener('click', _HomeClicked.bind(this));
  }
  
  
  function _HomeClicked() {
    this.model.changeView(0);
  }
}
ViewC7.prototype = new View();

function ViewC8(model, id) {
  this.init(model, id);
  
  this.addEvents = function() {
    let btnC8El = this.domEl.querySelector('#viewC8-viewCountry');  
    btnC8El.addEventListener('click', _HomeClicked.bind(this));
  }
  
  
  function _HomeClicked() {
    this.model.changeView(0);
  }
}
ViewC8.prototype = new View();

function ViewC9(model, id) {
  this.init(model, id);
  
  this.addEvents = function() {
    let btnC9El = this.domEl.querySelector('#viewC9-viewCountry');  
    btnC9El.addEventListener('click', _HomeClicked.bind(this));
  }
  
  function _HomeClicked() {
    this.model.changeView(0);
  }
}
ViewC9.prototype = new View();

function ViewC10(model, id) {
  this.init(model, id);
  
  this.addEvents = function() {
    let btnC10El = this.domEl.querySelector('#viewC10-viewCountry');  
    btnC10El.addEventListener('click', _HomeClicked.bind(this));
  }
  
  function _HomeClicked() {
    this.model.changeView(0);
  }
}
ViewC10.prototype = new View();  


let model = new Model();

let countryView = new ViewCountry(model, 'viewCountry');
let adView = new ViewEntities(model, 'viewEntities');
let pdView = new ViewMunicipalities(model, 'viewMunicipalities');
let fbihView = new ViewFBiH(model, 'viewFBiH');
let rsView = new ViewRS(model, 'viewRS');  
let bdView = new ViewBD(model, 'viewBD');
let c1View = new ViewC1(model, 'viewC1');
let c2View = new ViewC2(model, 'viewC2');
let c3View = new ViewC3(model, 'viewC3');
let c4View = new ViewC4(model, 'viewC4');
let c5View = new ViewC5(model, 'viewC5');
let c6View = new ViewC6(model, 'viewC6');
let c7View = new ViewC7(model, 'viewC7');
let c8View = new ViewC8(model, 'viewC8');
let c9View = new ViewC9(model, 'viewC9');
let c10View = new ViewC10(model, 'viewC10');


model.setViews([countryView, adView, pdView, fbihView, rsView, bdView, c1View, c2View, c3View, c4View, c5View, c6View, c7View, c8View, c9View, c10View])


    
