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
            });
        
 
                             





                            

               



             
           


       



        