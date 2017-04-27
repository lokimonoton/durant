var argv =require('yargs').argv
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

     var phantomjs_exe = require('phantomjs-prebuilt').path;
      var customPhantom = webdriver.Capabilities.phantomjs();
      customPhantom.set("phantomjs.binary.path", phantomjs_exe);
      //build custom phantomJS driver
      var driver = new webdriver.Builder()
      .withCapabilities(customPhantom)
      .usingServer('http://localhost:4444/wd/hub')
      .build();

driver.manage().window().setSize(1000, 1000);
driver.get('http://www.c9.io/login');
driver.findElement(By.id('id-username')).sendKeys('slafe1@yandex.com');
driver.findElement(By.id('id-password')).sendKeys('plokotoklucu');
driver.findElement(By.css("button[label='Sign in']")).click();
driver.sleep(10000);
driver.get('https://ide.c9.io/kolotibablo/'+argv.project);
driver.sleep(30000)
 driver.findElement(By.xpath("(//textarea[@class='ace_text-input'])[2]")).sendKeys("echo "+argv.project);
 driver.sleep(2000)
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
