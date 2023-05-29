//console.log("hellow world")
window.addEventListener('DOMContentLoaded', function () {
    "use stirct" ;
    const tabsBtn = document.querySelectorAll(".info-header-tab");
    const tabsItems = document.querySelectorAll(".info-tabcontent");


    tabsBtn.forEach(function(item){
        item.addEventListener("click", function(){
        
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);

            if( ! currentBtn.classList.contains('active')){
                tabsBtn.forEach(function(item){
                    item.classList.remove('active');
                });
        
                tabsItems.forEach(function(item){
                    item.classList.remove('active');
                });
        
                currentBtn.classList.add('active');
                currentTab.classList.add('active');
            }

        });
    });

    document.querySelector('.info-header-tab').click();
/*---------slider----------*/ 
    let offset = 0; //смещение от левого края
    const sliderLine = this.document.querySelector('.slider_line');

    document.querySelector('.slider-button-next').addEventListener('click', function(){
        offset = offset + 400;
        if (offset > 1200){
            offset=0;
        }
            
        sliderLine.style.left = -offset + 'px';
    });

    

    document.querySelector('.slider-button-prew').addEventListener('click', function(){
        offset = offset - 500;
        if (offset < 0){
            offset=1200;
        }
            
        sliderLine.style.left = -offset + 'px';
    });

    //модальное 
    /*
    const modal = document.querySelectorAll('.modal');
    const btn = document.querySelectorAll('.open-button');
    
    btn.addEventListener('click', function (){
        modal.classList.add('modal_active');
        
        function closeModal(){
            modal.classList.remove("modal_active");
            

			modal.removeEventListener("click", hideModal);
        }
        modal.addEventListener("click", hideModal);

        function hideModal(event) {
			if (event.target === modal) {
				closeModal();
			}
		}
    })
        */

        var modal = document.getElementById("myModal");
        var btn = document.getElementById("myBtn");
        var span = document.getElementsByClassName("close")[0];

        btn.onclick = function (){
            modal.style.display = "block";
        }

        span.onclick = function(){
            modal.style.display = "none";
        }

        window.onclick = function(event){
            if (event.target == modal){
                modal.style.display = "none";
            }

        }


        const boxes = Array.from(document.querySelectorAll(".box"));

        boxes.forEach((box) => {
            box.addEventListener("click", boxHandler);

        });

        function boxHandler(e) {
            e.preventDefault();
            let currentBox = e.target.closest(".box");
            let currentContent = e.target.nextElementSibling;//вернет текущий контент(т.е. следю элемент)
            currentBox.classList.toggle("active");
            if (currentBox.classList.contains("active")){
                currentContent.style.maxHeight = currentContent.scrollHeight + "px";
            } else{
                currentContent.style.maxHeight = 0;

            }

            
        }
/*------------------*/

        const navbar = document.querySelector('.navbar-menue');
        const links = navbar.querySelectorAll('a');

        links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute('id');
            const section = document.getElementById(sectionId);
            section.scrollIntoView({behavior: "smooth"});
        });
});
/*---------------------------------------------
        const burger = document.querySelector('.fa-bars'); 
        const menuItems = document.querySelector('.navbar-menue'); 
        
        burger.addEventListener('click', () => { 
            menuItems.classList.toggle('show'); 
        });
    */

        const hamb = document.querySelector('.fa-bars');
        const popup = document.querySelector('.popup-menue');
        
        
        // Клонируем меню, чтобы задать свои стили для мобильной версии
        const menu = document.querySelector('.navbar-menue').cloneNode(1);
        // При клике на иконку hamb вызываем ф-ию hambHandler
        hamb.addEventListener("click", hambHandler);

        function hambHandler(e) {
            popup.classList.toggle('open');
		    renderPopup();
		// body.classList.toggle('noscroll');
	}
	function renderPopup() {
		popup.appendChild(menu);
	}
          
        
});