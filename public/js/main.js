
// modal add years to verification drop down selection

for (var i = 1900; i < 2018; i++) {
$('#year').append('<option value ="' + i + '">' + i + '</option>')
}
// end modal that adds years to verificaton drop down selection



$(document).ready(function () {
   // event.preventDefault();
   var age_form = $('#verify .age form');
     var modal = $('#verify');

    if ( localStorage.getItem('isOldEnough') === 'yes' ) {
        modal.remove();
    }

    function meetsMinimumAge(birthDate, minAge) {
       var tempDate = new Date(birthDate.getFullYear() + minAge, birthDate.getMonth(), birthDate.getDate());
        return (tempDate <= new Date());
   }

    age_form.on("submit",function(e){

        e.preventDefault();
console.log("Hi Mary");

       var $this = $(this),
            month = parseInt($this.find('select[name=month]').val(), 10),
           day = parseInt($this.find('select[name=day]').val(), 10),
           year = parseInt($this.find('select[name=year]').val(), 10),
            birthday = new Date(year, month, day);

       if ( meetsMinimumAge(birthday, 18) ) {
            modal.remove();
            localStorage.setItem('isOldEnough', 'yes');
        } else {
           modal.find('.denied').fadeIn('fast');
       }

   });

   $('#verify')
       .height( $(document).height() )
       .width( $(document).width() );
});
