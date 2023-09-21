let logo = document.getElementById("logo");
        let inputlogo = document.getElementById("input-logo");
        let banner = document.getElementById("banner");
        let inputbanner = document.getElementById("input-banner");
        
        inputbanner.onchange = function(){
            banner.src = URL.createObjectURL(inputbanner.files[0]);
        }
        inputlogo.onchange = function(){
            logo.src = URL.createObjectURL(inputlogo.files[0]);
        }