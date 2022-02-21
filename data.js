//slider

var index = 0;
SlideShow();

function SlideShow() {
  var slides = document.getElementsByClassName('Slides');
  var dots = document.getElementsByClassName('dot');
  //hide the 3 imgs
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  index++; //1

  if (index > slides.length) {
    //3
    index = 1;
  }

  //hide 3 dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('active', '');
  }

  slides[index - 1].style.display = 'block';
  dots[index - 1].className += ' active';
  setTimeout(SlideShow, 2000);
}

//show data for men

var ha = document.getElementById('divmen');

var cartoona = ``;
var xhr = new XMLHttpRequest();

xhr.open('GET', "https://fakestoreapi.com/products/category/men's%20clothing");

xhr.send();

xhr.addEventListener('readystatechange', function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var data = xhr.response; //data

    var men = JSON.parse(data);
    console.log(men);
    for (let i = 0; i <= men.length; i++) {
      let myId = "'" + men[i].id + "'";
      let myprice = "'" + men[i].price + "'";
      let mytitle = '`' + men[i].title + '`';
      let myimage = "'" + men[i].image + "'";
      console.log(myId);
      // document.write("<h1>dvdcvdc</h1>")
      cartoona += ` <div   
      style=" box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      width: 22.8%;
      height: 800px;
      border-radius: 5px;
      margin-bottom: 100px;
      margin-left: 30px;
      background-color: #fefefe;
      float: left;" 
      > 
      <img src="${men[i].image}" alt="Avatar" style="border-radius: 5px 5px 0 0; width: 100%; height: 70%; ">
      <div style="padding: 2px 16px;">
            <h4><b>${men[i].title}</b></h4>
            <p>${men[i].category}</p>
            <p> ${men[i].price}</p>
          </div> 
          <button onclick="getDetails(${myId},${mytitle},${myprice},${myimage})" 
          style="padding: 15px 60px 15px 60px ; background-color:#01274e; color:white; border-radius:10px; font-size: 20px; float: right; margin-right: 67px" 
          type="submit">Add to Cart</button>     
       
      </div>
     `;

      // console.log(cartoona);

      ha.innerHTML = cartoona;
    }
  }
});

//show data for women

var div2 = document.getElementById('divwoman');

var cartoona2 = ``;
var xhr2 = new XMLHttpRequest();

xhr2.open('GET', "https://fakestoreapi.com/products/category/women's clothing");

xhr2.send();

xhr2.addEventListener('readystatechange', function () {
  if (xhr2.readyState == 4 && xhr2.status == 200) {
    var data = xhr2.response; //data

    var women = JSON.parse(data);
    for (let i = 0; i <= women.length; i++) {
      let myId = "'" + women[i].id + "'";
      let myprice = "'" + women[i].price + "'";
      let mytitle = '`' + women[i].title + '`';
      let myimage = "'" + women[i].image + "'";
      // document.write("<h1>dvdcvdc</h1>")
      cartoona2 += ` <div '
      style="  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      width: 22.8%;
      height: 800px;
      border-radius: 5px;
      margin-bottom: 100px;
      margin-left: 30px;
      background-color: #fefefe;
      float: left;" 
      > 
      <img src="${women[i].image}" alt="Avatar" style="border-radius: 5px 5px 0 0; width: 100%; height: 70%; ">
      <div style="padding: 2px 16px;">
            <h4><b>${women[i].title}</b></h4>
            <p>${women[i].category}</p>
            <p>${women[i].price}</p>
      </div>    
      <button onclick="getDetails(${myId},${mytitle},${myprice},${myimage})" 
          style="padding: 15px 60px 15px 60px ; background-color:#01274e; color:white; border-radius:10px; font-size: 20px; float: right; margin-right: 67px" 
          type="submit">Add to Cart</button> 
      </div>`;

      // console.log(cartoona2);

      div2.innerHTML = cartoona2;
    }
  }
});

//show data for electroics

var div3 = document.getElementById('divelectronics');

var cartoona3 = ``;
var xhr3 = new XMLHttpRequest();

xhr3.open('GET', 'https://fakestoreapi.com/products/category/electronics');

xhr3.send();

xhr3.addEventListener('readystatechange', function () {
  if (xhr3.readyState == 4 && xhr3.status == 200) {
    var data = xhr3.response; //data

    var electronics = JSON.parse(data);
    for (let i = 0; i <= electronics.length; i++) {
      let myId = "'" + electronics[i].id + "'";
      let myprice = "'" + electronics[i].price + "'";
      let mytitle = '`' + electronics[i].title + '`';
      let myimage = "'" + electronics[i].image + "'";

      cartoona3 += ` <div '
      style="  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      width: 22.8%;
      height: 800px;
      border-radius: 5px;
      margin-bottom: 100px;
      margin-left: 30px;
      background-color: #fefefe;
      float: left;" 
      > 
      <img src="${electronics[i].image}" alt="Avatar" style="border-radius: 5px 5px 0 0; width: 100%; height: 70%; ">
      <div style="padding: 2px 16px;">
            <h4><b>${electronics[i].title}</b></h4>
            <p>${electronics[i].category}</p>
            <p>${electronics[i].price}</p>
      </div>    
      <button onclick="getDetails(${myId},${mytitle},${myprice},${myimage})" 
          style="padding: 15px 60px 15px 60px ; background-color:#01274e; color:white; border-radius:10px; font-size: 20px; float: right; margin-right: 67px" 
          type="submit">Add to Cart</button> 
      </div>`;

      // console.log(cartoona2);

      div3.innerHTML = cartoona3;
    }
  }
});

//show data for jewelery

var div4 = document.getElementById('divjewelery');

var cartoona4 = ``;
var xhr4 = new XMLHttpRequest();

xhr4.open('GET', 'https://fakestoreapi.com/products/category/jewelery');

xhr4.send();

xhr4.addEventListener('readystatechange', function () {
  if (xhr4.readyState == 4 && xhr4.status == 200) {
    var data = xhr4.response; //data

    var jewelery = JSON.parse(data);
    for (let i = 0; i <= jewelery.length; i++) {
      let myId = "'" + jewelery[i].id + "'";
      let myprice = "'" + jewelery[i].price + "'";
      let mytitle = '`' + jewelery[i].title + '`';
      let myimage = "'" + jewelery[i].image + "'";
      // document.write("<h1>dvdcvdc</h1>")
      cartoona4 += ` <div '
      style="  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      width: 22.8%;
      height: 800px;
      border-radius: 5px;
      margin-bottom: 100px;
      margin-left: 30px;
      background-color: #fefefe;
      float: left;" 
      > 
      <img src="${jewelery[i].image}" alt="Avatar" style="border-radius: 5px 5px 0 0; width: 100%; height: 70%; ">
      <div style="padding: 2px 16px;">
            <h4><b>${jewelery[i].title}</b></h4>
            <p>${jewelery[i].category}</p>
            <p>${jewelery[i].price}</p>
      </div>    
      <button onclick="getDetails(${myId},${mytitle},${myprice},${myimage})" 
          style="padding: 15px 60px 15px 60px ; background-color:#01274e; color:white; border-radius:10px; font-size: 20px; float: right; margin-right: 67px" 
          type="submit">Add to Cart</button> 
      </div>`;

      // console.log(cartoona2);

      div4.innerHTML = cartoona4;
    }
  }
});

//add to cart

var productList = [];

function getDetails(id, title, price, img) {
  var product = {
    id: id,
    name: title,
    myprice: price,
    image: img,
  };
  if (localStorage.getItem('ourproduct') == null) {
    productList.push(product);
    localStorage.setItem('ourproduct', JSON.stringify(productList));
    console.log(productList);
    console.log(productList[0].name);
  } else {
    var test = JSON.parse(localStorage.getItem('ourproduct'));
    test.push(product);
    localStorage.setItem('ourproduct', JSON.stringify(test));
  }
}
