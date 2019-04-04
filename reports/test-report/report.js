$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US1.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "As a user\r\nI want to access to the URL address provided for the landing page\r\nSo that I can see the list of the contacts available",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1174256000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Landing page\u0027s title and text contains \"Contacts Orchestrator Solution\"",
  "description": "",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page;landing-page\u0027s-title-and-text-contains-\"contacts-orchestrator-solution\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the title of the page should be \"Contacts Orchestrator Solution\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I can see the text \"Contacts Orchestrator Solution\"",
  "keyword": "And "
});
formatter.match({
  "location": "US1StepsDef.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "duration": 1061684400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contacts Orchestrator Solution",
      "offset": 33
    }
  ],
  "location": "US1StepsDef.theTitleOfThePageShouldBe(String)"
});
formatter.result({
  "duration": 27614000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contacts Orchestrator Solution",
      "offset": 20
    }
  ],
  "location": "US1StepsDef.iCanSeeTheText(String)"
});
formatter.result({
  "duration": 16421800,
  "status": "passed"
});
formatter.after({
  "duration": 1961300,
  "status": "passed"
});
});