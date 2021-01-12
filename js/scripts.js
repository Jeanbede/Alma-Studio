var blink = document.getElementById('blink');
setInterval(function() {
    blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
}, 1000);


   $(document).ready(function () {
        $('#container').click(function () {
            $(this).hide();
            $('.text').show();
        });
      
            $('.text').click(function(){
                 $(this).hide();
                $('#container').show();
        });
                        
               $('#container1').click(function () {
                $(this).hide();
                $('.development').show();
             });

             $('.development').click(function () {
                $(this).hide();
                $('#container1').show();
             });

             $('#container2').click(function () {
                $(this).toggle();
                $('.product').toggle();
             });

             $('.product').click(function () {
                $(this).toggle();
                $('#container2').toggle();
             });
                         
             
        var btn = document.getElementById("myBtn");

           btn.onclick = function(event) {
            
            var x = document.forms["myForm"]["form-name"].value;
            if (x == "") {
                alert("Name not entered");
                return false;
            }
            var y = document.forms["myForm"]["form-email"].value;
            if (y == "") {
                alert("Email not entered");
                return false;
            }
            var z = document.forms["myForm"]["form-contact"].value;
            if (z == "") {
                alert("You have no message to send");
                return false;
            }
            var person1Input = $("input#form-name").val();
            $("form-contact").append(person1Input);
        
            $('myBtn').push('show');
            event.preventDefault();
        };
                          
    });

    $("#my-form").submit(function(event) {
      event.preventDefault();
      var name = $("#contact-name").val();
      alert("Our Dear Client," + name + ".We have received your message,Thank you for reaching out to us!!!");
      document.getElementById("my-form").reset();
  });

             
           




  $(document).ready(function(){
    $("#design").click(function(){
        $("#design-p").toggle()
        $("#design").toggle()
    });
});
$(document).ready(function(){
    $("#design-p").click(function(){
        $("#design").toggle()
        $("#design-p").toggle()
    });
});
$(document).ready(function(){
    $("#development").click(function(){
        $("#development-p").toggle()
    $("#development").toggle()
    });
});
$(document).ready(function(){
    $("#development-p").click(function(){
        $("#development").toggle()
        $("#development-p").toggle()
    });
});
$(document).ready(function(){
    $("#product").click(function(){
        $("#product-p").toggle()
        $("#product").hide()
    });
});
$(document).ready(function(){
    $("#product-p").click(function(){
        $("#product").toggle()
        $("#product-p").toggle()
    });
});
$(document).ready(function getResponse(){
    var name = document.getElementById("#name").value();
    $("button#submit").click(function(){
        alert("Hi, " + name + " .Your message has been received!")
    })
    preventDefault()
})
$(document).ready(function(){
    $("#wrap1").hover(function(){
        $("#hide-1").toggle();
    })
    $("#wrap2").hover(function(){
        $("#hide-2").toggle();
    })
    $("#wrap3").hover(function(){
        $("#hide-3").toggle();
    })
    $("#wrap4").hover(function(){
        $("#hide-4").toggle();
    })
    $("#wrap5").hover(function(){
        $("#hide-5").toggle();
    })
    $("#wrap6").hover(function(){
        $("#hide-6").toggle();
    })
    $("#wrap7").hover(function(){
        $("#hide-7").toggle();
    })
    $("#wrap8").hover(function(){
        $("#hide-8").toggle();
    })
});















       



        