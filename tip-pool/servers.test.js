describe("Servers test (with setup and tear-down)", function () {
    beforeEach(function () {
        // initialization logic
        serverNameInput.value = 'Alice';
    });

    it('should add a new server to allServers on submitServerInfo()', function () {
        submitServerInfo();

        expect(Object.keys(allServers).length).toEqual(1);
        expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });

    //test should update server table
    it('should update serverTable on updateServerTable()', function () {
        //call submitServerInfo() to create new server Alice
        submitServerInfo();
        //select #serverTable table body
        let serverTbody = document.querySelector('#serverTable tbody');
        //inner text of tbody should be 'Alice\t$0.00'
        expect(serverTbody.innerText).toEqual('Alice\t$0.00');

    })

    afterEach(function () {
        // teardown logic
        serverId = 0;
        serverTbody.innerHTML = "";
        allServers = {};
    });
});
