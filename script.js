
let arr_image = ['a', 'b', 'c', 'd', 'e']
let num = 0;

function goNext() 
{
    num++;
    if (num>=arr_image.length) 
        {
        num=0;
        document.querySelector(".box").innerHTML = `<img src='img/${arr_image[num]}.jpg'>`
    }
    else {
        document.querySelector(".box").innerHTML = `<img src='img/${arr_image[num]}.jpg'>`
    }
}

function goPrev() {
    num--;
    if (num <= 0) {
        num = arr_image.length-1;
        document.querySelector(".box").innerHTML = `<img src='img/${arr_image[num]}.jpg'>`
    }
    else {
        document.querySelector(".box").innerHTML = `<img src='img/${arr_image[num]}.jpg'>`
    }
}
setInterval(goNext,3000);
