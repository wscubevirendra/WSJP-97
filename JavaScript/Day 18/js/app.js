var inp = document.querySelector("#inp");
var tudoList = document.querySelector(".tudoList");
inp.addEventListener(
    "keyup",
    function (e) {
        if (e.key === "Enter") {
            //  <li>Item1 <i class="fa-solid fa-trash"></i></li>
            // console.log(this.value)
            addTudo(this.value)
            this.value = ""

        }

    }
)

function addTudo(value) {
    var listItem = document.createElement("li");
    listItem.innerHTML = `${value} <i class="fa-solid fa-trash"></i> `;
    tudoList.appendChild(listItem);
    console.log(document.querySelector("li i"))

    listItem.addEventListener(
        "click",
        function (e) {
            listItem.classList.toggle("done")
        }
    )

    listItem.querySelector("li i").addEventListener(
        "click",
        function (e) {
            listItem.remove()
        }
    )
}
