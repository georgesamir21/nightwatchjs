# Nightwatchjs test e2e
#### Project description
* e2e test cases written in js using nightwatchjs over selenium server

#### Project setup

* Get selenium server `wget -O tests/bin/selenium-server-standalone-3.14.0.jar http://selenium-release.storage.googleapis.com/3.14/selenium-server-standalone-3.14.0.jar`

* Get latest chrome driver from https://sites.google.com/a/chromium.org/chromedriver/downloads

* Extract chrome driver and move chromedriver binary under tests/bin/

* Run `npm run test` to run nightwatch test