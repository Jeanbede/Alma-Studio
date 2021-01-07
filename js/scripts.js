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
             

            //  $('a').hover(function () {
            //     $(this).toggle();
            //     $('h1').toggle();
            //  });

            //  $('h1').hover(function () {
            //     $(this).toggle();
            //     $('a').toggle();
            //  });
                       
             
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
               



             
           


       



        