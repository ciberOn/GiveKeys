const case0 = ["ak-47 reactor | https://ibb.co/mn40DKR", "awp nigtmare | https://cdn.akamai.steamstatic.com/apps/csgo/images/dreams/hyper_awp.png", "zero | https://cdn.mos.cms.futurecdn.net/Yfh5uqpZmFeYX3TyTuerJX-1200-80.jpg", "usp unluck | https://venice.ai/9dbd57bd-9c88-4228-8319-9eda1f37add4", "usp luckyshot | https://venice.ai/771e325c-bbe8-4de7-840a-b057c49c038a"] //Супер крутой кейс
const case1 = ["ak-47 wildfire | https://ibb.co/6JHJKwWk", "awp nightvision | https://cdnb.artstation.com/p/assets/images/images/024/640/719/large/akshay-r-1.jpg?1583078317", "zero | https://cdn.mos.cms.futurecdn.net/Yfh5uqpZmFeYX3TyTuerJX-1200-80.jpg", "usp powergaming | https://venice.ai/bc1e8180-61ff-4fd5-bb92-e6bdece2394e"] //Мажорчик
const case2 = ["ak-47 major2021 | https://cs.money/ru/blog/wp-content/uploads/2021/10/wild-1-750x422.png", "awp major2022 | https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDdNv3uydHZtcJV9KO6Au11b4BhDnD1YeNA&s", "zero | https://cdn.mos.cms.futurecdn.net/Yfh5uqpZmFeYX3TyTuerJX-1200-80.jpg", "usp unluck | https://venice.ai/9dbd57bd-9c88-4228-8319-9eda1f37add4"] //Не открывать
const case3 = ["ak-47 يقثشةسنعمم | https://venice.ai/5baeaff6-aebd-4fda-a5dd-736630110368", "awp يقثشةسنعمم | https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2yKBSJpZfUTN4blRdqe6yMR2ZwFKl7P9SjA&s", "0 ئثقخ | ghjkl", "usp حخصثقلشةهىل | https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpl-ag59CESC7Sv8NzBcl6qq39JJPE3Ssqg&s"] //ىهلشلهلش
const case4 = ["10 KibeOne | https://kiber-one.com/uploadedFiles/images/redesign/pic-cc-2.png", "5 KiberOne | https://cachizer2.2gis.com/reviews-photos/54736897-fba1-4467-a73f-c765dbd46ecc.jpg?w=640", "-5 KiberOne :< | https://cachizer2.2gis.com/reviews-photos/54736897-fba1-4467-a73f-c765dbd46ecc.jpg?w=640", "15 KiberOne :> | qwerty", "-20 KiberOne :( | qwerty"] //kiberone




function openCase(selectcase){
    clearTimeout(resclose);
    function getRandomInt(min, max) {
        if (min > max) {
            [min, max] = [max, min];
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let result = selectcase[getRandomInt(1, selectcase.length)-1].split(" | ")
    document.getElementById("result").innerText = result[0]
    document.getElementById("resultImg").src = result[1]
    document.getElementById("resultblock").style.visibility = "visible";
    setTimeout(resclose, 3000)
}
function resclose(){
    clearTimeout(resclose);
    document.getElementById("resultblock").style.visibility = "hidden";
}

