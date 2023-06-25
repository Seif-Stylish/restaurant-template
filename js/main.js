var mealNavBar = Array.from(document.querySelectorAll(".mealNavBar"));
var mealsImages = Array.from(document.querySelectorAll(".mealImage"));
var mealName = document.querySelectorAll(".lobsterBisque");
var mealPrice = document.querySelectorAll(".mealPrice");
var mealImageArray = [
    ["images/menu/lobster-bisque.jpg" , "images/menu/bread-barrel.jpg" , "images/menu/cake.jpg"],
    ["images/menu/lobster-bisque.jpg" , "images/menu/cake.jpg" , "images/menu/mozzarella.jpg"],
    ["images/menu/caesar.jpg" , "images/menu/greek-salad.jpg" , "images/menu/spinach-salad.jpg"],
    ["images/menu/bread-barrel.jpg" , "images/menu/tuscan-grilled.jpg" , "images/menu/lobster-roll.jpg"]
]
var mealNameArray = [
    ["Lobster Bisque" , "Bread Barrel" , "Crab Cake"],
    ["Lobster Bisque" , "Crab Cake" , "Mozzarella Stick"],
    ["Caesar Selections" , "Greek Salad" , "Spinach Salad"],
    ["Bread Barrel" , "Tuscan Grilled" , "Lobster Roll"]
]
var mealPriceArray = [
    ["5.95" , "6.95" , "7.95"],
    ["5.95" , "7.95" , "4.95"],
    ["8.95" , "9.95" , "9.95"],
    ["6.95" , "9.95" , "12.95"]
]
mealNavBar[0].style.color = "#cda45e";
for(var i = 0; i < mealNavBar.length; i++)
{
    mealNavBar[i].addEventListener("click" , changeColor);
}
function changeColor()
{
    var index = mealNavBar.indexOf(this);
    for(var i = 0; i < mealNavBar.length; i++)
    {
        if(mealNavBar[i].style.color != " white")
        {
            mealNavBar[i].style.color = "white";
        }
    }
    mealNavBar[index].style.color = " #cda45e";
    var array1 = mealImageArray[index];
    var array2 = mealNameArray[index];
    var array3 = mealPriceArray[index];
    for(var i = 0; i < array1.length; i++)
    {
        $(mealsImages[i]).attr("src" , array1[i]);
        mealName[i].innerHTML = array2[i];
        mealPrice[i].innerHTML = "$" + array3[i];
    }
    if(index != 0)
    {
        $(".displayTrue").addClass("displayNone");
    }
    else
    {
        $(".displayTrue").removeClass("displayNone");
    }
}
var specialMealsImageArray = [
    "images/specials-1.png",
    "images/specials-2.png",
    "images/specials-3.png",
    "images/specials-4.png",
    "images/specials-5.png"
]
var specialMeals_h3_Array = [
    "Architecto ut aperiam autem id",
    "Et blanditiis nemo veritatis excepturi",
    "Impedit facilis occaecati odio neque aperiam sit",
    "Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore",
    "Est eveniet ipsam sindera pad rone matrelat sando reda"
]
var p1SpecialMeal = [
    "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    "Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut",
    "Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus",
    "Omnis blanditiis saepe eos autem qui sunt debitis porro quia."
]
var p2SpecialMeal = [
    "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
    "Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal",
    "Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae",
    "Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore",
    "Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel"
]
var specialMealsLinks = Array.from(document.querySelectorAll(".mealsDescription li"));
specialMealsLinks[0].style.backgroundColor = "#cda45e";
specialMealsLinks[0].style.color = "#1a1814";
for(var i = 0; i < specialMealsLinks.length; i++)
{
    specialMealsLinks[i].addEventListener("click" , changeImage);
}
var specialCount = 0;
function changeImage()
{
    var index = specialMealsLinks.indexOf(this);
    for(var i = 0; i < specialMealsLinks.length; i++)
    {
        if(specialMealsLinks[i].style.backgroundColor != "transparent" && i != index && specialCount > 0)
        {
            $(".specialsDiv").css("display" , "none");
            specialMealsLinks[i].style.backgroundColor = "transparent";
        }
        if(specialMealsLinks[i].style.color != "white" && i != index)
        {
            if(specialCount > 0)
            {
                $(".specialsDiv").css("display" , "none");
            }
            specialMealsLinks[i].style.backgroundColor = "transparent";
            specialMealsLinks[i].style.color = "white";
        }
    }
    specialMealsLinks[index].style.backgroundColor = "#cda45e";
    specialMealsLinks[index].style.color = "#1a1814";
    $(".specialMealsImage").attr("src" , specialMealsImageArray[index]);
    document.getElementById("h3SpecialMeal").innerHTML = specialMeals_h3_Array[index];
    document.getElementById("p1SpecialMeal").innerHTML = p1SpecialMeal[index];
    document.getElementById("p2SpecialMeal").innerHTML = p2SpecialMeal[index];
    $(".specialsDiv").fadeIn(500);
    specialCount++;
}
var eventType = Array.from(document.querySelectorAll(".eventType"));
for(var i = 0; i < eventType.length; i++)
{
    eventType[i].style.display = "none";
}
eventType[0].style.display = "block";
var eventsNavBar = Array.from(document.querySelectorAll(".eventsNavBar li"));
eventsNavBar[0].style.color = "#cda45e";
for(var i = 0; i < eventsNavBar.length; i++)
{
    eventsNavBar[i].addEventListener("click" , showEvent)
}
function showEvent()
{
    var index = eventsNavBar.indexOf(this);
    for(var i = 0; i < eventType.length; i++)
    {
        if(eventType[i].style.display != "none" && i != index)
        {
            eventType[i].style.display = "none";
        }
        if(eventsNavBar[i].style.color != "white" && i != index)
        {
            eventsNavBar[i].style.color = "white"
        }
    }
    $(eventType[index]).fadeIn(500);
    eventsNavBar[index].style.color = "#cda45e";
}
var galleryImage = Array.from(document.querySelectorAll(".galleryImage"));
var imageIndex = 0;
var currentImage;
for(var i = 0; i < galleryImage.length; i++)
{
    galleryImage[i].addEventListener("click" , showTheSlider)
}
function showTheSlider(e)
{
    currentImage = e.target.src;
    imageIndex = galleryImage.indexOf(e.target);
    $(".restaurantImages").attr("src" , currentImage);
    $(".sliderLayer").fadeIn(200);
    $(".sliderLayer").css("display" , "flex");
}
$(".sliderGrayLayer").click(function()
{
    $(".sliderLayer").fadeOut(200);
})
document.querySelector(".nextImageSlide").addEventListener("click" , nextSlide)
function nextSlide()
{
    $(".restaurantImages").fadeOut(0);
    imageIndex++;
    if(imageIndex >= galleryImage.length)
    {
        imageIndex = 0;
    }
    $(".restaurantImages").attr("src" , galleryImage[imageIndex].src);
    $(".restaurantImages").fadeIn(200);
}
document.querySelector(".previousImageSlide").addEventListener("click" , previousSlide)
function previousSlide()
{
    $(".restaurantImages").fadeOut(0);
    imageIndex--;
    if(imageIndex < 0)
    {
        imageIndex = galleryImage.length - 1;
    }
    $(".restaurantImages").attr("src" , galleryImage[imageIndex].src);
    $(".restaurantImages").fadeIn(200);
}
document.addEventListener("keydown" , keyboardSlide)
function keyboardSlide(e)
{
    if(e.keyCode == 39)
    {
        nextSlide();
    }
    else if(e.keyCode == 37)
    {
        previousSlide();
    }
}
var scrollToTheSection = Array.from(document.querySelectorAll(".scrollToTheSection"));
for(var i = 0; i < scrollToTheSection.length; i++)
{
    scrollToTheSection[i].addEventListener("click" , scrollToSection)
}
$(window).scroll(function()
{
    if($(window).scrollTop() >= $(".section2").offset().top)
    {
        $(".scrollUp").fadeIn(1000);
    }
    else
    {
        $(".scrollUp").fadeOut(1000);
    }
})
function scrollToSection()
{
    var href = $(this).attr("href");
    var scrolling = $(href).offset().top;
    $("html , body").animate({scrollTop: scrolling} , 1000);
}
$(".scrollUp i").click(function()
{
    $("html , body").animate({scrollTop : 0} , 1000);
})
var nameRegex = /^[a-zA-Z]{4,}.{0,}$/;
var emailRegex = /^[A-Za-z]{5,}(.+){0,}@(gmail|hotmail|outlook|yahoo).com$/;
var phoneRegex = /^01[0125][0-9]{8}$/;
var dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/\-]\d{4}$/;
var timeRegex = /^(0?[1-9]|1[0-9]|2[0-4]):(00|[0-5][0-9])$/;
var numberOfPeopleRegex = /^([0-9]|[123][0-9]|40)$/;
var subjectRegex = /^.{8,}$/;
var messageRegex = /^.+$/;
var book_a_table_inputs = Array.from(document.querySelectorAll(".bookingATableForm .row  .col-xl-4 div input"));
var send_message_inputs = Array.from(document.querySelectorAll("form div div input"));
var book_a_table_paragraph = Array.from(document.querySelectorAll(".bookingATableForm .row  .col-xl-4 div .warningMessage"));
var send_message_paragraph = Array.from(document.querySelectorAll("form div div .warningSendMessage"));
var book_a_table_regex = [nameRegex , emailRegex , phoneRegex , dateRegex , timeRegex , numberOfPeopleRegex];
var send_message_regex = [nameRegex , emailRegex , subjectRegex];
var book_a_table = document.querySelector(".bookATableButton");
var send_message = document.querySelector(".sendMessageButton");
send_message.addEventListener("click" , sendMessage)
book_a_table.addEventListener("click" , bookTheTable)
function sendMessage()
{
    displayError(send_message_inputs , send_message_regex , send_message_paragraph);
    if(messageRegex.test($("form div div textarea").val()) == false)
    {
        $(send_message_paragraph[send_message_paragraph.length - 1]).slideDown(500);
    }
    else
    {
        $(send_message_paragraph[send_message_paragraph.length - 1]).slideUp(500);
    }
}
function bookTheTable()
{
    displayError(book_a_table_inputs , book_a_table_regex , book_a_table_paragraph);
}
function displayError(inputs , regex , warningParagraph)
{
    for(var i = 0; i < inputs.length; i++)
    {
        if(regex[i].test(inputs[i].value) == false)
        {
            $(warningParagraph[i]).slideDown(500);
        }
        else
        {
            $(warningParagraph[i]).slideUp(500);
        }
    }
}