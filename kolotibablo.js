var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    // .usingServer('http://localhost:4444/wd/hub')
    .build();
driver.manage().window().setSize(1000, 1000);
driver.get('https://www.codenvy.io');
driver.quit()