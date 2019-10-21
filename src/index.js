document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("imageUp");
  const previewList = document.getElementsByClassName("image__preview");
  const loadBtn = document.getElementById("load");

  function getExif(id) {
    var image = document.getElementById(`${id}`);
    EXIF.getData(image, function() {
      var lat = EXIF.getTag(this, "GPSLatitude");
      var long = EXIF.getTag(this, "GPSLongitude");

      if (!lat && !long) {
        window.alert('No coordinates for this image');
        var item = document.getElementById(`${id}`).parentElement;
        item.remove();
        return;
      }

      function toDecimal(number) {
        return (
          number[0].numerator +
          number[1].numerator / (60 * number[1].denominator) +
          number[2].numerator / (3600 * number[2].denominator)
        );
      }

      let latInsert = document.getElementById(`${id + 1}`);
      let longInsert = document.getElementById(`${id + 2}`);

      

      latInsert.innerText = toDecimal(lat).toFixed(2);
      longInsert.innerText = toDecimal(long).toFixed(2);
    });
  }

  fileInput.addEventListener("change", function(e) {
    const files = e.target.files;
    const arrayObj = [];

    for (let index = 0; index < files.length; index++) {
      let fileObj = {};
      fileObj.name = files[index].name;
      fileObj.size = files[index].size;
      arrayObj.push(fileObj);
    }

    // ![DSCN0010](https://user-images.githubusercontent.com/44750240/67182519-b61b2680-f3df-11e9-8a25-3bf72ea2f74a.JPG)
    // ![DSCN0012](https://user-images.githubusercontent.com/44750240/67182592-e6fb5b80-f3df-11e9-86d1-c07f1407a60f.JPG)
    // ![DSCN0021](https://user-images.githubusercontent.com/44750240/67182648-f1b5f080-f3df-11e9-9edc-dbda844e9800.JPG)
    // ![DSCN0025](https://user-images.githubusercontent.com/44750240/67182649-f1b5f080-f3df-11e9-93f2-7d36057a444f.JPG)
    // ![DSCN0027](https://user-images.githubusercontent.com/44750240/67182651-f1b5f080-f3df-11e9-88f6-c83c2616b7e0.JPG)
    // ![DSCN0029](https://user-images.githubusercontent.com/44750240/67182653-f1b5f080-f3df-11e9-9faf-a841a54d9dd6.JPG)
    // ![DSCN0038](https://user-images.githubusercontent.com/44750240/67182655-f24e8700-f3df-11e9-9203-64ec6054cc73.JPG)
    // ![DSCN0040](https://user-images.githubusercontent.com/44750240/67182658-f24e8700-f3df-11e9-946e-944e99434f4c.JPG)
    // ![DSCN0042](https://user-images.githubusercontent.com/44750240/67182660-f24e8700-f3df-11e9-81c2-6d0343f37268.JPG)
    // ![Animal](https://user-images.githubusercontent.com/44750240/67182692-fd091c00-f3df-11e9-8d75-0100fe6b234c.png)
    // ![bg](https://user-images.githubusercontent.com/44750240/67182694-fd091c00-f3df-11e9-8d04-5454986a7b4d.jpg)
    // ![drive](https://user-images.githubusercontent.com/44750240/67182695-fd091c00-f3df-11e9-8045-4383159dcd6c.jpg)
    // ![pollen](https://user-images.githubusercontent.com/44750240/67182696-fd091c00-f3df-11e9-8991-61e079223b61.jpg)

    const imageArray = [
      {name: 'DSCN0010.JPG', url: 'https://user-images.githubusercontent.com/44750240/67182519-b61b2680-f3df-11e9-8a25-3bf72ea2f74a.JPG'},
      {name: 'DSCN0012.JPG', url: ' https://user-images.githubusercontent.com/44750240/67182592-e6fb5b80-f3df-11e9-86d1-c07f1407a60f.JPG'},
      {name: 'DSCN0021.JPG', url: ' https://user-images.githubusercontent.com/44750240/67182648-f1b5f080-f3df-11e9-9edc-dbda844e9800.JPG'},
      {name: 'DSCN0025.JPG', url: ' https://user-images.githubusercontent.com/44750240/67182649-f1b5f080-f3df-11e9-93f2-7d36057a444f.JPG'},
      {name: 'DSCN0027.JPG', url: ' https://user-images.githubusercontent.com/44750240/67182651-f1b5f080-f3df-11e9-88f6-c83c2616b7e0.JPG'},
      {name: 'DSCN0029.JPG', url: ' https://user-images.githubusercontent.com/44750240/67182653-f1b5f080-f3df-11e9-9faf-a841a54d9dd6.JPG'},
      {name: 'DSCN0038.JPG', url: ' https://user-images.githubusercontent.com/44750240/67182655-f24e8700-f3df-11e9-9203-64ec6054cc73.JPG'},
      {name: 'DSCN0040.JPG', url: ' https://user-images.githubusercontent.com/44750240/67182658-f24e8700-f3df-11e9-946e-944e99434f4c.JPG'},
      {name: 'DSCN0042.JPG', url: ' https://user-images.githubusercontent.com/44750240/67182660-f24e8700-f3df-11e9-81c2-6d0343f37268.JPG'},
      {name: 'Animal.png', url: ' https://user-images.githubusercontent.com/44750240/67182692-fd091c00-f3df-11e9-8d75-0100fe6b234c.png'},
      {name: 'bg.jpg', url: ' https://user-images.githubusercontent.com/44750240/67182694-fd091c00-f3df-11e9-8d04-5454986a7b4d.jpg'},
      {name: 'drive.jpg', url: ' https://user-images.githubusercontent.com/44750240/67182695-fd091c00-f3df-11e9-8045-4383159dcd6c.jpg'},
      {name: 'pollen.jpg', url: ' https://user-images.githubusercontent.com/44750240/67182696-fd091c00-f3df-11e9-8991-61e079223b61.jpg'}
    ]

    loadBtn.addEventListener("click", () => {
      for (let index = 0; index < arrayObj.length; index++) {
        const image = arrayObj[index];
        const ext = image.name.split(".");
        const valid = image.name.toLowerCase().match(/\.(jpg|jpeg)$/i);
        const newLi = document.createElement("li");
        const img = document.createElement("img");
        const name = document.createElement("p");
        const size = document.createElement("p");
        const button = document.createElement("button");
        const find = document.createElement("button");
        const lat = document.createElement("p");
        const long = document.createElement("p");

        if (image.size < 1000001 && valid !== null) {
          newLi.id = Date.now()-Math.floor(Math.random() * (100 - 1 + 1)) + 1;;
          // img.src = `../img/${image.name}`;
          let searchArr = imageArray.filter(v=> v.name === image.name);
          img.src = searchArr[0].url;
          img.className = "thumbnail";
          img.id = Date.now();
          name.innerText = `file name = ${image.name}`;
          size.innerText = `file size = ${image.size} B`;
          button.innerText = "Delete";
          button.className = "remove__item";
          find.innerText = "Check lat/long";
          find.id = newLi.id;
          find.className = "coordinates"
          button.id = newLi.id;
          lat.id = img.id + 1;
          long.id = img.id + 2;
          newLi.appendChild(img);
          newLi.appendChild(name);
          newLi.appendChild(size);
          newLi.appendChild(lat);
          newLi.appendChild(long);
          newLi.appendChild(button);
          newLi.appendChild(find);
          arrayObj.shift();
          previewList[index].appendChild(newLi);
        } else {
          window.alert(
            `Either image size is greater than 1 MB (current size is ${
              image.size
            }) or file extension is different than jpg/jpeg (current extensions is ${
              ext[1]
            })`
          );
          arrayObj.shift();
        }

        find.addEventListener("click", function() {
          const id = img.id;
          getExif(id);
          find.parentNode.removeChild(find);
        });

        setTimeout(()=>{
          $('button.coordinates').trigger('click');
        },1000)
        

        const imageBtn = document.querySelectorAll(".remove__item");

        for (let i = 0; i < imageBtn.length; i++) {
          imageBtn[i].addEventListener("click", function(event) {
            if (event.target.id === button.id) {
              newLi.parentNode.removeChild(newLi);
            }
          });
        }
      }
    });
  });
});
