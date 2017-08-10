module.exports = {
    before : function (browser) {
        browser
            .url('http://qa-test.avenuecode.com/')
            .waitForElementVisible('body', 1000)
            .waitForElementVisible('#Sign In', 1000)
            .click('#Sign In')
            .pause(1000)
            .setValue('input[#user_email]', 'daniel@bisponet.com')
            .setValue('input[#user_password]', 'qualquersenha')
            .waitForElementVisible('input[name=commit]', 1000)
            .click('input[name=commit]', 1000)
    },

    'US#1' : function (browser) {
        browser
            .waitForElementVisible('a[href=/tasks]', 1000)
            .click('a[href=/tasks]')
            .assert.containsText('a[href=#]', 'Welcome, Daniel Bispo!')
            .setValue('input[#new_task]', 'New test task')
            .keys(browser.Keys.ENTER)
            .pause(1000)
            .assert.containsText('.ng-binding', 'New test task')
    },

    'US#2' : function (browser) { 
        browser
            .waitForElementVisible('button[ng-click="editModal(task)"]', 1000)
            .click('button[ng-click=editModal(task)]')
            .waitForElementVisible('input[id=new_sub_task]', 1000)
            .setValue('input[id=new_sub_task]', 'testsubtask')
            .setValue('input[id=due_date]', 28/8/2017)
            .click('button[id=add-subtask]')
            .pause(1000)
            .assert.containsText('a[editable-text=sub_task.body]', 'testsubtask')
            .end();
    }
}