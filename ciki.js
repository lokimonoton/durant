var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('phantomjs')
    .usingServer('http://localhost:4444/wd/hub')
    .build();
driver.manage().window().setSize(1000, 1000);
driver.get('http://www.c9.io/login');
driver.findElement(By.id('id-username')).sendKeys('slafe1@yandex.com');
driver.findElement(By.id('id-password')).sendKeys('plokotoklucu');
driver.findElement(By.css("button[label='Sign in']")).click();
driver.sleep(10000);
driver.get('https://ide.c9.io/kolotibablo/semaphore3');
driver.sleep(30000)
 driver.wait(until.elementLocated(By.xpath("//*[text()='kosong']")) , 5000);
 driver.actions().click(driver.findElement(By.xpath("//*[text()='kosong']"))).perform()
 driver.actions().doubleClick(driver.findElement(By.xpath("//*[text()='kosong']"))).perform()
 driver.sleep(5000)
driver.findElement(By.xpath("(//textarea[@class='ace_text-input'])[2]")).sendKeys("node durant/lakim.js &");
driver.findElement(By.xpath("(//textarea[@class='ace_text-input'])[2]")).sendKeys(webdriver.Key.chord(webdriver.Key.CONTROL,"a"));
driver.findElement(By.xpath("(//textarea[@class='ace_text-input'])[2]")).sendKeys(webdriver.Key.BACK_SPACE);
driver.sleep(5000)
driver.takeScreenshot().then(
    function(image, err) {
        require('fs').writeFile('out.png', image, 'base64', function(err) {
            console.log(err);
        });
    }
);
driver.quit()
