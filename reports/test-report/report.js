$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US1.feature");
formatter.feature({
  "line": 1,
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "As a user\r\nI want to access to the URL address provided for the landing page\r\nSo that I can see the list of the contacts available",
  "id": "access-to-the-contacts-orchestrator-solution\u0027s-(cos)-landing-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1160184500,
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
  "duration": 2937621000,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Contacts Orchestrator Solution]\u003e but was:\u003c[]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat junit.framework.TestCase.assertEquals(TestCase.java:269)\r\n\tat US1StepsDef.iAccessTheLandingPageOfCOS(US1StepsDef.java:19)\r\n\tat ✽.Given I access the landing page of COS(US1.feature:6)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "duration": 1018100,
  "status": "passed"
});
});