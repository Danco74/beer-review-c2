var beers = [];

function beerClickHandler(){
    var beerName = $('.beer-input').val();
    var category = $('.category-input').val();
    addBeer(beerName, category);
    console.log($('.beer-input'));
}

function selectHandler(){
    var beerRating = this.options[this.selectedIndex].value;
    var selectedId = this.options[this.selectedIndex].id;
    var splitTemp = selectedId.split("-");
    var beerName = splitTemp[0];
    console.log(beerName);
    for (var i=0;i<beers.length;i++){
        if (beerName==beers[i].name){
            beers[i].rating = parseInt(beerRating);
        }
    }
    beers.sort(function(a, b) {
        return (a.rating - b.rating);
    });

    //renderBeers();
}

function addBeer(name, category){
    var beer = {
        name: name,
        category: category,
        rating: 1
    };

    beers.push(beer);
    beers.sort(function(a, b) {
        return (a.rating - b.rating);
    });
    renderBeers();
}

function renderBeers(){
    var $beersList = $('.beers-list');
    $beersList.empty();
    for (var i=0;i<beers.length;i++)
        {
            console.log(beers[i]);
            $beersList.append("<li id='" + beers[i].name + "-beer' >" + beers[i].name +  
            "   <select id='" + beers[i].name + "-select'> \
            <option id='" + beers[i].name + "-li-1' value='1'>shitty</option> \
            <option id='" + beers[i].name + "-li-2' value='2'>ok</option> \
            <option id='" + beers[i].name + "-li-3' value='3'>good</option> \
            <option id='" + beers[i].name + "-li-4' value='4'>blast</option> \
            </select></li>");

            $('#' + beers[i].name + '-select').val(beers[i].rating);
        }

    $('select').change(selectHandler);

}

$('.post-beer').click(beerClickHandler);