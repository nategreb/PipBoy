$(document).ready(function() { 
    
    var mediatypes = [
        books = [{
            
            "name": "The Intelligent Investor",
            "by": "Ben Graham"
        }, 
        {
            "name": "How to Win Friends and Influence Them",
            "by": "Dale Carnegie"
        },
        {
            "name": "Can't Hurt Me",
            "by": "David Goggins"
        },
            {"link" : "books.jpg"}
        ],

        shows = [{
            
            "name": "Game of Thrones",
            "by": "HBO"
        }, 
        {
            "name": "Ozark",
            "by": "Netflix"
        },
        {
            "name": "Breaking Bad",
            "by": "Netflix"
        },
        {"link" : "shows.jpg"}
        ],

        movies = [{
        
            "name": "The Dark Knight Rises",
            "by": "Christopher Nolan"
        },
        {
            "name": "Parasite",
            "by": "Bong Joon-Ho"
        },
        {
            "name": "Whiplash",
            "by": "Damien Chazelle"
        },
            {"link" : "movies.jpg"}
        ],

        podcasts = [{
            "name": "The Joe Rogan Experience",
            "by": "Joe Rogan"
        },
        {
            "name": "The Pomp Podcast",
            "by": "Anthony Pompliano"
        },
        {
            "name": "The Daily",
            "by": "The New York Times"
        },
            {"link" : "podcasts.jpg"}]
    ]

    $('.media-list a').on('click', function(e){
        $('.media-list a').removeClass('active');
        $(e.target).addClass('active');
   
        let curr = $(e.target).text().trim();
        console.log(curr);

        var type = null;
        var container = $('.podcasts');
       

        if (curr == 'BOOKS') {
            type = mediatypes[0];
        }
        else if (curr == 'TV SHOWS'){
            type = mediatypes[1];
        }
        else if (curr == "MOVIES"){
            type = mediatypes[2];
        }
        else {
            type = mediatypes[3];
        }

        console.log(type[0]["name"]);
        
        
    
            container.find('.title-name-1').html(type[0]["name"]);
            container.find('.by1').html(type[0]["by"]);
            
            container.find('.title-name-2').html(type[1]["name"]);
            container.find('.by2').html(type[1]["by"]);
            
            container.find('.title-name-3').html(type[2]["name"]);
            container.find('.by3').html(type[2]["by"]);

            document.getElementsByClassName(".media-img").link = type[3]["link"];
           

    });
        
    

});