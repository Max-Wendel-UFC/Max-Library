function validateForm() {
    var firstname = document.forms["myForm"]["firstname"].value;
    var lastname = document.forms["myForm"]["lastname"].value;
    var email = document.forms["myForm"]["email"].value;
    var termo = document.forms["myForm"]["termo"].value;

    if (firstname == "") {
        alert("Por favor, insira seu Nome.");
        return false;
    }else if(lastname == ""){
        alert("Por favor, insira seu Sobrenome.");
        return false;
    }else if(email == ""){
        alert("Por favor, insira seu E-mail.");
        return false;
    }else if(termo != ":checked"){
        alert("Por favor, aceite os termos de uso.");
        return false;
    }else{
        alert("Cadastrado com sucesso!");
        return true;
    }
}
