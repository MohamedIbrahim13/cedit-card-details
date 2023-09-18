const button = document.querySelector("input[type = 'submit']");
const caname = document.querySelector("input[name='cname']");
const errcna = document.querySelector("span.cname");
const cardnu = document.querySelector("input[name='cardnu']");
const errcnu = document.querySelector("span.cardnu");
const exp_month = document.querySelector("input[name='exp_month']");
const errmon = document.querySelector("span.exp_date");
const exp_year = document.querySelector("input[name='exp_year']");
const cvv = document.querySelector("input[name='cvv']");
const subm = document.querySelector("input[type='submit']");
const forms = document.querySelector(".card-form ");
const cont = document.querySelector("input[value='Continue']");
const thank = document.querySelector(".end ");
const errcolr = "hsl(0, 100%, 66%)";

const point = 0;

caname.addEventListener("input", () => {
  if (/^[0-9]+$/.test(this.value)) {
    errcna.innerHTML = "Can't be number";
    errcna.style.display = "initial";
    caname.style.borderColor = errcolr;
  } else if (/^$/.test(this.value)) {
    document.querySelector(".card-details span:nth-child(3)").innerHTML =
      "Jane Appleseed";
    errcna.innerHTML = "Can't be blank";
    errcna.style.display = "initial";
    caname.style.borderColor = errcolr;
  } else {
    document.querySelector(".card-details span:nth-child(3)").innerHTML =
      this.value;
    caname.style.borderColor = "hsl(270, 3%, 87%)";
    errcna.style.display = "none";
  }
});

cardnu.addEventListener("input", () => {
  if (/^$/.test(this.value)) {
    document.querySelector(".card-details span:nth-child(2)").innerHTML =
      "0000 0000 0000 0000";
    errcnu.innerHTML = "Can't be blank";
    errcnu.style.display = "initial";
    cardnu.style.borderColor = errcolr;
  } else if (/^[a-zA-Z]+$/.test(this.value)) {
    errcnu.innerHTML = "Wrong format, numbers only";
    errcnu.style.display = "initial";
    cardnu.style.borderColor = errcolr;
  } else {
    document.querySelector(".card-details span:nth-child(2)").innerHTML =
      this.value;
    cardnu.style.borderColor = "hsl(270, 3%, 87%)";
    errcnu.style.display = "none";
  }
});

exp_month.addEventListener("input", () => {
  if (this.value > 12) {
    errmon.innerHTML = "Can't be more than 12";
    errmon.style.display = "initial";
    exp_month.style.borderColor = errcolr;
  } else if (/^$/.test(this.value)) {
    document.querySelector(".date span:nth-child(1)").innerHTML = "00";
    errmon.innerHTML = "Can't be blank";
    errmon.style.display = "initial";
    exp_month.style.borderColor = errcolr;
  } else {
    document.querySelector(".date span:nth-child(1)").innerHTML =
      this.value + "/";
    exp_month.style.borderColor = "hsl(270, 3%, 87%)";
    errmon.style.display = "none";
  }
});

exp_year.addEventListener("input", () => {
  if (/^[0-9]{3}$/.test(this.value)) {
    errmon.innerHTML = "Wrong format";
    errmon.style.display = "initial";
    exp_year.style.borderColor = errcolr;
  } else if (/^$/.test(this.value)) {
    document.querySelector(".date span:nth-child(2)").innerHTML = "00";
    errmon.innerHTML = "Can't be blank";
    errmon.style.display = "initial";
    exp_year.style.borderColor = errcolr;
  } else {
    document.querySelector(".date span:nth-child(2)").innerHTML = this.value;
    exp_year.style.borderColor = "hsl(270, 3%, 87%)";
    errmon.style.display = "none";
  }
});

cvv.addEventListener("input", e => {
  if (/^[0-9]{4}$/.test(this.value)) {
    errmon.innerHTML = "Wrong format";
    errmon.style.display = "initial";
    cvv.style.borderColor = errcolr;
  } else if (/^$/.test(this.value)) {
    document.querySelector(".card-back span").innerHTML = "000";
    errmon.innerHTML = "Can't be blank";
    errmon.style.display = "initial";
    cvv.style.borderColor = errcolr;
  } else {
    document.querySelector(".card-back span").innerHTML = this.value;
    cvv.style.borderColor = "hsl(270, 3%, 87%)";
    errmon.style.display = "none";
  }
});

subm.addEventListener("click", e => {
  e.preventDefault();
  forms.style.display = "none";
  thank.style.display = "flex";
});

cont.addEventListener("click", () => {
  forms.style.display = "flex";
  thank.style.display = "none";

  location.reload();
});
