var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('phantomjs')
    .usingServer('http://localhost:4444/wd/hub')
    .build();
driver.manage().window().setSize(1000, 1000);
driver.get('http://www.c9.io/login');
driver.findElement(By.id('id-username')).sendKeys('slafe29@yandex.com');
driver.findElement(By.id('id-password')).sendKeys('plokotoklucu');
driver.findElement(By.css("button[label='Sign in']")).click();
driver.sleep(10000);
driver.get('https://ide.c9.io/spiritbro/sampan');
driver.sleep(20000)
 driver.wait(until.elementLocated(By.xpath("(//textarea[@class='ace_text-input'])[2]")) , 5000);
driver.findElement(By.xpath("(//textarea[@class='ace_text-input'])[2]")).sendKeys("ps -ef");
driver.findElement(By.xpath("(//textarea[@class='ace_text-input'])[2]")).sendKeys(webdriver.Key.ENTER);
driver.sleep(5000)
driver.takeScreenshot().then(
    function(image, err) {
        require('fs').writeFile('out.png', image, 'base64', function(err) {
            console.log(err);
        });
    }
);
driver.quit()