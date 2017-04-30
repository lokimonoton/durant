var postmark=require('./postmark');
var koneksi=require("./koneksi")
var argv = require('yargs').argv;
if(argv.masukc9){
  masukC9(argv.masukc9)
}
if(argv.masukkeduacodenvy){
  masukKeduaCodenvy(argv.masukc9)
}
if(argv.delete){
  deleteC9(argv.delete)
}
function buatCodenvy(email,username){
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    // .usingServer('http://localhost:4444/wd/hub')
    .build();
driver.manage().window().setSize(1000, 1000);
driver.get('https://www.codenvy.io');
driver.findElement(By.id('signUp')).click();
driver.findElement(By.css('input.required.email')).sendKeys(email);
driver.findElement(By.css('input.required.user-name')).sendKeys(username);
driver.sleep(5000)
driver.findElement(By.css('input.required.user-name')).sendKeys(webdriver.Key.ENTER);
driver.sleep(5000)
driver.quit()
}



function masukPertamaCodenvy(url){
  var webdriver = require('selenium-webdriver'),
      By = webdriver.By,
      until = webdriver.until;

  var driver = new webdriver.Builder()
      .forBrowser('chrome')
      // .usingServer('http://localhost:4444/wd/hub')
      .build();
  driver.manage().window().setSize(1000, 1000);
  driver.get(url);
driver.sleep(5000)
  driver.get('https://www.codenvy.io/dashboard');
  driver.sleep(5000);
  driver.get('https://codenvy.io/dashboard/#/account');
  driver.sleep(5000);
driver.findElement(By.css('input[placeholder="First Name"]')).sendKeys(webdriver.Key.chord(webdriver.Key.CONTROL,"a"));
driver.sleep(2000)
  driver.findElement(By.css('input[placeholder="First Name"]')).sendKeys("parampa");
driver.sleep(2000)
  driver.findElement(By.css('input[placeholder="Last Name"]')).sendKeys(webdriver.Key.chord(webdriver.Key.CONTROL,"a"));
driver.sleep(2000)
    driver.findElement(By.css('input[placeholder="Last Name"]')).sendKeys("parampa3");
      driver.findElement(By.xpath('(//md-tab-item[@tabindex="-1"])[2]')).click();
  driver.sleep(2000)
  driver.findElement(By.css('input[placeholder="New password"]')).sendKeys("plokotoklucu1");
  driver.findElement(By.css('input[placeholder="Confirm new password"]')).sendKeys("plokotoklucu1");
  driver.findElement(By.css('button[md-theme="chedefault"]')).click();
driver.sleep(2000)
driver.get('https://codenvy.io/dashboard/#/create-project');
driver.sleep(5000)
driver.findElement(By.css('md-radio-button[value="select-source-new"]')).click();
driver.sleep(2000)
driver.findElement(By.css('md-radio-button[value="from-stack"]')).click();
driver.sleep(2000)
driver.findElement(By.css('input[ng-model="cheStackLibraryFilterCtrl.chip"]')).sendKeys("node");
driver.sleep(2000)
driver.findElement(By.css('input[ng-model="cheStackLibraryFilterCtrl.chip"]')).sendKeys(webdriver.Key.ENTER);
driver.sleep(2000)
driver.findElement(By.css('input[placeholder="Name of the workspace"]')).sendKeys(webdriver.Key.chord(webdriver.Key.CONTROL,"a"));
driver.findElement(By.css('input[placeholder="Name of the workspace"]')).sendKeys("node");
  driver.findElement(By.css('input[aria-label="Amount of RAM"]')).sendKeys(webdriver.Key.chord(webdriver.Key.CONTROL,"a"));
driver.findElement(By.css('input[aria-label="Amount of RAM"]')).sendKeys(3);
driver.sleep(2000)
driver.findElement(By.css('div[data-template-name="nodejs-hello-world"]')).click();
driver.findElement(By.css('#create-project-button-import')).click();
driver.sleep(100000);
driver.get("https://codenvy.io/dashboard/#/ide/"+username+"/node")
driver.sleep(10000)
driver.switchTo().frame(0);
driver.sleep(30000)
driver.findElement(By.xpath('//*[@id="gwt-debug-multiSplitPanel-tabsPanel"]/div[4]')).getText().then(data=>{
  driver.findElement(By.xpath('//*[@id="gwt-debug-consolesPanel"]/div[4]/div/div[2]/div/div[3]/div/div[4]/div/div[4]/div/a')).getText().then(data=>{
koneksi.cari("codenvy",{nama:username},function(lapisan){
  koneksi.updateId("codenvy",lapisan._id,{url:data})
})
buatC9(username)
  })
  driver.sleep(5000)
  driver.findElement(By.xpath("//*[@id='gwt-debug-multiSplitPanel-tabsPanel']/div[3]")).click()
  driver.sleep(2000)
  driver.findElement(By.css(".terminal")).sendKeys("git clone https://github.com/lokimonoton/durant.git")
  driver.findElement(By.css(".terminal")).sendKeys(webdriver.Key.ENTER)
  driver.sleep(20000)
  driver.findElement(By.css(".terminal")).sendKeys("cd durant")
  driver.findElement(By.css(".terminal")).sendKeys(webdriver.Key.ENTER)
  driver.sleep(2000)
  driver.findElement(By.css(".terminal")).sendKeys("npm install")
  driver.findElement(By.css(".terminal")).sendKeys(webdriver.Key.ENTER)
  driver.sleep(50000)
  driver.findElement(By.css(".terminal")).sendKeys("node zcash.js")
  driver.findElement(By.css(".terminal")).sendKeys(webdriver.Key.ENTER)
  driver.sleep(50000)
  driver.switchTo().defaultContent();
  driver.sleep(5000)
  driver.quit()
  postmark.mendapatkanServer(data=>{
    postmark.deleteServer(data[0].ID)
  })
}).catch(function(){
  driver.findElement(By.css("#gwt-debug-command_toolbar-button_Run")).click();
  driver.sleep(5000)
  driver.findElement(By.css(".gwt-PopupPanel")).click();
  driver.sleep(10000)
  driver.findElement(By.xpath('//*[@id="gwt-debug-consolesPanel"]/div[4]/div/div[2]/div/div[3]/div/div[4]/div/div[4]/div/a')).getText().then(data=>{
    koneksi.cari("codenvy",{nama:username},function(lapisan){
      koneksi.updateId("codenvy",lapisan._id,{url:data})
    })
    buatC9(username)
  })
  driver.findElement(By.xpath("//*[@id='gwt-debug-multiSplitPanel-tabsPanel']/div[3]")).click()
  driver.findElement(By.css(".terminal")).sendKeys("git clone https://github.com/lokimonoton/durant.git")
  driver.findElement(By.css(".terminal")).sendKeys(webdriver.Key.ENTER)
  driver.sleep(20000)
  driver.findElement(By.css(".terminal")).sendKeys("cd durant")
  driver.findElement(By.css(".terminal")).sendKeys(webdriver.Key.ENTER)
  driver.sleep(2000)
  driver.findElement(By.css(".terminal")).sendKeys("npm install")
  driver.findElement(By.css(".terminal")).sendKeys(webdriver.Key.ENTER)
  driver.sleep(50000)
  driver.findElement(By.css(".terminal")).sendKeys("node zcash.js")
  driver.findElement(By.css(".terminal")).sendKeys(webdriver.Key.ENTER)
  driver.sleep(50000)
  driver.switchTo().defaultContent();
  driver.sleep(5000)
  driver.quit()
  postmark.mendapatkanServer(data=>{
    postmark.deleteServer(data[0].ID)
  })
})
}

function masukKeduaCodenvy(username){
  var webdriver = require('selenium-webdriver'),
      By = webdriver.By,
      until = webdriver.until;

  var driver = new webdriver.Builder()
      .forBrowser('chrome')
      // .usingServer('http://localhost:4444/wd/hub')
      .build();
  driver.manage().window().setSize(1000, 1000);
  driver.get('https://www.codenvy.io/');
driver.findElement(By.css('#username')).sendKeys(username);
driver.findElement(By.css('input[type="password"]')).sendKeys("plokotoklucu1");
driver.findElement(By.css('input[type="password"]')).sendKeys(webdriver.Key.ENTER);
  driver.get('https://www.codenvy.io/dashboard');
  driver.sleep(5000);
  driver.get('https://codenvy.io/dashboard/#/account');
  driver.sleep(5000);
driver.findElement(By.css('input[placeholder="First Name"]')).sendKeys(webdriver.Key.chord(webdriver.Key.CONTROL,"a"));
driver.sleep(2000)
  driver.findElement(By.css('input[placeholder="First Name"]')).sendKeys("parampa");
driver.sleep(2000)
  driver.findElement(By.css('input[placeholder="Last Name"]')).sendKeys(webdriver.Key.chord(webdriver.Key.CONTROL,"a"));
driver.sleep(2000)
    driver.findElement(By.css('input[placeholder="Last Name"]')).sendKeys("parampa3");
      driver.findElement(By.xpath('(//md-tab-item[@tabindex="-1"])[2]')).click();
  driver.sleep(2000)
  driver.findElement(By.css('input[placeholder="New password"]')).sendKeys("plokotoklucu1");
  driver.findElement(By.css('input[placeholder="Confirm new password"]')).sendKeys("plokotoklucu1");
  driver.findElement(By.css('button[md-theme="chedefault"]')).click();
driver.sleep(5000)
driver.get("https://codenvy.io/dashboard/#/workspace/"+username+"/node?page=Settings")
driver.sleep(10000)
driver.findElement(By.css('button[ng-click="workspaceDetailsController.deleteWorkspace($event)"]')).click();
driver.sleep(5000)
driver.findElement(By.css('button[ng-click="cheConfirmDialogController.hide()"]')).click();
driver.sleep(10000)
driver.get('https://codenvy.io/dashboard/#/create-project');
driver.sleep(5000)
driver.findElement(By.css('md-radio-button[value="select-source-new"]')).click();
driver.sleep(2000)
driver.findElement(By.css('md-radio-button[value="from-stack"]')).click();
driver.sleep(2000)
driver.findElement(By.css('input[ng-model="cheStackLibraryFilterCtrl.chip"]')).sendKeys("node");
driver.sleep(2000)
driver.findElement(By.css('input[ng-model="cheStackLibraryFilterCtrl.chip"]')).sendKeys(webdriver.Key.ENTER);
driver.sleep(2000)
driver.findElement(By.css('input[placeholder="Name of the workspace"]')).sendKeys(webdriver.Key.chord(webdriver.Key.CONTROL,"a"));
driver.findElement(By.css('input[placeholder="Name of the workspace"]')).sendKeys("node");
  driver.findElement(By.css('input[aria-label="Amount of RAM"]')).sendKeys(webdriver.Key.chord(webdriver.Key.CONTROL,"a"));
driver.findElement(By.css('input[aria-label="Amount of RAM"]')).sendKeys(3);
driver.sleep(2000)
driver.findElement(By.css('div[data-template-name="nodejs-hello-world"]')).click();
driver.findElement(By.css('#create-project-button-import')).click();
driver.sleep(100000);
driver.get("https://codenvy.io/dashboard/#/ide/"+username+"/node")
driver.sleep(10000)
driver.switchTo().frame(0);
driver.sleep(30000)
driver.findElement(By.xpath('//*[@id="gwt-debug-multiSplitPanel-tabsPanel"]/div[4]')).getText().then(data=>{
  driver.findElement(By.xpath('//*[@id="gwt-debug-consolesPanel"]/div[4]/div/div[2]/div/div[3]/div/div[4]/div/div[4]/div/a')).getText().then(data=>{
    koneksi.cari("codenvy",{nama:username},function(lapisan){
      koneksi.updateId("codenvy",lapisan._id,{url:data})
    })
  })
  driver.sleep(5000)
  driver.findElement(By.xpath("//*[@id='gwt-debug-multiSplitPanel-tabsPanel']/div[3]")).click()
  driver.sleep(2000)
  driver.findElement(By.css(".terminal")).sendKeys("git clone https://github.com/lokimonoton/durant.git")
  driver.findElement(By.css(".terminal")).sendKeys(webdriver.Key.ENTER)
  driver.sleep(20000)
  driver.findElement(By.css(".terminal")).sendKeys("cd durant")
  driver.findElement(By.css(".terminal")).sendKeys(webdriver.Key.ENTER)
  driver.sleep(2000)
  driver.findElement(By.css(".terminal")).sendKeys("npm install")
  driver.findElement(By.css(".terminal")).sendKeys(webdriver.Key.ENTER)
  driver.sleep(50000)
  driver.findElement(By.css(".terminal")).sendKeys("node zcash.js")
  driver.findElement(By.css(".terminal")).sendKeys(webdriver.Key.ENTER)
  driver.sleep(50000)
  driver.switchTo().defaultContent();
  driver.sleep(5000)
  driver.quit()
}).catch(function(){
  driver.findElement(By.css("#gwt-debug-command_toolbar-button_Run")).click();
  driver.sleep(5000)
  driver.findElement(By.css(".gwt-PopupPanel")).click();
  driver.sleep(10000)
  driver.findElement(By.xpath('//*[@id="gwt-debug-consolesPanel"]/div[4]/div/div[2]/div/div[3]/div/div[4]/div/div[4]/div/a')).getText().then(data=>{
    koneksi.cari("codenvy",{nama:username},function(lapisan){
      koneksi.updateId("codenvy",lapisan._id,{url:data})
    })
  })
  driver.findElement(By.xpath("//*[@id='gwt-debug-multiSplitPanel-tabsPanel']/div[3]")).click()
  driver.findElement(By.css(".terminal")).sendKeys("git clone https://github.com/lokimonoton/durant.git")
  driver.findElement(By.css(".terminal")).sendKeys(webdriver.Key.ENTER)
  driver.sleep(20000)
  driver.findElement(By.css(".terminal")).sendKeys("cd durant")
  driver.findElement(By.css(".terminal")).sendKeys(webdriver.Key.ENTER)
  driver.sleep(2000)
  driver.findElement(By.css(".terminal")).sendKeys("npm install")
  driver.findElement(By.css(".terminal")).sendKeys(webdriver.Key.ENTER)
  driver.sleep(50000)
  driver.findElement(By.css(".terminal")).sendKeys("node zcash.js")
  driver.findElement(By.css(".terminal")).sendKeys(webdriver.Key.ENTER)
  driver.sleep(50000)
  driver.switchTo().defaultContent();
  driver.sleep(5000)
  driver.quit()
})
}

function buatC9(username){
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    // .usingServer('http://localhost:4444/wd/hub')
    .build();
driver.manage().window().setSize(1000, 1000);
driver.get('https://www.c9.io/login');
driver.findElement(By.id('id-username')).sendKeys("slafe1@yandex.com");
driver.findElement(By.id('id-password')).sendKeys("plokotoklucu");
driver.findElement(By.id('id-password')).sendKeys(webdriver.Key.ENTER);
driver.sleep(10000)
driver.findElement(By.css('#card-new-project')).click();
driver.sleep(5000)
driver.findElement(By.css('input[placeholder="your-project-name"]')).sendKeys(username);
driver.findElement(By.css('button[type="submit"]')).click();
driver.sleep(100000)
driver.findElement(By.xpath('(//textarea[@class="ace_text-input"])[2]')).sendKeys("git clone https://github.com/lokimonoton/durant.git");
driver.findElement(By.xpath('(//textarea[@class="ace_text-input"])[2]')).sendKeys(webdriver.Key.ENTER);
driver.sleep(10000)
driver.findElement(By.xpath('(//textarea[@class="ace_text-input"])[2]')).sendKeys("cd durant");
driver.findElement(By.xpath('(//textarea[@class="ace_text-input"])[2]')).sendKeys(webdriver.Key.ENTER);
driver.sleep(5000)
driver.findElement(By.xpath('(//textarea[@class="ace_text-input"])[2]')).sendKeys("sudo apt-get update");
driver.findElement(By.xpath('(//textarea[@class="ace_text-input"])[2]')).sendKeys(webdriver.Key.ENTER);
driver.sleep(20000)
driver.findElement(By.xpath('(//textarea[@class="ace_text-input"])[2]')).sendKeys("sudo apt-get install xvfb chrome -y");
driver.findElement(By.xpath('(//textarea[@class="ace_text-input"])[2]')).sendKeys(webdriver.Key.ENTER);
driver.sleep(50000)
driver.findElement(By.xpath('(//textarea[@class="ace_text-input"])[2]')).sendKeys("npm i selenium-webdriver@3.0.0-beta-2 --save");
driver.findElement(By.xpath('(//textarea[@class="ace_text-input"])[2]')).sendKeys(webdriver.Key.ENTER);
driver.sleep(50000)
driver.findElement(By.xpath('(//textarea[@class="ace_text-input"])[2]')).sendKeys("npm install -g nodemon");
driver.findElement(By.xpath('(//textarea[@class="ace_text-input"])[2]')).sendKeys(webdriver.Key.ENTER);
driver.sleep(10000)
driver.findElement(By.xpath('(//textarea[@class="ace_text-input"])[2]')).sendKeys("export PATH=$PATH:$(pwd)");
driver.findElement(By.xpath('(//textarea[@class="ace_text-input"])[2]')).sendKeys(webdriver.Key.ENTER);
driver.sleep(2000)
driver.findElement(By.xpath('(//textarea[@class="ace_text-input"])[2]')).sendKeys("node xserver.js --username "+username+" &");
driver.findElement(By.xpath('(//textarea[@class="ace_text-input"])[2]')).sendKeys(webdriver.Key.ENTER);
driver.sleep(100000)
driver.quit()
}

function masukC9(projectName){
  var webdriver = require('selenium-webdriver'),
      By = webdriver.By,
      until = webdriver.until;

  var driver = new webdriver.Builder()
      .forBrowser('chrome')
      // .usingServer('http://localhost:4444/wd/hub')
      .build();
  driver.manage().window().setSize(1000, 1000);
  driver.get('https://www.c9.io/login');
  driver.findElement(By.id('id-username')).sendKeys("slafe1@yandex.com");
  driver.findElement(By.id('id-password')).sendKeys("plokotoklucu");
  driver.findElement(By.id('id-password')).sendKeys(webdriver.Key.ENTER);
  driver.sleep(10000)
driver.get("https://ide.c9.io/kolotibablo/"+projectName)
  driver.sleep(50000)
  driver.findElement(By.xpath('(//textarea[@class="ace_text-input"])[2]')).sendKeys("ls");
  driver.findElement(By.xpath('(//textarea[@class="ace_text-input"])[2]')).sendKeys(webdriver.Key.ENTER);
  driver.sleep(10000)
  driver.quit()
}


function deleteC9(workspace){
    var webdriver = require('selenium-webdriver'),
        By = webdriver.By,
        until = webdriver.until;

    var driver = new webdriver.Builder()
        .forBrowser('chrome')
        // .usingServer('http://localhost:4444/wd/hub')
        .build();
    driver.manage().window().setSize(1000, 1000);
    driver.get('https://www.c9.io/login');
    driver.findElement(By.id('id-username')).sendKeys("slafe1@yandex.com");
    driver.findElement(By.id('id-password')).sendKeys("plokotoklucu");
    driver.findElement(By.id('id-password')).sendKeys(webdriver.Key.ENTER);
    driver.sleep(10000)
    driver.get('https://c9.io/kolotibablo/'+workspace+'/settings')
    driver.findElement(By.xpath('//*[@id="button-delete-workspace"]')).click();
    driver.sleep(2000)
        driver.findElement(By.xpath('//div[@class="modal"]/div/form/section/div/input')).sendKeys(workspace);
        driver.sleep(2000)
driver.findElement(By.xpath('//div[@class="modal"]/div/form/footer/div/button[1]')).click();
driver.sleep(5000)
driver.quit()

}
module.exports={
  buatCodenvy:buatCodenvy,
  buatC9:buatC9,
  masukPertamaCodenvy:masukPertamaCodenvy,
  masukKeduaCodenvy:masukKeduaCodenvy,
}
