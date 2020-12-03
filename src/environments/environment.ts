export const environment = {
    production: false,
    MARVEL_API: {
        URL: 'https://gateway.marvel.com:443',
        PUBLIC_KEY: '29cfbff89689621a794f22326b623704',
        PRIVATE_KEY: 'aa8975b9b4595567f42d587958687e8b9f2dd55a',
    },
};

if (environment.MARVEL_API.PUBLIC_KEY === 'INSERT YOUR KEY FIRST') {
    /**
     * To get access to the marvel API, you need to go to their site and sign up for an account.
     * Go Here: https://developer.marvel.com/
     *
     * Once you have done that, in their portal, you will need to add http://localhost to their
     * whitelisted domains. If you don't do this, it will fail for you.
     */
    document.write('INSERT YOUR KEY FIRST');
    throw new Error('You must setup a public and private API key first.');
}
