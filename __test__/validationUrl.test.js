import {validURL} from './client/js/validationUrl'

describe("Testing the URL validation", () => {
    test("The url hast to be true", () => {
        const urlLink = "https://www.google.com";
           expect(validURL(urlLink)).toBe(true);
    })
}); 
