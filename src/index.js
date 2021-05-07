const angular = require("angular");

const app = angular.module("app", [
  // minimum required dependencies
  "ui.router",
  "ui.bootstrap",
  "ui.bootstrap.modal",
  "smart-table"
]);

app.controller("AppController", function($scope) {
  $scope.name = "AngularJS Boilerplate";
  $scope.itemsPerPage = 4;
  $scope.maxDisplayedPages = 7;
  $scope.rowCollection = [
    {
      id: 1,
      firstName: "Jocelyn",
      lastName: "Gilliam",
      emailAddress: "jgilliam0@booking.com",
      department: "Engineering"
    },
    {
      id: 2,
      firstName: "Eugen",
      lastName: "Kilalea",
      emailAddress: "ekilalea1@ifeng.com",
      department: "Product Management"
    },
    {
      id: 3,
      firstName: "Piotr",
      lastName: "Dyte",
      emailAddress: "pdyte2@163.com",
      department: "Product Management"
    },
    {
      id: 4,
      firstName: "Ryann",
      lastName: "Crommett",
      emailAddress: "rcrommett3@guardian.co.uk",
      department: "Training"
    },
    {
      id: 5,
      firstName: "Torre",
      lastName: "Matyushonok",
      emailAddress: "tmatyushonok4@sohu.com",
      department: "Business Development"
    },
    {
      id: 6,
      firstName: "Germain",
      lastName: "Tarquini",
      emailAddress: "gtarquini5@pinterest.com",
      department: "Training"
    },
    {
      id: 7,
      firstName: "Estele",
      lastName: "Tout",
      emailAddress: "etout6@telegraph.co.uk",
      department: "Research and Development"
    },
    {
      id: 8,
      firstName: "Harv",
      lastName: "Igoe",
      emailAddress: "higoe7@xinhuanet.com",
      department: "Marketing"
    },
    {
      id: 9,
      firstName: "Salaidh",
      lastName: "Sam",
      emailAddress: "ssam8@xinhuanet.com",
      department: "Human Resources"
    },
    {
      id: 10,
      firstName: "Tilda",
      lastName: "Blues",
      emailAddress: "tblues9@illinois.edu",
      department: "Research and Development"
    },
    {
      id: 11,
      firstName: "Luke",
      lastName: "Jupe",
      emailAddress: "ljupea@answers.com",
      department: "Business Development"
    },
    {
      id: 12,
      firstName: "Nolie",
      lastName: "Mattacks",
      emailAddress: "nmattacksb@tripadvisor.com",
      department: "Support"
    },
    {
      id: 13,
      firstName: "Rhody",
      lastName: "LeCount",
      emailAddress: "rlecountc@reverbnation.com",
      department: "Accounting"
    },
    {
      id: 14,
      firstName: "Laurence",
      lastName: "Kinforth",
      emailAddress: "lkinforthd@deliciousdays.com",
      department: "Business Development"
    },
    {
      id: 15,
      firstName: "Nance",
      lastName: "Chinnock",
      emailAddress: "nchinnocke@admin.ch",
      department: "Research and Development"
    },
    {
      id: 16,
      firstName: "Harwilll",
      lastName: "Liptrod",
      emailAddress: "hliptrodf@usa.gov",
      department: "Engineering"
    },
    {
      id: 17,
      firstName: "Sergeant",
      lastName: "D'orsay",
      emailAddress: "sdorsayg@github.io",
      department: "Accounting"
    },
    {
      id: 18,
      firstName: "Eran",
      lastName: "Lawlee",
      emailAddress: "elawleeh@nature.com",
      department: "Research and Development"
    },
    {
      id: 19,
      firstName: "Sydelle",
      lastName: "Silman",
      emailAddress: "ssilmani@cisco.com",
      department: "Support"
    },
    {
      id: 20,
      firstName: "Adela",
      lastName: "Shambrook",
      emailAddress: "ashambrookj@pcworld.com",
      department: "Legal"
    },
    {
      id: 21,
      firstName: "Stephani",
      lastName: "Postlewhite",
      emailAddress: "spostlewhitek@biblegateway.com",
      department: "Support"
    },
    {
      id: 22,
      firstName: "Hortense",
      lastName: "Spore",
      emailAddress: "hsporel@marriott.com",
      department: "Product Management"
    },
    {
      id: 23,
      firstName: "Rona",
      lastName: "Dutteridge",
      emailAddress: "rdutteridgem@spotify.com",
      department: "Human Resources"
    },
    {
      id: 24,
      firstName: "Merell",
      lastName: "Broomhead",
      emailAddress: "mbroomheadn@dedecms.com",
      department: "Legal"
    },
    {
      id: 25,
      firstName: "Erena",
      lastName: "Reece",
      emailAddress: "ereeceo@omniture.com",
      department: "Research and Development"
    },
    {
      id: 26,
      firstName: "Pearce",
      lastName: "Adderley",
      emailAddress: "padderleyp@thetimes.co.uk",
      department: "Human Resources"
    },
    {
      id: 27,
      firstName: "Laureen",
      lastName: "Habbert",
      emailAddress: "lhabbertq@wordpress.org",
      department: "Product Management"
    },
    {
      id: 28,
      firstName: "Shay",
      lastName: "McGerraghty",
      emailAddress: "smcgerraghtyr@blog.com",
      department: "Business Development"
    },
    {
      id: 29,
      firstName: "Eustacia",
      lastName: "Godsafe",
      emailAddress: "egodsafes@chicagotribune.com",
      department: "Accounting"
    },
    {
      id: 30,
      firstName: "Rory",
      lastName: "Swindlehurst",
      emailAddress: "rswindlehurstt@people.com.cn",
      department: "Research and Development"
    }
  ];
});
