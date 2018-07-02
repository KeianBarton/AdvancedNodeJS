url.parse('https://www.pluralsight.com/search?q=buna', true);
//2nd arg for parsing query string

url.format({
    protocol: 'https',
    host: 'www.pluralsight.com',
    search: '?q=buna',
    pathname: '/search'
});