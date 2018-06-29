const dns = require('dns'); // name <--> addresses

dns.lookup('pluralsight.com', (err, address => { // internally uses libuv threads
    console.log(address);
}))

// all other methods use the network directly (instead of libuv)
dns.resolve4(...);   // IPv4 - array of addresses in case domain has multiple A records
dns.resolve(...);    // 2nd argument is type of record e.g. 'A', 'MX'
dns.reverse('xx.xxx.xx.xxx')  // translates IP back to hostname