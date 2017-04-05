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
  driver.findElement(By.css("a[ng-href='#/ide/spiritbro/wksp-17oy']")).click();
  driver.sleep(20000)
driver.quit()