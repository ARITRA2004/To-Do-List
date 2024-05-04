const create = document.querySelector('.button');

const toDOList = document.querySelector('.all-items');
toDOList.style.display = "flex";
toDOList.style.flexDirection = "column";
toDOList.style.gap = "20px"


create.addEventListener("click", () => {
    const data = document.querySelector('.texts').value;

    if (data === "") {
        alert("Abe kuch text dal saale");
    }
    else {
        const div = document.createElement('div');
        const button = document.createElement('button');
        button.setAttribute("class","btn");
        const list = document.createElement('li');
        div.setAttribute("class", "divs");
        document.querySelector('.all-items').appendChild(div);

        button.innerText = "Done";
        list.innerText = `${data}`;
        div.appendChild(list);
        div.appendChild(button);

        div.style.display = "flex";
        div.style.gap = "20px";

        button.addEventListener("click", () => {
            // const remove = document.querySelector('li').parentElement;
            list.remove();
            button.remove();
            div.remove();
        })
    }
    
})
