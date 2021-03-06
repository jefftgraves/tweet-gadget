(function($) {
    var cultures = $.global.cultures,
        en = cultures.en,
        standard = en.calendars.standard,
        culture = cultures["sr"] = $.extend(true, {}, en, {
        name: "sr",
        englishName: "Serbian",
        nativeName: "Srpski",
        language: "sr",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n$","n$"],
                ',': " ",
                '.': ",",
                symbol: "Din."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                '/': ".",
                firstDay: 1,
                days: {
                    names: ["nedelja"," ponedeljak ","utorak","sreda","četvrtak","petak","subota"],
                    namesAbbr: ["Ne","Po","Ut","Sr","Čt","Pe","Su"],
                    namesShort: ["Ne","Po","Ut","Sr","Čt","Pe","Su"]
                },
                months: {
                    names: ["Januar","Februar","Mart","April","Maj","Juni","Juli","Avgust","Septembar","Oktobar","Novembar","Decembar",""],
                    namesAbbr: ["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec",""]
                },
                monthsGenitive: {
                    names: ["Januara","Februara","Marta","Aprila","Maja","Juna","Jula","Avgusta","Septembara","Oktobara","Novembra","Decembra",""],
                    namesAbbr: ["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec",""]
                },
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM yyyy 'г.'",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy 'г.' H:mm",
                    F: "d MMMM yyyy 'г.' H:mm:ss",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sr"]);
    culture.calendar = culture.calendars.standard;
})(jQuery);
