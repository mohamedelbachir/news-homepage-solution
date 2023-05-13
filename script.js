/** Image mobile src path changer */
const width = window.matchMedia("(max-width: 630px)")
const dstImage=document.querySelector(".header-wrapper>.ctn-info>.ctn-img").querySelector("img")
const imageMobilePath='./assets/images/image-web-3-mobile.jpg'
let imgagePCpath=''

/** Menu drawer*/
const closeMenu=document.querySelector(".closer-menu");
const menu_drawer=document.querySelector(".menu-drawer");

const menu_mobile=document.querySelector(".ctn-mobile-menu");
const nav_bar=document.querySelector("header nav");

function changeMobileImage() {
    if(width.matches){
        if(imgagePCpath==''){
            imgagePCpath=dstImage.getAttribute("src");
        }else{
	    if(menu_mobile.style.backgroundColor!=="rgba(0,0,0,0)"){
		menu_mobile.style.backgroundColor='rgba(0,0,0,0)'
	    }
	}
        dstImage.setAttribute("src",`${imageMobilePath}`);
    	menu_mobile.style.display='none';
    }else{
        if(imgagePCpath!=''){
            dstImage.setAttribute("src",`${imgagePCpath}`);
            menu_mobile.style.display='block'
        }
    }
}
changeMobileImage()
width.addListener(changeMobileImage)

menu_drawer.addEventListener('click',()=>{
    menu_mobile.style.display='block';
    window.setTimeout(() => {
        menu_mobile.style.backgroundColor='rgba(0,0,0,.8)'
        nav_bar.style.right='0' 
    }, 100);
})

closeMenu.addEventListener('click',()=>{
    closeSideBar()
})

function closeSideBar(){
    menu_mobile.style.backgroundColor='rgba(0,0,0,0)'
    nav_bar.style.right='-100%'
    window.setTimeout(() => {
        menu_mobile.style.display='none'; 
    }, 500);
}
menu_mobile.addEventListener('click',(ev)=>{
  
  if(ev.clientX<menu_mobile.offsetWidth-nav_bar.offsetWidth-20){
    closeSideBar();
  }  
})