const upload = document.querySelector("#file");

upload.addEventListener("change", function () {
  const files = upload.files;
  for (let i = 0; i < files.length; i++) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "");

    const formData = new FormData();
    formData.append(files[i].name, files[i]);
    const block = addProgressBlock(files[i]);

    xhr.send(formData);
  }
});

function addProgressBlock(file) {
  const progressArea = document.querySelector("#progress-area");
  const newHtml = `
    "<label>file : ${file.name}</label>"
            <div class="progress-bar">
                <div style="width: 0%;">
                  <span>0%</span>
                </div>
                
            </div>`;
            

            const block = document.createElement('div')
            block.setAttribute('class' , 'progress-block')
            block.innerHTML = newHtml
            progressArea.appendChild(block)
            return block
}
