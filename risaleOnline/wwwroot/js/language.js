i18next
    .use(window.i18nextXHRBackend)
    .init({
        debug: true,
        fallbackLng: "tr",
        backend: {
            loadPath: "Assets/app-assets/data/locales/{{lng}}.json",
        },
        returnObjects: true
    },
        function (err, t) {

            jqueryI18next.init(i18next, $);
        });