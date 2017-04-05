var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    // .usingServer('http://localhost:4444/wd/hub')
    .build();
    driver.get('https://github.com/login');
     driver.findElement(By.css("input#login_field")).sendKeys("spiritbrother1");
     driver.findElement(By.css("input#password")).sendKeys("plokotoklucu1");
     driver.findElement(By.css("input.btn.btn-primary.btn-block")).click();
    driver.sleep(10000)
    driver.get('https://codenvy.io/site/login');
    driver.findElement(By.css("a.github")).click();
    driver.sleep(10000)
    driver.get('https://codenvy.io/dashboard/#/create-project')
    driver.sleep(10000)
    driver.findElement(By.css("md-radio-button[value='select-source-new']")).click();
    driver.findElement(By.css("md-radio-button[value='from-stack']")).click();
    driver.findElement(By.css("input[ng-model='cheStackLibraryFilterCtrl.chip']")).sendKeys("NODE.JS");
driver.findElement(By.css("input[ng-model='cheStackLibraryFilterCtrl.chip']")).sendKeys(webdriver.Key.ENTER);
driver.findElement(By.css("input[placeholder='Name of the workspace']")).sendKeys(webdriver.Key.chord(webdriver.Key.CONTROL, 'a'));
driver.findElement(By.css("input[placeholder='Name of the workspace']")).sendKeys("ciki");
driver.findElement(By.css("input[aria-label='Amount of RAM']")).sendKeys(webdriver.Key.chord(webdriver.Key.CONTROL, 'a'));
driver.findElement(By.css("input[aria-label='Amount of RAM']")).sendKeys("3");
driver.findElement(By.css("div[data-template-name='nodejs-hello-world']")).click();
driver.findElement(By.css("#create-project-button-import")).click();

    driver.sleep(100000000)