const homeController = (() => {});

homeController.displayHome = function (ctx) {
    ctx.loggedIn = userManager.isLoggedIn();
    ctx.username = userManager.getUsername();
    ctx.id = sessionStorage.getItem('userId');
    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/home/home.hbs');
    })
};