app.controller("bbCtrl", function ($scope, $filter) {

    $scope.inputData = [
        {
            "jaar": 2015,
            "zelfstandigen_aftrek": 7280,
            "starters_aftrek": 2123,
            "starters_aftrek_jaar": 3,
            "oudedagsreserve": 8631,
            "oudedagsreservePercentage": 0.098,
            "mkb_winstvrijstelling": 0.14,
            "schijf1": 19822,
            "schijf23": 57585,
            "schijf1perc": 0.365,
            "schijf23perc": 0.42,
            "schijf4perc": 0.52,
            "heffingskortingSchijf1": 2203,
            "heffingskortingSchijf23Perc": 0.0232,
            "heffingskortingSchijf4": 1342,
            "heffingskortingAOWschijf1": 1123,
            "heffingskortingAOWschijf23Perc": 0.01182,
            "heffingskortingAOWschijf4": 685,
            "arbeidskortingLimit1": 9010,
            "arbeidskortingLimit2": 19463,
            "arbeidskortingLimit3": 49770,
            "arbeidskortingLimit4": 100670,
            "arbeidskorting1perc": 0.0181,
            "arbeidskorting2": 163,
            "arbeidskorting2perc": 0.19679,
            "arbeidskorting3": 2220,
            "arbeidskorting4perc": 0.04,
            "arbeidskorting5": 184,
            "arbeidskortingAOW1perc": 0.00922,
            "arbeidskortingAOW2": 84,
            "arbeidskortingAOW2perc": 0.10028,
            "arbeidskortingAOW3": 1132,
            "arbeidskortingAOW4perc": 0.02038,
            "arbeidskortingAOW5": 94,
            "bijdrageZvw": 0.0485,
            "maxBijdrageInkomen": 51976
        },
        {
            "jaar": 2016,
            "zelfstandigen_aftrek": 7280,
            "starters_aftrek": 2123,
            "starters_aftrek_jaar": 3,
            "oudedagsreserve": 8774,
            "oudedagsreservePercentage": 0.098,
            "mkb_winstvrijstelling": 0.14,
            "schijf1": 19922,
            "schijf23": 66421,
            "schijf1perc": 0.3655,
            "schijf23perc": 0.404,
            "schijf4perc": 0.52,
            "heffingskortingSchijf1": 2242,
            "heffingskortingSchijf23Perc": 0.04822,
            "heffingskortingSchijf4": 0,
            "heffingskortingAOWschijf1": 1145,
            "heffingskortingAOWschijf23Perc": 0.02460,
            "heffingskortingAOWschijf4": 0,
            "arbeidskortingLimit1": 9147,
            "arbeidskortingLimit2": 19758,
            "arbeidskortingLimit3": 34015,
            "arbeidskortingLimit4": 111590,
            "arbeidskorting1perc": 0.01793,
            "arbeidskorting2": 164,
            "arbeidskorting2perc": 0.27698,
            "arbeidskorting3": 3103,
            "arbeidskorting4perc": 0.04,
            "arbeidskorting5": 0,
            "arbeidskortingAOW1perc": 0.00915,
            "arbeidskortingAOW2": 84,
            "arbeidskortingAOW2perc": 0.14133,
            "arbeidskortingAOW3": 1585,
            "arbeidskortingAOW4perc": 0.02041,
            "arbeidskortingAOW5": 0,
            "bijdrageZvw": 0.055,
            "maxBijdrageInkomen": 52763
        },
        {
            "jaar": 2017,
            "zelfstandigen_aftrek": 7280,
            "starters_aftrek": 2123,
            "starters_aftrek_jaar": 3,
            "oudedagsreserve": 8946,
            "oudedagsreservePercentage": 0.0944,
            "mkb_winstvrijstelling": 0.14,
            "schijf1": 19981,
            "schijf23": 67071,
            "schijf1perc": 0.3655,
            "schijf23perc": 0.408,
            "schijf4perc": 0.52,
            "heffingskortingSchijf1": 2252,
            "heffingskortingSchijf23Perc": 0.04787,
            "heffingskortingSchijf4": 0,
            "heffingskortingAOWschijf1": 1151,
            "heffingskortingAOWschijf23Perc": 0.02443,
            "heffingskortingAOWschijf4": 0,
            "arbeidskortingLimit1": 9309,
            "arbeidskortingLimit2": 20108,
            "arbeidskortingLimit3": 32444,
            "arbeidskortingLimit4": 121972,
            "arbeidskorting1perc": 0.01772,
            "arbeidskorting2": 165,
            "arbeidskorting2perc": 0.28317,
            "arbeidskorting3": 3223,
            "arbeidskorting4perc": 0.036,
            "arbeidskorting5": 0,
            "arbeidskortingAOW1perc": 0.00904,
            "arbeidskortingAOW2": 86,
            "arbeidskortingAOW2perc": 0.14449,
            "arbeidskortingAOW3": 1645,
            "arbeidskortingAOW4perc": 0.01837,
            "arbeidskortingAOW5": 0,
            "bijdrageZvw": 0.054,
            "maxBijdrageInkomen": 53701
        }
    ];
    $scope.currentData = $scope.inputData[$scope.inputData.length - 1];

    $scope.obj = {
        "bool_starters_aftrek": false,
        "bool_urencriterium": true,
        "bool_oudedagsreserve": false,
        "oudedagsreserve_bedrag": "",
        "bool_aow": false,
        "winst": function () {
            var bruto_omzet = typeof $scope.obj.bruto_omzet == "undefined" ? 0 : $scope.obj.bruto_omzet;
            var overige_inkomsten = typeof $scope.obj.overige_inkomsten == "undefined" ? 0 : $scope.obj.overige_inkomsten;
            var kosten = typeof $scope.obj.kosten == "undefined" ? 0 : $scope.obj.kosten;
            var loon = typeof $scope.obj.loon == "undefined" ? 0 : $scope.obj.loon;

            var winst = bruto_omzet + overige_inkomsten + loon - kosten;
            if (winst < 0) {
                winst = 0;
            }
            return winst;
        },
        "zelfstandigen_aftrek": function () {
            if ($scope.obj.bool_urencriterium) {
                if ($scope.obj.bool_aow) {
                    return ($scope.currentData.zelfstandigen_aftrek / 2);
                } else {
                    return $scope.currentData.zelfstandigen_aftrek;
                }
            } else {
                return 0;
            }
        },
        "starters_aftrek": function () {
            if ($scope.obj.bool_starters_aftrek) {
                return $scope.currentData.starters_aftrek;
            } else {
                return 0;
            }
        },
        "maxOudedagsreserve": function () {
            var returnValue = 0;
            if ($scope.obj.bool_oudedagsreserve && $scope.obj.bool_urencriterium) {
                var winst = $scope.obj.winst() - $scope.obj.zelfstandigen_aftrek() - $scope.obj.starters_aftrek();
                var oudedagsreserve = winst * $scope.currentData.oudedagsreservePercentage;

                if (oudedagsreserve > $scope.currentData.oudedagsreserve) {
                    returnValue = $scope.currentData.oudedagsreserve;
                } else if (oudedagsreserve < 0) {
                    returnValue = 0;
                } else {
                    returnValue = oudedagsreserve;
                }
            } 
            
            $scope.oudedagslider.options.ceil = returnValue;
            
            return returnValue;
        },
        "oudedagsreserve": function () {
            var oudedagsreserve_bedrag = $scope.obj.oudedagsreserve_bedrag;
            if (oudedagsreserve_bedrag === "" || oudedagsreserve_bedrag === null) {
                oudedagsreserve_bedrag = 0;
            }
            if (oudedagsreserve_bedrag < $scope.obj.maxOudedagsreserve()) {
                return oudedagsreserve_bedrag;
            } else {
                return $scope.obj.maxOudedagsreserve();
            }
        },
        "subtotal": function () {
            var winst = $scope.obj.winst() - $scope.obj.zelfstandigen_aftrek() - $scope.obj.starters_aftrek() - $scope.obj.oudedagsreserve();
            if (winst < 0) {
                winst = 0;
            }
            return winst;
        },
        "mkb_winstvrijstelling": function () {
            var bruto_omzet = typeof $scope.obj.bruto_omzet == "undefined" ? 0 : $scope.obj.bruto_omzet;
            var kosten = typeof $scope.obj.kosten == "undefined" ? 0 : $scope.obj.kosten;
            var mkbwinst = bruto_omzet - kosten - $scope.obj.starters_aftrek() - $scope.obj.zelfstandigen_aftrek() - $scope.obj.oudedagsreserve();

            if (mkbwinst < 0) {
                return 0;
            } else {
                return Math.round(((mkbwinst * $scope.currentData.mkb_winstvrijstelling) * 100) / 100);
            }
        },
        "belastbaar_inkomen": function () {
            var belastbaar_inkomen = $scope.obj.subtotal() - $scope.obj.mkb_winstvrijstelling();
            if (belastbaar_inkomen < 0) {
                return 0;
            } else {
                return belastbaar_inkomen;
            }
        },
        schijf1: function () {
            if ($scope.obj.belastbaar_inkomen() < 0) {
                return 0;
            } else {
                if ($scope.obj.belastbaar_inkomen() < $scope.currentData.schijf1) {
                    return $scope.obj.belastbaar_inkomen();
                } else {
                    return $scope.currentData.schijf1;
                }
            }
        },
        schijf23: function () {
            if ($scope.obj.belastbaar_inkomen() < $scope.currentData.schijf1) {
                return 0;
            } else {
                if ($scope.obj.belastbaar_inkomen() < $scope.currentData.schijf23) {
                    return $scope.obj.belastbaar_inkomen() - $scope.currentData.schijf1;
                } else {
                    return $scope.currentData.schijf23 - $scope.currentData.schijf1;
                }
            }
        },
        schijf4: function () {
            var schijf4 = $scope.obj.belastbaar_inkomen() - $scope.currentData.schijf23;
            if (schijf4 < 0) {
                return 0;
            } else {
                return $scope.obj.belastbaar_inkomen() - $scope.currentData.schijf23;
            }
        },
        schijf1perc: function () {
            return Math.round((($scope.obj.schijf1() * $scope.currentData.schijf1perc) * 100) / 100);
        },
        schijf23perc: function () {
            return Math.round((($scope.obj.schijf23() * $scope.currentData.schijf23perc) * 100) / 100);
        },
        schijf4perc: function () {
            return Math.round((($scope.obj.schijf4() * $scope.currentData.schijf4perc) * 100) / 100);
        },
        heffingskorting: function () {
            var belastbaarinkomen = $scope.obj.belastbaar_inkomen();
            if ($scope.obj.bool_aow) {
                if (belastbaarinkomen <= 0) {
                    return 0;
                } else if (belastbaarinkomen < $scope.currentData.schijf1) {
                    return $scope.currentData.heffingskortingAOWschijf1;
                } else if (belastbaarinkomen < $scope.currentData.schijf23) {
                    return $scope.currentData.heffingskortingAOWschijf1 - ((belastbaarinkomen - $scope.currentData.schijf1) * $scope.currentData.heffingskortingAOWschijf23Perc);
                } else {
                    return $scope.currentData.heffingskortingAOWschijf4;
                }
            } else {
                if (belastbaarinkomen <= 0) {
                    return 0;
                } else if (belastbaarinkomen < $scope.currentData.schijf1) {
                    return $scope.currentData.heffingskortingSchijf1;
                } else if (belastbaarinkomen < $scope.currentData.schijf23) {
                    return $scope.currentData.heffingskortingSchijf1 - ((belastbaarinkomen - $scope.currentData.schijf1) * $scope.currentData.heffingskortingSchijf23Perc);
                } else {
                    return $scope.currentData.heffingskortingSchijf4;
                }
            }
        },
        arbeidskorting: function () {
            var belastbaarinkomen = $scope.obj.winst();
            if (($scope.obj.schijf1perc() - $scope.obj.heffingskorting()) < 0) {
                return 0;
            } else {
                if ($scope.obj.bool_aow) {
                    if (belastbaarinkomen <= 0) {
                        return 0;
                    } else if (belastbaarinkomen < $scope.currentData.arbeidskortingLimit1) {
                        return belastbaarinkomen * $scope.currentData.arbeidskortingAOW1perc;
                    } else if (belastbaarinkomen < $scope.currentData.arbeidskortingLimit2) {
                        return $scope.currentData.arbeidskortingAOW2 + ($scope.currentData.arbeidskortingAOW2perc * (belastbaarinkomen - $scope.currentData.arbeidskortingLimit1));
                    } else if (belastbaarinkomen < $scope.currentData.arbeidskortingLimit3) {
                        return $scope.currentData.arbeidskortingAOW3;
                    } else if (belastbaarinkomen < $scope.currentData.arbeidskortingLimit4) {
                        return $scope.currentData.arbeidskortingAOW3 - ($scope.currentData.arbeidskortingAOW4perc * (belastbaarinkomen - $scope.currentData.arbeidskortingLimit4));
                    } else if (belastbaarinkomen > $scope.currentData.arbeidskortingLimit4) {
                        return $scope.currentData.arbeidskortingAOW5;
                    }
                } else {
                    if (belastbaarinkomen <= 0) {
                        return 0;
                    } else if (belastbaarinkomen < $scope.currentData.arbeidskortingLimit1) {
                        return belastbaarinkomen * $scope.currentData.arbeidskorting1perc;
                    } else if (belastbaarinkomen < $scope.currentData.arbeidskortingLimit2) {
                        return $scope.currentData.arbeidskorting2 + ($scope.currentData.arbeidskorting2perc * (belastbaarinkomen - $scope.currentData.arbeidskortingLimit1));
                    } else if (belastbaarinkomen < $scope.currentData.arbeidskortingLimit3) {
                        return $scope.currentData.arbeidskorting3;
                    } else if (belastbaarinkomen < $scope.currentData.arbeidskortingLimit4) {
                        return $scope.currentData.arbeidskorting3 - ($scope.currentData.arbeidskorting4perc * (belastbaarinkomen - $scope.currentData.arbeidskortingLimit3));
                    } else if (belastbaarinkomen > $scope.currentData.arbeidskortingLimit4) {
                        return $scope.currentData.arbeidskorting5;
                    }
                }
            }
        },
        total: function () {
            var total = Math.round((($scope.obj.schijf1perc() + $scope.obj.schijf23perc() + $scope.obj.schijf4perc() - $scope.obj.arbeidskorting() - $scope.obj.heffingskorting()) * 100) / 100);
            var afgedragen_btw = typeof $scope.obj.afgedragen_btw == "undefined" ? 0 : $scope.obj.afgedragen_btw;
            total = total - afgedragen_btw;

            if (total < 0) {
                total = 0;
            }
            return total;
        },
        inkomensafhankelijkZvw: function() {
            var belastbaarInkomen =  $scope.obj.belastbaar_inkomen();
            if (belastbaarInkomen > $scope.currentData.maxBijdrageInkomen) {
                belastbaarInkomen = $scope.currentData.maxBijdrageInkomen;
            }
            var total = belastbaarInkomen * $scope.currentData.bijdrageZvw;
            return total;
        }
    };


    $scope.oudedagslider = {
        options: {
            floor: 0,
            ceil: 0,
            translate: function (value) {
                return $filter('currency')(value, '€', 2);
            }
        }
    };
}); 