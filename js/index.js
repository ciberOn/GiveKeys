const case0 = ["ak-47 reactya", "awp nigtmare", "zero", "usp luckyshot"] //Супер крутой кейс
const case1 = ["ak-47 wildfire", "awp nightvision", "zero", "usp powergaming"] //Мажорчик
const case2 = ["ak-47 major2021", "awp major2022", "zero", "usp unluck"] //Не открывать
const case3 = ["ak-47 يقثشةسنعمم", "awp يقثشةسنعمم", "0 ئثقخ", "usp حخصثقلشةهىل"] //ىهلشلهلش
const case4 = ["ak-47 wildfire", "awp headattack", "zero", "usp powergaming"] //Неизвестный




function openCase(selectcase){
    function getRandomInt(min, max) {
        if (min > max) {
            [min, max] = [max, min];
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    document.getElementById("result").innerText = selectcase[getRandomInt(1, selectcase.length)-1]
}
