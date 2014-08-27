/**
 * Created by valenciap on 14/08/2014.
 */
var C = {};
C.getChange = function(total, payable) {
    'use strict';
    if(total > payable) {
        return [];
    } else {
        var difference = payable - total;
        var coinList = [];
        var i = 0;

        while(difference > 0) {
            if(difference >= 5000) {
                coinList[i] = 5000;
                difference -= 5000;
            } else if (difference >= 2000){
                coinList[i] = 2000;
                difference -= 2000;
            } else if (difference >= 1000){
                coinList[i] = 1000;
                difference -= 1000;
            } else if (difference >= 500){
                coinList[i] = 500;
                difference -= 500;
            } else if (difference >= 200){
                coinList[i] = 200;
                difference -= 200;
            }else if (difference >= 100){
                coinList[i] = 100;
                difference -= 100;
            }else if (difference >= 50){
                coinList[i] = 50;
                difference -= 50;
            }else if (difference >= 20){
                coinList[i] = 20;
                difference -= 20;
            }else if (difference >= 10){
                coinList[i] = 10;
                difference -= 10;
            }else if (difference >= 5){
                coinList[i] = 5;
                difference -= 5;
            }else if (difference >= 2){
                coinList[i] = 2;
                difference -= 2;
            }else {
                coinList[i] = 1;
                difference -= 1;
            }
            i++;
        }
        return coinList;
    }
};

module.exports = C;