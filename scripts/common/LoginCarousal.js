function getCookieMap() {
    var ca = document.cookie.split(';');
    var noOfCookies = ca.length;
    // Changes for TOL 791142 Starts
    //var cookieMap = new Map();
    var cookieMap = [];
    for (var i = 0; i < noOfCookies; i++) {
        var c = ca[i];
        var cookieArr = c.split('=');
        //cookieMap.set(cookieArr[0].trim(),cookieArr[1]);
        cookieMap[cookieArr[0].trim()] = cookieArr[1];
        // Changes for TOL 791142 Ends
    }
    return cookieMap;
}

jQuery.fn.preload = function() {
    this.each(function() {
        jQuery('<img/>')[0].src = this;
    });
}
var images = Array(
    "L001/consumer/images/Login_Background_1.jpg",
    "L001/consumer/images/Login_Background_2.jpg",
    "L001/consumer/images/Login_Background_3.jpg",
    "L001/consumer/images/Login_Background_4.jpg");

jQuery([images[0], images[1], images[2], images[3]]).preload();

var cookieMap = getCookieMap();
var bankIdValue = cookieMap['bankId'];
var langIdValue = cookieMap['langId'];

/*if(langIdValue == '002'){
	var login_text = [	{heading: "Redefining customer service f", 
					subheading: "Our Customer Fulfilment center is a 24/7 one-stop-shop to cater to all your banking needs."},
					{heading: "Buy and sell confidently f", 
					subheading: "UBA Market Place provides merchants and customer ecommerce solution for easy access to online shopping."},
					{heading: "Make Every Moment count f", 
					subheading: "You're going to love banking with us. We created solutions tailored to suit your needs as a valued customer."}];
}else{
	var login_text = [	{heading: "Redefining customer service", 
					subheading: "Our Customer Fulfilment center is a 24/7 one-stop-shop to cater to all your banking needs."},
					{heading: "Buy and sell confidently", 
					subheading: "UBA Market Place provides merchants and customer ecommerce solution for easy access to online shopping."},
					{heading: "Make Every Moment count", 
					subheading: "You're going to love banking with us. We created solutions tailored to suit your needs as a valued customer."}];
}*/

if (langIdValue == '002') {
    var login_text = [{
            heading: "Bienvenue, et si on parlait de services bancaires?",
            subheading: "Avec une présence dans 23 pays, nous vous facilitons les transactions financières."
        },
        {
            heading: "Accédez aux services bancaires où que vous soyez.",
            subheading: "La gestion de votre compte devient simple. Vous obtenez plus que ce que vous attendiez d'une banque avec d'excellents services conçus uniquement pour vous."
        },
        {
            heading: "Faites que chaque moment compte.",
            subheading: "Vous allez adorer faire des transactions bancaires avec nous. En tant que précieux client, nous vous avons conçu des comptes adaptés pour répondre à vos besoins individuels."
        },
        {
            heading: "Rationalisez vos transactions commerciales.",
            subheading: "Envoyez de l'argent à 5 000 destinataires à la fois avec votre compte d'entreprise."
        }
    ];
} else {
    var login_text = [{
            heading: "Welcome, Let's Bank",
            subheading: "With footprints in 23 countries, we bring you ease of financial transactions."
        },
        {
            heading: "Bank Anywhere",
            subheading: "Managing your account is easy. You get more than you expect from a bank  with excellent services designed just for you."
        },
        {
            heading: "Make every moment count",
            subheading: "You're going to love banking with us. We created accounts tailored to suit your individual needs as a valued customer."
        },
        {
            heading: "Streamline your Business Transactions",
            subheading: "Send money to 5000 recipients at once with your corporate account."
        }
    ];
}


jQuery(window).load(function() {
    var i = 0;
    /*var images = [
        'L001/consumer/images/Login_Background_1.jpg',
        'L001/consumer/images/Login_Background_2.jpg',
        'L001/consumer/images/Login_Background_3.jpg'];
		
	var login_text = [	{heading: "Redefining customer service", 
					subheading: "Our Customer Fulfilment center is a 24/7 one-stop-shop to cater to all your banking needs."},
					{heading: "Buy and sell confidently", 
					subheading: "UBA Market Place provides merchants and customer ecommerce solution for easy access to online shopping."},
					{heading: "Make Every Moment count", 
					subheading: "You're going to love banking with us. We created solutions tailored to suit your needs as a valued customer."}];	*/

    jQuery('#slide-wrapper').css('background-image', 'url(' + images[i] + ')');

    jQuery('.login_text_heading').html(login_text[0].heading);
    jQuery('.login_text_subheading').html(login_text[0].subheading);
    jQuery('#slide-wrapper').css('background-image', 'url(' + images[0] + ')').show();

    setInterval(function() {
        if (++i === images.length) {
            i = 0;
        }
        jQuery('#nextimg').css('background-image', 'url(' + images[i] + ')');
        // transition animation: 2s
        jQuery('#slide-wrapper').fadeOut(2000, function() {
            jQuery('#slide-wrapper').css('background-image', 'url(' + images[i] + ')').show();
        });


        jQuery('.login_text_heading').fadeOut(500, function() {
            jQuery('.login_text_heading').html(login_text[i].heading);
            jQuery('.login_text_heading').hide();
            jQuery('.login_text_heading').fadeIn("slow");
        });
        jQuery('.login_text_subheading').fadeOut(500, function() {
            jQuery('.login_text_subheading').html(login_text[i].subheading);
            jQuery('.login_text_subheading').hide();
            jQuery('.login_text_subheading').fadeIn("slow");
        });
        /*jQuery('.login_text_heading').html(login_text[i].heading);
        jQuery('.login_text_subheading').html(login_text[i].subheading);
		
        jQuery('.login_text_heading').hide();
        jQuery('.login_text_subheading').hide();
		
        jQuery('.login_text_heading').fadeIn("slow");
        jQuery('.login_text_subheading').fadeIn("slow");
		
        jQuery('.login_text_heading').fadeOut("slow");
        jQuery('.login_text_subheading').fadeOut("slow");*/

        // slide change: 3s
    }, 5000);
});