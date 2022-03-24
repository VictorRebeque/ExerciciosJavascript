function Calculadora () {
    this.display = document.querySelector(".display");
    this.inicia = () => this.clique()
    this.btnEnter = () =>  {
        document.addEventListener("keypress", e => {
            if (e.keycode !== 13) return;
            this.btnEq();
        })
    }

    this.clique = () => {
        document.addEventListener("click", event => {
            const el = event.target;
            if (el.classList.contains("btn-num")) this.addNumDisplay(el);
            if (el.classList.contains("btn-clear"))this.btnClear();
            if (el.classList.contains("btn-del"))this.btnDel();
            if (el.classList.contains("btn-eq"))this.btnEq();
        })
    }
    this.btnEq = () =>{
        try{
            this.display.innerText = eval(this.display.innerText)
        }catch{
            alert("Conta Inválida! Inspecione sua contae tente novamente. ")
        }
    }

    this.btnDel = () => this.display.innerText = this.display.innerText.slice(0, -1)

    this.btnClear = () => this.display.innerText = ""

    this.addNumDisplay = (el) => {
        const numero = el.innerText
        this.display.innerText += numero
        this.display.focus()
    }

}

const calculadora = new Calculadora();
calculadora.inicia()