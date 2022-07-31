function ShowPassword() {
    if (document.getElementById("password").value != "") {
      document.getElementById("password").type = "text";
      document.getElementById("show").style.display = "none";
      document.getElementById("hide").style.display = "block";
    }
    if (document.getElementById("password-confirm").value != "") {
      document.getElementById("password-confirm").type = "text";
      document.getElementById("show").style.display = "none";
      document.getElementById("hide").style.display = "block";
    }
  }
  
  function HidePassword() {
    if (document.getElementById("password").type == "text") {
      document.getElementById("password").type = "password";
      document.getElementById("show").style.display = "block";
      document.getElementById("hide").style.display = "none";
    }
    if (document.getElementById("password-confirm").type == "text") {
      document.getElementById("password-confirm").type = "password";
      document.getElementById("show").style.display = "block";
      document.getElementById("hide").style.display = "none";
    }
  }

