
  window.onclick = function(){
      {  let nav=document.querySelectorAll(".nav1>li");
    let under=document.querySelectorAll(".under>li");
    let  topicActive=document.querySelector(".topic_active");
    let contentActive=document.querySelector(".content_active");


    nav.forEach(function(item,index) {
        // item.onmouseover=function(){
        item.onclick=function(){


            topicActive.className="";
            this.className="topic_active";
            topicActive=this;

            contentActive.className="";
            under[index].className="content_active";
            contentActive=under[index];

        }

    }

    


    )

    
    }


}

  