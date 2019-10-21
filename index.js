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
          img.src = `../img/${image.name}`;
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
