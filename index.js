
//swiper js for middle stories
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//
var getElement =(element)=>{
  return document.querySelector(element);
}
var getElements = (element) =>{
  return document.querySelectorAll(element);
}

//get root variables of html
var root = getElement(":root");

//left actions
let getSideBarItems = getElements(".side-bar .side-bar-item");

//remove active class from left side-bar items
let removeActive = ()=>{
  getSideBarItems.forEach((item)=>{
    if(item.classList.contains("active")){
      item.classList.remove("active")
    }
  })
}

//add number of notifications and message
let addCount = ()=>{
  getElements(".count").forEach((item)=>{
    item.style.display = "block";
  })
}

getSideBarItems.forEach((item)=>{
  item.addEventListener("click", ()=>{
    removeActive();
    item.classList.add("active");
    addCount();
    //remove number of notifications and message
    if (item.classList.contains("removeCount")){
      item.querySelector(".count").style.display = "none";
    }
    if(item.classList.contains("notification")){
      getElement(".notifications").style.display = "block";
    }
    if(item.classList.contains("notification")==false){
      getElement(".notifications").style.display = "none";
    }
  })
})

//filter messages by using names of users
let messageSearch = getElement(".message-search input");
let messages = getElements(".message");

messageSearch.addEventListener("keyup", (e)=>{
  let search = e.target.value.toLowerCase();

    messages.forEach((message)=>{
      let name = message.querySelector("h5").textContent;
      name = name.toLowerCase();
      if (name.indexOf(search) >= 0){
        message.style.display = "block";
      }
      else{
        message.style.display = "none";
      }
    }) 

})


//MESSAGE BOX ANIMATION WHEN MESSAGE IS CLICK
let getMessage = getElement(".get-message");
let targetMassages = getElement(".right .messages-container");
getMessage.addEventListener("click", ()=>{
  targetMassages.style.boxShadow = "0 11px 15px 0px  var(--color-primary) ";
  setTimeout(()=>{
    targetMassages.style.boxShadow = "none"
  }, 5000);
})


//CUSTOMIZE THEME
let getThemeBox = getElement(".get-theme");
getThemeBox.addEventListener("click", ()=>{
  getElement(".customize-theme").style.display = "block"
})

let removeThemeBox = getElement(".customize-theme");
removeThemeBox.addEventListener("click",(e)=>{
  if (e.target.classList.contains("customize-theme")){
    removeThemeBox.style.display = "none";
  }
})


//change font size 
let changeFontSize = getElements(".size span");
let removeSizeActive = ()=>{
  changeFontSize.forEach((item)=>{
    item.classList.remove("active");
  })
}
changeFontSize.forEach((size)=>{
  size.addEventListener("click", ()=>{
    removeSizeActive();
    size.classList.add("active");

    if (size.classList.contains("font-size1")){
      document.querySelector("html").style.fontSize = "16px";
    }
    else if (size.classList.contains("font-size2")){
      document.querySelector("html").style.fontSize = "17px";
    }
    else if (size.classList.contains("font-size3")){
      document.querySelector("html").style.fontSize = "18px";
    }
    else if (size.classList.contains("font-size4")){
      document.querySelector("html").style.fontSize = "19px";
    }
    else if (size.classList.contains("font-size5")){
      document.querySelector("html").style.fontSize = "20px";
    }
    else if (size.classList.contains("font-size6")){
      document.querySelector("html").style.fontSize = "21px";
    }

  })
})

//CHANGE FONT COLOR
let changeFontColor = getElements(".color span");
let removeSColorActive = ()=>{
  changeFontColor.forEach((item)=>{
    item.classList.remove("active");
  })
}
changeFontColor.forEach((color)=>{
  color.addEventListener("click", ()=>{
    removeSColorActive();
    color.classList.add("active");
    
    if (color.classList.contains("font-color1")){
      root.style.setProperty("--color-primary", "hsl(252, 75%, 60%)")
    }
    else if(color.classList.contains("font-color2")){
      root.style.setProperty("--color-primary", "hsl(56, 75%, 60%)")
    }
    else if(color.classList.contains("font-color3")){
      root.style.setProperty("--color-primary", "hsl(12, 75%, 60%)")
    }
    else if(color.classList.contains("font-color4")){
      root.style.setProperty("--color-primary", "hsl(130, 75%, 60%)")
    }
    else if(color.classList.contains("font-color5")){
      root.style.setProperty("--color-primary", "hsl(182, 75%, 60%)")
    }
  })
})


//CHANGE THE BACKGROUND COLOR
let getBackgroundColors = getElements(".background-color .colors .color");
console.log(getBackgroundColors);
let mainElement = getElement("main");
let removeBgColorActive = ()=>{
  getBackgroundColors.forEach((item)=>{
    item.classList.remove("active");
  })
}

getBackgroundColors.forEach((bgColor)=>{
  bgColor.addEventListener("click", ()=>{
    removeBgColorActive();
    bgColor.classList.add("active");

    if(bgColor.classList.contains("bg-color1")){
      mainElement.style.backgroundColor = "hsl(252, 75%, 60%)";
      root.style.setProperty("--left-text-color", "#fff");
    }
    else if(bgColor.classList.contains("bg-color2")){
      mainElement.style.backgroundColor = "hsla(252, 91%, 17%, 0.719)";
      root.style.setProperty("--left-text-color", "#fff");
    }
    else if(bgColor.classList.contains("bg-color3")){
      mainElement.style.background = "hsl(252, 90%, 8%)";
      root.style.setProperty("--left-text-color", "#fff");
    }
    else if(bgColor.classList.contains("bg-color4")){
      mainElement.style.background = "hsl(252, 30%, 95%)";
      root.style.setProperty("--left-text-color", "black");
    }
  })
})




