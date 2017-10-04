var app = new Vue ({
  el: "#app",
  data: {
    message: localStorage.item,
    counter: 0,
    title: localStorage.title,
    description: localStorage.description,
    checkedNames: JSON.parse(localStorage.checkedNames),
    selected: localStorage.selected,
    parsedNames: '',
  },
  methods: {
    submit: function() {
      localStorage.title = this.title;
      localStorage.description = this.description;
      localStorage.selected = this.selected;
      localStorage.checkedNames = JSON.stringify(this.checkedNames);
      },
    searchSelection: function(){
      var enteredValue = $('.search-selection').val();
      console.log(enteredValue);
    }
  }
})

// $('.search-selection').click(function(){
//   console.log('clicked on item');
// })


// $('[name=countries]')
// ul.typeahead dropdown-menu
// li data-value="itemname"
//   a href "string"

// <ul class="typeahead dropdown-menu" style="top: 130px; left: 667.312px; display: none;">
//   <li data-value="United Arab Emirates" class="">
//     <a href="#"><strong>United</strong> Arab Emirates</a>
//   </li><li data-value="United Kingdom" class="">
//     <a href="#"><strong>United</strong> Kingdom</a></li>
//   <li data-value="United States" class="">
//     <a href="#"><strong>United</strong> States</a></li>
//   <li data-value="United States Minor Outlying Islands" class="active">
//     <a href="#"><strong>United</strong> States Minor Outlying Islands</a></li>
// </ul>