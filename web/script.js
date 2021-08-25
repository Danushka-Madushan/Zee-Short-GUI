const net_wrapper = document.querySelector(".net_wrapper"),
toast = net_wrapper.querySelector(".toast"),
title = toast.querySelector("span"),
subTitle = toast.querySelector("p"),
wifiIcon = toast.querySelector(".icon"),
closeIcon = toast.querySelector(".close-icon");

window.onload = ()=>{
    function ajax(){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        xhr.onload = ()=>{
            if(xhr.status == 200 && xhr.status < 300){
                toast.classList.remove("offline");
                title.innerText = "";
                subTitle.innerText = "";
                wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';
                closeIcon.onclick = ()=>{
                    net_wrapper.classList.add("hide");
                }
                setTimeout(()=>{ 
                    net_wrapper.classList.add("hide");
                }, 2000);
            }else{
                offline();
            }
        }
        xhr.onerror = ()=>{
            offline();
        }
        xhr.send(); 
    }

    function offline(){ 
        net_wrapper.classList.remove("hide");
        toast.classList.add("offline");
        title.innerText = "";
        subTitle.innerText = "";
        wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
    }

    setInterval(()=>{ 
        ajax();
    }, 150);
}
