   var lis = document.getElementsByClassName("mainImg-box02");

        var as = document.getElementsByClassName("clcik");
        for(var i = 0 ; i < as.length ; i++){
            as[i].index = i;
            as[i].onclick = function(){

                for(var i = 0 ; i < as.length; i++){
                    lis[i].style.display = "none";
                }
                lis[this.index].style.display = "block";
            }
        }