/* =========================================================
   Barbara Van Dromme
   Main JavaScript
   ========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /*
       Kleine fade-in functie voor pagina-elementen.

       Dit staat nu klaar voor de verdere pagina's:
       gallery, exhibitions en about.
    */


    const sections = document.querySelectorAll(
        ".intro, .artist-note, .exhibition-preview"
    );


    const observer = new IntersectionObserver(

        function(entries) {


            entries.forEach(function(entry) {


                if (entry.isIntersecting) {


                    entry.target.classList.add("visible");


                }


            });


        },


        {

            threshold: 0.15

        }


    );



    sections.forEach(function(section) {

        observer.observe(section);

    });



});